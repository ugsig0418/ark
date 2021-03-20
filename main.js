const axios = require("axios");
const cheerio = require("cheerio");
const client = require('cheerio-httpcli');
client.fetch("http://comic.naver.com/webtoon/weekday.nhn", {}, function (err, $, res, body) {
var list = $(".list_area .col_selected li"); 
list.each(function(){
console.log($(this).find(".title").text()); // 제목을 검색해서 출력한다
console.log($(this).find("div.thumb a img").attr('src')); //이미지를 검색해서 출력한다
});
});