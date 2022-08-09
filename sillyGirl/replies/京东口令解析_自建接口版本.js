//功能：京东口令解析_自建接口版本教程：https://github.com/funyhook/Docker/tree/main/official
//作者：微信公众号【玩机匠】！
//[rule: raw (https:\/\/\w+-isv.isvjcloud.com\/.*Activity\/activity.*activityId=\w+)&?]
//[rule: raw ((?:\d{2}:)?\/(?:\(|！|%|￥)\w{10,12}(?:\)|！|%|￥|\/){1,2})]
//[rule: raw  ([^"]+)="([^"]+)"]
//[rule: raw [$%￥@！(#!][a-zA-Z0-9]{6,20}[$%￥@！)#!]]
//[priority: 9999999]优先级
var api = bucketGet("jd_command", "api") // 对机器人发送指令 set jd_command api http://ip:port/jd/jKeyCommand?key=
var filters = [{
        'reg': RegExp(/https:\/\/cjhydz-isv.isvjcloud.com\/wxTeam\/activity/),
        'msg': "CJ组队瓜分变量】",
        'env': "jd_cjhy_activityId",
        'type': 'id'
    },
    {
        'reg': RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxTeam\/activity/),
        'msg': "【LZ组队瓜分变量】",
        'env': "jd_zdjr_activityId",
        'type': 'id'
    },
    {
        'reg': RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxShareActivity\/activity\/6432842/),
        'msg': "【LZ分享有礼变量】",
        'env': "jd_fxyl_activityId",
        'type': 'id'
    },
    {
        'reg': RegExp(/https:\/\/cjhydz-isv.isvjcloud.com\/microDz\/invite\/activity\/wx\/view\/index/),
        'msg': "【微定制瓜分变量】",
        'env': " jd_wdz_activityId",
        'type': 'id'
    },
    {
        'reg': RegExp(/https:\/\/lzkj-isv.isvjd.com\/wxCollectionActivity\/activity2/),
        'msg': "【M加购任务变量】",
        'env': " M_WX_ADD_CART_URL",
        'type': 'url'
    },
    {
        'reg': RegExp(/https:\/\/cjhy-isv.isvjcloud.com\/wxDrawActivity\/activity\/867591/),
        'msg': "【M转盘抽奖变量】",
        'env': " M_WX_LUCK_DRAW_URL",
        'type': 'url'
    },
    {
        'reg': RegExp(/cjwx\/common\/entry.html/),
        'msg': "【M转盘抽奖变量】",
        'env': " M_WX_LUCK_DRAW_URL",
        'type': 'url'
    },
    {
        'reg': RegExp(/https:\/\/lzkj-isv.isvjcloud.com\/wxgame\/activity/),
        'msg': "【通用游戏变量】",
        'env': " WXGAME_ACT_ID",
        'type': 'id'
    },
    {
        'reg': RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxShareActivity/),
        'msg': "【Kr分享有礼变量】",
        'env': " jd_fxyl_activityId",
        'type': 'id'
    },
    {
        'reg': RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxSecond/),
        'msg': "【读秒变量】",
        'env': " jd_wxSecond_activityId",
        'type': 'id'
    },
    {
        'reg': RegExp(/https:\/\/jinggengjcq-isv.isvjcloud.com/),
        'msg': "【大牌联合开卡变量】",
        'env': " DPLHTY",
        'type': 'id'
    },
    {
        'reg': RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxCartKoi\/cartkoi/),
        'msg': "【购物车鲤鱼变量】",
        'env': " jd_wxCartKoi_activityId",
        'type': 'id'
    },
    {
        'reg': RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxCollectCard/),
        'msg': "【集卡抽奖变量】",
        'env': " jd_wxCollectCard_activityId",
        'type': 'id'
    },
    {
        'reg': RegExp(/https:\/\/lzkj-isv.isvjd.com\/drawCenter/),
        'msg': "【LZ刮刮乐抽奖变量】",
        'env': " jd_drawCenter_activityId",
        'type': 'id'
    },
    {
        'reg': RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxFansInterActionActivity/),
        'msg': "【LZ粉丝互动变量】",
        'env': " jd_wxFansInterActionActivity_activityId",
        'type': 'id'
    },
    {
        'reg': RegExp(/https:\/\/prodev.m.jd.com\/mall\/active\/dVF7gQUVKyUcuSsVhuya5d2XD4F/),
        'msg': "【邀请好友赢大礼变量】",
        'env': " yhyauthorCode",
        'type': 'code'
    },
    {
        'reg': RegExp(/https:\/\/lzkj-isv.isvjcloud.com\/wxShopFollowActivity/),
        'msg': "【关注抽奖变量】",
        'env': " jd_wxShopFollowActivity_activityId",
        "type": 'id'
    },
    {
        'reg': RegExp(/https:\/\/lzkjdz-isv.isvjcloud.com\/wxUnPackingActivity/),
        'msg': "【让福袋飞通用活动变量】",
        'env': " jd_wxUnPackingActivity_activityId",
        "type": 'id'
    }
];
var headers = {
    "User-Agent": "Mozilla/5.0 (Linux; U; Android 11; zh-cn; KB2000 Build/RP1A.201005.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 HeyTapBrowser/40.7.19.3 uuid/cddaa248eaf1933ddbe92e9bf4d72cb3",
    "Content-Type": "application/json;charset=utf-8",
};
var reg = RegExp(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/);

