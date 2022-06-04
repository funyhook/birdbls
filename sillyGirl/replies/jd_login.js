// [rule: 登录 ?] 发送 登陆 13011099999
//修改端口号为你自己的MaiArk
let code = ""
let bool = ""
var phone = param(1)
function main() {
   RecallMessage(GetMessageID())
    // 启动提示语
    sendText("【玩机匠】为你服务【回复“q”、“Q”即可退出】。回复数字“1”，获取登录验证码");
    // 获取内容，超时时间单位毫秒
    num = input(60000);
	if(!num || num == "q" || num == "Q"){
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
			// 修改ip地址和端口其他不要改
			url: "http://127.0.0.1:7777/getsms?mobile=" + phone,
			"dataType": "json"
		})

    if (!result) {
        sendText(JSON.stringify(result));
        return;
    }

    // 判断状态
    if (result.code == 0) {
        sendText("获取验证码成功！")
        // 发送登录请求
        LoginJD(result);
    } else {
        sendText(result.msg)
        return;
    }
}

function LoginJD(result) {
	var gsalt = result.gsalt
	var guid = result.guid
	var lsid = result.lsid
	sendText("请输入短信验证码、“q”退出")
	code = input(60000);
	if(!code || code == "q" || code == "Q"){
	    sendText("已退出");
	    return;
	}
    // 发送请求
	var result = request({
			// 修改ip地址和端口其他不要改
			url: "http://127.0.0.1:7777/verify?mobile="+phone +"&gsalt=" + gsalt+"&guid="+guid+"&lsid="+lsid+"&smscode="+code,
			"dataType": "json"
		})

    if (!result) {
        sendText(JSON.stringify(result));
        return;
    }

    // result.ck 这里面是CK
    if (result.ck != undefined) {
        sendText("上车成功！请“关闭免密支付”并打开“支付验证”")
        sendText("如账号已经提醒过期请选择查看CK。1查看、2退出")
        bool = input(60000);
        if(bool == "1"){
            sendText(result.ck);
        }
        notifyMasters(`QQ：${GetUserID()} 更新京东CK`)
    }else {
        sendText(result.msg);
        return;
    }
}
main()
