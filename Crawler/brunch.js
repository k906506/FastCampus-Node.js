const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless:false,
  });
  const page = await browser.newPage();
  await page.setViewport({
      width:1440,
      height:900,
  })
  await page.goto('https://brunch.co.kr/search');
  await page.click("input.txt_search"); // 검색창 클랙
  await page.keyboard.type("Hello World") // 검색어 입력
  await page.keyboard.press("Enter");
  // await browser.close();
})();