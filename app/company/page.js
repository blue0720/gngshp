// URL: /company （会社概要ページ）
import PageHeader from "@/components/PageHeader";
import PlaceholderImage from "@/components/PlaceholderImage";
import styles from "./page.module.css";

// 会社概要テーブルの項目。住所・電話・FAXはFooterと同じ確定値、
// それ以外（設立・資本金・代表者名など）は未確定のため "?" にしてある。
const PROFILE = [
  { label: "会社名", value: "株式会社ジエンジサービス" },
  { label: "設立", value: "?" },
  { label: "資本金", value: "?" },
  { label: "代表者", value: "?" },
  { label: "所在地", value: "〒105-0014 東京都港区芝2-22-13 STKビル 1F" },
  { label: "TEL / FAX", value: "TEL：（03）-6435-0349 / FAX：（03）-6435-0359" },
  { label: "事業内容", value: "SI事業／モバイルアプリケーション事業／業務支援クラウドサービス事業" },
];

export default function CompanyPage() {
  return (
    <>
      <PageHeader eyebrow="COMPANY" title="会社概要" />

      <section className={styles.section}>
        <div className={styles.image}>
          <PlaceholderImage label="オフィス外観" ratio="16 / 9" />
        </div>

        <table className={styles.table}>
          <tbody>
            {PROFILE.map((row) => (
              <tr key={row.label}>
                <th>{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.note}>※「?」の項目は確定次第、実際の情報に差し替えます。</p>
      </section>
    </>
  );
}
