
//[cron: 30 8 * * *]

var content = image("https://api.qqsuu.cn/api/60s");

push({
    imType:"qq",//发送到指定渠道,如qq,wx,必须
    //userID:GetUserID(),//groupCode不为0时为@指定用户,可选
    groupCode:"948356041",//每日推送QQ群
    content:content,//发送消息
    })//给指定im发送消息
//sendText("当前群信息"+"\n发送人昵称:"+GetUsername()+"\n发送人微信号："+GetUserID()+"\n当前群号："+GetChatID())
push({
    imType:"wx",//发送到指定渠道,如qq,wx,必须
    groupCode:"8779271505",//每日推送微信群
    content:content,//发送消息
    })//给指定im发送消息
//sendText("当前群信息"+"\n发送人昵称:"+GetUsername()+"\n发送人微信号："+GetUserID()+"\n当前群号："+GetChatID())
