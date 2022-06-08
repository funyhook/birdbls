//[rule:code ?]
//[rule:转口令 ?]

//功能：京东口令解析
//作者：微信公众号【玩机匠】！
var token = "xxxxxxxxxxxx"// 这里输入你的token

var code = param(1);
sendText("正在解析口令，请稍等片刻......")
var _data = {"code": code}
request({
    url: 'http://windfgg.cf/jd/code',
    method: 'POST',
    dataType:'json',
    headers: {
        "content-type": "application/json",
        "Authorization": "Bearer "+token,
    },
    body: _data
},function(err, resp, data) {
    if (!err && resp.statusCode == 200) {
     if(data){
	 sendText("【玩机匠】提醒：口令发起人："+data.data.userName + "\n链接："+ data.data.jumpUrl + "\n今日Token调用次数："+data.request_times + "次")}
    }else{
      sendText("【玩机匠】提醒：单日请求上限"+ "\n当前请求次数为："+data.request_times + "次")
     }
});
