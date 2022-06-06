//功能：京东口令解析
//作者：微信公众号【玩机匠】！
//[rule:code ?] code ￥FIDLKSN&￥
var code = param(1);
sendText("正在解析口令，请稍等片刻......")
var _data = {"code": code}
request({
    url: 'https://api.windfgg.cf/jd/code',
    method: 'POST',
    dataType:'json',
    headers: {
        "content-type": "application/json",
    },
    Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0NjA3MTI5OCwiaWF0IjoxNjUzMzk3MzQwLCJleHAiOjE2ODQ5MzMzNDB9.Qzn2r8_YYR6ZjUpttA-oy4KmHxgSrrEiP8lRusW8hY4",
    body: _data
},function(err, resp, data) {
    if(err){
        sendText("【玩机匠】提醒：网络异常，稍后重试！：")
    }
    if (resp.statusCode == 200 && data) {
        sendText(data.data.jumpUrl)
    }else if (resp.statusCode==401) {
        sendText("【玩机匠】提醒：暂无接口请求权限："+resp.statusCode)
    }else{
        sendText("【玩机匠】提醒：网络异常，稍后重试！：")
    }
});