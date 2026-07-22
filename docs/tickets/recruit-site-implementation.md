# 採用サイト（/recruit以下）実装チケット

## 背景・決定事項

Claude Design の以下のプロジェクトを元に、採用サイトのリニューアルを実装する。

- デザインプロジェクト: 「ジエンジサービスのリメイク」
  （`https://claude.ai/design/p/9e30da9e-06a6-4afa-889c-c080dece497b`）
- 対象ファイル: `ジエンジサービス 採用トップ.dc.html`
  （`ジエンジサービス トップ案.dc.html` はコーポレートサイトのデザイン比較案であり、**今回は対象外**）

決定した方針:

1. **コーポレートサイト（Home/Service/Company/News/Contact）は今回は実装しない。採用サイトのみ実装する。**
2. デザイン内の9画面（Home/People/Company/Career/Numbers/Interview/
   Guidelines/FAQ/Entry）は、統合せずそのまま9つのページに分割する。
3. URL構成は `/recruit` 配下にすべてまとめる（下記マッピング表を参照）。
4. 採用サイトは会社サイトとヘッダー・フッターのデザインが大きく異なるため、
   Next.jsの「ルートグループ」という仕組みを使って、会社サイト用と
   採用サイト用のヘッダー・フッターを完全に分離する。
   - 会社サイト: `app/(corporate)/layout.js`
   - 採用サイト: `app/recruit/layout.js`
5. 旧 `/recruit/culture`・`/recruit/member`（プレースホルダーのみ）は
   上記9ページ構成に統合されたため廃止した。

### URLマッピング（詳細は `docs/url-mapping.md` も参照）

| # | URL | 内容 |
| --- | --- | --- |
| 00 | `/recruit` | Home（採用トップ / ヒーロー） |
| 01 | `/recruit/people` | 私たちが大切にしていること |
| 02 | `/recruit/company` | 一人ひとりが安心して挑戦できる環境 |
| 03 | `/recruit/career` | あなたらしいキャリアを、一緒に描く |
| 04 | `/recruit/numbers` | 数字で見るジエンジサービス |
| 05 | `/recruit/interview` | 社員インタビュー |
| 06 | `/recruit/guidelines` | 募集要項・選考フロー |
| 07 | `/recruit/faq` | よくある質問 |
| 08 | `/recruit/entry` | 応募フォーム |

## 完了したこと（共通部分）

- [x] `app/(corporate)/` ルートグループを作成し、既存の会社サイトページ
      （page.js / service / company / news / contact）を移動
- [x] `app/(corporate)/layout.js` を新規作成し、既存のHeader/Footer
      （会社サイト用）をここに移動
- [x] `app/layout.js` をhtml/body/フォント/共通CSSの読み込みのみに簡素化
      （ヘッダー・フッターを持たせない土台だけの役割に変更）
- [x] `app/recruit/layout.js` を新規作成（採用サイト専用の外枠）
      - フォントに Zen Kaku Gothic New / Space Grotesk を追加
      - `app/recruit/layout.module.css` に採用サイト専用の色・フォント
        変数（`--recruit-color-*`, `--recruit-font-*`）を定義
- [x] `components/recruit/RecruitHeader.js` / `.module.css` 新規作成
      （ロゴ + 7項目ナビ + 「応募する」浮動ボタン）
- [x] `components/recruit/RecruitFooter.js` / `.module.css` 新規作成
- [x] 旧 `app/recruit/culture`・`app/recruit/member` を削除
- [x] 上表の9ページ分のフォルダ・`page.js`・`page.module.css`を作成
      （中身はまだプレースホルダー文言のみ）
- [x] `docs/url-mapping.md` / `docs/nextjs-glossary.md`（ルートグループの説明）を更新
- [x] `npm run build` で全16ルートの生成を確認済み

## 保留・後回しにしたこと

- [ ] 採用サイトのロゴ画像（`assets/logo.png`）は、テキストデータとして
      正確に複製するのが難しかったため未反映。現状は「G&G Service」の
      文字とCSSで描いた四角のマークで代用中。実画像は後日
      `public/recruit/` に配置して差し替え可能。
- [ ] ヘッダーの「コーポレートサイト ↗」リンクは暫定的に自サイトの `/`
      （コーポレートサイトが実装された場合の想定先）にリンクしている。
      デザイン案では外部の `https://www.gngs.co.jp/` だったため、
      挙動に迷いがあれば要確認。

## 次に実装する内容（ページ単位、優先度順の想定）

- [ ] Home（`/recruit`）: ヒーロー・コンセプト文・「応募する」導線
- [ ] People（`/recruit/people`）: 大切にしていること
- [ ] Company（`/recruit/company`）: 働く環境
- [ ] Career（`/recruit/career`）: キャリアパス
- [ ] Numbers（`/recruit/numbers`）: 統計データ（数値アニメーション部分は
      デザイン案ではJS実装だが、シンプルな静的表示に置き換える想定）
- [ ] Interview（`/recruit/interview`）: 社員インタビュー
- [ ] Guidelines（`/recruit/guidelines`）: 募集要項・選考フロー
- [ ] FAQ（`/recruit/faq`）: よくある質問（アコーディオン開閉が必要か要検討）
- [ ] Entry（`/recruit/entry`）: 応募フォーム（送信先・バリデーションは
      別途要検討）

各ページは元デザイン（Claude Design内 `ジエンジサービス 採用トップ.dc.html`）
の該当セクションを参照しながら、1ページずつ小さい単位で実装・確認していく。
