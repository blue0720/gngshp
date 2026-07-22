// ------------------------------------------------------------------
// このファイルについて（layout.js の役割はapp/layout.jsのコメント参照）:
// app/recruit/ フォルダの中の全ページ（採用トップ・People・Company…など）に
// 共通する「採用サイト専用」のヘッダー・フッターをここでまとめて表示する。
//
// 会社サイト（app/(corporate)/layout.js）とは見た目もフォントも違うデザインの
// ため、ヘッダー・フッターのコンポーネントもCSSの色変数も分けている。
// ------------------------------------------------------------------
import { Zen_Kaku_Gothic_New, Space_Grotesk } from "next/font/google";
import RecruitHeader from "@/components/recruit/RecruitHeader";
import RecruitFooter from "@/components/recruit/RecruitFooter";
import styles from "./layout.module.css";

// 採用サイトのデザイン案で使われているフォント。
// 会社サイトはNoto Sans JPだが、採用サイトはこちらを使う。
const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--recruit-font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--recruit-font-mono",
});

// 採用サイト部分だけのタブタイトル。
export const metadata = {
  title: "採用情報｜株式会社ジエンジサービス",
  description:
    "株式会社ジエンジサービスの採用情報サイトです。募集職種や社員紹介、選考フローなどを掲載しています。",
};

export default function RecruitLayout({ children }) {
  return (
    <div
      className={`${styles.recruitRoot} ${zenKaku.variable} ${spaceGrotesk.variable}`}
    >
      <RecruitHeader />
      <main>{children}</main>
      <RecruitFooter />
    </div>
  );
}
