// URL: /news （お知らせ一覧ページ）
// News/Recruit/Companyなど他ページと違い、ここは lib/news.js 経由でデータを取得する
// 「動的なページ」の見本。更新頻度が高いNewsだけ、こうしてデータ取得を分離してある。
import Link from "next/link";
import { getAllNews } from "@/lib/news";
import PageHeader from "@/components/PageHeader";
import styles from "./page.module.css";

// サーバーコンポーネント（初期表示用のNext.js特有の仕組み）なので、
// コンポーネント自体をasync関数にしてawaitでデータ取得できる。
export default async function NewsPage() {
  const newsList = await getAllNews();

  return (
    <>
      <PageHeader eyebrow="NEWS" title="お知らせ" />

      <section className={styles.section}>
        <ul className={styles.list}>
          {newsList.map((item) => (
            <li key={item.slug}>
              <Link href={`/news/${item.slug}`} className={styles.item}>
                <span className={styles.date}>{item.date}</span>
                <span className={styles.title}>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
