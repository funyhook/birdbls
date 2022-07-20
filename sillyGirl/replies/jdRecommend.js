
//[cron: 0 0,30 7-23 * * *] //此为京东推广定时任务；随时随地按照类型推广；收益随缘。。。。
//[rule: ces]
//功能：京东口令解析
//作者：微信公众号【玩机匠】！

function main(){
    request({
        url: 'https://api.funyhook.com/api/jd/recommend',
        method: 'POST',
        dataType:'json',
        headers: {
            "content-type": "application/json"
        },
        body: {
                "eliteId": 2,        //频道ID:1-好券商品,2-精选卖场,10-9.9包邮,15-京东配送,22-实时热销榜,23-为你推荐,24-数码家电,25-超市,26-母婴玩具,27-家具日用,28-美妆穿搭,30-图书文具,31-今日必推,32-京东好物,33-京东秒杀,34-拼购商品,40-高收益榜,41-自营热卖榜,108-秒杀进行中,109-新品首发,110-自营,112-京东爆品,125-首购商品,129-高佣榜单,130-视频商品,153-历史最低价商品榜,210-极速版商品,238-新人价商品,247-京喜9.9,249-京喜秒杀,315-秒杀未开始,340-时尚趋势品,341-3C新品,342-智能新品,343-3C长尾商品,345-时尚新品,346-时尚爆品,426-京喜自营,1001-选品库
                "pageIndex": Math.floor((Math.random()*10)+1),
                "pageSize": 3,
                "sort":"desc",
                "sortName":"sku"        //排序字段(price：单价, commissionShare：佣金比例, commission：佣金， inOrderCount30DaysSku：sku维度30天引单量，comments：评论数，goodComments：好评数)

            }
    },function(err, resp, data) {
        if (resp.statusCode == 200 && data.code==200) {
            for (var i = 0; i < data.data.length; i++) {
                let good = data.data[i]
                sleep(1)
                push({
                    imType:"qq",//发送到指定渠道,如qq,wx,必须
                    //userID:GetUserID(),//groupCode不为0时为@指定用户,可选
                    groupCode:"948356041",//可选
                    content:good["shareText"]+image(good["imgList"][0]),//发送消息
                    })//给指定im发送消息
                //sendText("当前群信息"+"\n发送人昵称:"+GetUsername()+"\n发送人微信号："+GetUserID()+"\n当前群号："+GetChatID())
                push({
                    imType:"wx",//发送到指定渠道,如qq,wx,必须
                    groupCode:"8779271505",//可选
                    content:good["shareText"]+image(good["imgList"][0]),//发送消息
                    })
            }
           
        }else{
            sendText(JSON.stringify(resp))
        }
    });
}

main();
