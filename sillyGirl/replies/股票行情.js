//[rule: 股票行情 ?]
 
var request = require("request")
var stockCode = param(1)
var data = undefined
 
function main() {
     try {
          data = /"(.*)"/.exec(request(`https://hq.sinajs.cn/list=${stockCode}`
          ))[1].split(",")
     } catch (_) { }
     if (!data) {
          return "暂无数据。"
     }
     return `${image(`http://image.sinajs.cn/newchart/daily/n/${stockCode}.gif`)}\n${[
          `股票名称`,
          `今日开盘价`,
          `昨日收盘价`,
          `当前价格`,
          `今日最高价`,
          `今日最低价`,
          `竞买价`,
          `竞卖价`,
          `成交数`,
          `成交金额`
     ].map((v, i) => {
          return `${v}：${data[i]}`
     }).join("\n")}`
}
 
sendText(main())
