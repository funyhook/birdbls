"""
export fqxs='[
    {
        "url":"_request_from=web&in_sp_time=0&version_code=14.9.0&js_sdk_version=1.95.0.29&tma_jssdk_version=1.95.0.29&app_name=douyin_lite&app_version=14.9.0&vid=E393C8A9-14A3-4964-967F-90B8AA35D886&device_id=1442979387819373&channel=App%20Store&mcc_mnc=46001&aid=2329&screen_width=1170&openudid=d2d51febe10f7a6f8078108540e1657b60c2edfd&cdid=43277870-20EA-4776-A3A4-21728B6F5424&os_api=18&ac=WIFI&os_version=15.4.1&device_platform=iphone&build_number=149005&iid=389678045875775&device_type=iPhone13,3&idfa=00000000-0000-0000-0000-000000000000&in_sp_time=0 HTTP/1.1",
        "cookie":"excgd=20230619; passport_csrf_token=1f2e65602b7b6962447c6abfe64a0bc2; passport_csrf_token_default=1f2e65602b7b6962447c6abfe64a0bc2; d_ticket=7b916cbee1f97f8e2faf97fdebdabfe73d396; n_mh=MqzgwQ3nC82IzGUYIfoB3hDGIW5yBbBpymXZhf5AiDw; odin_tt=4a1cd3e3fbb37baa32024ef32a9865a8ac4dc18cdb5f606cc0df83160fe0db5f3558787277885d460c90218d3f63c8b2b065513e3ad0e3c9b33dc67fc51fe844f0c89edc19b0fb29acf8516796481497; passport_assist_user=CjxZJZxg62uc2szOzguIOQmqfyAXXJjqTopNJP0l8MOZNnaXe4jhyCEVpJm2QtOFiwdyt7WpDwNiUY5OgFAaSAo8eA5iYdbZSa7pUNfRfnj6blJ5D5YaihnX6S1dPh7M_4wv0_cbHcS6GdoEM5fPVqvsY63-mfIkGc-IEclHENT0sA0Yia_WVCIBAzlDHSA%3D; sessionid=edeed8b4daea27b696174056910d468d; sessionid_ss=edeed8b4daea27b696174056910d468d; sid_guard=edeed8b4daea27b696174056910d468d%7C1685963190%7C5184000%7CFri%2C+04-Aug-2023+11%3A06%3A30+GMT; sid_tt=edeed8b4daea27b696174056910d468d; uid_tt=87c74f32b96f31398d7790507d9c602d; uid_tt_ss=87c74f32b96f31398d7790507d9c602d; msToken=zD8X1ZOdehbr2U2Q4MS8q4efyL7Zlp2Y6f0yV-CX0Eb6xKaMD-db9dSbTtMXfeURmx8cRnA3GPr44NH1vJxdQPb3; install_id=389678045875775; ttreq=1$1365c953747e77a53eca1436145137864c226845; store-region=cn-bj; store-region-src=uid",
        "argus":"pDrfyyMZRMGtyPWDiEWo4MCe45nJJaYqJY/kKqW37pYxUNevM8gXP90RavqDeq6YJ9emDANde9VFcQ4hjdIEuTPDdFbgQJkp2WiPDaZAfKF8bCduDZ65xFdyeUa6WRSMXRr4IW8Rgc5yqT54PhhW4a7IrGVj+SHQGm+umNABRImB59zzLFL85CuAWVjr1+Eeth0QxLycogT5EhoEld3I27TzxRt+8a7sDTpHTUKMdKtbwNiTqd4bO93MzndViF7Hi3d8Z43DaiAC864GrYwxGYku",
        "ladon":"ugs+bIV1a9hs6r6J64bpue94ohVgaIGzRtBUMe3pzUqdvMa7"
    }
]'
"""
import requests
import random
import base64
import os
import json
import datetime
import time

ua = ""

cookies = os.getenv("fqgy")


