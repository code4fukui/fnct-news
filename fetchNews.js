import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";

export const fetchNews = async (url) => {
  const html = await (await fetch(url)).text();
  const dom = HTMLParser.parse(html);
  const lis = dom.querySelectorAll(".news-list li");
  const data = lis.map((li) => {
    return {
      url: li.querySelector("a")?.attributes.href,
      date: li.querySelector(".post-date").text,
      category: li.querySelector(".post-cate").text,
      title: li.querySelector(".post-title").text,
    };
  });
  return data;
};
