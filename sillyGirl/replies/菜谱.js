//[rule: 菜谱 ? ]
//[rule: ?怎么做]

var request = require("request")
try {
    sendText
} catch (e) {
    sendText = console.log
}
try {
    param
}catch (e) {
    param = function(str){
        return "红烧猪蹄"
    }
}
// 搜索页option
var options = {
    'method': 'GET',
    'url': "https://www.xiachufang.com/search/?keyword=" + encodeURI(param(1)),
    'headers': {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    },
};

var step = [];
var title = "";

request(options, (error, response, body) => {
    if (error || response.statusCode != 200) {
        return
    }
    var b = body.replace(/\n/g, '');
    var item = b.match(/<p class="name">(.*?)<\/p>/g)[0].match(/href="(.*?)"/)[1]
    var optionD = {
        'method': 'GET',
        'url': 'https://www.xiachufang.com' + item,
        'headers': {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        },
    }
    var bg = ""
    request(optionD, (error, response) => {
        if (error || response.statusCode != 200) {
            return
        }
        if (a = response.body.match(/url[(](.*?)[)]/)) {
            bg = `[CQ:image,file=${a[1]}]`
        }
        var d = response.body.replace(/\n/g, '');
        var name = d.match(/<h2 id="steps">(.*?)<\/h2>/g)
        title = name[0].split("          ")[1].split("        ")[0].replace(" ", " ")
        var steps = d.match(/<p class="text" style="">(.*?)<\/p>/g)
        for (i = 0; i < steps.length; i++) {
            step.push(`${i + 1}. ${steps[i].replace('<p class="text" style="">', '').replace('</p>', '')}`.replace(" ", " ").replace("<br>", "\n"))
        }
        sendText(bg + "\n" + title + "\n" + step.join("\n"))
    })
})