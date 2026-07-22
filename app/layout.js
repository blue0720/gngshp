// ------------------------------------------------------------------
// layout.js とは:
// App Router（appディレクトリ方式）では、"layout.js" という名前のファイルは
// 「そのフォルダ配下の全ページに共通する外枠」を定義する特別なファイルです。
//
// このファイルはapp直下にあるので、サイト全体（会社サイト・採用サイトの
// 両方）に適用されます。ただしヘッダー・フッターは会社サイトと採用サイトで
// デザインが異なるため、ここでは持たせず、それぞれの配下
// （app/(corporate)/layout.js と app/recruit/layout.js）で個別に用意しています。
// このファイルは <html><body> の土台とフォント・共通CSSの読み込みだけを担当します。
//
// {children} の部分に、実際に開いたページの中身が差し込まれます。
// ------------------------------------------------------------------
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

// next/font: Next.js標準のフォント読み込み機能。現行サイトと同じ
// 「Noto Sans JP」というフォントを、ビルド時に自動でダウンロード・
// 最適化して使えるようにする（自分でフォントファイルを用意しなくてよい）。
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

// メタデータ（ブラウザタブのタイトルなど）。ページごとに上書きも可能。
export const metadata = {
  title: "株式会社ジエンジサービス",
  description: "株式会社ジエンジサービス コーポレートサイト",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body>{children}</body>
    </html>
  );
}
