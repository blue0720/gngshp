// URL: /contact （お問い合わせページ）
//
// 現時点ではフォームの見た目だけを実装している。
// 送信先（どのAPI・サービスにデータを送るか）がまだ決まっていないため、
// 送信ボタンを押しても実際には何も送信されない（type="button"にしてある）。
// 送信先が決まったら、<form onSubmit={...}> の形に変更して送信処理を追加する。
import PageHeader from "@/components/PageHeader";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="お問い合わせ"
        lead="サービスに関するご相談・お見積りなど、お気軽にお問い合わせください。（仮テキスト）"
      />

      <section className={styles.section}>
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">お名前</label>
            <input id="name" name="name" type="text" />
          </div>

          <div className={styles.field}>
            <label htmlFor="company">会社名</label>
            <input id="company" name="company" type="text" />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">メールアドレス</label>
            <input id="email" name="email" type="email" />
          </div>

          <div className={styles.field}>
            <label htmlFor="tel">電話番号</label>
            <input id="tel" name="tel" type="tel" />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">お問い合わせ内容</label>
            <textarea id="message" name="message" rows={6} />
          </div>

          <button type="button" className={styles.submit}>
            送信する
          </button>
          <p className={styles.note}>※現在は見た目のみの実装です。送信機能は別途実装予定です。</p>
        </form>
      </section>
    </>
  );
}
