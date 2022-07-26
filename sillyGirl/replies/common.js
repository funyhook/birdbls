
var shortUrl_key=bucketGet("shortUrl", "key") // set shortUrl key 你的suo.imp的key

//获取当前时间
function getDataTimeNow() {
  let now = new Date(),
    y = now.getFullYear(),
    m = now.getMonth() + 1,
    d = now.getDate();
  return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
}

//请求通用header
function getHeader(){
    var headers = {
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36",
        "content-type": "application/json"
    };
    return headers;
}
//获取url中指定变量的值
function getUrlValueByName(name,url) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = url.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
 }
 
 //获取短链接
 function getShortUrl(longUrl){
    var result = request({
        url:"https://api.funyhook.com/api/common/shortUrl", //请求链接
        headers:getHeader(),
        method: "post", //请求方法
        dataType: "json", //这里接口直接返回文本，所以不需要指定json类型数据
        body:{
            "longUrl":longUrl,
            "apiKey":shortUrl_api_key
        }
    })
    if (result.code==200) {
        return result.data.url
    }
    return longUrl
 }
