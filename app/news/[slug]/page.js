// URL: /news/任意の文字列 （お知らせ詳細ページ）
//
// フォルダ名を [slug] のように角カッコで囲むと「動的ルート」になり、
// 実際のURLの該当部分（例: /news/sample-news-1 の "sample-news-1"）が
// params.slug としてこのファイルに渡ってくる。
// なお、Next.jsのバージョンによりparamsはPromiseになっているため await が必要。
import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/lib/news";
import styles from "./page.module.css";

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);

  // 該当するお知らせが無い場合はNext.js標準の404ページを表示
  if (!news) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <p className={styles.date}>{news.date}</p>
      <h1>{news.title}</h1>
      <p>{news.body}</p>
    </article>
  );
}
