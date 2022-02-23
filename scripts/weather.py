"""
@File    : weather.py
@Time    : 2021.5.11
@Software: IntelliJ IDEA 2019.3.5 x64
@python :  Python 3.6
@Website : https://beta.funyhook.com

"""

#!/usr/bin/python3
#coding=utf-8
#by 微信公众号：玩机匠
#环境变量：CITY_CODE=城市编码
#进入https://where.heweather.com/index.html查询你的城市代码
 
import requests, json
import logging
import os
import sys
import time
import traceback

logger = logging.getLogger(name=None)  # 创建一个日志对象
logging.Formatter("%(message)s")  # 日志内容格式化
logger.setLevel(logging.INFO)  # 设置日志等级
logger.addHandler(logging.StreamHandler())  # 添加控制台日志
# logger.addHandler(logging.FileHandler(filename="text.log", mode="w"))  # 添加文件日志

def load_send() -> None:
    logger.info("【玩机匠】提醒：加载推送功能中...")
    global send
    send = None
    cur_path = os.path.abspath(os.path.dirname(__file__))
    sys.path.append(cur_path)
    if os.path.exists(cur_path + "/notify.py"):
        try:
            from notify import send
        except Exception:
            send = None
            logger.info(f"【玩机匠】提醒：❌加载通知服务失败!!!\n{traceback.format_exc()}")

  
if __name__ == "__main__":
    load_send();
    city_code = os.getenv("CITY_CODE", "101010100")
    try:
        api = 'http://t.weather.itboy.net/api/weather/city/'         #API地址，必须配合城市代码使用
        city_code = '101010100'      #进入https://where.heweather.com/index.html查询你的城市代码
        tqurl = api + city_code
        response = requests.get(tqurl)
        d = response.json()         #将数据以json形式返回，这个d就是返回的json数据
        if(d['status'] == 200):     #当返回状态码为200，输出天气状况
            parent = d["cityInfo"]["parent"] #省
            city = d["cityInfo"]["city"] #市
            update_time = d["time"] #更新时间
            date = d["data"]["forecast"][0]["ymd"] #日期
            week = d["data"]["forecast"][0]["week"] #星期
            weather_type = d["data"]["forecast"][0]["type"] # 天气
            wendu_high = d["data"]["forecast"][0]["high"] #最高温度
            wendu_low = d["data"]["forecast"][0]["low"] #最低温度
            shidu = d["data"]["shidu"] #湿度
            pm25 = str(d["data"]["pm25"]) #PM2.5
            pm10 = str(d["data"]["pm10"]) #PM10
            quality = d["data"]["quality"] #天气质量
            fx = d["data"]["forecast"][0]["fx"] #风向
            fl = d["data"]["forecast"][0]["fl"] #风力
            ganmao = d["data"]["ganmao"] #感冒指数
            tips = d["data"]["forecast"][0]["notice"] #温馨提示

            # 天气提示内容 get_iciba_everyday()  + 
            tdwt = "\n-----------------------------------------" + "\n【"+ date +"今日份天气】\n城市： " + parent + city + \
                    "\n日期： " + date + "\n星期: " + week + "\n天气: " + weather_type + "\n温度: " + wendu_high + " / "+ wendu_low + "\n湿度: " + \
                    shidu + "\nPM25: " + pm25 + "\nPM10: " + pm10 + "\n空气质量: " + quality + \
                    "\n风力风向: " + fx + fl + "\n感冒指数: "  + ganmao + "\n温馨提示： " + tips + "\n更新时间: " + update_time
            logging.info("天气预报：\n" + tdwt)
            send("【玩机匠】提醒：天气预报", f"\n{tdwt}")
    except:
        logger.info(f"【玩机匠】提醒：\n　　今日天气推送错误，请检查服务或网络状态！") 
