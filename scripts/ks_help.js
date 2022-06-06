/*
下载 https://scanzrai0.ktweabac.com/f/X-5pEEaok7RT183?layoutType=4


快脚周周赚助力
变量为
export ksjsbCookie='kuaishou.api_st=XXXX'
多账号@隔开ksjsbCookie='kuaishou.api_st=XXXX'@'kuaishou.api_st=XXXX'
定时0 0 * * *
*/

const $ = new Env('快脚周周赚助力');
var request = require("request");
let status;
status = (status = ($.getval("hfhxstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let ksjsbCookieArr = [], hfhxcount = ''
const notify = $.isNode() ? require('./sendNotify') : '';
let ksjsbCookie = $.isNode() ? (process.env.ksjsbCookie ? process.env.ksjsbCookie : "") : ($.getdata('ksjsbCookie') ? $.getdata('ksjsbCookie') : "")
let allMessage = '';
let ksjsbCookies = ""
let insertCodes = []
let inviteCodes = []
const logs = 0;
const host = 'https://nebula.kuaishou.com/'
var hours = new Date().getHours();
var s = new Date().getMinutes();

var timestamp = Math.round(new Date().getTime() / 1000).toString();
!(async () => {
    if (typeof $request !== "undefined") {

    } else {
        if (!$.isNode()) {
            ksjsbCookieArr.push($.getdata('ksjsbCookie'))
            let hfhxcount = ($.getval('hfhxcount') || '1');
            for (let i = 2; i <= hfhxcount; i++) {
                ksjsbCookieArr.push($.getdata(`ksjsbCookie${i}`))
            }
            console.log(`------------- 共${ksjsbCookieArr.length}个账号-------------\n`)
            for (let i = 0; i < ksjsbCookieArr.length; i++) {
                if (ksjsbCookieArr[i]) {
                    ksjsbCookie = ksjsbCookieArr[i];
                    $.index = i + 1;

                }
            }
        } else {
            if (process.env.ksjsbCookie && process.env.ksjsbCookie.indexOf('@') > -1) {
                ksjsbCookieArr = process.env.ksjsbCookie.split('@');
                console.log(`您选择的是用"@"隔开\n`)
            } else {
                ksjsbCookies = [process.env.ksjsbCookie]
            };
            Object.keys(ksjsbCookies).forEach((item) => {
                if (ksjsbCookies[item]) {
                    ksjsbCookieArr.push(ksjsbCookies[item])
                }
            })
            console.log(`共${ksjsbCookieArr.length}个cookie`)
            for (let k = 0; k < ksjsbCookieArr.length; k++) {
                $.message = ""
                ksjsbCookie = ksjsbCookieArr[k]
                $.index = k + 1;
                //if ($.index === 2 && 3) break
                await encourage(k+1)



            }


        }
    }
    console.log('\n##################开始全部助力账号1#################\n');
    for (let i = 0; i < ksjsbCookieArr.length; i++) {
        cookie = ksjsbCookieArr[i];
        $.index = i + 1;
        if (!cookie) continue
        for (let code of inviteCodes) {
            //if ($.index >) break
            let res = await help(code['user'],code['assistanceId'])
        }

    }
    if ($.isNode() && allMessage) {
        await notify.sendNotify(`${$.name}`, `${allMessage}`)
    }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())



function encourage(index) {
    return new Promise((resolve) => {
        $.get(ksGet(`rest/zt/encourage/assistance/detail?assistanceMetaId=2`), async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                }
                if (safeGet(data)) {
                    data = JSON.parse(data);
                    if (data.result == 1) {
                        console.log('账号：【'+index+'】'+data.assistanceInfo.createNickName+'=>邀请码：' + data.assistanceInfo.assistanceId+'\n')
                        if (data.assistanceInfo && data.assistanceInfo.assistanceId ) {
                            inviteCodes.push({
                                user: data.assistanceInfo.createNickName,
                                assistanceId: data.assistanceInfo.assistanceId,
                            });
                        }
                    }
                    else if (data.result !== 1) {
                        console.log(data.message)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}
function help(user,a) {
    return new Promise((resolve) => {
        $.post(ksPost(`rest/zt/encourage/assistance/friendAssist`, `{"assistanceId":"${a}"}`), async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                }// else {
                if (safeGet(data)) {
                    data = JSON.parse(data);
                    if (data.result == 1) {
                        console.log(data.msg)
                    }
                    else if (data.result !== 1) {
                        console.log(`\n去助力【${user}】=>:`+data.msg);
                    }
                }

            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}
function ksPost(a, body) {
    return {

        url: `${host}${a}`,
        body: `${body}`,
        headers: {
            'Connection': 'Keep-Alive',
            'Content-Type': 'application/json;; Charset=UTF-8',
            'Accept': '*/*',
            'Accept-Language': 'zh-cn',
            'Cookie': 'kpn=NEBULA;' + ksjsbCookie,
            'Referer': 'https://nebula.kuaishou.com/rest/zt/encourage/assistance/friendAssist',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 7.1.2; MI 9 Build/N2G47O; wv) AppleWebKit/707.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3913.70 Mobile Safari/537.36 Yoda/2.7.8-rc1 ksNebula/10.2.41.5857 OS_PRO_BIT/32 MAX_PHY_MEM/3479 AZPREFIX/zw ICFO/0 StatusHT/24 TitleHT/44 NetType/WIFI ISLP/1 ISDM/0 ISLB/0 locale/zh-cn evaSupported/false CT/0;',
            'Host': 'nebula.kuaishou.com',

        }
    }
}
function ksGet(a) {
    return {
        url: `${host}${a}`,
        headers: {


            'Connection': 'Keep-Alive',
            'Content-Type': 'application/json;; Charset=UTF-8',
            'Accept': '*/*',
            'Accept-Language': 'zh-cn',
            'Cookie': 'kpn=NEBULA;' + ksjsbCookie,
            'Referer': 'https://nebula.kuaishou.com/rest/zt/encourage/assistance/friendAssist',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 7.1.2; MI 9 Build/N2G47O; wv) AppleWebKit/707.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3913.70 Mobile Safari/537.36 Yoda/2.7.8-rc1 ksNebula/10.2.41.5857 OS_PRO_BIT/32 MAX_PHY_MEM/3479 AZPREFIX/zw ICFO/0 StatusHT/24 TitleHT/44 NetType/WIFI ISLP/1 ISDM/0 ISLB/0 locale/zh-cn evaSupported/false CT/0;',
            'Host': 'nebula.kuaishou.com',

        }
    }
}
function safeGet(data) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        }
    } catch (e) {
        console.log(e);
        console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
}
function jsonParse(str) {
    if (typeof str == "string") {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log(e);
            $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
            return [];
        }
    }
}

function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
