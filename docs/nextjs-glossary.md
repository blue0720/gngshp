# Next.js 基本用語ミニ解説（HTML/CSS/JSしか触ったことがない人向け）

このプロジェクトで出てくる用語を、普段のHTML/CSS/JSと対比しながら説明する。

## App Router / app ディレクトリ

Next.jsのルーティング（URLとページの対応づけ）方式のひとつ。
普段のWeb制作では `service.html` のようにファイルを作ればそのままURLになるが、
Next.jsの `app` ディレクトリでは「**フォルダ**の中に `page.js` を置く」ことで
そのフォルダ名がURLになる。

```text
app/service/page.js   →  https://example.com/service
app/recruit/culture/page.js  →  https://example.com/recruit/culture
```

## page.js

そのフォルダのURLに対応する「そのページの中身」を書くファイル。
普段作っていた `service.html` の役割に近い。

## layout.js

複数のページで共通する外枠（ヘッダー・フッターなど）をまとめるファイル。
全ページで同じHTMLを毎回コピペしなくて済むようにするための仕組み。
`{children}` と書いた場所に、各ページの中身（page.jsの内容）が差し込まれる。

## コンポーネント（Component）

「画面の部品」をJavaScriptの関数として切り出したもの。
例えば `components/Header.js` は「ロゴ+メニュー」という部品をひとつの関数に
まとめたもので、使う側は `<Header />` と書くだけで呼び出せる。

普段のHTMLで例えるなら、同じヘッダーを毎ページコピペする代わりに、
「ヘッダー部品」を1か所に定義して使い回すイメージ。

## JSX

`return (<div>こんにちは</div>)` のように、JavaScriptの中にHTMLのような
タグを直接書ける記法。ブラウザがそのまま解釈するわけではなく、
ビルド時に通常のJavaScriptに変換される。

## CSS Modules（`*.module.css`）

普通のCSSファイルとほぼ同じ書き方だが、ファイル名の末尾が `.module.css` に
なっているものは「そのファイル専用のスタイル」として扱われる。
`import styles from "./page.module.css"` のように読み込み、
`className={styles.section}` のようにJS側から参照する。
クラス名が他のページ・部品のCSSと衝突しないのが利点。

## props（プロパティ）

コンポーネントに渡す「引数」のようなもの。
例: `<Header />` を `<Header title="Home" />` のように書くと、
Header関数の中で `{ title }` として受け取れる（現状のHeaderでは未使用）。

## サーバーコンポーネント / async コンポーネント

App Routerのページ（page.js）は初期状態で「サーバー側で実行される
コンポーネント」になっている。`app/news/page.js` のようにコンポーネントの
関数自体を `async` にして、中で `await getAllNews()` のようにデータ取得を
直接書けるのが特徴（普段のJSで `fetch` してから画面を書き換える処理を、
もっとシンプルに書けるイメージ）。

## ルートグループ（フォルダ名を丸カッコで囲む）

`app/(corporate)/` のように、フォルダ名を `(　)` で囲むと、
そのフォルダ名自体はURLに含まれなくなる。

```text
app/(corporate)/company/page.js  →  https://example.com/company
（/corporate/company にはならない）
```

このプロジェクトでは、会社サイトのページ（Home/Service/Company/News/
Contact）を `app/(corporate)/` にまとめ、採用サイトのページ
（`app/recruit/`以下）と分けている。理由は、会社サイトと採用サイトで
ヘッダー・フッターのデザインがまったく違うため。
`app/(corporate)/layout.js` と `app/recruit/layout.js` それぞれに
専用のヘッダー・フッターを持たせることで、
「会社サイトのページには会社サイト用の外枠だけ」
「採用サイトのページには採用サイト用の外枠だけ」が適用されるようにしている
（app直下の `app/layout.js` は `<html><body>` の土台だけを担当し、
ヘッダー・フッターは持たない）。

## 動的ルート（`[slug]`）

フォルダ名を角カッコで囲む（例: `app/news/[slug]/page.js`）と、
URLの該当部分が可変になる。`/news/sample-news-1` でも `/news/other-post` でも
同じファイルが使われ、実際の値は `params.slug` として受け取れる。
