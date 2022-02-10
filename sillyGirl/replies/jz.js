//[rule: 九章 ?] 九章手机号
var chatId=GetChatID()
var userId=GetUserID()

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
        sendText("恭喜您，获取token成功！当前token为：")
        sendText(data.data.token)
        
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