function GetRequest(urlStr) {
    if (typeof urlStr == "undefined") {
        // 获取url中"?"符后的字符串
        var url = decodeURI(location.search);
    } else {
        url = "?" + urlStr.split("?")[1];
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
    var jcode = GetContent();
    if (reg.exec(jcode)) {
        var urlStr = jcode.match(reg)[0];
        var title = "京东活动";
        var Name = GetUsername();
        var Img = "https://c2cpicdw.qpic.cn/offpic_new/56794501//56794501-1551249874-8DA68415682CE9508B9FEED6FA49DFA1/0?term=255";
    } else {
        if (!api) {
            if (IsAdmin()) {
                sendText("未配置api ，请给机器人发送命令“set jd_decode api http://ip:port/jd/jKeyCommand")
            } else {
                sendText("服务为开启，请联系管理员开启！")
            }
            return;
        }
        var result = request({
            url: encodeURI(api + "?key=" + jcode),
            headers: headers,
            method: "post",
            dataType: "json",
        });
        if (result.code == "200") {
            urlStr = result.data.jumpUrl;
            title = result.data.title;
            Name = result.data.userName;
            Img = result.data.img;
        }else{
            sendText("【玩机匠】提醒：暂无接口请求权限："+JSON.stringify(result))
        }
    }
    sendText("正在解析请稍候……");
    var prefix = urlStr.includes("cjhydz") ? "cjhydz" : "lzkjdz";
    var activateId = urlStr.replace(/.*\?activityId\=([^\&]*)\&?.*/g, "$1")
    var code = urlStr.replace(/.*\?code\=([^\&]*)\&?.*/g, "$1");
    var conmand =false;
    for (var i = 0; i < filters.length; i++) {
        let filter = filters[i];
        if (filter.reg.exec(urlStr)) {
            conmand=true
            switch (filter.type) {
                case 'id':
                    filter.env = 'export '+filter.env+'="' + activateId+'"';
                    break;
                case 'url':
                    filter.env =  'export '+filter.env+'="' + urlStr+'"';
                    break;
                case 'code':
                    filter.env = 'export '+filter.env+'="' + code+'"';
                    break;
            }
            var content = "【发  起  人】：" + result.data.userName + "\n \n【活动名称】：" + result.data.title + "\n \n【活动地址】："+result.data.jumpUrl + "\n \n 洞察变量-" + filter.msg + "\n " + filter.env
            sendText(content)
            break;
        }
    }
    if (!conmand) {
        sendText("【发  起  人】：" + result.data.userName + "\n \n【活动名称】：" + result.data.title + "\n \n【活动地址】："+result.data.jumpUrl+"\n \n洞察变量-无")
        
    }
}
main()
