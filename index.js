const request = require('request')
const cheerio = require('cheerio')
const { IncomingWebhook } = require('@slack/client')
require('dotenv').config()

const target = process.env.WATCH_URL

request(target, (e, response, body) => {
  if (e) {
    console.log(e)
  }

  try {
    const $ = cheerio.load(body)
    let stock = $('td.txt_right span.stock')
      .text()
      .trim()

    // この文字列が存在したらSlackに通知する
    if (stock === '在庫あり' || stock === '残りわずか') {
      // slackに通知する
      const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL)
      webhook.send('在庫状況：' + stock + '\nURL: ' + target, function (
        err,
        res
      ) {
        if (err) {
          console.log('slack error', err)
        } else {
          console.log('sent: ', res)
        }
      })
    }

    console.log('状態: ' + stock)
  } catch (e) {
    console.log(e)
  }
})
