// URL: /service （事業内容ページ）
// app/page.js と同じ考え方で、このフォルダ名がそのままパスになる。
import styles from "./page.module.css";

export default function ServicePage() {
  return (
    <section className={styles.section}>
      <h1>Service（事業内容）</h1>
      <p>ここに現行サイトのServiceページ相当の内容を実装予定。</p>
    </section>
  );
}
