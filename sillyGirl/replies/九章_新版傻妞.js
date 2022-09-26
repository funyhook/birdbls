/**
 * @title 九章
 * @create_at 2022-09-26 09:39:02
 * @description 九章登陆获取ck 转发请留下原作者-微信公众号【玩机匠】！
 * @author 玩机匠
 * @platform qq wx tg pgm web
 * @rule jz ?
 * @rule 九章 ？
 * @version v1.0.0
 */

const s = sender 
const jz_host='http://api.st615.com/api/oauth'

var headers = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36",
    "content-type": "application/json"
};

const mobile = s.param(1);
getCode(mobile)
const code = input();
getJzttToken(mobile,code)
//九章登录
function getJzttToken(mobile,code) {
    const data = request({
        url: jz_host+"/login",
        "dataType": "json",
        "body": {
            mobile:mobile,
            code:code
        }
    });
    if (data && data.code == 0) {
        if (data.data.token.code) {
            s.reply("😂😂😂，获取token失败：" + data.data.token.msg)
        } else {
            s.reply("恭喜您，获取token成功！当前token为：" + data.data.token)
            s.reply("【玩机匠】提醒⏰：恭喜您，获取token成功！当前token为：")
            s.reply(data.data.token)
        }
    } else {
        s.reply(data.msg);

    }

}

//九章获取验证码  
function getCode(mobile) {
    s.reply("正在发送验证码:")
    const data = request({
        url: jz_host+"/message?mobile=" + mobile,
        "headers": headers,
        "method": "get",
        "dataType": "json"
    });
    s.reply(JSON.stringify(data))
    s.reply("验证码已发送，请注意查收！")
    s.reply("请输入验证码:")
}





