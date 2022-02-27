//[rule: 热搜]
var logs = Logger()
var request = Request();
const dwzToken=''
 
function getShortUrl(longUrl){
    var options = {
            'method': 'POSTs',
            'url': 'https://dwurl.cn//U1/Api',
            "json": true,
            body :{
                "Url":longUrl,
                "token":dwzToken
            }
     };
     request(options, function (error, response, body) {
          // logs.Debug(error,response.statusCode)
          if (error || response.statusCode != 200) {
               return ''
          }
          sendText(JSON.stringify(body))
          if (body.code==200) {
              return body.ae_url
          }

     });
}
function main() {
     var options = {
          'method': 'GET',
          'url': 'https://weibo.com/ajax/statuses/hot_band',
          'headers': {
               'authority': 'weibo.com',
               'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
          },
          "json": true,
     };
     request(options, function (error, response, body) {
          // logs.Debug(error,response.statusCode)
          if (error || response.statusCode != 200) {
               return
          }
          var images = [];
          var hots = [];
          for (var key in body.data.band_list) {
               var item = body.data.band_list[key]
               if(item.mblog && item.mblog.pic_ids && item.mblog.pic_ids.length>0 && images.length<9){
                    images.push(image(`https://wx1.sinaimg.cn/orj480/${item.mblog.pic_ids[0]}.jpg`))
               }
               const url = encodeURI("https://s.weibo.com/weibo?q="+`${item.note}`)
               //var shortUrl = getShortUrl(url)
               hots.push(`${+key + 1}. ${item.note}：${url}`)
          }
          sendText(hots.join("\n"))
          logs.Info(images.join("")+"\n"+hots.join("\n"))
     });
 
}
main()
