// ------------------------------------------------------------------
// 「コンポーネント」の実例その2: フッター（全ページ共通の下部エリア）
// Headerと同じ考え方で、app/layout.jsから読み込んで全ページ共通で表示する。
//
// デザインは現行サイト(gngs.co.jp)のフッター（濃紺の背景・白文字・
// 会社住所とリンク一覧・CONTACTボタン）に合わせている。
// ------------------------------------------------------------------
import Link from "next/link";
import styles from "./Footer.module.css";

const LINK_COLUMNS = [
  {
    heading: "サービス",
    links: [{ href: "/service", label: "Service" }],
  },
  {
    heading: "会社情報",
    links: [{ href: "/company", label: "Company" }],
  },
  {
    heading: "採用TOP",
    links: [
      { href: "/recruit", label: "Recruit" },
      { href: "/recruit/culture", label: "G&G Culture" },
      { href: "/recruit/member", label: "G&G Member" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.company}>
          <p className={styles.companyName}>株式会社ジエンジサービス</p>
          <p>〒105-0014 東京都港区芝2-22-13 STKビル 1F</p>
          <p>TEL：（03）-6435-0349　FAX：（03）-6435-0359</p>
        </div>

        <div className={styles.linkColumns}>
          {LINK_COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className={styles.columnHeading}>{column.heading}</p>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.contact}>
          <p className={styles.columnHeading}>お問い合わせ</p>
          <Link href="/contact" className={styles.contactButton}>
            CONTACT
          </Link>
        </div>
      </div>

      <p className={styles.copyright}>
        &copy; {year} 株式会社ジエンジサービス
      </p>
    </footer>
  );
}
