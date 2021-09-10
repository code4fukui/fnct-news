import { CSV } from "https://js.sabae.cc/CSV.js";
import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";

//const url = "https://www.fukui-nct.ac.jp/news/";
const url = "https://www.fukui-nct.ac.jp/news/page/8/";
const html = await (await fetch(url)).text();
const dom = HTMLParser.parse(html);
const lis = dom.querySelectorAll(".news-list li");
const data = lis.map(li => {
  return {
    url: li.querySelector("a")?.attributes.href,
    date: li.querySelector(".post-date").text,
    category: li.querySelector(".post-cate").text,
    title: li.querySelector(".post-title").text,
  }
});
await Deno.writeTextFile("fnct-news.csv", CSV.stringify(data));
