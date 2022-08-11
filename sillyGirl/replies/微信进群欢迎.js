// [rule: ?邀请?加入了群聊 ]
// [priority: 1]优先级

/**
 * 
 * 作者：微信公众号【玩机匠】！
 * 功能：京东口令解析接口板
 * 
 */
importJs('common.js')
let host = bucketGet("wx", "vlw_addr") //取值;//你的httpApi vlw外网调用地址
let token = bucketGet("wx", "vlw_token"); //你的httpApi vlw的token
let inviteGroups = [8779271505, 18706655242, 20734345816] //邀请通知的群

var chatID = GetChatID() + "@chatroom"; //当前群聊ID

function main() {
    try {
        if (inviteGroups.includes(chatID) > -1) {
            var message = GetContent()

            var userName = ""
            //扫码进群和邀请人进群触发条件不同，抓取不同。暂时只弄了邀请人进群的
            if (message.indexOf("邀请") >= 0) {
                var a = message.indexOf("邀请");
                var b = message.lastIndexOf("加入");
                userName = message.substring(a + 3, b - 1);
            } else {
                var b = message.lastIndexOf("通过扫描");
                userName = message.substring(1, b - 1);
            }

            //获得当前登录的机器人uid
            var robotRes = request({
                url: host,
                dataType: "json",
                method: "post",
                body: {
                    token: token,
                    api: "GetRobotList",
                }
            })
            var robotId = robotRes.ReturnJson.data[0].wxid;
            sleep(5000)
            var uid = getUid(robotId, userName);
            var msg = " [emoji=\\uD83C\\uDF8A]]欢迎进群～\n \n[emoji=\\uD83D\\uDD25]购买攻略[emoji=\\uD83D\\uDC47]（新手必看）：\n https://docs.qq.com/doc/DQVlOaGVSS0hwb3lO\n \n[emoji=\\uD83D\\uDEAB]群规：请勿发送涉黄涉政、低俗内容、广告等无关信息，否则将被踢出群聊！\n \n[emoji=\\uD83D\\uDC8C]答疑：发送【帮助】按指引解决或私聊群主\n \n[爱心]请将本群设置免打扰 防止过多信息打扰到您"
            //debugLog(msg)
            //拼接@参数
            //debugLog(url)
            request({
                url: host,
                method: "post",
                dataType: "json",
                body: {
                    "token": token,
                    "api": "SendGroupMsgAndAt",
                    "robot_wxid": robotId,
                    "group_wxid": chatID,
                    "member_wxid": uid,
                    "member_name": "",
                    "msg": msg
                }
            })
        }
    } catch (e) {
        debugLog(e)
    }

}

//获取新进群人的uid
//如果群内有人重名会出BUG
function getUid(robotId, userName) {
    var data = request({
        url: host,
        method: "post",
        dataType: "json",
        body: {
            "token": token,
            "api": "GetGroupMember",
            "robot_wxid": robotId,
            "group_wxid": chatID,
            "is_refresh": 1
        }
    })
    for (var i = data.ReturnJson.member_list.length; i--;) {
        var user = data.ReturnJson.member_list[i]
        if (user.nickname == userName) {
            return user.wxid;
        }
    }
}

main()
