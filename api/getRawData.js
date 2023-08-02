const puppeteer = require('puppeteer');

const base_url = "https://www.tokopedia.com/dobujack/product";
const clickable_selector = '.pcv3__info-content.css-gwkf0u';

const selectorsToWaitFor = [
  { selector: '.css-1os9jjn', property: 'innerHTML', key: 'name' },
  { selector: '.price', property: 'innerHTML', key: 'current_price' },
  { selector: 'span[data-testid="lblPDPDetailOriginalPrice"]', property: 'innerHTML', key: 'actual_price' },
  { selector: 'span[data-testid="lblPDPDetailDiscountPercentage"]', property: 'innerHTML', key: 'discounted', transform: (value) => value !== "0" ? true : false },
  { selector: '.css-1yy88m3-unf-heading.e1qvo2ff8 > b', property: 'innerHTML', key: 'stock' },
  { selector: '.intrinsic.css-1xopdmj > img', property: 'getAttribute', attr: 'src', key: 'thumbnail' },
  { selector: 'div[data-testid="lblPDPDescriptionProduk"]', property: 'innerHTML', key: 'product_description' },
];

const cleanTitle = (title) => {
  return title.replace(/Dobujack/gi, '').replace(/-\s(?:S|L|XL|XXL)\b/gi, '').trim();
};

const waitForSelectors = async (page, selectors) => {
  await Promise.all(
    selectors.map(async ({ selector }) => page.waitForSelector(selector))
  );
};

const scrapeDataFromPage = async (page, selectors) => {
  const data = {};
  for (const { selector, property, key, transform, attr } of selectors) {
    const element = await page.$(selector);
    const value = await element.evaluate((el, property, attr) => {
      if (attr) return el[property](attr);
      return el[property];
    }, property, attr);
    data[key] = transform ? transform(value) : value;
  }
  data.name = cleanTitle(data.name);
  return data;
};

const scrapeFromTokopedia = async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: null,
  });

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(2 * 60 * 1000);
  await page.goto(base_url, { waitUntil: "domcontentloaded" });
  await page.waitForSelector(clickable_selector);
  const clickableElements = await page.$$(clickable_selector);

  const products = [];
  for (const element of clickableElements) {
    const link = await element.getProperty('href');
    const url = await link.jsonValue();
    const newPage = await browser.newPage();
    await newPage.goto(url, { waitUntil: 'domcontentloaded' });
    await waitForSelectors(newPage, selectorsToWaitFor);

    const data = await scrapeDataFromPage(newPage, selectorsToWaitFor);
    if (data) {
      console.log(data);
      products.push(data);
    }
    await newPage.close();
  }

  await browser.close();
  return products;
};

scrapeFromTokopedia().then((products) => {
  console.log(products);
}).catch((err) => {
  console.error('Error occurred:', err);
});
