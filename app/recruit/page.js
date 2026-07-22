// URL: /recruit （採用トップページ）
import Link from "next/link";
import styles from "./page.module.css";

export default function RecruitPage() {
  return (
    <section className={styles.section}>
      <h1>Recruit（採用トップ）</h1>
      <p>
        ここに採用トップの内容（コンセプト・募集職種の紹介など）を実装予定。
        各ページへは上のヘッダーのナビゲーションからも移動できます。
      </p>
      <ul>
        <li>
          <Link href="/recruit/people">People（私たちが大切にしていること）</Link>
        </li>
        <li>
          <Link href="/recruit/company">Company（働く環境）</Link>
        </li>
        <li>
          <Link href="/recruit/career">Career（キャリア）</Link>
        </li>
        <li>
          <Link href="/recruit/numbers">Numbers（数字で見るジエンジサービス）</Link>
        </li>
        <li>
          <Link href="/recruit/interview">Interview（社員インタビュー）</Link>
        </li>
        <li>
          <Link href="/recruit/guidelines">Guidelines（募集要項・選考フロー）</Link>
        </li>
        <li>
          <Link href="/recruit/faq">FAQ（よくある質問）</Link>
        </li>
        <li>
          <Link href="/recruit/entry">Entry（応募フォーム）</Link>
        </li>
      </ul>
    </section>
  );
}
