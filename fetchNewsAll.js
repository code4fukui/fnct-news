import { CSV } from "https://js.sabae.cc/CSV.js";
import { fetchNews } from "./fetchNews.js";
import { sleep } from "https://js.sabae.cc/sleep.js";

const all = await (async () => {
  try {
    return CSV.toJSON(await CSV.fetch("fnct-news.csv"));
  } catch (_) {
    console.log("not found file");
    return [];
  }
})();

const add = (data) => {
  let nadd = 0;
  data.forEach((d) => {
    const chk = all.find((a) =>
      a.url == d.url && a.title == d.title && a.date == d.date
    );
    if (!chk) {
      all.push(d);
      nadd++;
    }
  });
  return nadd;
};
const nadd = add(await fetchNews("https://www.fukui-nct.ac.jp/news/"));
if (nadd) {
  for (let i = 2;; i++) {
    console.log(i);
    const res = await fetchNews(
      "https://www.fukui-nct.ac.jp/news/page/" + i + "/",
    );
    if (res.length == 0) {
      break;
    }
    await sleep(500);
    if (!add(res)) {
      break;
    }
  }
}
all.sort((a, b) => a.date.localeCompare(b.date));
await Deno.writeTextFile("fnct-news.csv", CSV.stringify(all));
