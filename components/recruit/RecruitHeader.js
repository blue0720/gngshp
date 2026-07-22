// ------------------------------------------------------------------
// 採用サイト専用のヘッダー。
// components/Header.js（会社サイト用）とは別に、採用サイト（/recruit以下）
// だけで使うヘッダーとして用意している。ロゴをクリックすると採用トップ
// （/recruit）に戻り、右上のナビゲーションで各ページに移動できる。
// ------------------------------------------------------------------
import Link from "next/link";
import styles from "./RecruitHeader.module.css";

// 採用サイト内のナビゲーション項目。
const NAV_LINKS = [
  { href: "/recruit/people", label: "People" },
  { href: "/recruit/company", label: "Company" },
  { href: "/recruit/career", label: "Career" },
  { href: "/recruit/numbers", label: "Numbers" },
  { href: "/recruit/interview", label: "Interview" },
  { href: "/recruit/guidelines", label: "Guidelines" },
  { href: "/recruit/faq", label: "FAQ" },
];

export default function RecruitHeader() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/recruit" className={styles.logo}>
          <span className={styles.logoMark} aria-hidden="true" />
          G&amp;G Service
        </Link>

        <div className={styles.right}>
          <nav>
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* コーポレートサイト（会社紹介などの本体サイト）へのリンク。
              このNext.jsプロジェクト内にある会社サイトのトップ（/）へ移動する。 */}
          <Link href="/" className={styles.corporateLink}>
            コーポレートサイト ↗
          </Link>
        </div>
      </header>

      {/* 常に画面に表示され続ける「応募する」ボタン。
          position: fixed を使うと、スクロールしても同じ場所に留まる。 */}
      <Link href="/recruit/entry" className={styles.floatingCta}>
        応募する ›
      </Link>
    </>
  );
}
