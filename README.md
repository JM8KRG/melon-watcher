## melon-watcher

メロンブックスで販売されている指定の同人誌の在庫状況をチェックし,在庫復活していれば Slack に通知する使い捨てスクリプトです。

品切れになっている同人誌がまれに在庫復活することがあるので作りました。

### 使い方

- slack の WebhookURL の発行します
- .env をいい感じに編集します

```bash
$ yarn install or npm install
$ cp env.example .env
$ node index.js
```

### 定期実行

cron を用いて 30 分間隔で在庫をチェックする設定例です

```bash
# crontab -u bongo -e
*/30 * * * * cd melon-watcher; /usr/bin/node /home/bongo/melon-watcher/index.js
```

### 注意事項

- 実行間隔は最低 30 分以上取るようにしてください
