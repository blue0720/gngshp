// ------------------------------------------------------------------
// 「コンポーネント」の実例その1: ヘッダー（全ページ共通のナビゲーション）
//
// コンポーネントとは「画面の部品」のことです。
// 例えばこのHeaderは「ロゴ + メニュー + CONTACTボタン」というひとかたまりの
// 部品で、app/layout.js（全ページに共通するレイアウト）から1回だけ読み込んで
// 全ページに表示しています。
//
// もし将来「ヘッダーのメニュー項目を1つ増やしたい」となったとき、
// 6ページ全部を書き換える必要はなく、このファイル1つを直すだけで
// 済むのがコンポーネント化のメリットです。
//
// デザインは現行サイト(gngs.co.jp)のヘッダー（白背景・左にロゴ・中央〜右に
// メニュー・右端にCONTACTボタン）に合わせている。
// ------------------------------------------------------------------
import Link from "next/link";
import styles from "./Header.module.css";

// ナビゲーションのリンク一覧。配列にしておくと項目の追加・削除がしやすい。
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/service", label: "Service" },
  { href: "/company", label: "Company" },
  { href: "/news", label: "News" },
  { href: "/recruit", label: "Recruit" },
];

// 関数コンポーネント: HTMLのようなJSX(JavaScript内にHTMLを書ける記法)を返す関数。
// これがブラウザに表示される内容になる。
export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoMark} aria-hidden="true" />
        G&amp;G Service
      </Link>
      <nav>
        <ul className={styles.navList}>
          {NAV_LINKS.map((link) => (
            // Next.jsではページ遷移に <a> ではなく <Link> を使う
            // （画面全体の再読み込みをせずに高速に遷移できる）
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="/contact" className={styles.contactButton}>
        CONTACT
      </Link>
    </header>
  );
}
