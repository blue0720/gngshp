// URL: /recruit （採用トップページ）
// このページ自体はコンテンツを持たず、Culture（社風・働き方）とMember（社員紹介）への
// 案内だけを行う。詳しい内容はそれぞれのページ側で実装する。
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import styles from "./page.module.css";

const RECRUIT_LINKS = [
  { href: "/recruit/culture", label: "G&G Culture", description: "社風・働き方について（仮テキスト）" },
  { href: "/recruit/member", label: "G&G Member", description: "社員紹介について（仮テキスト）" },
];

export default function RecruitPage() {
  return (
    <>
      <PageHeader
        eyebrow="RECRUIT"
        title="採用情報"
        lead="一緒に働く仲間を募集しています。（仮テキスト）"
      />

      <section className={styles.section}>
        <div className={styles.cards}>
          {RECRUIT_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.card}>
              <p className={styles.cardLabel}>{link.label}</p>
              <p className={styles.cardDescription}>{link.description}</p>
              <span className={styles.cardMore}>MORE</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
