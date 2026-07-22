// ------------------------------------------------------------------
// page.js とは:
// App Routerでは「フォルダの中に page.js を置くと、そのフォルダのパスが
// そのままURLになる」というルールがあります。
//
// このファイル (app/page.js) はapp直下にあるので、URLは "/"（トップページ = Home）。
//
// このページは現行サイト(gngs.co.jp)のトップページと同じ並び順
// （Hero → About → News → Service → Recruit導線）でバンド（帯）を組んでいる。
// 文章はまだ仮のものだが、色・余白・見出しの見せ方は現行サイトに合わせた。
// ------------------------------------------------------------------
import Link from "next/link";
import { getAllNews } from "@/lib/news";
import styles from "./page.module.css";

const SERVICES = [
  { title: "SI事業", href: "/service" },
  { title: "モバイルアプリケーション事業", href: "/service" },
  { title: "業務支援クラウドサービス事業", href: "/service" },
];

export default async function HomePage() {
  const newsList = await getAllNews();
  const latestNews = newsList.slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <h1>Home（トップページ）</h1>
        <p>ここに現行サイトのトップページ相当の内容を実装予定。</p>
      </section>

      <section className={styles.about}>
        <span className={styles.mark} aria-hidden="true" />
        <p className={styles.caption}>ABOUT US</p>
        <h2>会社紹介（仮）</h2>
        <p>ここに会社紹介文を実装予定。</p>
      </section>

      <section className={styles.news}>
        <p className={styles.caption}>新着情報</p>
        <h2>NEWS</h2>
        <ul className={styles.newsList}>
          {latestNews.map((item) => (
            <li key={item.slug}>
              <Link href={`/news/${item.slug}`}>
                <span className={styles.newsDate}>{item.date}</span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/news" className={styles.moreButton}>
          MORE
        </Link>
      </section>

      <section className={styles.service}>
        <h2>SERVICE</h2>
        <div className={styles.serviceCards}>
          {SERVICES.map((service) => (
            <div key={service.title} className={styles.serviceCard}>
              <p>{service.title}</p>
              <Link href={service.href} className={styles.moreButtonOutline}>
                MORE
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.recruit}>
        <div className={styles.recruitBadge}>
          採用TOP
          <br />
          RECRUIT
        </div>
        <Link href="/recruit">Recruitページを見る</Link>
      </section>
    </>
  );
}
