//[rule: jz ?]  jz 13011066666
//[rule: 九章 ?] 九章 13011066666
//转发请留下原作者-微信公众号【玩机匠】！
let chatId=GetChatID()
let userId=GetUserID()
sendText("注意：多账号请关闭自动提交功能(set qinglong jz false)，手动配置环境变量！！！:")
//是否自动提交token true：自动；false：手动
let autoSumit=bucketGet("qinglong","jz")
var headers = {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36",
      "content-type":"application/json"
    };



//九章获取验证码  
function getCode(mobile) {
    sendText("正在发送验证码:")
   
     var data = request({
         url: "https://api.st615.com/api/oauth/message?mobile=" + mobile,
         "headers":headers,
         "method": "get",
         "dataType": "json"
     })
     sendText("验证码已发送，请注意查收！")
     sendText("请输入验证码:")
     
 }
//九章登录
function login(body){
    var data = request({
        url: "https://api.st615.com/api/oauth/login",
        "dataType": "json",
        "body": body
    })
    if (data && data.code==0) {
        if(data.data.token.code){
            sendText("😂😂😂，获取token失败："+data.data.token.msg)
        }else{
              sendText("恭喜您，获取token成功！当前token为："+data.data.token)
            if(autoSumit){
                 breakIn("ql env set jzttToken "+data.data.token)
                 sendText("token已成功提交到青龙："+bucketGet("qinglong","host"))
            }else{
                 sendText("已关闭自动提交token到青龙环境变量，请手动配置！")
            }
        }
       
    }else{
        sendText(data.msg);
        
    }
    
}

if(chatId!="0"){
    sendText("为保护您的隐私，请私聊机器人回复指令！")
}else{
    var mobile = param(1) 

    getCode(mobile)
    var code = input()
    
    var body = "mobile="+mobile+"&code="+code
    
    login(body)
    
}









