//[rule: jz ?]  jz 13011066666
//[rule: 九章 ?] 九章 13011066666
//转发请留下原作者-微信公众号【玩机匠】！
let chatId = GetChatID()
let userId = GetUserID()

//青龙配置
let client_id = bucketGet("qinglong", "client_id")
let client_secret = bucketGet("qinglong", "client_secret")
let host = bucketGet("qinglong", "host")

var headers = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36",
    "content-type": "application/json"
};

function getQLToken() {
    var data = request({
        "url": host + "/open/auth/token?client_id=" + client_id + "&client_secret=" + client_secret,
        "method": "get",
        "dataType": "json"
    })
    if (data && data.code == 200) {
        return (data.data.token_type + " " + data.data.token);
    } else {
        sendText("青龙暂时无法访问，请检查配置！")
    }

}

function getEnvs(key) {
    headers.authorization = getQLToken()
    sendText(token)
    var envs = []
    var data = request({
        "url": host + "/open/envs?searchValue=" + key,
        "headers": headers,
        "method": "get",
        "dataType": "json"

    })
    if (data && data.code == 200) {
        if (data.data) {
            for (var i = 0; i < data.data.length; i++) {
                envs.push(data.data[i].value)
            }
            sendText("已存在环境变量【" + key + "】，将把最新token追加末尾！")
        }
    }
    return envs
}

function setEnvs(envs) {
    headers.Authorization = getQLToken()
    var data = request({
        "url": qlUrl + "/open/envs",
        "headers": headers,
        "method": "post",
        "dataType": "json",
        "body": envs

    })
    if (data && data.code == 200) {
        sendText("九章账户【" + mobile + "】token提交成功，坐等0.3/日")
    }
}


//九章获取验证码
function getCode(mobile) {
    sendText("正在发送验证码:")
    request({
        url: 'https://api.st615.com/api/oauth/message?mobile=' + mobile,
        method: 'GET',
        dataType: 'json',
        headers: headers
    }, function (err, resp, data) {
        if (!err && resp.statusCode == 200) {
            if (data.code == 0) {
                sendText("验证码已发送，请注意查收！")
                sendText("请输入验证码:")
            } else {
                sendText(data.msg)
            }
        } else {
            sendText("网络请求失败：" + JSON.stringify(resp))
        }
    });
}

//九章登录
function login(body) {
    var data = request({
        url: "https://api.st615.com/api/oauth/login",
        "dataType": "json",
        "body": body
    })
    if (data && data.code == 0) {
        if (data.data.token.code) {
            sendText("😂😂😂，获取token失败：" + data.data.token.msg)
        } else {
            return data.data.token
        }
    } else {
        sendText(data.msg);

    }

}

function submitJzttToken(token, envs) {
    var body = [
        {
            name: "jzttToken",
            value: envs,
            remarks: "九章token"
        }
    ]
    setEnvs(body)
}

if (chatId != "0") {
    sendText("【玩机匠】提醒：为保护您的隐私，请私聊机器人回复指令！")
} else {
    var mobile = param(1)

    getCode(mobile)

    var code = input()

    var token = login("mobile=" + mobile + "&code=" + code)

    if (token) {
        sendText("【玩机匠】提醒：恭喜您，获取token成功！当前token为：" + token)
        var envs = getEnvs("jzttToken");
        envs.push(token)
        var envStr = envs.join("@")
        submitJzttToken(envStr)
    } else {
        sendText("【玩机匠】提醒：获取失败，请重试！" + token)
    }

}  










