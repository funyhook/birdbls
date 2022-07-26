// [rule: 扭吧]
// by 微信公众号：【玩机匠】
var url = "http://api.qemao.com/api/douyin"
var red = request({
        url: url,
        dataType: "location",
    })
sendVideo(red)
