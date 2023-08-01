const puppeteer = require('puppeteer');

const base_url = "https://www.tokopedia.com/dobujack/product";
const clickable_selector = '.pcv3__info-content.css-gwkf0u';

const title_selector = '.css-1os9jjn';
const current_price_selector = '.price';
const actual_price_selector = 'span[data-testid="lblPDPDetailOriginalPrice"]';
const discount_value_selector = 'span[data-testid="lblPDPDetailDiscountPercentage"]'
const stock_selector = ".css-1yy88m3-unf-heading.e1qvo2ff8 > b";
const thumbnail_selector = '.intrinsic.css-1xopdmj > img';
const product_description_selector = 'div[data-testid="lblPDPDescriptionProduk"]';

const cleanTitle = (title) => {
  return title.replace(/Dobujack/gi, '').replace(/-\s(?:S|L|XL|XXL)\b/gi, '').trim();
};

const scrapeDataFromPage = async (page) => {
  const titleElement = await page.$(title_selector);
  const currentPriceElement = await page.$(current_price_selector);
  const actualPriceElement = await page.$(actual_price_selector);
  const discountValue = await page.$(discount_value_selector);
  const stockElement = await page.$(stock_selector);
  const thumbnailElement = await page.$(thumbnail_selector);
  const productDescriptionElement = await page.$(product_description_selector);

  const my_title = await titleElement.evaluate((el) => el.innerHTML);
  const my_current_price = await currentPriceElement.evaluate((el) => el.innerHTML);
  const my_actual_price = await actualPriceElement.evaluate((el) => el.innerHTML);
  const my_discount_value = await discountValue.evaluate((el) => el.innerHTML);
  const my_stock = await stockElement.evaluate((el) => el.innerHTML);
  const my_thumbnail = await thumbnailElement.evaluate((el) => el.getAttribute('src'));
  const my_product_description = await productDescriptionElement.evaluate((el) => el.innerHTML);

  if (my_title) {
    return {
      name: cleanTitle(my_title),
      discounted: my_discount_value !== "0" ? true : false,
      current_price: my_current_price,
      actual_price: my_actual_price,
      stock: my_stock,
      thumbnail: my_thumbnail,
      product_description: my_product_description,
    };
  } else {
    return null;
  }
};

const scrapeFromTokopedia = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(2 * 60 * 1000);
  await page.goto(base_url, { waitUntil: "domcontentloaded" });
  await page.waitForSelector(clickable_selector);

  await page.click(clickable_selector);
  await page.waitForNavigation();

  const data = await scrapeDataFromPage(page);
  if (data) {
    console.log(data);
  }

  await browser.close();
};

scrapeFromTokopedia();
