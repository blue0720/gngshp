// ------------------------------------------------------------------
// layout.js とは:
// App Router（appディレクトリ方式）では、"layout.js" という名前のファイルは
// 「そのフォルダ配下の全ページに共通する外枠（HTMLの<html><body>や
// ヘッダー・フッターなど）」を定義する特別なファイルです。
//
// このファイルはapp直下にあるので、サイト全体（Home/Service/Company/
// News/Recruit/Contact すべて）に適用されます。
//
// {children} の部分に、実際に開いたページ（例: app/service/page.js の中身）が
// 差し込まれます。
// ------------------------------------------------------------------
import { Noto_Sans_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
