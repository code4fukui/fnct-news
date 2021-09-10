import { CSV } from "https://js.sabae.cc/CSV.js";
import { fetchNews } from "./fetchNews.js";
import { sleep } from "https://js.sabae.cc/sleep.js";

const all = CSV.toJSON(await CSV.fetch("fnct-news.csv"));

const add = (data) => {
  data.forEach(d => {
    const chk = all.find(a => a.url == d.url && a.title == d.title && a.date == d.date);
    if (!chk) {
      all.push(d);
    }
  });
};
add(await fetchNews("https://www.fukui-nct.ac.jp/news/"));
for (let i = 2; i < 50; i++) {
  console.log(i);
  const res = await fetchNews("https://www.fukui-nct.ac.jp/news/page/" + i + "/");
  if (res.length == 0) {
    break;
  }
  await sleep(500);
  add(res);
}
all.sort((a, b) => a.date.localeCompare(b.date));
await Deno.writeTextFile("fnct-news.csv", CSV.stringify(all));
