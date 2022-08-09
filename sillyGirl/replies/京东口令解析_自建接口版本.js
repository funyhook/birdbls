//功能：京东口令解析
//作者：微信公众号【玩机匠】！
//[rule: raw (https:\/\/\w+-isv.isvjcloud.com\/.*Activity\/activity.*activityId=\w+)&?]
//[rule: raw ((?:\d{2}:)?\/(?:\(|！|%|￥)\w{10,12}(?:\)|！|%|￥|\/){1,2})]
//[rule: raw export ([^"]+)="([^"]+)"]
//[rule: raw [$%￥@！(#!][a-zA-Z0-9]{6,20}[$%￥@！)#!]]
let api = bucketGet("jd_command", "api") // 对机器人发送指令 set jd_command api http://ip:port/jd/jKeyCommand?key=
let content = "命令不在脚本范围中！！"
let command = false;
let filters =[
    {
        'reg':RegExp(/https:\/\/cjhydz-isv.isvjcloud.com\/wxTeam\/activity/),
        'msg':"CJ组队瓜分变量】",
        'expo':"export jd_cjhy_activityId=",
        'type':'id'
    },
    {
        'reg':RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxTeam\/activity/),
        'msg':"【LZ组队瓜分变量】",
        'expo':"export jd_zdjr_activityId=",
        'type':'id'
    },
    {
        'reg':RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxShareActivity\/activity\/6432842/),
        'msg':"【LZ分享有礼变量】",
        'expo':"export jd_fxyl_activityId=",
        'type':'id'
    },
    {
        'reg':RegExp(/https:\/\/cjhydz-isv.isvjcloud.com\/microDz\/invite\/activity\/wx\/view\/index/),
        'msg':"【微定制瓜分变量】",
        'expo':"export jd_wdz_activityId=",
        'type':'id'
    },
    {
        'reg':RegExp(/https:\/\/lzkj-isv.isvjd.com\/wxCollectionActivity\/activity2/),
        'msg':"【M加购任务变量】",
        'expo':"export M_WX_ADD_CART_URL=",
        'type':'url'
    },
    {
        'reg':RegExp(/https:\/\/cjhy-isv.isvjcloud.com\/wxDrawActivity\/activity\/867591/),
        'msg':"【M转盘抽奖变量】",
        'expo':"export M_WX_LUCK_DRAW_URL=",
        'type':'url'
    },
    {
        'reg':RegExp(/cjwx\/common\/entry.html/),
        'msg':"【M转盘抽奖变量】",
        'expo':"export M_WX_LUCK_DRAW_URL=",
        'type':'url'
    },
    {
        'reg':RegExp(/https:\/\/lzkj-isv.isvjcloud.com\/wxgame\/activity/),
        'msg':"【通用游戏变量】",
        'expo':"export WXGAME_ACT_ID=",
        'type':'id'
    },
    {
        'reg':RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxShareActivity/),
        'msg':"【Kr分享有礼变量】",
        'expo':"export jd_fxyl_activityId=",
        'type':'id'
    },
    {
        'reg':RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxSecond/),
        'msg':"【读秒变量】",
        'expo':"export jd_wxSecond_activityId=",
        'type':'id'
    },
    {
        'reg':RegExp(/https:\/\/jinggengjcq-isv.isvjcloud.com/),
        'msg':"【大牌联合开卡变量】",
        'expo':"export DPLHTY=",
        'type':'id'
    },
    {
        'reg':RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxCartKoi\/cartkoi/),
        'msg':"【购物车鲤鱼变量】",
        'expo':"export jd_wxCartKoi_activityId=",
        'type':'id'
    },
    {
        'reg':RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxCollectCard/),
        'msg':"【集卡抽奖变量】",
        'expo':"export jd_wxCollectCard_activityId=",
        'type':'id'
    },
    {
        'reg':RegExp(/https:\/\/lzkj-isv.isvjd.com\/drawCenter/),
        'msg':"【LZ刮刮乐抽奖变量】",
        'expo':"export jd_drawCenter_activityId=",
        'type':'id'
    },
    {
        'reg':RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxFansInterActionActivity/),
        'msg':"【LZ粉丝互动变量】",
        'expo':"export jd_wxFansInterActionActivity_activityId=",
        'type':'id'
    },
    {
        'reg':RegExp(/https:\/\/prodev.m.jd.com\/mall\/active\/dVF7gQUVKyUcuSsVhuya5d2XD4F/),
        'msg':"【邀请好友赢大礼变量】",
        'expo':"export yhyauthorCode=",
        'type':'code'
    },
    {
        'reg':RegExp(/https:\/\/lzkj-isv.isvjcloud.com\/wxShopFollowActivity/),
        'msg':"【关注抽奖变量】",
        'expo':"export jd_wxShopFollowActivity_activityId=",
        "type":'id'
    },
    {
        'reg':RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxUnPackingActivity/),
        'msg':"【让福袋飞通用活动变量】",
        'expo':"export jd_wxUnPackingActivity_activityId=",
        "type":'id'
    }
];
function GetRequest(urlStr) {
    if (typeof urlStr == "undefined") {
        // 获取url中"?"符后的字符串
        var url = decodeURI(location.search);
    } else {
        var url = "?" + urlStr.split("?")[1];
    }
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(
            strs[i].split("=")[1]);
        }
    }
    return theRequest;
}


function main() {

    if (!api) {
        if (IsAdmin()) {
            sendText("未配置api ，请给机器人发送命令“set jd_decode api http://ip:port/jd/jKeyCommand")
        } else {
            sendText("服务为开启，请联系管理员开启！")
        }
        return;
    }
    sendText("正在解析请稍候……");
    request({
        url: encodeURI(api + "?key=" + GetContent()),
        method: 'POST',
        dataType: 'json',
        headers: {
            "content-type": "application/json",
        },
    }, function(err, resp, data) {
        if (err) {
            sendText("【玩机匠】提醒：服务异常：："+JSON.stringify(err))
            return
        }
        if (resp.statusCode == 200 && data) {
            var prefix = data.data.jumpUrl.includes("cjhydz") ? "cjhydz" : "lzkjdz";
            var activateId = data.data.jumpUrl.replace(/.*\?activityId\=([^\&]*)\&?.*/g, "$1")
            var Code = data.data.jumpUrl.replace(/.*\?code\=([^\&]*)\&?.*/g, "$1");
            var urlStr = data.data.jumpUrl;
            for (var i = 0; i < filters.length; i++) {
                let filter = filters[i];
                if(filter.reg.exec(urlStr)){
                    switch (filter.type) {
                        case 'id':
                            filter.expo = filter.expo+activateId;
                            break;
                        case 'url':
                            filter.expo = filter.expo+urlStr;
                            break;
                        case 'code':
                            filter.expo = filter.expo+code;
                            break;
                    }
                    var content2 = "【发  起  人】：" + data.data.userName + "\n \n【活动名称】：" + data.data.title + "\n \n【活动地址】：" + data.data.jumpUrl + "\n \n洞察变量-" + filter.msg + "\n " + filter.expo
                    sendText(content2)

                }
            }                   
        } else{ 
            sendText("【玩机匠】提醒：服务异常：："+JSON.stringify(resp))
        }
    });
}
main()
