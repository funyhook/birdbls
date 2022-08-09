
//功能：京东口令解析
//作者：微信公众号【玩机匠】！
//[rule: raw (https:\/\/\w+-isv.isvjcloud.com\/.*Activity\/activity.*activityId=\w+)&?]
//[rule: raw ((?:\d{2}:)?\/(?:\(|！|%|￥)\w{10,12}(?:\)|！|%|￥|\/){1,2})]
//[rule: raw export ([^"]+)="([^"]+)"]
//[rule: raw [$%￥@！(#!][a-zA-Z0-9]{6,20}[$%￥@！)#!]]
let api =  bucketGet("jd_command", "api") // 对机器人发送指令 set jd_decode api http://ip:port/jd/jKeyCommand?key=
let content ="命令不在脚本范围中！！"
let command=false;

function main(){
    
    if (!api) {
        if(IsAdmin()){
            sendText("未配置api ，请给机器人发送命令“set jd_decode api http://ip:port/jd/jKeyCommand")
        }else{
           sendText("服务为开启，请联系管理员开启！")
        }
        return;
    }
    request({
        url: encodeURI(api+"?key="+GetContent()),
        method: 'POST',
        dataType:'json',
        headers: {
            "content-type": "application/json",
        },
    },function(err, resp, data) {
        if(err){
            sendText("【玩机匠】提醒：最近接口很不稳定，请三分钟后重试吧!")
            return
        }
        if (resp.statusCode == 200 && data) {
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
            }
        }else if (resp.statusCode==401) {
            sendText("【玩机匠】提醒：暂无接口请求权限："+resp.statusCode)
        }else{
            sendText("【玩机匠】提醒：最近接口很不稳定，请三分钟后重试吧!")
        }
    });
}
main()
