// ------------------------------------------------------------------
// PageHeader とは:
// Service/Company/News/Contact/Recruitなど、下層ページの一番上に共通で置く
// 見出し帯（ページタイトルバナー）。トップページのHeroと同じ配色・斜め
// ストライプ装飾を使うことで、サイト全体の統一感を出している。
//
// 使い方: <PageHeader eyebrow="SERVICE" title="事業内容" lead="説明文（省略可）" />
// ------------------------------------------------------------------
import styles from "./PageHeader.module.css";

export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <section className={styles.header}>
      <span className={styles.stripes} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
    </section>
  );
}
