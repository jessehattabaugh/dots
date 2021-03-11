const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5000');
  // other actions...
  await browser.close();
  console.log('all good');
})();
