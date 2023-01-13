// [author: 玩机匠]
// [create_at: 2022-12-25 05:00:00]
// [version: v1.0.3]
// [title: JD东东红包]
// [class: 查询类]
// [description: 指令：东东红包，仅支持autMan0.8.6以上版本，且依赖“userAgents.js”]
// [platform: qq,wx,tg]
// [public: true]
// [price: 0.00]
// [disable: false]
// [rule: raw ^东东红包$]

importJs("./utils/userAgents.js")

//媒介
imType = ImType()
//用户id
userId = GetUserID()
//绑定的京东账号
jds = bucketKeys("pin" + imType.toUpperCase(), userId)
cookie = ""
if (jds.length == 0) {
    sendText("没有与你绑定的账号，请对我说：“登陆”")
} else if (jds.length == 1) {
    jnStr = bucketGet("jdNotify", jds[0])
    Debug(jnStr)
    jn = JSON.parse(jnStr)
    cookie = "pt_key=" + jn.PtKey + ";pt_pin=" + jn.ID + ";"
} else {
    jdsIndex = []
    for (i = 0; i < jds.length; i++) {
        jdsIndex[i] = (i + 1) + ". " + decodeURIComponent(jds[i])
    }
    sendText("请选择要查询的账号：\n" + jdsIndex.join("\\n"))
    let index = input(30000)
    Debug(index)
    if (index) {
        i = parseInt(index)
        jnStr = bucketGet("jdNotify", jds[i - 1])
        Debug(jnStr)
        jn = JSON.parse(jnStr)
        cookie = "pt_key=" + jn.PtKey + ";pt_pin=" + jn.ID + ";"
        Debug(cookie)
    } else {
        sendText("退出")
    }
}
if (cookie) {
    getRedPacket(cookie)
}

//查询红包
function getRedPacket(cookie) {
    request({
        "url": "https://m.jingxi.com/user/info/QueryUserRedEnvelopesV2?type=1&orgFlag=JD_PinGou_New&page=1&cashRedType=1&redBalanceFlag=1&channel=1&_="+Date.now()+"&sceneval=2&g_login_type=1&g_ty=ls",
        "headers": {
            'Host': 'm.jingxi.com',
            'Accept': '*/*',
            'Connection': 'keep-alive',
            'Accept-Language': 'zh-cn',
            'Referer': 'https://st.jingxi.com/my/redpacket.shtml?newPg=App&jxsid=16156262265849285961',
            //'Accept-Encoding': 'gzip, deflate, br',
            "Cookie": cookie,
            'User-Agent': USER_AGENT
        }
    }, function (error, response, header, body) {
        //sendText(JSON.stringify(body))
        if (!error) {
            data = JSON.parse(body).data;
            jxRed = 0,//京喜红包
            jsRed = 0,//京东极速版/京东特价
            jdRed = 0,//京东商场
            jdhRed = 0,//京东健康
            jdwxRed = 0,//购物小程序
            jdGeneralRed = 0,//通用红包
            jxRedExpire = 0,//京喜将过期红包
            jsRedExpire = 0,//京东极速版京东特价将过期红包
            jdRedExpire = 0,//京东商场红包
            jdhRedExpire = 0;//京东健康红包
            jdwxRedExpire = 0,//购物小程序红包
            jdGeneralRedExpire = 0//通用红包
            
            let t = new Date();
            t.setDate(t.getDate() + 1);
            t.setHours(0, 0, 0, 0);
            t = parseInt((t - 1) / 1000);
            //console.log(JSON.stringify(data.useRedInfo.redList))
            for (let vo of data.useRedInfo.redList || []) {
                if (vo.limitStr && vo.limitStr.includes("京喜")) {
                    jxRed += parseFloat(vo.balance)
                    if (vo['endTime'] === t) {
                        jxRedExpire += parseFloat(vo.balance)
                    }
                } else if (vo.limitStr.includes("购物小程序")) {
                    jdwxRed += parseFloat(vo.balance)
                    if (vo['endTime'] === t) {
                        jdwxRedExpire += parseFloat(vo.balance)
                    }
                } else if (vo.limitStr.includes("京东商城")) {
                    jdRed += parseFloat(vo.balance)
                    if (vo['endTime'] === t) {
                        jdRedExpire += parseFloat(vo.balance)
                    }
                } else if (vo.limitStr.includes("极速版") || vo.limitStr.includes("京东特价")) {
                    jsRed += parseFloat(vo.balance)
                    if (vo['endTime'] === t) {
                        jsRedExpire += parseFloat(vo.balance)
                    }
                } else if (vo.limitStr && vo.limitStr.includes("京东健康")) {
                    jdhRed += parseFloat(vo.balance)
                    if (vo['endTime'] === t) {
                        jdhRedExpire += parseFloat(vo.balance)
                    }
                } else {
                    jdGeneralRed += parseFloat(vo.balance)
                    if (vo['endTime'] === t) {
                        jdGeneralRedExpire += parseFloat(vo.balance)
                    }
                }
            }
            jxRed = jxRed.toFixed(2);//保留小数点
            jsRed = jsRed.toFixed(2);
            jdRed = jdRed.toFixed(2);						
            jdhRed = jdhRed.toFixed(2);
            jdwxRed = jdwxRed.toFixed(2);
            jdGeneralRed = jdGeneralRed.toFixed(2);
            balance = data.balance;
            //Debug(typeof(balance))
            expiredBalance = (jxRedExpire + jsRedExpire + jdRedExpire).toFixed(2);
           // Debug(jxRed,jsRed,jdRed,jdhRed,jdwxRed,jdGeneralRed,balance,expiredBalance)
            message = "【红包总额】"+balance+"(总过期"+expiredBalance+") \n";
            if (jxRed > 0)
                message += "【京喜红包】"+jxRed+"(将过期"+jxRedExpire.toFixed(2)+") \n";
            if (jsRed > 0)
                message += "【极速红包】"+jsRed+"(将过期"+jsRedExpire.toFixed(2)+") \n";
            if (jdRed > 0)
                message += "【京东红包】"+jdRed+"(将过期"+jdRedExpire.toFixed(2)+") \n";
            if (jdhRed > 0)
                message += "【健康红包】"+jdhRed+"(将过期"+jdhRedExpire.toFixed(2)+") \n";
            if (jdwxRed > 0)
                message += "【微信小程序】"+jdwxRed+"(将过期"+jdwxRedExpire.toFixed(2)+") \n";
            if (jdGeneralRed > 0)
                message += "【全平台通用】"+jdGeneralRed+"(将过期"+jdGeneralRedExpire.toFixed(2)+") \n";
            sendText(message)
        } else {
            sendText("京东服务器返回空数据")
        }
    })
}
