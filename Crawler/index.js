const axios = require("axios"); // axios 호출
const cheerio = require('cheerio'); // cheerio 호출

axios.get("https://github.com/k906506").then((response) => {
    const htmlString = response.data;
    const $ = cheerio.load(htmlString);

    const userName = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-name.vcard-fullname.d-block.overflow-hidden').text();
    const UserId = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-nickname.vcard-username.d-block').text();
    const userMessage = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.p-note.user-profile-bio.mb-3.js-user-profile-bio.f4 > div').text();
    console.log({
        userName,
        UserId,
        userMessage,
    });
});