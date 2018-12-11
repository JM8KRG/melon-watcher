## melon-watcher

メロンブックスで販売されている指定の同人誌の在庫状況をチェックし,在庫復活していれば Slack に通知する**使い捨て**スクリプトです。

品切れになっている同人誌がまれに在庫復活することがあるので作りました。

### 使い方

- slack の WebhookURL の発行します
- .env をいい感じに編集します
- cron で定期実行します
- 通知が来たら目当ての同人誌を注文！！

```bash
$ git clone https://github.com/JM8KRG/melon-watcher.git
$ cd melon-watcher
$ yarn install or npm install
$ cp env.example .env
$ vi .env
$ node index.js
```

### 定期実行

cron を用いて 30 分間隔で在庫をチェックする設定例です

```bash
# crontab -u bongo -e
*/30 * * * * cd melon-watcher; /usr/bin/node /home/bongo/melon-watcher/index.js
```

### 注意事項

- 実行間隔は 30 分程度取るようにしてください
