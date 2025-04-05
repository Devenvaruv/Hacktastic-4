import time
import json
import re
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

def looks_like_price(text):
    text_lower = text.lower()
    if text_lower.startswith("reg.") or text_lower.startswith("small"):
        return True
    if "$" in text_lower:
        return True
    if re.search(r'reg\s*\.\s*\d', text_lower):
        return True
    return False

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
    if desc_lines:
        description = " ".join(desc_lines)
    return name.strip(), price.strip(), description.strip()

def scrape_usf_cafebonappetit(url="https://usf.cafebonappetit.com/"):
    print("Installing ChromeDriver")
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--window-size=1920x1080")
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)
    print("Navigating to", url, "")
    driver.get(url)
    time.sleep(5)
    daypart_sections = driver.find_elements(By.CSS_SELECTOR, "section.site-panel--daypart")
    print("Found", len(daypart_sections), "daypart sections.")
    daypart_map = {}
    for idx, section in enumerate(daypart_sections, start=1):
        daypart_title = section.get_attribute("data-jump-nav-title") or f"Daypart #{idx}"
        print("Daypart:", daypart_title)
        try:
            expand_btn = section.find_element(By.CSS_SELECTOR, "button.site-panel__daypart-accordion-btn")
            driver.execute_script("arguments[0].scrollIntoView(true);", expand_btn)
            time.sleep(1)
            driver.execute_script("arguments[0].click();", expand_btn)
            time.sleep(3)
        except Exception as e:
            print("Could not expand", daypart_title, ":", e)
            continue
        try:
            content_div = section.find_element(By.CSS_SELECTOR, "div.site-panel__daypart-wrapper")
        except Exception as e:
            print("Could not get content container for", daypart_title, ":", e)
            continue
        item_divs = content_div.find_elements(By.CSS_SELECTOR, "div.site-panel__daypart-item")
        items_list = []
        if item_divs:
            print("Found", len(item_divs), "item containers in", daypart_title)
            for item_div in item_divs:
                full_text = item_div.text.strip()
                if not full_text:
                    continue
                name, price, description = parse_item_text(full_text)
                tags = [img.get_attribute("alt").strip() for img in item_div.find_elements(By.TAG_NAME, "img") if img.get_attribute("alt").strip()]
                if name:
                    items_list.append({
                        "name": name,
                        "price": price,
                        "description": description,
                        "tags": tags
                    })
                    print("Parsed item:", name, "|", price, "| Tags:", tags)
        else:
            print("No individual item containers found in", daypart_title, "- using fallback splitting.")
            lines = content_div.text.strip().split("\n")
            for line in lines:
                line = line.strip()
                if not line:
                    continue
                name, price, description = parse_item_text(line)
                if name:
                    items_list.append({
                        "name": name,
                        "price": price,
                        "description": description,
                        "tags": []
                    })
                    print("Fallback parsed item:", name, "|", price)
        daypart_map[daypart_title] = items_list
    driver.quit()
    filename = "usf_cafe_menu_items.json"
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(daypart_map, f, indent=2, ensure_ascii=False)
    print("Done! Saved structured item data to", filename)

if __name__ == "__main__":
    scrape_usf_cafebonappetit()
