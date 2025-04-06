import time
import json
import re
import uuid
import ssl
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from pymongo import MongoClient

TAG_MAP = {
    "vegetarian:": "Vegetarian",
    "vegan:": "Vegan",
    "made without gluten-containing ingredients": "Made without Gluten-Containing Ingredients",
    "in balance:": "In Balance",
    "halal:": "Halal",
    "farm to fork:": "Farm to Fork",
    "seafood watch:": "Seafood Watch",
    "locally crafted:": "Locally Crafted",
    "organic:": "Organic",
    "contains ingredients grown in our onsite garden": "Garden Grown",
    "raw/undercooked:": "Raw/Undercooked",
}

def shorten_tag(full_tag: str) -> str:
    lower_tag = full_tag.lower()
    for key_substring, short_label in TAG_MAP.items():
        if key_substring in lower_tag:
            return short_label
    return full_tag

def looks_like_price(text):
    t = text.lower()
    return (
        t.startswith("reg.") or
        t.startswith("small") or
        "$" in t or
        bool(re.search(r'reg\s*\.\s*\d', t))
    )

def parse_item_text(full_text):
    lines = [l.strip() for l in full_text.split("\n") if l.strip()]
    if not lines:
        return "", "", ""
    name = lines[0]
    price = ""
    description = ""
    match = re.search(r'(.*?)\s+(reg\.\s*\d+\.\d+|small\s*\d+\.\d+|\$\d+(\.\d+)?)', name, re.IGNORECASE)
    if match:
        name = match.group(1).strip(" .")
        price = match.group(2).strip()
    if len(lines) > 1:
        second_line = lines[1]
        if looks_like_price(second_line) and not price:
            price = second_line
            desc_lines = lines[2:]
        else:
            desc_lines = lines[1:]
    else:
        desc_lines = []
    description = " ".join(desc_lines) if desc_lines else ""
    return name.strip(), price.strip(), description.strip()

def parse_price(price_str):
    if not price_str:
        return 0.0
    m = re.search(r'(\d+(\.\d+)?)', price_str)
    return float(m.group(1)) if m else 0.0

def map_daypart_to_category(daypart):
    d = daypart.lower()
    if "breakfast" in d or "brunch" in d:
        return "breakfast"
    elif "lunch" in d:
        return "lunch"
    elif "dinner" in d:
        return "dinner"
    return "snacks"

def scrape_usf_cafebonappetit(url="https://usf.cafebonappetit.com/"):
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--window-size=1920x1080")
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)

    driver.get(url)
    time.sleep(5)

    daypart_sections = driver.find_elements(By.CSS_SELECTOR, "section.site-panel--daypart")
    menu_items = []

    for idx, section in enumerate(daypart_sections, start=1):
        daypart_title = section.get_attribute("data-jump-nav-title") or f"Daypart {idx}"
        try:
            expand_btn = section.find_element(By.CSS_SELECTOR, "button.site-panel__daypart-accordion-btn")
            driver.execute_script("arguments[0].scrollIntoView(true);", expand_btn)
            time.sleep(1)
            driver.execute_script("arguments[0].click();", expand_btn)
            time.sleep(3)
        except:
            continue

        try:
            tab_buttons = section.find_elements(By.CSS_SELECTOR, "button.site-panel__daypart-tab-btn")
            for tab_index, tab_btn in enumerate(tab_buttons):
                raw_text = driver.execute_script("return arguments[0].textContent", tab_btn) or ""
                raw_text = raw_text.strip() or tab_btn.text.strip()
                aria_label = tab_btn.get_attribute("aria-label")
                if not raw_text and aria_label and aria_label.strip():
                    raw_text = aria_label.strip()
                if not raw_text:
                    raw_text = f"TAB-{tab_index + 1}"

                try:
                    driver.execute_script("arguments[0].click();", tab_btn)
                    time.sleep(2)
                except:
                    continue

                try:
                    content_div = section.find_element(By.CSS_SELECTOR, "div.site-panel__daypart-wrapper")
                    item_divs = content_div.find_elements(By.CSS_SELECTOR, "div.site-panel__daypart-item")
                except:
                    continue

                for item_div in item_divs:
                    full_text = item_div.text.strip()
                    if not full_text:
                        continue

                    try:
                        price_type = item_div.find_element(By.CSS_SELECTOR, ".price-item__type").text.strip()
                        price_amount = item_div.find_element(By.CSS_SELECTOR, ".price-item__amount").text.strip()
                        combined_price = f"{price_type} {price_amount}"
                    except:
                        combined_price = ""

                    name, extracted_price, description = parse_item_text(full_text)
                    final_price_str = extracted_price if extracted_price else combined_price

                    raw_tags = [
                        (img.get_attribute("alt") or "").strip()
                        for img in item_div.find_elements(By.TAG_NAME, "img")
                        if (img.get_attribute("alt") or "").strip()
                    ]
                    short_tags = [shorten_tag(t) for t in raw_tags]

                    if name:
                        menu_item = {
                            "id": str(uuid.uuid4()),
                            "name": name,
                            "description": description,
                            "price": parse_price(final_price_str),
                            "image": "/placeholder.svg?height=300&width=300",
                            "category": map_daypart_to_category(daypart_title),
                            "tags": short_tags,
                            "nutritionalInfo": {"calories": 0, "protein": 0, "carbs": 0, "fat": 0},
                            "allergens": [],
                            "available": True,
                        }
                        menu_items.append(menu_item)
        except:
            continue

    driver.quit()

    print(f"Scrape complete. {len(menu_items)} items collected.")
    with open("usf_cafe_menu_items.json", "w", encoding="utf-8") as f:
        json.dump(menu_items, f, indent=2, ensure_ascii=False)
    print(f"Saved {len(menu_items)} items to usf_cafe_menu_items.json")

    mongo_url = "mongodb+srv://sufi:8511@hack25.aysdhao.mongodb.net/?retryWrites=true&w=majority&appName=hack25"
    client = MongoClient(
        mongo_url,
        tls=True,
        tlsAllowInvalidCertificates=True
    )
    db = client["hack25"]
    collection = db["menuItems"]

    # DELETE old data before inserting new
    collection.delete_many({})

    if menu_items:
        collection.insert_many(menu_items)
        print("Old data deleted; new data inserted successfully!")
    else:
        print("No items found to insert.")

if __name__ == "__main__":
    scrape_usf_cafebonappetit()
