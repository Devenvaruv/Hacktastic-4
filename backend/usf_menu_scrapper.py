import time
import json
import re
import uuid
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


def looks_like_price(text):
    text_lower = text.lower()
    return (
        text_lower.startswith("reg.") or
        text_lower.startswith("small") or
        "$" in text_lower or
        bool(re.search(r'reg\s*\.\s*\d', text_lower))
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

def parse_price(price_str: str) -> float:
    """
    Convert e.g. "reg. 3.50" or "small 1.99" or "$4.25" -> 3.50 float
    """
    if not price_str:
        return 0.0
    match = re.search(r'(\d+(\.\d+)?)', price_str)
    return float(match.group(1)) if match else 0.0

def map_daypart_to_category(daypart: str) -> str:
    """
    Map the daypart text (e.g. "Breakfast", "Lunch", "Dinner") to
    your front-end categories: "breakfast", "lunch", "dinner", "snacks", etc.
    """
    daypart_lower = daypart.lower()
    if "breakfast" in daypart_lower or "brunch" in daypart_lower:
        return "breakfast"
    elif "lunch" in daypart_lower:
        return "lunch"
    elif "dinner" in daypart_lower:
        return "dinner"
    return "snacks"

def scrape_usf_cafebonappetit(url="https://usf.cafebonappetit.com/"):
    print("Installing ChromeDriver")
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--window-size=1920x1080")
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)

    print("Navigating to", url)
    driver.get(url)
    time.sleep(5)

    daypart_sections = driver.find_elements(By.CSS_SELECTOR, "section.site-panel--daypart")
    print("Found", len(daypart_sections), "daypart sections.")

    menu_items = []

    for idx, section in enumerate(daypart_sections, start=1):
        daypart_title = section.get_attribute("data-jump-nav-title") or f"Daypart {idx}"
        print(f"\nDaypart: {daypart_title}")
        try:
            expand_btn = section.find_element(By.CSS_SELECTOR, "button.site-panel__daypart-accordion-btn")
            driver.execute_script("arguments[0].scrollIntoView(true);", expand_btn)
            time.sleep(1)
            driver.execute_script("arguments[0].click();", expand_btn)
            time.sleep(3)
        except Exception as e:
            print(f"Could not expand {daypart_title}: {e}")
            continue

        try:
            tab_buttons = section.find_elements(By.CSS_SELECTOR, "button.site-panel__daypart-tab-btn")
            print(f"Found {len(tab_buttons)} tabs in {daypart_title}")

            for tab_index, tab_btn in enumerate(tab_buttons):
                raw_text = driver.execute_script("return arguments[0].textContent", tab_btn) or ""
                raw_text = raw_text.strip()
                if not raw_text:
                    raw_text = tab_btn.text.strip()
                aria_label = tab_btn.get_attribute("aria-label")
                if not raw_text and aria_label and aria_label.strip():
                    raw_text = aria_label.strip()
                if not raw_text:
                    raw_text = f"TAB-{tab_index + 1}"
                tab_label = raw_text.upper()
                print(f"Clicking tab: '{tab_label}'")

                try:
                    driver.execute_script("arguments[0].click();", tab_btn)
                    time.sleep(2)
                except Exception as e:
                    print(f"Could not click tab '{tab_label}' in {daypart_title}: {e}")
                    continue

                try:
                    content_div = section.find_element(By.CSS_SELECTOR, "div.site-panel__daypart-wrapper")
                    item_divs = content_div.find_elements(By.CSS_SELECTOR, "div.site-panel__daypart-item")
                except Exception as e:
                    print(f"Could not get content container in tab '{tab_label}': {e}")
                    continue

                print(f"Found {len(item_divs)} items in tab '{tab_label}'")

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
                    tags = [
                        (img.get_attribute("alt") or "").strip()
                        for img in item_div.find_elements(By.TAG_NAME, "img")
                        if (img.get_attribute("alt") or "").strip()
                    ]

                    if name:
                        menu_item = {
                            "id": str(uuid.uuid4()), 
                            "name": name,
                            "description": description,
                            "price": parse_price(final_price_str),
                            "image": "/placeholder.svg?height=300&width=300",  # Hard-coded fallback
                            "category": map_daypart_to_category(daypart_title),
                            "tags": tags,  
                            "nutritionalInfo": {
                                "calories": 0,
                                "protein": 0,
                                "carbs": 0,
                                "fat": 0,
                            },
                            "allergens": [],  
                            "available": True,
                        }
                        menu_items.append(menu_item)
                        print(f"Parsed item => {menu_item}")

        except Exception as e:
            print(f"Could not get content container for {daypart_title}: {e}")
            continue

    driver.quit()

    filename = "usf_cafe_menu_items.json"
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(menu_items, f, indent=2, ensure_ascii=False)
    print(f"\nDone! Saved {len(menu_items)} structured item(s) to {filename}")

if __name__ == "__main__":
    scrape_usf_cafebonappetit()