const axios = require("axios"); // axios 호출
const cheerio = require('cheerio'); // cheerio 호출

let article = {};
let pageNumber = 0;
const crawler = (pageNumber) => {
    axios
        .get(`https://api.brunch.co.kr/v1/search/article?q=hello&page${pageNumber}=&pageSize=20&highlighter=y&escape=y&sortBy=accu`
        )
        .then((response) => {
            const data = response.data;
            article[pageNumber] = data.data.list;
            console.log("current page Number : ", pageNumber);
            const nextNumber = pageNumber + 1;
            if (nextNumber < 10) {
                crawler(nextNumber);
                return;
            }
            console.log(article);
        });
};
