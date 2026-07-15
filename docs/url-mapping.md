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
| /recruit.php   | /recruit         | Recruitトップ |
| /recruit/culture.php | /recruit/culture | 社風・働き方 |
| /recruit/member.php  | /recruit/member  | 社員紹介 |
| /contact.php   | /contact         | お問い合わせ |

## TODO
- 現行サイトの実際のURL一覧を取得し、上表を正式なものに更新する
- News詳細ページのURL（idベース）をslugベースにする際の変換ルールを決める
- 上表が確定したら `next.config.js` にリダイレクト設定を追加し、
  旧URLへのアクセスを新URLへ301リダイレクトする
