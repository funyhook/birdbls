// [rule: dy ?] dy https://v.douyin.com/eo1gaGQ/
//抖音视频去水印解析
// by 微信公众号：【玩机匠】
function main() {
    var address = param(1) //匹配规则第一个问号的值
    var reg = 'https://v.douyin.com/'
    if (address.indexOf(reg) > -1) {
        var content = request({ // 内置http请求函数
            "url": "https://api.oick.cn/douyin/api.php?url=" + address, //请求链接
            "method": "get", //请求方法
            "dataType": "json", //这里接口直接返回文本，所以不需要指定json类型数据
        })
        if (content.play) {
            sendText(content.play)
        } else {
            sendText("【玩机匠】提醒：仅支持视频去水印哦！请在抖音app中点击分享-复制链接")
        }
    } else {
        sendText("【玩机匠】提醒：仅支持视频去水印哦！请在抖音app中点击分享-复制链接")
    }
}

main()
