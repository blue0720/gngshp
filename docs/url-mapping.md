# URLマッピング表（旧サイト → 新サイト）

現行サイト（Gware CMS）のURLは未確定のため仮の想定です。実際の旧URLが判明し次第、
このファイルを更新し、`next.config.js` の `redirects()` に反映する。

| 旧URL（Gware, 仮） | 新URL（Next.js） | 備考 |
| --- | --- | --- |
| /              | /                | Home |
| /service.php   | /service         | Service |
| /company.php   | /company         | Company |
| /news/         | /news            | News一覧 |
| /news/detail.php?id=xxx | /news/[slug] | News詳細。idからslugへの変換方法は要確認 |
| /recruit.php   | /recruit         | 採用トップ（Home） |
| （新規） | /recruit/people | People（私たちが大切にしていること） |
| （新規） | /recruit/company | Company（一人ひとりが安心して挑戦できる環境） |
| （新規） | /recruit/career | Career（あなたらしいキャリアを、一緒に描く） |
| （新規） | /recruit/numbers | Numbers（数字で見るジエンジサービス） |
| （新規） | /recruit/interview | Interview（社員インタビュー） |
| （新規） | /recruit/guidelines | Guidelines（募集要項・選考フロー） |
| （新規） | /recruit/faq | FAQ（よくある質問） |
| （新規） | /recruit/entry | Entry（応募フォーム） |
| /contact.php   | /contact         | お問い合わせ |

採用サイト（/recruit以下）はClaude Design（`design/p/9e30da9e-...`
「ジエンジサービス 採用トップ」）のデザイン案をもとに、9画面をそのまま
9つのページに分割した構成。旧`/recruit/culture`・`/recruit/member`は
この構成に統合されたため廃止した。

## TODO
- 現行サイトの実際のURL一覧を取得し、上表を正式なものに更新する
- News詳細ページのURL（idベース）をslugベースにする際の変換ルールを決める
- 上表が確定したら `next.config.js` にリダイレクト設定を追加し、
  旧URLへのアクセスを新URLへ301リダイレクトする
