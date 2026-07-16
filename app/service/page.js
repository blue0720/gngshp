// URL: /service （事業内容ページ）
// app/page.js と同じ考え方で、このフォルダ名がそのままパスになる。
import PageHeader from "@/components/PageHeader";
import PlaceholderImage from "@/components/PlaceholderImage";
import styles from "./page.module.css";

// 3つの事業。画像・説明文はすべて仮のもの。
const SERVICES = [
  {
    title: "SI事業",
    description: "ここにSI事業の説明文を実装予定。（仮テキスト）",
  },
  {
    title: "モバイルアプリケーション事業",
    description: "ここにモバイルアプリケーション事業の説明文を実装予定。（仮テキスト）",
  },
  {
    title: "業務支援クラウドサービス事業",
    description: "ここに業務支援クラウドサービス事業の説明文を実装予定。（仮テキスト）",
  },
];

export default function ServicePage() {
  return (
    <>
      <PageHeader
        eyebrow="SERVICE"
        title="事業内容"
        lead="SI事業・モバイルアプリケーション事業・業務支援クラウドサービス事業の3つを軸に、お客様のビジネスを支えています。（仮テキスト）"
      />

      <section className={styles.section}>
        {SERVICES.map((service, index) => (
          <div
            key={service.title}
            className={`${styles.serviceRow} ${index % 2 === 1 ? styles.reverse : ""}`}
          >
            <div className={styles.serviceImage}>
              <PlaceholderImage label={service.title} ratio="4 / 3" />
            </div>
            <div className={styles.serviceText}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
