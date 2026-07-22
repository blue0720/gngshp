// ------------------------------------------------------------------
// 採用サイト専用のフッター。会社サイト用のFooter.jsとは別物。
// ------------------------------------------------------------------
import Link from "next/link";
import styles from "./RecruitFooter.module.css";

export default function RecruitFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.logo}>
          <span className={styles.logoMark} aria-hidden="true" />
          G&amp;G Service
        </div>
        <p className={styles.address}>
          株式会社ジエンジサービス｜〒105-0014 東京都港区芝2-22-15 STKビル 1F
        </p>
        <Link href="/" className={styles.corporateLink}>
          コーポレートサイトへ ↗
        </Link>
      </div>
      <p className={styles.copyright}>
        &copy; {year} G&amp;G Service All Rights Reserved.
      </p>
    </footer>
  );
}
