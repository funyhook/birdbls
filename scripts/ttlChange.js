/*
太太乐兑换
export ttlhd='手机号1#密码1@手机号2#密码2' #多账号使用@分割
export  ttldh =‘61’ # 太太乐兑换商品id：633=10元手机话费（仅电信用户） 631=30元手机话费（仅移动用户） 62=5元手机话费（仅联通用户） 61=2元手机话费（仅联通用户）
*/


const $ = new Env('太太乐兑换');
let message;
const notify = $.isNode() ? require('./sendNotify') : '';
//
let giftAmount, giftNames, giftPrice, date;
let ttlhd = $.isNode() ? (process.env.ttlhd ? process.env.ttlhd : "") : ($.getdata('ttlhd') ? $.getdata('ttlhd') : "");
const ttldh = $.isNode() ? (process.env.ttldh ? process.env.ttldh : "") : ($.getdata('ttldh') ? $.getdata('ttldh') : "");

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

!(async () => {
    message = '';
    giftAmount = {};
    giftNames = {};
    giftPrice = {};
    await ttl_gift();
    date = (new Date()).Format("yyyyMMdd");
    ttldhArr = ttldh.split('@');
    console.log(`========共${ttldhArr.length}个兑换账号========\n`);
    ttlhdArr = ttlhd.split('@');
    console.log(`共${ttlhdArr.length}个cookie`);
    for (let k = 0; k < ttldhArr.length; k++) {
        user_pwd = ttlhdArr[k].split('#');
        user = user_pwd[0];
        pwd = user_pwd[1];
        giftId = ttldhArr[k];
        stockAmount = giftAmount[giftId];
        stockName = giftNames[giftId];
        stockPrice = giftPrice[giftId];
        if (stockAmount === 0) {
            console.log(`第 ${k + 1} 个账号 ${user} 要兑换的商品: ${stockName} 商品库存 ${stockAmount}，取消兑换`);
            continue;
        }
        console.log(`第 ${k + 1} 个账号 ${user} 要兑换的商品: ${stockName} 商品库存: ${stockAmount}，进行兑换`);

        // 获取缓存的积分
        $.integral = $.getdata(`${date}_${user}`)
        if (typeof $.integral === 'undefined')
            // 登录app
            await ttl_login();
        if ($.integral - stockPrice < 0) {
            console.log(`账号 ${user} 积分不足以兑换，取消兑换`);
            message += `\n【兑换商品】 ${stockName} \n【兑换结果】 积分不足以兑换`;
            continue;
        }
        // 兑换
        await ttl_dh();
        // 兑换完减少积分
        $.setdata($.integral - stockPrice, `${date}_${user}`);
        $.msg($.name, ``, `\n${message}`)
        if ($.isNode()) await notify.sendNotify($.name, `${message}`);
    }


})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done());


async function ttl_gift() {
    return new Promise((resolve) => {

        let param = {
            url: `http://www.ttljf.com/ttl_site/giftApi.do?mthd=searchGift&giftCategoryId=7&pageNo=1&pageSize=8`,
            headers: {
                'User-Agent': 'okhttp/3.6.0',
            }
        };
        $.get(param, async (error, response, data) => {
            try {
                const result = JSON.parse(data);
                const gifts = result.gifts;
                let msg = '';
                for (let gift of gifts) {
                    const stockAmount = parseInt(gift.stockAmount);
                    const giftName = gift.giftName;
                    const giftId = gift.giftId;
                    const price = parseInt(gift.price);
                    msg += `${giftName} id: ${giftId}, 库存: ${stockAmount}, 积分:　${price}\n`;
                    giftAmount[giftId] = stockAmount;
                    giftNames[giftId] = giftName;
                    giftPrice[giftId] = price;
                }
                $.log(`${msg}`);
            } catch (e) {
                $.logErr(e, response);
            } finally {
                resolve();
            }
        })
    })
}

async function ttl_login() {
    url = `http://www.ttljf.com/ttl_site/user.do`;
    body = `mthd=login&username=${user}&password=${pwd}&platform=android`;
    let config = {
        url: url,
        body: body,
        headers: {
            'Host': 'www.ttljf.com',
            'Connection': 'Keep-Alive',
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'gzip',
            'Content-Length': body.length,
            'User-Agent': 'okhttp/3.6.0'
        }
    };
    //console.log(config)
    return new Promise((resolve) => {
        $.post(config, function (error, response, body) {
            try {
                if (error) {
                    console.log(`${JSON.stringify(error)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                }
                data = JSON.parse(body);
                if (data.code === '0000') {
                    $.token = data.user.loginToken;
                    $.setdata('ttlToken', $.token)
                    $.userId = data.user.userId;
                    $.userName = data.user.userName;
                    $.integral = data.user.integral;
                    console.log(`token：${$.token} 积分：${$.integral}`);
                    $.setdata($.integral, `${date}_${user}`);
                    console.log(`设置当天积分缓存成功!`);
                }
                console.log('登录信息 ' + data.message);
                message += `\n【账号】 ${$.userName}(${data.user.mobile}) \n【登录信息】 ${data.message} \n【积分】 ${$.integral}`;
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        });
    })
}

async function ttl_dh() {
    url = `http://www.ttljf.com/ttl_site/chargeApi.do`;
    body = `method=charge&userId=${$.userId}&loginToken=${$.token}&mobile=${user}&giftId=${giftId}`;
    let config = {
        url: url,
        body: body,
        headers: {
            'Host': 'www.ttljf.com',
            'Connection': 'Keep-Alive',
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'gzip',
            'Content-Length': body.length,
            'User-Agent': 'okhttp/3.6.0'
        }
    };
    return new Promise((resolve) => {
        $.post(config, function (error, response, body) {
            try {
                if (error) {
                    console.log(`${JSON.stringify(error)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                }
                data = JSON.parse(body);
                console.log(`兑换商品 ${stockName} 兑换结果：${data.message}`);
                message += `\n【兑换商品】 ${stockName} \n【兑换结果】 ${data.message}`;
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        });
    })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
