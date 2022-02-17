//功能：京东签名生成
//作者：微信公众号【玩机匠】
//[rule:sign ?]
var url = param(1);
sendText("正在生成签名，请稍等片刻......")
var _data = {
  "fn": "genToken",
  "body": {
    "url": url,
    "action": "to"
  }
}
request({
    url: 'https://api.jds.codes/jd/jCommand',
    method: 'POST',
    dataType:'json',
    headers: {
        "content-type": "application/json",
    },
    body: _data
},function(err, resp, data) {
    if (!err && resp.statusCode == 200) {
    	if(data){
    		sendText(data.data)}
    }else{
    		sendText("网络请求失败："+data)
    	}
});
