// ------------------------------------------------------------------
// このファイルについて:
// app/(corporate)/ フォルダの中の全ページ（Home / Service / Company /
// News / Contact）に共通する「会社サイト用」のヘッダー・フッターを
// ここでまとめて表示している。
//
// ※ フォルダ名の (corporate) について（ルートグループという仕組み）:
// フォルダ名を丸カッコで囲むと、そのフォルダ名自体はURLに含まれない。
// 例: app/(corporate)/company/page.js → URLは /corporate/company ではなく /company。
// 採用サイト（app/recruit 以下）には別デザインの専用ヘッダー・フッターを
// 用意したいので（app/recruit/layout.js）、会社サイト用のページだけを
// この (corporate) フォルダにまとめて、ここに会社サイト専用の外枠を定義している。
// ------------------------------------------------------------------
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CorporateLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
