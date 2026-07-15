// ------------------------------------------------------------------
// lib/ とは:
// ページの見た目（app/配下）とは別に、「データを取ってくる処理」や
// 「計算・変換のロジック」をまとめておく置き場所。
//
// 今はローカルの data/news.json を読むだけの実装だが、
// 将来Gware（現行CMS）やヘッドレスCMSのAPIに差し替える際は、
// このファイルの中身だけを書き換えれば良い設計にしてある
// （呼び出す側の app/news/page.js 等は変更不要）。
//
// 差し替えイメージ:
//   今:   JSONファイルを読む
//   将来: fetch("https://cms.example.com/api/news") のようにAPIを呼ぶ
// どちらの場合も getAllNews() / getNewsBySlug() という「関数の入口」は
// 変えないので、呼び出し側への影響を抑えられる。
// ------------------------------------------------------------------
import newsData from "@/data/news.json";

// 全件取得。将来CMS連携する場合はここをAPI呼び出しに差し替える。
// （呼び出し側でawaitできるよう、あらかじめasync関数にしてある）
export async function getAllNews() {
  return newsData;
}

// slug（URLの一部になる識別子）から1件取得する。
// 該当が無ければ undefined を返す（呼び出し側でnotFound()等の処理を想定）。
export async function getNewsBySlug(slug) {
  const all = await getAllNews();
  return all.find((item) => item.slug === slug);
}
