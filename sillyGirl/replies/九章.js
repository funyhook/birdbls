//[rule: jz ?]  jz 13011066666
//[rule: 九章 ?] 九章 13011066666
//转发请留下原作者-微信公众号【玩机匠】！
let chatId=GetChatID()
let userId=GetUserID()

//青龙配置
let client_id = bucketGet("qinglong","client_id")
let client_secret = bucketGet("qinglong","client_secret")
let host = bucketGet("qinglong","host")

var headers = {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36",
      "content-type":"application/json"
    };
    
function getQLToken(){
    var data = request({
         "url": host+"/open/auth/token?client_id=" +client_id + "&client_secret=" + client_secret,
         "method": "get",
         "dataType": "json"
     })
     if(data && data.code==200){
        return (data.data.token_type+" "+data.data.token);
     }else{
         sendText("青龙暂时无法访问，请检查配置！")
     }

}

function getAndSetEnvs(newToken,key){
    headers.authorization=getQLToken()
    var envs=[]
    var  data = request({
             "url": host+"/open/envs?searchValue="+key,
             "headers":headers,
             "method": "get",
             "dataType":"json"
             
        })
    if (data && data.code==200) {
        var update =false
        if(data.data.length){
            sendText("已存在环境变量【"+key+"】，将把最新token追加末尾！")
            for (var i = 0; i < data.data.length; i++) {
                envs.push(data.data[i].value)
            }
            envs.push(newToken)
            var jzttToken = envs.join("@")
            sendText("九章全部token："+jzttToken)
            var body =
                    {
                     name:"jzttToken",
                     value:jzttToken,
                     remarks: "jzttToken",
                     _id:data.data[0]._id
                    }
            setEnvs("put",body)        
        }else{
            var body =[
                    {
                     name:"jzttToken",
                     value:newToken,
                     remarks: "jzttToken"
                    }
                ]
            setEnvs("post",body)
        }
       
    }
    return envs
}

function setEnvs(method,envs){
    headers.Authorization=getQLToken()
    var  data = request({
             "url": host+"/open/envs",
             "headers":headers,
             "method": method,
             "dataType":"json",
             "body":envs
             
        })
        if (data && data.code==200) {
            sendText("【玩机匠】提醒：九章token提交成功！")
        }else{
            sendText(JSON.stringify(data))
        }
}



//九章登录
function getJzttToken(body){
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
          return data.data.token
        }
       
    }else{
        sendText(data.msg);
        
    }
    
}

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




function main(){
    if(chatId!="0"){
        sendText("为保护您的隐私，请私聊机器人回复指令！")
    }else{
        var mobile = param(1) 
        getCode(mobile)
        var code = input()
        
        var body = "mobile="+mobile+"&code="+code
        
        var token = getJzttToken(body);
       if(token){
            sendText("【玩机匠】提醒⏰：恭喜您，获取token成功！当前token为：")
            sendText(token)
            getAndSetEnvs(token,"jzttToken");
        }else{
            sendText("获取失败，请重试！"+token)
        }
    
    }
}

main()





