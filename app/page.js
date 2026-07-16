// ------------------------------------------------------------------
// page.js とは:
// App Routerでは「フォルダの中に page.js を置くと、そのフォルダのパスが
// そのままURLになる」というルールがあります。
//
// このファイル (app/page.js) はapp直下にあるので、URLは "/"（トップページ = Home）。
//
// 担当チケット（docs/tickets-t-kobari.md）に合わせて、
// Hero → About us（数字で見るジエンジサービス・代表メッセージ・事業内容を内包）→
// News → Contact導線 → Recruit導線、の並びで構成している（元サイトの構成に準拠）。
// 数字・メッセージ文言・実績内容はすべて仮の値なので、確定情報が来次第差し替える。
// ------------------------------------------------------------------
import Link from "next/link";
import { getAllNews } from "@/lib/news";
import PlaceholderImage from "@/components/PlaceholderImage";
import styles from "./page.module.css";

// 「数字で見るジエンジサービス」で表示する項目。
// value はまだ確定していないため "?" にしてある（確定情報が来たら差し替える）。
const STATS = [
  { value: "?", unit: "年", label: "設立からの年数" },
  { value: "?", unit: "名", label: "社員数" },
  { value: "?", unit: "件", label: "開発実績" },
];

// 「事業内容」セクションの3つの切り口。中身はすべて仮のダミーテキスト。
const BUSINESS_TOPICS = [
  {
    heading: "強み",
    items: ["ダミー項目1", "ダミー項目2", "ダミー項目3"],
  },
  {
    heading: "開発実績",
    items: ["ダミー項目1", "ダミー項目2", "ダミー項目3"],
  },
  {
    heading: "技術スタック",
    items: ["ダミー項目1", "ダミー項目2", "ダミー項目3"],
  },
];

export default async function HomePage() {
  const newsList = await getAllNews();
  const latestNews = newsList.slice(0, 3);

  return (
    <>
      {/*
        ヒーロー（ページ最上部の大きな帯）。
        参考にしたsystena.co.jpのように、大きな見出し文字＋斜めのストライプ
        装飾で第一印象を作る。ストライプはCSSだけで表現している（画像不使用）。
      */}
      <section className={styles.hero}>
        <span className={styles.heroStripes} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>G&amp;G Service</p>
          <h1 className={styles.heroTitle}>
            テクノロジーで、
            <br />
            はたらくを前へ。
          </h1>
          <p className={styles.heroLead}>
            SI事業・モバイルアプリケーション事業・業務支援クラウドサービス事業を通じて、
            お客様のビジネスを支えます。（仮テキスト）
          </p>
          <Link href="/service" className={styles.heroButton}>
            サービスを見る
          </Link>
        </div>
      </section>

      {/* About us: 会社紹介セクション */}
      <section className={styles.about}>
        <span className={styles.mark} aria-hidden="true" />
        <p className={styles.caption}>ABOUT US</p>
        <h2>会社紹介（仮）</h2>
        <p>ここに会社紹介文を実装予定。</p>
      </section>

      {/* 数字で見るジエンジサービス: 設立年数・社員数・実績数などを数字で見せるセクション */}
      <section className={styles.stats}>
        <p className={styles.caption}>NUMBERS</p>
        <h2>数字で見るジエンジサービス</h2>
        <div className={styles.statsGrid}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <p className={styles.statValue}>
                {stat.value}
                <span className={styles.statUnit}>{stat.unit}</span>
              </p>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
        <p className={styles.statsNote}>※数値は確認中（仮の表示です）</p>
      </section>

      {/*
        代表メッセージ: 代表者の写真＋メッセージ文。
        写真は本物を使う予定のためPlaceholderImageで枠だけ確保してある
        （写真が届き次第、components/PlaceholderImageの代わりにnext/imageへ差し替える）。
      */}
      <section className={styles.message}>
        <div className={styles.messageImage}>
          <PlaceholderImage label="代表者写真" ratio="3 / 4" />
        </div>
        <div className={styles.messageText}>
          <p className={styles.caption}>MESSAGE</p>
          <h2>代表メッセージ（仮）</h2>
          <p>ここに代表メッセージ文を実装予定。</p>
          <p className={styles.messageName}>代表取締役　氏名（仮）</p>
        </div>
      </section>

      {/* 事業内容: 強み・開発実績・技術スタックの3切り口で紹介 */}
      <section className={styles.business}>
        <p className={styles.caption}>SERVICE</p>
        <h2>事業内容</h2>
        <div className={styles.businessGrid}>
          {BUSINESS_TOPICS.map((topic) => (
            <div key={topic.heading} className={styles.businessCard}>
              <h3>{topic.heading}</h3>
              <ul>
                {topic.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link href="/service" className={styles.moreButtonOutline}>
          事業内容を詳しく見る
        </Link>
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

      {/* お問い合わせ導線: Contactページへ誘導するだけのシンプルな帯 */}
      <section className={styles.contact}>
        <p className={styles.caption}>CONTACT</p>
        <h2>お問い合わせ</h2>
        <p>サービスに関するご相談・お見積りなど、お気軽にお問い合わせください。（仮テキスト）</p>
        <Link href="/contact" className={styles.moreButtonOutline}>
          お問い合わせフォームへ
        </Link>
      </section>

      {/* 採用ページ導線: Recruitトップへ誘導するだけのシンプルな帯 */}
      <section className={styles.recruit}>
        <p className={styles.caption}>RECRUIT</p>
        <h2>採用情報</h2>
        <p>一緒に働く仲間を募集しています。（仮テキスト）</p>
        <Link href="/recruit" className={styles.moreButton}>
          採用ページへ
        </Link>
      </section>
    </>
  );
}
