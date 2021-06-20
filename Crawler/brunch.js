const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1440,
        height: 900,
    })

    await page.goto('https://brunch.co.kr/search');
    await page.click("input.txt_search"); // 검색창 클랙
    await page.keyboard.type("Hello World") // 검색어 입력
    await page.keyboard.press("Enter");
    await page.waitForNavigation(); // 일시적 대기

    let infinteScrollInterval = setInterval(async () => {
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
        });
    }, 1000); // 1000 ms마다 실행


    setTimeout(async () => {
        clearInterval(infinteScrollInterval);
    }, 1000 * 10); // 10000 ms가 지나면 종료
    // await browser.close();
})();