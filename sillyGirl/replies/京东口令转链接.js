//功能：京东口令解析
//作者：微信公众号【玩机匠】！
//[rule:code ?] code ￥FIDLKSN&￥
var code = param(1);
sendText("正在解析口令，请稍等片刻......")
var _data = {"code": code}
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
    		sendText(data.data.jumpUrl)}
    }else{
    		sendText("【玩机匠】提醒：网络请求失败："+data.msg)
    	}
});
