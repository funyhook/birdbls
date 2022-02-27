//[rule: 热搜]
// by 微信公众号：【玩机匠】
var logs = Logger()
var request = Request();
let token = bucketGet("dwz", "token")

function getShortUrl(longUrl){

    var  data = request({
        "url": "https://c1n.cn/link/short",
        "headers":{
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            'token':token,
        },
        "method": "post",
        "dataType":"json",
        "body":'url='+encodeURI(longUrl)+'&type=URI'

    })
    if (data && data.code==0) {
        return data.data
    }
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
            var shortUrl=url
            if(token){
                shortUrl = getShortUrl(url)
            }
            hots.push(`${+key + 1}. ${item.note}：`+shortUrl)
        }
        sendText("【玩机匠】今日热搜榜：\n"+hots.join("\n"))
    });

}
main()