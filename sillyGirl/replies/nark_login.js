// [rule: 登录] 
// [rule: 登陆] 
let code = ""
let phone = ""
//你的nark地址（域名或http://ip:端口号）
let nark_host="http://ip:port"
let headers = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36",
    "content-type": "application/json"
};
function main() {
   RecallMessage(GetMessageID())
    // 启动提示语
    sendText("【玩机匠JD车】为你服务【回复“q”、“Q”即可退出】。请输入手机号，获取登录验证码");
    // 获取内容，超时时间单位毫秒
    phone = input(60000);
	if(!phone || phone == "q" || phone == "Q"){
		sendText("已退出")
		return;
	}else{
        sendText("正在获取登录验证码,请耐心等待...");
        getSMSCode(phone);
	}
}

function getSMSCode(phone) {
    // 发送请求
	var result = request({
        "url": nark_host+'/api/SendSMS',
        "headers": headers,
        "method": "POST",
        "dataType": "json",
        "body": {
            "phone":phone,
            "qlkey":2
        }
    });
    // 判断状态
    if (result.success == true) {
        sendText("获取验证码成功！")
        // 发送登录请求
        LoginJD();
    } else {
        sendText(JSON.stringify(result));
        return;
    }
}

function LoginJD() {
	sendText("请输入短信验证码、“q”退出")
	code = input(60000);
	if(!code || code == "q" || code == "Q"){
	    sendText("已退出");
	    return;
	}
    // 发送请求
	var result = request({
        "url": nark_host+"/api/VerifyCode",
        "headers": headers,
        "method": "POST",
        "dataType": "json",
        "body": {
            "Phone": phone, 
            "QQ": GetUserID(), 
            "qlkey": 2, 
            "Code": code
        }
    });
    if (result.success==true) {
        sendText("上车成功！请“关闭免密支付”并打开“支付验证”")
        notifyMasters(`QQ：${GetUserID()} 更新京东CK`)
    }else {
        sendText(JSON.stringify(result));
        return;
    }
}
main()
