import { fetchNews } from "./fetchNews.js";
import * as t from "https://deno.land/std/testing/asserts.ts";

Deno.test("simple", async () => {
  const url = "https://www.fukui-nct.ac.jp/news/";
  const data = await fetchNews(url);
  console.log(data);
  t.assert(data.length > 0);
});
