//[rule: 短网址 ?]
// by 微信公众号：【玩机匠】
//1、请登录网址https://www.c1n.cn/administrators.html，注册账号，获取token
//2、发送傻妞命令：set dwz token 你的token
const logs = Logger()
const request = Request();
let token = bucketGet("dwz", "token")

function getShortUrl(longUrl){

    var  data = request({
        "url": "https://c1n.cn/link/short",
        "headers":{
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            'token':token
        },
        "method": "post",
        "dataType":"json",
        "body":'url='+encodeURI(longUrl)+'&type=URI'

    })
    if (data && data.code==0) {
        sendText('【玩机匠】提醒：转换成功：'+data.data)
    }else{
        sendText('【玩机匠】提醒：转换失败：'+data.data)
    }
}
function main(){
    if(!token){
        sendText('【玩机匠】提醒：sorry,请先配置token，请登录网址https://www.c1n.cn/administrators.html，注册账号，获取token')
        sendText('发送傻妞命令：set dwz token 你的token')
    }
    getShortUrl(encodeURI(param(1)))
}
main()