class FQ:
    def __init__(self, cookie):
        self.url = cookie["url"]
        self.cookie = cookie["cookie"]
        self.argus = cookie["argus"]
        self.ladon = cookie["ladon"]
        self.nickname = self.get_nickname()

    def run(self):
        if datetime.datetime.now().strftime("%H:%M") < "08:30":
            if self.sign_in():
                time.sleep(random.randint(30, 38))
                self.sign_ad()

        balance = self.get_balance()
        time.sleep(random.randint(7, 15))
        self.open_box()
        time.sleep(random.randint(30, 40))
        self.box_ad()
        time.sleep(random.randint(30, 40))
        self.read()
        time.sleep(random.randint(30, 40))
        self.listen()
        time.sleep(random.randint(30, 40))
        self.comic()
        time.sleep(random.randint(30, 40))
        self.task_ad()
        time.sleep(random.randint(30, 40))
        self.repeat_ad()
        time.sleep(random.randint(30, 40))
        self.shopping()
        current_balance = self.get_balance()
        print(f"[{self.nickname}]---本次运行获得{current_balance - balance}")

    def sign_in(self):
        url = f"https://api5-normal-hl.fqnovel.com/luckycat/novel/v1/task/done/excitation_ad_signin?{self.url}"
        headers = {
            'host': 'api5-normal-hl.fqnovel.com',
            'user-agent': ua,
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'cookie': self.cookie}
        payload = base64.b64decode("e30=")
        response = requests.request("POST", url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]---签到成功{response.json().get('data').get('amount')}")
            return True
        else:
            print(f"[{self.nickname}]---签到{response.json().get('err_tips')}")
            return False

    def sign_ad(self):
        url = f"https://api5-normal-hl.fqnovel.com/luckycat/novel/v1/task/done/sign_in?{self.url}"
        headers = {
            'host': 'api5-normal-hl.fqnovel.com',
            'user-agent': ua,
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'cookie': self.cookie}
        payload = base64.b64decode("eyJmcm9tIjoic2lnbl9pbiIsInRhc2tfa2V5IjoiZXhjaXRhdGlvbl9hZF9zaWduaW4ifQ==")
        response = requests.request("POST", url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]---看签到广告成功{response.json().get('data').get('amount')}")
        else:
            print(f"[{self.nickname}]---签到广告{response.json().get('err_tips')}")

    def read(self):
        url = f"https://api5-normal-hl.fqnovel.com/luckycat/novel/v1/task/done/daily_read_30m?{self.url}"
        headers = {
            'host': 'api5-normal-hl.fqnovel.com',
            'user-agent': ua,
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'cookie': self.cookie}
        payload = base64.b64decode("eyJhY3Rpb24iOiJ3aXRoZHJhdyJ9")
        response = requests.request("POST", url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]---阅读30s成功{response.json().get('data').get('amount')}")
        else:
            print(f"[{self.nickname}]---阅读30s{response.json().get('err_tips')}")

    def listen(self):
        url = f"https://api5-normal-hl.fqnovel.com/luckycat/novel/v1/task/done/daily_listen_30s?{self.url}"
        headers = {
            'host': 'api5-normal-hl.fqnovel.com',
            'user-agent': ua,
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'cookie': self.cookie}
        payload = base64.b64decode("eyJ0YXNrX2tleSI6ImRhaWx5X2xpc3Rlbl8zMHMifQ==")
        response = requests.request("POST", url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]---听书30s成功{response.json().get('data').get('amount')}")
        else:
            print(f"[{self.nickname}]---听书30s{response.json().get('err_tips')}")

    def comic(self):
        url = f"https://api5-normal-hl.fqnovel.com/luckycat/novel/v1/task/done/daily_read_comics?{self.url}"
        headers = {
            'host': 'api5-normal-hl.fqnovel.com',
            'user-agent': ua,
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'cookie': self.cookie}
        payload = base64.b64decode(
            "eyJyZWFkX2NvbWljc190YXNrX2tleSI6ImRhaWx5X3JlYWRfY29taWNzXzVtIiwidGFza19rZXkiOiJkYWlseV9yZWFkX2NvbWljcyJ9")

        response = requests.request("POST", url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]---看漫画成功{response.json().get('data').get('amount')}")
        else:
            print(f"[{self.nickname}]---看漫画{response.json().get('err_tips')}")

    def get_nickname(self):
        url = f"https://api3-normal-hl.fqnovel.com/reading/user/info/v/?{self.url}"
        headers = {
            'host': 'api3-normal-hl.fqnovel.com',
            'user-agent': ua,
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'cookie': self.cookie}
        payload = None
        response = requests.request("GET", url, headers=headers, data=payload)
        return response.json().get("data").get("user_name")

    def get_balance(self):
        url = f"https://api3-normal-hl.fqnovel.com/luckycat/novel/v1/user/info?{self.url}"
        headers = {
            'host': 'api3-normal-hl.fqnovel.com',
            'user-agent': ua,
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'cookie': self.cookie}
        payload = None
        response = requests.request("GET", url, headers=headers, data=payload)
        today = response.json().get("data").get("income_info_list")[0].get("amount")
        total = response.json().get("data").get("income_info_list")[1].get("amount")
        print(f"[{self.nickname}]---可提现余额{int(today) / 100}")
        print(f"[{self.nickname}]---总金币金币{total}")
        return int(total)

    def open_box(self):
        url = f"https://api3-normal-hl.fqnovel.com/luckycat/novel/v1/task/done/treasure_task?{self.url}"
        headers = {
            'host': 'api3-normal-hl.fqnovel.com',
            'user-agent': ua,
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'cookie': self.cookie}
        payload = base64.b64decode("e30=")
        response = requests.request("POST", url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]---开宝箱成功\n"
                  f"[{self.nickname}]---开宝箱金币{response.json().get('data').get('amount')}")
            cur_time = response.json().get('data').get('cur_time')
            next_time = response.json().get('data').get('next_time')
            next_time = datetime.datetime.fromtimestamp(next_time).strftime('%H:%M')
            print(f"[{self.nickname}]---下个宝箱时间{next_time}")
        else:
            print(f"[{self.nickname}]---{response.json().get('err_tips')}")

    def box_ad(self):
        url = f"https://api3-normal-hl.fqnovel.com/luckycat/novel/v1/task/done/excitation_ad_treasure_box?{self.url}"
        headers = {
            'host': 'api3-normal-hl.fqnovel.com',
            'user-agent': ua,
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'cookie': self.cookie}
        payload = base64.b64decode(
            "eyJmcm9tIjoicmV3YXJkX2RpYWxvZ19mcm9tX3RyZWFzdXJlX2JveCIsInRhc2tfa2V5IjoiZXhjaXRhdGlvbl9hZF90cmVhc3VyZV9ib3gifQ==")
        response = requests.request("POST", url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]---看宝箱视频成功{response.json().get('data').get('amount')}")
        else:
            print(f"[{self.nickname}]---宝箱视频{response.json().get('err_tips')}")

    def task_ad(self):
        url = f"https://api3-normal-hl.fqnovel.com/luckycat/novel/v1/task/done/excitation_ad?{self.url}"
        headers = {
            'host': 'api3-normal-hl.fqnovel.com',
            'user-agent': ua,
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'cookie': self.cookie}
        payload = base64.b64decode("eyJmcm9tIjoidGFza19saXN0IiwidGFza19rZXkiOiJleGNpdGF0aW9uX2FkIn0=")
        response = requests.request("POST", url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]---看任务广告成功{response.json().get('data').get('amount')}")
        else:
            print(f"[{self.nickname}]---任务广告{response.json().get('err_tips')}")

    def repeat_ad(self):
        url = f"https://api3-normal-hl.fqnovel.com/luckycat/novel/v1/task/done/excitation_ad_repeat?{self.url}"
        headers = {
            'host': 'api3-normal-hl.fqnovel.com',
            'user-agent': ua,
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'cookie': self.cookie}
        payload = base64.b64decode("eyJ0YXNrX2tleSI6ImV4Y2l0YXRpb25fYWRfcmVwZWF0In0=")
        response = requests.request("POST", url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]---看连续广告成功{response.json().get('data').get('amount')}")
        else:
            print(f"[{self.nickname}]---连续广告{response.json().get('err_tips')}")

    def shopping(self):
        url = f"https://api5-normal-hl.fqnovel.com/luckycat/novel/v1/task/done/shopping_earn_money?{self.url}"
        headers = {
            'host': 'api5-normal-hl.fqnovel.com',
            'user-agent': ua,
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'cookie': self.cookie}
        payload = base64.b64decode("dGFza19rZXk9c2hvcHBpbmdfZWFybl9tb25leQ==")
        response = requests.request("POST", url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]---逛街成功{response.json().get('data').get('amount')}")
        else:
            print(f"[{self.nickname}]---逛街{response.json().get('err_tips')}")

    def box_ad(self):
        url = f"https://api3-normal-hl.fqnovel.com/luckycat/novel/v1/task/done/excitation_ad_treasure_box?{self.url}"
        headers = {
            'host': 'api3-normal-hl.fqnovel.com',
            'user-agent': ua,
            'x-argus': self.argus,
            'x-ladon': self.ladon,
            'cookie': self.cookie}
        payload = base64.b64decode(
            "eyJmcm9tIjoicmV3YXJkX2RpYWxvZ19mcm9tX3RyZWFzdXJlX2JveCIsInRhc2tfa2V5IjoiZXhjaXRhdGlvbl9hZF90cmVhc3VyZV9ib3gifQ==")
        response = requests.request("POST", url, headers=headers, data=payload)
        if response.json().get("err_tips") == "成功":
            print(f"[{self.nickname}]---看宝箱视频成功{response.json().get('data').get('amount')}")
        else:
            print(f"[{self.nickname}]---宝箱视频{response.json().get('err_tips')}")


if __name__ == "__main__":
    if cookies:
        cookies_json = json.loads(cookies)
        print(f"番茄小说共获取到{len(cookies_json)}个账号by Pearson")
        print("bug提交https://t.me/+T8ozejX9rnkwZDE1")
        print("R18黄群不是我的,是内鬼外传改的")
        print("仓库地址,感谢点赞")
        print("https://github.com/Pears0nLee/SnakeMelon")
        for i, cookie in enumerate(cookies_json):
            i += 1
            print(f"---开始第{i}个账号---")
            FQ(cookie).run()
            time.sleep(random.randint(60, 200))
    else:
        print("未填写cookie")
