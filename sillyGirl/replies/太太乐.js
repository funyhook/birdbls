//[rule: ttl ? ? ?] ttl 手机号 密码 兑换商品ID
//微信公众号【玩机匠】 回复ttl 获取最新ttl插件
let chatId = GetChatID()
let userId = GetUserID()

//青龙配置
let client_id = bucketGet("qinglong", "client_id")
let client_secret = bucketGet("qinglong", "client_secret")
let host = bucketGet("qinglong", "host")

const headers = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36",
    "content-type": "application/json"
};

function getQLToken() {
    const data = request({
        "url": host + "/open/auth/token?client_id=" + client_id + "&client_secret=" + client_secret,
        "method": "get",
        "dataType": "json"
    });
    if (data && data.code == 200) {
        return (data.data.token_type + " " + data.data.token);
    } else {
        sendText("【玩机匠】提醒：青龙暂时无法访问，请检查配置！")
    }

}

function getAndSetEnvs(newToken, key) {
    let body;
    const envs = [];
    headers.authorization = getQLToken()
    const data = request({
        "url": host + "/open/envs?searchValue=" + key,
        "headers": headers,
        "method": "get",
        "dataType": "json"

    });
    if (data && data.code == 200) {
        if (data.data.length) {
            sendText("已存在环境变量【" + key + "】，将把最新token追加末尾！")
            envs.push(newToken)
            data.data.forEach(o => envs.push(o.value))
            const ttlhd = envs.join("@");
            sendText("太太乐全部token：" + ttlhd)
            body = {
                name: "ttlhd",
                value: ttlhd,
                remarks: "token",
                _id: data.data[0]._id
            };
            setEnvs("put", body)
        } else {
            body = [
                {
                    name: "ttlhd",
                    value: newToken,
                    remarks: "token"
                }
            ];
            setEnvs("post", body)
        }

    }
    return envs
}

function setEnvs(method, envs) {
    headers.Authorization = getQLToken()
    const data = request({
        "url": host + "/open/envs",
        "headers": headers,
        "method": method,
        "dataType": "json",
        "body": envs

    });
    if (data && data.code == 200) {
        sendText("【玩机匠】提醒⏰：太太乐token提交成功！")
    } else {
        sendText(JSON.stringify(data))
    }
}


function getTTLToken(mobile, password) {
    const data = request({
        url: 'https://www.ttljf.com/ttl_chefHub/login/restaurant',
        method: 'post',
        body: {
            "mthd": "login",
            "platform": "wx_mini",
            "userName": mobile,
            "password": password

        },
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Connection": "keep-alive",
            "User-Agent": "otole/1.4.8 (iPhone; iOS 13.5; Scale/2.00)",
            "Host": "www.ttljf.com"
        },
        dataType: "json"
    });
    if (data && data.code == 0) {
        return data.data.token
    } else {
        sendText(JSON.stringify(data))
    }

}

function main() {
    if (chatId != "0") {
        sendText("【玩机匠】提醒：为保护您的隐私，请私聊机器人回复指令！")
    } else {
        const mobile = param(1);
        const password = param(2);
        const goodId = param(3);
        const account = mobile+"#"+password+"#"+goodId;
        const token = getTTLToken(mobile, password);
        if (token) {
            sendText("【玩机匠】提醒⏰：恭喜您，获取token成功！当前token为：")
            sendText(token)
            getAndSetEnvs(token, "ttlhd");
            getAndSetEnvs(account, "ttl_account");
        } else {
            sendText("【玩机匠】提醒：获取失败，请重试！" + token)
        }

    }
}

main()





