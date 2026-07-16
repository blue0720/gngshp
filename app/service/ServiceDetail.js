// ------------------------------------------------------------------
// ServiceDetail とは:
// /service ページの「事業ひとつぶん」の表示を担当する部品（コンポーネント）。
// page.js の SERVICES配列から1件分のデータ（service）と、それが何番目か
// （index）を受け取って表示する。
//
// service.strengths のように「データの中にその項目があるときだけ、対応する
// 見出しとリストを表示する」という書き方を随所で使っている
// （例: {strengths && (<div>...</div>)} は「strengthsがあれば表示、
// 無ければ何も表示しない」という意味）。事業ごとに載せている情報の量が
// 違う（例: 業務支援クラウドサービス事業には保有技術の記載が無い）ため、
// このような書き方をしている。
// ------------------------------------------------------------------
import PlaceholderImage from "@/components/PlaceholderImage";
import styles from "./ServiceDetail.module.css";

export default function ServiceDetail({ service, index }) {
  const { title, description, strengths, techStack, achievements, apps, clients } = service;

  return (
    <article className={styles.service}>
      <div className={styles.head}>
        <p className={styles.number}>{`SERVICE.0${index + 1}`}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <PlaceholderImage label={title} ratio="21 / 9" className={styles.image} />

      {strengths && (
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>G&amp;Gクオリティ</h3>
          <ul className={styles.strengthList}>
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {techStack && (
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>保有技術</h3>
          <div className={styles.techGrid}>
            {techStack.map((group) => (
              <div key={group.label} className={styles.techGroup}>
                <p className={styles.techLabel}>{group.label}</p>
                <div className={styles.tagList}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.tag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {achievements && (
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>開発実績</h3>
          <dl className={styles.detailList}>
            {achievements.map((item, i) => (
              <div key={`${item.label}-${i}`} className={styles.detailRow}>
                <dt>{item.label}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {apps && (
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>代表的なアプリ</h3>
          <div className={styles.tagList}>
            {apps.map((app) => (
              <span key={app} className={styles.tag}>
                {app}
              </span>
            ))}
          </div>
        </div>
      )}

      {clients && (
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>取引先実績</h3>
          <dl className={styles.detailList}>
            {clients.map((item, i) => (
              <div key={`${item.label}-${i}`} className={styles.detailRow}>
                <dt>{item.label}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </article>
  );
}
