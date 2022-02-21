//插件功能:消息监控,自定义ban人,按时间禁用功能
//[rule: ?] 匹配所有消息
//[priority: 99999] 超高的优先级

let config = {
    log: false,
    ban: {
        enable: false,
        //默认禁言时间,单位秒,最少1分钟
        banTime: 60,
        //默认禁言是否通知
        banNotify: false,
        //默认踢人是否通知
        kickNotify: true,
        //禁言/踢人规则
        banText: {
            "这里输入需要匹配的词1": {
                //是否踢出群,默认不踢
                kick: true,
                //踢出时是否拉黑名单
                reject: true,
                //踢出时是否通知傻妞的管理
                kickNotify: true,
                //包含的类型
                imType: ["qq"],
                //回复
                reply: "恭喜获取永久飞机票一张"
            },
            "这里输入需要匹配的词2": {
                //禁言一小时
                banTime: 3600,
                //ban是否通知傻妞的管理
                banNotify: true,
                reply: "恭喜获取一小时禁言套餐"
            },
            //使用默认配置
            "这里输入需要匹配的词3": {},
            //使用正则匹配,使用默认配置
            "/这里输入需要匹配的正则表达式1/": {},
            //使用正则匹配,使用默认配置
            "/这里输入需要匹配的正则表达式2/": {},
        }
    },
    //分时段禁用
    timeDisable: {
        enable: true,
        //规则:
        //从00:00:00点开始匹配,23:59:59结束
        //当匹配成功后取最后成功匹配的规则
        times: [{
            time: "01:00:00",
            //启用
            enable: true,
            //是否允许私聊
            // privateChat: true,
            //是否允许群聊
            // groupChat: true,
            //匹配特定的条件,允许正则
            // text: ["查询"],
            //匹配特定的im
            imType: ["qq"],
            //回复,选填
            reply: "当前时间点不允许这么操作",
        }, {
            time: "09:00:00",
            enable: false
        }]
    },
}

let now = new Date()
let nowString = new Date().toLocaleString()

function main() {
    if (
        doLog() &&
        ban() &&
        timeDisable()
    ) {
        Continue()
    }
}

//记录日志
function doLog() {
    if (config.log) {
        console.log(`${nowString},${GetUsername()}(${GetUserID()})在${ImType()}:${GetChatname()}:${GetChatID()}发送消息:${GetContent()}`)
    }
    return true
}

//禁言
function ban() {
    if (config.ban.enable) {
        let banText = config.ban.banText
        for (let text in banText) {
            let conf = banText[text]
            if (conf.imType && conf.imType.length > 0 && !conf.imType.includes(ImType())) {
                continue
            }
            if (match(GetContent(), text)) {
                let kick = conf.kick
                let notify = kick ?
                    (conf.kickNotify || config.ban.kickNotify) :
                    (conf.banNotify || config.ban.banNotify);
                //是否在群里,不在群里只判断通知逻辑
                if (GetChatID()) {
                    if (kick) {
                        GroupKick(GetUserID(), !!conf.reject)
                    } else {
                        GroupBan(GetUserID(), conf.banTime || config.ban.banTime)
                    }
                    if (conf.reply) {
                        send(conf.reply)
                    }
                }
                if (notify) {
                    notifyMasters(`${nowString}在${ImType()}因为${GetContent()}${kick?"踢出":("禁言"+(conf.banTime||defaultBanTime)+"秒")}:${GetUsername()}(${GetUserID()}),在群:${GetChatname()}:${GetChatID()}`)
                }
                return false
            }
        }
    }
    return true
}
//按时间禁用功能
function timeDisable() {
    if (config.timeDisable.enable) {
        let times = config.timeDisable.times
        let last = {
            enable: false
        }
        for (let t of times) {
            let testDate = new Date("2000-01-01 " + t.time)
            if (
                now.getHours() >= testDate.getHours() &&
                now.getMinutes() >= testDate.getMinutes() &&
                now.getSeconds() >= testDate.getSeconds()
            ) {
                last = t
            } else {
                break
            }
        }
        if (last.enable) {
            if (last.imType && last.imType.length > 0) {
                if (!last.imType.includes(ImType())) {
                    return true
                }
            }
            if (last.text && last.text.length > 0) {
                let match = false
                for (let t of last.text) {
                    if (match(GetContent(), t)) {
                        match = true
                        break
                    }
                }
                if (!match) {
                    return true
                }
            }
            if (GetChatID()) {
                if (last.groupChat) {
                    return true
                }
            } else {
                if (last.privateChat) {
                    return true
                }
            }
            if (last.reply) {
                sendText(last.reply)
            }
            return false
        }
    }
    return true
}

function match(rule, text) {
    if (text.startsWith("/") && text.endsWith("/")) {
        return new RegExp(rule.substring(1, rule.length - 1)).test(text)
    } else {
        return text.includes(rule)
    }
}

main()