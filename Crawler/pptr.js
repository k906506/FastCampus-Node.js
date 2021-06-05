const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1440,
        height: 1080,
    });
    await page.goto('http://www.kyobobook.co.kr/bestSellerNew/bestseller.laf?mallGb=KOR&range=0&kind=0&orderClick=s11');
    const html = await page.content();
    const $ = cheerio.load(html);

    let coinArray = [];
    $('#main_contents > ul > li').each((index, element) => {
        const bookName = $(element).find('div.detail > div.title > a > strong').text();
        const bookPrice = $(element).find(' div.detail > div.price > strong').text();
        coinArray.push({
            bookName,
            bookPrice
        });
    });
    console.log(coinArray);
    await browser.close();
})();