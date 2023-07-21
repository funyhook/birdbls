//功能：京东口令解析
//作者：微信公众号【玩机匠】！
//[rule:code ?] code ￥FIDLKSN&￥
var code = param(1)
sendText("请输入接口token")
let token = input(6000)
sendText("正在解析口令，请稍等片刻......")
var _data = {"code": code}
request({
    url: 'https://api.windfgg.cf/jd/code',
    method: 'POST',
    dataType:'json',
    headers: {
        "content-type": "application/json",
    },
    Authorization:"Bearer "+token,
    body: _data
},function(err, resp, data) {
    if(err){
        sendText("【玩机匠】提醒：网络异常，稍后重试！：")
    }
    if (resp.statusCode == 200 && data) {
        sendText(data.data.jumpUrl)
    }else if (resp.statusCode==401) {
        sendText("【玩机匠】提醒：token无效 搞个毛？："+resp.statusCode)
    }else{
        sendText("【玩机匠】提醒：网络异常，稍后重试！：")
    }
});