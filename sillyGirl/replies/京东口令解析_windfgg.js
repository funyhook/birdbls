//功能：京东口令解析
//作者：微信公众号【玩机匠】！

//[rule: raw (https:\/\/\w+-isv.isvjcloud.com\/.*Activity\/activity.*activityId=\w+)&?]
//[rule: raw ((?:\d{2}:)?\/(?:\(|！|%|￥)\w{10,12}(?:\)|！|%|￥|\/){1,2})]
//[rule: raw export ([^"]+)="([^"]+)"]
//[rule: raw [$%￥@！(#!][a-zA-Z0-9]{6,20}[$%￥@！)#!]]

var token = bucketGet("windfgg", "token") // 对机器人发送 set windfgg token 你的token
var host  =  bucketGet("windfgg", "host") // 对机器人发送 set windfgg host 你的host
var code  = GetContent();
sendText("正在解析口令，请稍等片刻......")
var _data = {"code": code}

if (isAdmin()) {
    request({
        url: 'https://api.windfgg.cf/jd/code',
        method: 'POST',
        dataType:'json',
        headers: {
            "content-type": "application/json",
            "Authorization":"Bearer "+token,
        },
        body: _data
    },function(err, resp, data) {
        if(err){
            sendText("【玩机匠】提醒：网络异常，稍后重试！")
        }
        if (resp.statusCode == 200 && data) {
            sendText("恭喜，成功解析口令:")
            sendText("活动名称："+data.data.title)
            sendText("用户名："+data.data.userName)
            sendText("地址："+data.data.jumpUrl)
        }else if (resp.statusCode==401) {
            sendText("【玩机匠】提醒：暂无接口请求权限："+resp.statusCode)
        }else{
            sendText("【玩机匠】提醒：网络异常，稍后重试"+JSON.stringify(resp))
        }
    });
}else{
    sendText("【玩机匠】提醒：该插件暂未对你授权，请联系玩机匠获取授权！！！")
}
