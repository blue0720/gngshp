// URL: /news （お知らせ一覧ページ）
// News/Recruit/Companyなど他ページと違い、ここは lib/news.js 経由でデータを取得する
// 「動的なページ」の見本。更新頻度が高いNewsだけ、こうしてデータ取得を分離してある。
import Link from "next/link";
import { getAllNews } from "@/lib/news";
import styles from "./page.module.css";

// サーバーコンポーネント（初期表示用のNext.js特有の仕組み）なので、
// コンポーネント自体をasync関数にしてawaitでデータ取得できる。
export default async function NewsPage() {
  const newsList = await getAllNews();

  return (
    <section className={styles.section}>
      <h1>News（お知らせ）</h1>
      <ul>
        {newsList.map((item) => (
          <li key={item.slug}>
            <Link href={`/news/${item.slug}`}>
              {item.date}　{item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
