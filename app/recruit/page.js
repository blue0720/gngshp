// URL: /recruit （採用トップページ）
import Link from "next/link";
import styles from "./page.module.css";

export default function RecruitPage() {
  return (
    <section className={styles.section}>
      <h1>Recruit（採用情報）</h1>
      <p>ここに現行サイトのRecruitページ相当の内容を実装予定。</p>
      <ul>
        <li>
          <Link href="/recruit/culture">Culture（社風・働き方）</Link>
        </li>
        <li>
          <Link href="/recruit/member">Member（社員紹介）</Link>
        </li>
      </ul>
    </section>
  );
}
