/*
# TG电报交流群: https://t.me/china20211029
# 本地低调用吧，不上传github了
# 抓用户CK，进入APP应该就能抓到
# QX重写: http://.+/api/v2/device/info url script-request-body dsjtx.js
# 自己决定提现金额，删除不想要的提现金额，留下决定要提现的金额，如我想提现50元和30元 那么数组就是这样：[50,30]
# 这个我没加boxjs, 好多大佬都写了，避免冲突。
# 特别提醒：多账号提现 抓用户CK时 需要设置boxjs中的key:dsjuserck的值, 抓第几个账号值就填几，比如我想抓第二账号那么设置值为2
*/
const txAmount = [50,30,25,20,10,5];
const _0x6434=['CRbDhcKgw5/CjkxEw4s=','w4ghGg==','5LmH6LWD5Y2Y','P8O+dXgiew==','a3MZ','w6PDtMKd','c8OHCcK/VDzDiQ==','MMOTaw3CtcKXHiN/','5b+I5aS45Y6y5oy+54yF','U8OlYMKTbTVFF8Ow','w6d0w4/DpXoFw5w=','w5srIhPDj1jClcOkbsKWXA==','4pix77mI5p+I5YmP5Zqd6K6m6Zaw5paV5o2T5Lqw56mJ776T6K6+5qK+5pyz6IWo6LiH6K6Q5aSa57+957i85oO95YWx','V34bNQA+w5c=','N8OBAcOYw5HCh3E=','TsO0V8KLAMOfBV/CpXvCryU=','w7M4w5oww4fCqg==','w7zDq8KWwobDqQ==','T2lM','wqfDn18=','5Z6q56Ok5pSF5o+S6IyH5Yyl5oiA5YiP77+n','YcOUwpoR','w7fCozjCj8OHwrk4ccKxwojCh8O0','4puk77uYNuaJsOasvhA85qyx6IW65p655bWr5YKM55eJ44C+','Ohc6DsKqwp0=','wrc3YsKZw5Mtw6vCqsO4','wo0zwrHCnsOPNnHCnVDDs1fDtTpQwrDDsMOcAHzDhcKVQcKrwpdZBAXCpsKyOMKwY1MZNMK8KTTCtHAnfifCjcKuKmYHwpTCksKlw40=','wqbCkmTCiw==','d0TCtyPCtGTCsQ==','S2NKYVV8wpE=','5byS5aeF5oyi5420562W','csODwpsQG3BZ','w5DDo3XDrMKIw5HDj0TCuMO1VcKGDzTCucK7S0vCi3UlBlFpwrg0w4LCosODOMKHHD5vw5Zfw7fDmcKhOXrDgMOnfnZBBR9yWR/DscO8WhZeVMKE','OFnCuiHCokDCssKpw7dfQcKlwo9nw74Xw5NJLSNzCATDhnTDvyPDsDMgMsO8YSrDn8O7','f8KCUA==','w6zCmUUTUhJ/w4HCksKJwrg=','JsOJbw==','wrXCmcOXw7gzeFPCng==','w4zCkMKfw7DDkldKwq11woXDosO9','MjXDuMKuSz4=','Dg3DjsKNw6jCjkNEw6Rb','dMORHMKhXDs=','U8OlYMKtaSo=','ck/CvSHCuEM=','w7Fiw5XDqGsW','w7zCtMKiwobDsw==','wrXDqSXCjcOdwrU=','YcOew59ESjcJ','wqTClmfCicOBwr0=','wqzDvy7CmMOAwrk=','w5LDrMOaD8OqwqU=','woDDjXrDhMO5wqs=','wqbDikbDlkTCmxZp','S20xwonCk0IKwqzDgGg2','LBDDm8KXw4TCk05bw4Rbw5xwKQ==','KcOFcsKVwozCoR7DnMKz','wqrDuSnCmcOdwq8=','wrYDeMKiwrwhdw==','IgpkWcOuw4XCqw==','w6HCujs=','OcOeZMKZw58=','XcOoXMKDJcOeCkjCgg==','eTXDtg==','wpUmwrfCncKQ','NHzCgcO5','w7zDvsKUwovDk8O3wq3Cp2vDrw==','woMuwrfCncKBUDDClknDq1/Dsx0XwrvDpw==','bcONHg==','IMOFB8OPw5U=','w7TDn0DCmA==','w6rCsCg=','wrfDrSbCjw==','bnIafMOJesKL','IsK+eMKgG1Bl','wrTChcOhw74odQ==','RGNf','w5h4QVBVUw==','5YWE8JiPt/CZnLjwkp2k','TWdGYA==','wqUePMO4w796KA==','QGdfZlg=','HRfDhsKcw44=','woM1wqrCg8K2cT/Cl37DpVfDug==','I3/CtcOlemom','fMOVwqEbHmE=','JsK4csK4','wq0ZIsO3w69h','w6zDs8Kbwp3DnsO3wr3Cq0zDog==','wr3DrT/Ciw==','IxfDrnvku4zlhZrmn54=','K8OCeADCvsKCBA==','KzzlpY/otLzCkBXljbLlm5QWwp8=','RnRZRl9qwoc=','woLCoi/CqMO6w74eE8OLwpFbwoR4wqjCj0wzw6tQd8K6d8O7WAFbMcOdYnjCrcOb','PcOpbHwCdsKaKAZNasKD','wqfChMOrw6ECeVzCi8OIS8OgwoE=','wr7DglQ=','w4Y3IBPDnFg=','d8Onf8K2JQ==','55e06KSw5ayy6Laq5Y62','Ln7Cv8Ol','JQMsGsK/wpbDqVDDkMK/worCqB1c','MsKVwq8=','55Sa6KeY5a+t5oyG542W'];(function(_0x2fede8,_0x643463){const _0x368896=function(_0x3b3b65){while(--_0x3b3b65){_0x2fede8['push'](_0x2fede8['shift']());}};_0x368896(++_0x643463);}(_0x6434,0x12d));const _0x3688=function(_0x2fede8,_0x643463){_0x2fede8=_0x2fede8-0x0;let _0x368896=_0x6434[_0x2fede8];if(_0x3688['zwMHzq']===undefined){(function(){let _0x5bb954;try{const _0x36df0c=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5bb954=_0x36df0c();}catch(_0x395fbc){_0x5bb954=window;}const _0xbd82ab='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5bb954['atob']||(_0x5bb954['atob']=function(_0x2be55c){const _0x1d3f6a=String(_0x2be55c)['replace'](/=+$/,'');let _0x58f315='';for(let _0x534bef=0x0,_0x558f30,_0x4515be,_0x25958e=0x0;_0x4515be=_0x1d3f6a['charAt'](_0x25958e++);~_0x4515be&&(_0x558f30=_0x534bef%0x4?_0x558f30*0x40+_0x4515be:_0x4515be,_0x534bef++%0x4)?_0x58f315+=String['fromCharCode'](0xff&_0x558f30>>(-0x2*_0x534bef&0x6)):0x0){_0x4515be=_0xbd82ab['indexOf'](_0x4515be);}return _0x58f315;});}());const _0x247ccc=function(_0x3fc08c,_0x14fa99){let _0x56b9c7=[],_0x1e1b5b=0x0,_0x4ca4b7,_0x3cfcef='',_0x71603a='';_0x3fc08c=atob(_0x3fc08c);for(let _0x4d5bfe=0x0,_0x3d90e3=_0x3fc08c['length'];_0x4d5bfe<_0x3d90e3;_0x4d5bfe++){_0x71603a+='%'+('00'+_0x3fc08c['charCodeAt'](_0x4d5bfe)['toString'](0x10))['slice'](-0x2);}_0x3fc08c=decodeURIComponent(_0x71603a);let _0x5664ce;for(_0x5664ce=0x0;_0x5664ce<0x100;_0x5664ce++){_0x56b9c7[_0x5664ce]=_0x5664ce;}for(_0x5664ce=0x0;_0x5664ce<0x100;_0x5664ce++){_0x1e1b5b=(_0x1e1b5b+_0x56b9c7[_0x5664ce]+_0x14fa99['charCodeAt'](_0x5664ce%_0x14fa99['length']))%0x100;_0x4ca4b7=_0x56b9c7[_0x5664ce];_0x56b9c7[_0x5664ce]=_0x56b9c7[_0x1e1b5b];_0x56b9c7[_0x1e1b5b]=_0x4ca4b7;}_0x5664ce=0x0;_0x1e1b5b=0x0;for(let _0x5b8d61=0x0;_0x5b8d61<_0x3fc08c['length'];_0x5b8d61++){_0x5664ce=(_0x5664ce+0x1)%0x100;_0x1e1b5b=(_0x1e1b5b+_0x56b9c7[_0x5664ce])%0x100;_0x4ca4b7=_0x56b9c7[_0x5664ce];_0x56b9c7[_0x5664ce]=_0x56b9c7[_0x1e1b5b];_0x56b9c7[_0x1e1b5b]=_0x4ca4b7;_0x3cfcef+=String['fromCharCode'](_0x3fc08c['charCodeAt'](_0x5b8d61)^_0x56b9c7[(_0x56b9c7[_0x5664ce]+_0x56b9c7[_0x1e1b5b])%0x100]);}return _0x3cfcef;};_0x3688['XrneOt']=_0x247ccc;_0x3688['rTEJxl']={};_0x3688['zwMHzq']=!![];}const _0x3b3b65=_0x3688['rTEJxl'][_0x2fede8];if(_0x3b3b65===undefined){if(_0x3688['zZHVBw']===undefined){_0x3688['zZHVBw']=!![];}_0x368896=_0x3688['XrneOt'](_0x368896,_0x643463);_0x3688['rTEJxl'][_0x2fede8]=_0x368896;}else{_0x368896=_0x3b3b65;}return _0x368896;};const $=new Env(_0x3688('0xa',')LAf'));const notify=$[_0x3688('0x4','R*4n')]()?require(_0x3688('0x21','FzxV')):'';let dsjapp=$[_0x3688('0x5a','N13p')]('dsjapp',[]);let dsjuserck=$['getval'](_0x3688('0x24','iuxx'))||0x1;let userId=$[_0x3688('0x19','Nc[h')](_0x3688('0x3f','IPTo'))||0xf4240;let activeCode=$[_0x3688('0x2a','liiC')](_0x3688('0x8','vGI4'))||'c5390ad18a1762b3c0af88887aafab14';let tz=$['getval']('tz')||'1';let sign='';let code='';let rs='';let dsj='';let isRun='';if($[_0x3688('0x3d','ie**')]()){dsjapp=JSON[_0x3688('0x4f','Nc[h')](process[_0x3688('0x2f','z%9O')][_0x3688('0x3e','HEhT')]);}!(async()=>{if(typeof $request!==_0x3688('0x48','w#PA')){await GetCookie();}else{if(typeof $request!=='undefined'){await getCk();}else{await getScriptStatus(_0x3688('0x37','lx%Y'));if(isRun!=0x1){$['log'](_0x3688('0x22','0RMx'));return;}$[_0x3688('0x3','IPTo')](_0x3688('0x64','Je7)')+dsjapp[_0x3688('0x23','vGI4')]+'个账号===');for(let _0x4f7577=0x0;_0x4f7577<dsjapp['length'];_0x4f7577++){dsj=dsjapp[_0x4f7577];$[_0x3688('0x2d','k%5u')](_0x3688('0x29','ld7p')+(_0x4f7577+0x1)+_0x3688('0xd','baUy'));for(let _0x504d69=0x0;_0x504d69<txAmount['length'];_0x504d69++){$[_0x3688('0x51','$6)]')](_0x3688('0x13','DYud')+txAmount[_0x504d69]+'元......');getString(txAmount[_0x504d69]);await withdraw(dsj);}}}}})()[_0x3688('0x5b','RYyB')](_0x46990f=>{$[_0x3688('0xf','%fGB')]('','❌\x20'+$[_0x3688('0x26','DYud')]+_0x3688('0x66','%fGB')+_0x46990f+'!','');})[_0x3688('0x54','0RMx')](()=>{$[_0x3688('0x7','Y2Ag')]();});async function GetCookie(){if($request&&$request['headers'][_0x3688('0x55','zR(Z')]&&JSON[_0x3688('0x42','#5Pj')]($request['headers'])[_0x3688('0x27','Je7)')](_0x3688('0x3c','FzxV'))>=0x0&&$request[_0x3688('0x1e','IPTo')][_0x3688('0x53','%fGB')](_0x3688('0xe','9VdC'))>=0x0&&$request[_0x3688('0x60','0RMx')][_0x3688('0x5e','Y2Ag')](_0x3688('0x4d','RvF3'))>=0x0){const _0x343bb9=$request[_0x3688('0x65','z%9O')][_0x3688('0x34','Zh^7')];const _0x5bc390=$request[_0x3688('0x28','RYyB')][_0x3688('0x41','baUy')];let _0x22d79e=dsjuserck-0x1;if(dsjapp[_0x22d79e]){dsjapp[_0x22d79e][_0x3688('0x40',')LAf')]=_0x343bb9;dsjapp[_0x22d79e][_0x3688('0x14','tIKj')]=_0x5bc390;}else{dsjapp[_0x22d79e]={'dsj_user_id':_0x343bb9,'dsj_token':_0x5bc390};}$['setdata'](JSON[_0x3688('0x12','z%9O')](dsjapp,null,0x2),_0x3688('0x35','tIKj'));$['msg']($[_0x3688('0x59','RYyB')],_0x3688('0x6','zR(Z')+(_0x22d79e+0x1)+_0x3688('0x1f','Nc[h'));}}function getString(_0x4b87ea){let _0xa11ec8=randomString(0x1e);let _0x4c2596='';if(_0x4b87ea==0x5){_0x4c2596=_0x3688('0x3a','liiC');}else if(_0x4b87ea==0xa){_0x4c2596=_0x3688('0x44','N13p');}else if(_0x4b87ea==0x14){_0x4c2596='tx0030';}else if(_0x4b87ea==0x19){_0x4c2596='tx00025';}else if(_0x4b87ea==0x1e){_0x4c2596=_0x3688('0x18','RYyB');}else if(_0x4b87ea==0x32){_0x4c2596=_0x3688('0x45','vGI4');}let _0x191c40=_0x3688('0x47','#5Pj')+_0x4c2596+_0x3688('0x4b','ld7p')+_0xa11ec8+_0x3688('0x2c','Je7)')+dsj[_0x3688('0x2e','rPJg')];sign=MD5_Encrypt(_0x191c40);code=_0x4c2596;rs=_0xa11ec8;}function withdraw(_0x368786){const _0x4cad54=_0x3688('0x2b','ab41')+code+_0x3688('0x50','IPTo')+rs+_0x3688('0x32','ZZvK')+sign;return new Promise((_0x4379d5,_0x26e195)=>{const _0x338df8={'appId':_0x3688('0x0','v8Ye'),'Authorization':''+_0x368786[_0x3688('0xb','baUy')],'userid':''+_0x368786['dsj_user_id']};const _0x204298={'url':_0x4cad54,'headers':_0x338df8};$[_0x3688('0x56','RYyB')](_0x204298,async(_0x1efd3c,_0x3e5e73,_0x2b1c1b)=>{try{if(_0x2b1c1b){let _0x21c491=JSON[_0x3688('0x4a','RvF3')](_0x2b1c1b);if(_0x21c491[_0x3688('0x67','RYyB')]==0x0){let _0x210d7e=_0x21c491[_0x3688('0x63','FzxV')][_0x3688('0x5c','baUy')]/0x64;$[_0x3688('0x10','eZ2f')]('🎉🎉🎉恭喜你提现了'+_0x210d7e+_0x3688('0x58','%fGB'));sendMsg('🎉🎉🎉恭喜你提现了'+_0x210d7e+'元🎉🎉🎉');}else{$[_0x3688('0x51','$6)]')](''+_0x21c491[_0x3688('0x9','vfUP')]);}}}catch(_0x1fa8bd){$[_0x3688('0x4e','Zh^7')](_0x1fa8bd);}_0x4379d5();});});}function randomString(_0x3329be,_0x246de1){_0x246de1=_0x246de1||'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';let _0xf0b85a='';for(let _0x2bec05=0x0;_0x2bec05<_0x3329be;_0x2bec05++){let _0x28b09a=Math[_0x3688('0x38',')cZB')](Math[_0x3688('0x57','e[B]')]()*_0x246de1[_0x3688('0x1b','f1DR')]);_0xf0b85a+=_0x246de1['substring'](_0x28b09a,_0x28b09a+0x1);}return _0xf0b85a;}async function sendMsg(_0x768a1b){if(tz==0x1){if($[_0x3688('0x5f','liiC')]()){await notify[_0x3688('0x4c','eZ2f')]($['name'],_0x768a1b);}else{$[_0x3688('0x49','ZZvK')]($[_0x3688('0x52','FzxV')],_0x768a1b);}}else{$[_0x3688('0x1d','RYyB')](_0x768a1b);}}function getUserAuth(_0x23d47b,_0x2f1ece){return new Promise((_0x55b72f,_0x203466)=>{const _0x324b5d=_0x3688('0x25','RvF3')+_0x23d47b+'/'+_0x2f1ece;const _0x5e766e={'url':_0x324b5d,'headers':{}};$[_0x3688('0x46','$6)]')](_0x5e766e,async(_0x1af255,_0x264f44,_0x42d5c5)=>{try{isRun=getServerStatus(_0x42d5c5);}catch(_0x2d664a){$['log'](_0x2d664a);}_0x55b72f();});});}function getScriptStatus(_0x30d63f){return new Promise((_0x4d3bca,_0x41312a)=>{const _0x57d67f='http://xmydjs.frp.aiuyo.com:8680/script/auth/'+_0x30d63f;const _0x177bd1={'url':_0x57d67f,'headers':{}};$[_0x3688('0xc','R*4n')](_0x177bd1,async(_0xe80853,_0xbd9f9d,_0xd7e3c5)=>{try{isRun=getServerStatus(_0xd7e3c5);}catch(_0x326f2c){$['log'](_0x326f2c);}_0x4d3bca();});});}function getServerStatus(_0x336fa9){let _0x2b8f17='';let _0xbfc35c=_0x336fa9[_0x3688('0x11','Zh^7')](/\"/g,'')[_0x3688('0x1c','eZ2f')]('&');let _0x1b0d13=_0xbfc35c[0x0];let _0x229705=_0xbfc35c[0x2];let _0x364f2e=_0xbfc35c[0x1];let _0x1be589='David';let _0x598944=MD5_Encrypt(_0x1b0d13+'&'+_0x364f2e+'&'+_0x1be589);if(_0x229705!=_0x598944){_0x2b8f17=0x0;}else{if(_0x1b0d13==_0x3688('0x20','liiC')){_0x2b8f17=0x1;}else{_0x2b8f17=0x0;}}return _0x2b8f17;}function MD5_Encrypt(_0x50b0bf){function _0x42368a(_0x3d35f4,_0x1d153f){return _0x3d35f4<<_0x1d153f|_0x3d35f4>>>0x20-_0x1d153f;}function _0x20e2a0(_0x29e976,_0x304e15){var _0xcdf11f,_0x4d8f77,_0x3b22f5,_0x226de3,_0x139897;return _0x3b22f5=0x80000000&_0x29e976,_0x226de3=0x80000000&_0x304e15,_0xcdf11f=0x40000000&_0x29e976,_0x4d8f77=0x40000000&_0x304e15,_0x139897=(0x3fffffff&_0x29e976)+(0x3fffffff&_0x304e15),_0xcdf11f&_0x4d8f77?0x80000000^_0x139897^_0x3b22f5^_0x226de3:_0xcdf11f|_0x4d8f77?0x40000000&_0x139897?0xc0000000^_0x139897^_0x3b22f5^_0x226de3:0x40000000^_0x139897^_0x3b22f5^_0x226de3:_0x139897^_0x3b22f5^_0x226de3;}function _0x542d49(_0x5c6889,_0x2e062f,_0x5c3299){return _0x5c6889&_0x2e062f|~_0x5c6889&_0x5c3299;}function _0x9a504(_0x1d666f,_0x38ef2e,_0x3dfa39){return _0x1d666f&_0x3dfa39|_0x38ef2e&~_0x3dfa39;}function _0x3833ff(_0x43b6cb,_0x3f6b20,_0x39b166){return _0x43b6cb^_0x3f6b20^_0x39b166;}function _0x51c7c7(_0x3c9a49,_0x190585,_0x418fb1){return _0x190585^(_0x3c9a49|~_0x418fb1);}function _0x17b9d8(_0x145b41,_0x316f59,_0x477a67,_0x2d75b3,_0x1fbdba,_0x3699aa,_0x5b5344){return _0x145b41=_0x20e2a0(_0x145b41,_0x20e2a0(_0x20e2a0(_0x542d49(_0x316f59,_0x477a67,_0x2d75b3),_0x1fbdba),_0x5b5344)),_0x20e2a0(_0x42368a(_0x145b41,_0x3699aa),_0x316f59);}function _0x12278b(_0x95b326,_0x29522c,_0x548054,_0x51d7d2,_0x457b54,_0x116d60,_0x235b3b){return _0x95b326=_0x20e2a0(_0x95b326,_0x20e2a0(_0x20e2a0(_0x9a504(_0x29522c,_0x548054,_0x51d7d2),_0x457b54),_0x235b3b)),_0x20e2a0(_0x42368a(_0x95b326,_0x116d60),_0x29522c);}function _0xb0646d(_0x578aa8,_0x3ac9e8,_0x2f19ae,_0x151e85,_0x5e587d,_0x1b53cc,_0x506c87){return _0x578aa8=_0x20e2a0(_0x578aa8,_0x20e2a0(_0x20e2a0(_0x3833ff(_0x3ac9e8,_0x2f19ae,_0x151e85),_0x5e587d),_0x506c87)),_0x20e2a0(_0x42368a(_0x578aa8,_0x1b53cc),_0x3ac9e8);}function _0x27b813(_0x2c4871,_0x10f568,_0x5c6719,_0x5d2515,_0x355a8c,_0xba317b,_0x45af10){return _0x2c4871=_0x20e2a0(_0x2c4871,_0x20e2a0(_0x20e2a0(_0x51c7c7(_0x10f568,_0x5c6719,_0x5d2515),_0x355a8c),_0x45af10)),_0x20e2a0(_0x42368a(_0x2c4871,_0xba317b),_0x10f568);}function _0xd4cff9(_0x4be051){for(var _0x35aba1,_0x3f5045=_0x4be051[_0x3688('0x36','Je7)')],_0x9db614=_0x3f5045+0x8,_0x4dc4f9=(_0x9db614-_0x9db614%0x40)/0x40,_0x579953=0x10*(_0x4dc4f9+0x1),_0x4bfdda=new Array(_0x579953-0x1),_0x45b54b=0x0,_0x13b394=0x0;_0x3f5045>_0x13b394;)_0x35aba1=(_0x13b394-_0x13b394%0x4)/0x4,_0x45b54b=_0x13b394%0x4*0x8,_0x4bfdda[_0x35aba1]=_0x4bfdda[_0x35aba1]|_0x4be051[_0x3688('0x33','baUy')](_0x13b394)<<_0x45b54b,_0x13b394++;return _0x35aba1=(_0x13b394-_0x13b394%0x4)/0x4,_0x45b54b=_0x13b394%0x4*0x8,_0x4bfdda[_0x35aba1]=_0x4bfdda[_0x35aba1]|0x80<<_0x45b54b,_0x4bfdda[_0x579953-0x2]=_0x3f5045<<0x3,_0x4bfdda[_0x579953-0x1]=_0x3f5045>>>0x1d,_0x4bfdda;}function _0x2d472f(_0x18436b){var _0x32b2ae,_0x10b71a,_0x13eb57='',_0x6225ca='';for(_0x10b71a=0x0;0x3>=_0x10b71a;_0x10b71a++)_0x32b2ae=_0x18436b>>>0x8*_0x10b71a&0xff,_0x6225ca='0'+_0x32b2ae[_0x3688('0x30','zR(Z')](0x10),_0x13eb57+=_0x6225ca[_0x3688('0x43','FzxV')](_0x6225ca[_0x3688('0x3b','DYud')]-0x2,0x2);return _0x13eb57;}function _0x56aa91(_0x3c289a){_0x3c289a=_0x3c289a[_0x3688('0x15','lx%Y')](/\r\n/g,'\x0a');for(var _0x2eefea='',_0x2279bb=0x0;_0x2279bb<_0x3c289a[_0x3688('0x39','FzxV')];_0x2279bb++){var _0x456d83=_0x3c289a[_0x3688('0x62','eZ2f')](_0x2279bb);0x80>_0x456d83?_0x2eefea+=String[_0x3688('0x1a','w#PA')](_0x456d83):_0x456d83>0x7f&&0x800>_0x456d83?(_0x2eefea+=String[_0x3688('0x5d','RvF3')](_0x456d83>>0x6|0xc0),_0x2eefea+=String[_0x3688('0x2','zR(Z')](0x3f&_0x456d83|0x80)):(_0x2eefea+=String[_0x3688('0x1','9VdC')](_0x456d83>>0xc|0xe0),_0x2eefea+=String[_0x3688('0x31','Z]Yo')](_0x456d83>>0x6&0x3f|0x80),_0x2eefea+=String['fromCharCode'](0x3f&_0x456d83|0x80));}return _0x2eefea;}var _0xe5d023,_0xefa090,_0x2ec3b7,_0x34bee9,_0x397ec3,_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e=[],_0x3c0ecc=0x7,_0xc04cf1=0xc,_0x37f483=0x11,_0x3538b1=0x16,_0x46d2de=0x5,_0x220d2e=0x9,_0x430a59=0xe,_0x4a73d8=0x14,_0x50e78c=0x4,_0xa3d3ab=0xb,_0x4efa7f=0x10,_0x2761a6=0x17,_0x536e7e=0x6,_0x23cf9d=0xa,_0xcd914a=0xf,_0x4ba120=0x15;for(_0x50b0bf=_0x56aa91(_0x50b0bf),_0x47fa2e=_0xd4cff9(_0x50b0bf),_0x2f7355=0x67452301,_0x1f7051=0xefcdab89,_0x2482a8=0x98badcfe,_0x19f10c=0x10325476,_0xe5d023=0x0;_0xe5d023<_0x47fa2e['length'];_0xe5d023+=0x10)_0xefa090=_0x2f7355,_0x2ec3b7=_0x1f7051,_0x34bee9=_0x2482a8,_0x397ec3=_0x19f10c,_0x2f7355=_0x17b9d8(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0x0],_0x3c0ecc,0xd76aa478),_0x19f10c=_0x17b9d8(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0x1],_0xc04cf1,0xe8c7b756),_0x2482a8=_0x17b9d8(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0x2],_0x37f483,0x242070db),_0x1f7051=_0x17b9d8(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0x3],_0x3538b1,0xc1bdceee),_0x2f7355=_0x17b9d8(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0x4],_0x3c0ecc,0xf57c0faf),_0x19f10c=_0x17b9d8(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0x5],_0xc04cf1,0x4787c62a),_0x2482a8=_0x17b9d8(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0x6],_0x37f483,0xa8304613),_0x1f7051=_0x17b9d8(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0x7],_0x3538b1,0xfd469501),_0x2f7355=_0x17b9d8(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0x8],_0x3c0ecc,0x698098d8),_0x19f10c=_0x17b9d8(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0x9],_0xc04cf1,0x8b44f7af),_0x2482a8=_0x17b9d8(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0xa],_0x37f483,0xffff5bb1),_0x1f7051=_0x17b9d8(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0xb],_0x3538b1,0x895cd7be),_0x2f7355=_0x17b9d8(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0xc],_0x3c0ecc,0x6b901122),_0x19f10c=_0x17b9d8(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0xd],_0xc04cf1,0xfd987193),_0x2482a8=_0x17b9d8(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0xe],_0x37f483,0xa679438e),_0x1f7051=_0x17b9d8(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0xf],_0x3538b1,0x49b40821),_0x2f7355=_0x12278b(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0x1],_0x46d2de,0xf61e2562),_0x19f10c=_0x12278b(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0x6],_0x220d2e,0xc040b340),_0x2482a8=_0x12278b(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0xb],_0x430a59,0x265e5a51),_0x1f7051=_0x12278b(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0x0],_0x4a73d8,0xe9b6c7aa),_0x2f7355=_0x12278b(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0x5],_0x46d2de,0xd62f105d),_0x19f10c=_0x12278b(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0xa],_0x220d2e,0x2441453),_0x2482a8=_0x12278b(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0xf],_0x430a59,0xd8a1e681),_0x1f7051=_0x12278b(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0x4],_0x4a73d8,0xe7d3fbc8),_0x2f7355=_0x12278b(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0x9],_0x46d2de,0x21e1cde6),_0x19f10c=_0x12278b(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0xe],_0x220d2e,0xc33707d6),_0x2482a8=_0x12278b(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0x3],_0x430a59,0xf4d50d87),_0x1f7051=_0x12278b(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0x8],_0x4a73d8,0x455a14ed),_0x2f7355=_0x12278b(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0xd],_0x46d2de,0xa9e3e905),_0x19f10c=_0x12278b(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0x2],_0x220d2e,0xfcefa3f8),_0x2482a8=_0x12278b(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0x7],_0x430a59,0x676f02d9),_0x1f7051=_0x12278b(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0xc],_0x4a73d8,0x8d2a4c8a),_0x2f7355=_0xb0646d(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0x5],_0x50e78c,0xfffa3942),_0x19f10c=_0xb0646d(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0x8],_0xa3d3ab,0x8771f681),_0x2482a8=_0xb0646d(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0xb],_0x4efa7f,0x6d9d6122),_0x1f7051=_0xb0646d(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0xe],_0x2761a6,0xfde5380c),_0x2f7355=_0xb0646d(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0x1],_0x50e78c,0xa4beea44),_0x19f10c=_0xb0646d(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0x4],_0xa3d3ab,0x4bdecfa9),_0x2482a8=_0xb0646d(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0x7],_0x4efa7f,0xf6bb4b60),_0x1f7051=_0xb0646d(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0xa],_0x2761a6,0xbebfbc70),_0x2f7355=_0xb0646d(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0xd],_0x50e78c,0x289b7ec6),_0x19f10c=_0xb0646d(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0x0],_0xa3d3ab,0xeaa127fa),_0x2482a8=_0xb0646d(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0x3],_0x4efa7f,0xd4ef3085),_0x1f7051=_0xb0646d(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0x6],_0x2761a6,0x4881d05),_0x2f7355=_0xb0646d(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0x9],_0x50e78c,0xd9d4d039),_0x19f10c=_0xb0646d(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0xc],_0xa3d3ab,0xe6db99e5),_0x2482a8=_0xb0646d(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0xf],_0x4efa7f,0x1fa27cf8),_0x1f7051=_0xb0646d(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0x2],_0x2761a6,0xc4ac5665),_0x2f7355=_0x27b813(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0x0],_0x536e7e,0xf4292244),_0x19f10c=_0x27b813(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0x7],_0x23cf9d,0x432aff97),_0x2482a8=_0x27b813(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0xe],_0xcd914a,0xab9423a7),_0x1f7051=_0x27b813(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0x5],_0x4ba120,0xfc93a039),_0x2f7355=_0x27b813(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0xc],_0x536e7e,0x655b59c3),_0x19f10c=_0x27b813(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0x3],_0x23cf9d,0x8f0ccc92),_0x2482a8=_0x27b813(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0xa],_0xcd914a,0xffeff47d),_0x1f7051=_0x27b813(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0x1],_0x4ba120,0x85845dd1),_0x2f7355=_0x27b813(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0x8],_0x536e7e,0x6fa87e4f),_0x19f10c=_0x27b813(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0xf],_0x23cf9d,0xfe2ce6e0),_0x2482a8=_0x27b813(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0x6],_0xcd914a,0xa3014314),_0x1f7051=_0x27b813(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0xd],_0x4ba120,0x4e0811a1),_0x2f7355=_0x27b813(_0x2f7355,_0x1f7051,_0x2482a8,_0x19f10c,_0x47fa2e[_0xe5d023+0x4],_0x536e7e,0xf7537e82),_0x19f10c=_0x27b813(_0x19f10c,_0x2f7355,_0x1f7051,_0x2482a8,_0x47fa2e[_0xe5d023+0xb],_0x23cf9d,0xbd3af235),_0x2482a8=_0x27b813(_0x2482a8,_0x19f10c,_0x2f7355,_0x1f7051,_0x47fa2e[_0xe5d023+0x2],_0xcd914a,0x2ad7d2bb),_0x1f7051=_0x27b813(_0x1f7051,_0x2482a8,_0x19f10c,_0x2f7355,_0x47fa2e[_0xe5d023+0x9],_0x4ba120,0xeb86d391),_0x2f7355=_0x20e2a0(_0x2f7355,_0xefa090),_0x1f7051=_0x20e2a0(_0x1f7051,_0x2ec3b7),_0x2482a8=_0x20e2a0(_0x2482a8,_0x34bee9),_0x19f10c=_0x20e2a0(_0x19f10c,_0x397ec3);var _0x22812d=_0x2d472f(_0x2f7355)+_0x2d472f(_0x1f7051)+_0x2d472f(_0x2482a8)+_0x2d472f(_0x19f10c);return _0x22812d[_0x3688('0x16','R*4n')]();}function safeGet(_0x452d37){try{if(typeof JSON[_0x3688('0x5','2J!g')](_0x452d37)==_0x3688('0x61','N13p')){return!![];}}catch(_0x26bd7c){console['log'](_0x26bd7c);console[_0x3688('0x10','eZ2f')](_0x3688('0x17','RvF3'));return![];}}

function Env(name, opts) {
    class Http {
      constructor(env) {
        this.env = env
      }
  
      send(opts, method = 'GET') {
        opts = typeof opts === 'string' ? {
          url: opts
        } : opts
        let sender = this.get
        if (method === 'POST') {
          sender = this.post
        }
        return new Promise((resolve, reject) => {
          sender.call(this, opts, (err, resp, body) => {
            if (err) reject(err)
            else resolve(resp)
          })
        })
      }
  
      get(opts) {
        return this.send.call(this.env, opts)
      }
  
      post(opts) {
        return this.send.call(this.env, opts, 'POST')
      }
    }
  
    return new (class {
      constructor(name, opts) {
        this.name = name
        this.http = new Http(this)
        this.data = null
        this.dataFile = 'box.dat'
        this.logs = []
        this.isMute = false
        this.isNeedRewrite = false
        this.logSeparator = '\n'
        this.startTime = new Date().getTime()
        Object.assign(this, opts)
        this.log('', `🔔${this.name}, 开始!`)
      }
  
      isNode() {
        return 'undefined' !== typeof module && !!module.exports
      }
  
      isQuanX() {
        return 'undefined' !== typeof $task
      }
  
      isSurge() {
        return 'undefined' !== typeof $httpClient && 'undefined' === typeof $loon
      }
  
      isLoon() {
        return 'undefined' !== typeof $loon
      }
  
      isShadowrocket() {
        return 'undefined' !== typeof $rocket
      }
  
      toObj(str, defaultValue = null) {
        try {
          return JSON.parse(str)
        } catch {
          return defaultValue
        }
      }
  
      toStr(obj, defaultValue = null) {
        try {
          return JSON.stringify(obj)
        } catch {
          return defaultValue
        }
      }
  
      getjson(key, defaultValue) {
        let json = defaultValue
        const val = this.getdata(key)
        if (val) {
          try {
            json = JSON.parse(this.getdata(key))
          } catch { }
        }
        return json
      }
  
      setjson(val, key) {
        try {
          return this.setdata(JSON.stringify(val), key)
        } catch {
          return false
        }
      }
  
      getScript(url) {
        return new Promise((resolve) => {
          this.get({
            url
          }, (err, resp, body) => resolve(body))
        })
      }
  
      runScript(script, runOpts) {
        return new Promise((resolve) => {
          let httpapi = this.getdata('@chavy_boxjs_userCfgs.httpapi')
          httpapi = httpapi ? httpapi.replace(/\n/g, '').trim() : httpapi
          let httpapi_timeout = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
          httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20
          httpapi_timeout = runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout
          const [key, addr] = httpapi.split('@')
          const opts = {
            url: `http://${addr}/v1/scripting/evaluate`,
            body: {
              script_text: script,
              mock_type: 'cron',
              timeout: httpapi_timeout
            },
            headers: {
              'X-Key': key,
              'Accept': '*/*'
            }
          }
          this.post(opts, (err, resp, body) => resolve(body))
        }).catch((e) => this.logErr(e))
      }
  
      loaddata() {
        if (this.isNode()) {
          this.fs = this.fs ? this.fs : require('fs')
          this.path = this.path ? this.path : require('path')
          const curDirDataFilePath = this.path.resolve(this.dataFile)
          const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
          const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
          const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
          if (isCurDirDataFile || isRootDirDataFile) {
            const datPath = isCurDirDataFile ? curDirDataFilePath : rootDirDataFilePath
            try {
              return JSON.parse(this.fs.readFileSync(datPath))
            } catch (e) {
              return {}
            }
          } else return {}
        } else return {}
      }
  
      writedata() {
        if (this.isNode()) {
          this.fs = this.fs ? this.fs : require('fs')
          this.path = this.path ? this.path : require('path')
          const curDirDataFilePath = this.path.resolve(this.dataFile)
          const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
          const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
          const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
          const jsondata = JSON.stringify(this.data)
          if (isCurDirDataFile) {
            this.fs.writeFileSync(curDirDataFilePath, jsondata)
          } else if (isRootDirDataFile) {
            this.fs.writeFileSync(rootDirDataFilePath, jsondata)
          } else {
            this.fs.writeFileSync(curDirDataFilePath, jsondata)
          }
        }
      }
  
      lodash_get(source, path, defaultValue = undefined) {
        const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
        let result = source
        for (const p of paths) {
          result = Object(result)[p]
          if (result === undefined) {
            return defaultValue
          }
        }
        return result
      }
  
      lodash_set(obj, path, value) {
        if (Object(obj) !== obj) return obj
        if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || []
        path
          .slice(0, -1)
          .reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {})), obj)[
          path[path.length - 1]
        ] = value
        return obj
      }
  
      getdata(key) {
        let val = this.getval(key)
        // 如果以 @
        if (/^@/.test(key)) {
          const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
          const objval = objkey ? this.getval(objkey) : ''
          if (objval) {
            try {
              const objedval = JSON.parse(objval)
              val = objedval ? this.lodash_get(objedval, paths, '') : val
            } catch (e) {
              val = ''
            }
          }
        }
        return val
      }
  
      setdata(val, key) {
        let issuc = false
        if (/^@/.test(key)) {
          const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
          const objdat = this.getval(objkey)
          const objval = objkey ? (objdat === 'null' ? null : objdat || '{}') : '{}'
          try {
            const objedval = JSON.parse(objval)
            this.lodash_set(objedval, paths, val)
            issuc = this.setval(JSON.stringify(objedval), objkey)
          } catch (e) {
            const objedval = {}
            this.lodash_set(objedval, paths, val)
            issuc = this.setval(JSON.stringify(objedval), objkey)
          }
        } else {
          issuc = this.setval(val, key)
        }
        return issuc
      }
  
      getval(key) {
        if (this.isSurge() || this.isLoon()) {
          return $persistentStore.read(key)
        } else if (this.isQuanX()) {
          return $prefs.valueForKey(key)
        } else if (this.isNode()) {
          this.data = this.loaddata()
          return this.data[key]
        } else {
          return (this.data && this.data[key]) || null
        }
      }
  
      setval(val, key) {
        if (this.isSurge() || this.isLoon()) {
          return $persistentStore.write(val, key)
        } else if (this.isQuanX()) {
          return $prefs.setValueForKey(val, key)
        } else if (this.isNode()) {
          this.data = this.loaddata()
          this.data[key] = val
          this.writedata()
          return true
        } else {
          return (this.data && this.data[key]) || null
        }
      }
  
      initGotEnv(opts) {
        this.got = this.got ? this.got : require('got')
        this.cktough = this.cktough ? this.cktough : require('tough-cookie')
        this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()
        if (opts) {
          opts.headers = opts.headers ? opts.headers : {}
          if (undefined === opts.headers.Cookie && undefined === opts.cookieJar) {
            opts.cookieJar = this.ckjar
          }
        }
      }
  
      get(opts, callback = () => { }) {
        if (opts.headers) {
          delete opts.headers['Content-Type']
          delete opts.headers['Content-Length']
        }
        if (this.isSurge() || this.isLoon()) {
          if (this.isSurge() && this.isNeedRewrite) {
            opts.headers = opts.headers || {}
            Object.assign(opts.headers, {
              'X-Surge-Skip-Scripting': false
            })
          }
          $httpClient.get(opts, (err, resp, body) => {
            if (!err && resp) {
              resp.body = body
              resp.statusCode = resp.status
            }
            callback(err, resp, body)
          })
        } else if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            opts.opts = opts.opts || {}
            Object.assign(opts.opts, {
              hints: false
            })
          }
          $task.fetch(opts).then(
            (resp) => {
              const {
                statusCode: status,
                statusCode,
                headers,
                body
              } = resp
              callback(null, {
                status,
                statusCode,
                headers,
                body
              }, body)
            },
            (err) => callback(err)
          )
        } else if (this.isNode()) {
          this.initGotEnv(opts)
          this.got(opts)
            .on('redirect', (resp, nextOpts) => {
              try {
                if (resp.headers['set-cookie']) {
                  const ck = resp.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
                  if (ck) {
                    this.ckjar.setCookieSync(ck, null)
                  }
                  nextOpts.cookieJar = this.ckjar
                }
              } catch (e) {
                this.logErr(e)
              }
              // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
            })
            .then(
              (resp) => {
                const {
                  statusCode: status,
                  statusCode,
                  headers,
                  body
                } = resp
                callback(null, {
                  status,
                  statusCode,
                  headers,
                  body
                }, body)
              },
              (err) => {
                const {
                  message: error,
                  response: resp
                } = err
                callback(error, resp, resp && resp.body)
              }
            )
        }
      }
  
      post(opts, callback = () => { }) {
        const method = opts.method ? opts.method.toLocaleLowerCase() : 'post'
        // 如果指定了请求体, 但没指定`Content-Type`, 则自动生成
        if (opts.body && opts.headers && !opts.headers['Content-Type']) {
          opts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }
        if (opts.headers) delete opts.headers['Content-Length']
        if (this.isSurge() || this.isLoon()) {
          if (this.isSurge() && this.isNeedRewrite) {
            opts.headers = opts.headers || {}
            Object.assign(opts.headers, {
              'X-Surge-Skip-Scripting': false
            })
          }
          $httpClient[method](opts, (err, resp, body) => {
            if (!err && resp) {
              resp.body = body
              resp.statusCode = resp.status
            }
            callback(err, resp, body)
          })
        } else if (this.isQuanX()) {
          opts.method = method
          if (this.isNeedRewrite) {
            opts.opts = opts.opts || {}
            Object.assign(opts.opts, {
              hints: false
            })
          }
          $task.fetch(opts).then(
            (resp) => {
              const {
                statusCode: status,
                statusCode,
                headers,
                body
              } = resp
              callback(null, {
                status,
                statusCode,
                headers,
                body
              }, body)
            },
            (err) => callback(err)
          )
        } else if (this.isNode()) {
          this.initGotEnv(opts)
          const {
            url,
            ..._opts
          } = opts
          this.got[method](url, _opts).then(
            (resp) => {
              const {
                statusCode: status,
                statusCode,
                headers,
                body
              } = resp
              callback(null, {
                status,
                statusCode,
                headers,
                body
              }, body)
            },
            (err) => {
              const {
                message: error,
                response: resp
              } = err
              callback(error, resp, resp && resp.body)
            }
          )
        }
      }
      /**
       *
       * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
       *    :$.time('yyyyMMddHHmmssS')
       *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
       *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
       * @param {string} fmt 格式化参数
       * @param {number} 可选: 根据指定时间戳返回格式化日期
       *
       */
      time(fmt, ts = null) {
        const date = ts ? new Date(ts) : new Date()
        let o = {
          'M+': date.getMonth() + 1,
          'd+': date.getDate(),
          'H+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds(),
          'q+': Math.floor((date.getMonth() + 3) / 3),
          'S': date.getMilliseconds()
        }
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        for (let k in o)
          if (new RegExp('(' + k + ')').test(fmt))
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
        return fmt
      }
  
      /**
       * 系统通知
       *
       * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
       *
       * 示例:
       * $.msg(title, subt, desc, 'twitter://')
       * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
       * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
       *
       * @param {*} title 标题
       * @param {*} subt 副标题
       * @param {*} desc 通知详情
       * @param {*} opts 通知参数
       *
       */
      msg(title = name, subt = '', desc = '', opts) {
        const toEnvOpts = (rawopts) => {
          if (!rawopts) return rawopts
          if (typeof rawopts === 'string') {
            if (this.isLoon()) return rawopts
            else if (this.isQuanX()) return {
              'open-url': rawopts
            }
            else if (this.isSurge()) return {
              url: rawopts
            }
            else return undefined
          } else if (typeof rawopts === 'object') {
            if (this.isLoon()) {
              let openUrl = rawopts.openUrl || rawopts.url || rawopts['open-url']
              let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
              return {
                openUrl,
                mediaUrl
              }
            } else if (this.isQuanX()) {
              let openUrl = rawopts['open-url'] || rawopts.url || rawopts.openUrl
              let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
              return {
                'open-url': openUrl,
                'media-url': mediaUrl
              }
            } else if (this.isSurge()) {
              let openUrl = rawopts.url || rawopts.openUrl || rawopts['open-url']
              return {
                url: openUrl
              }
            }
          } else {
            return undefined
          }
        }
        if (!this.isMute) {
          if (this.isSurge() || this.isLoon()) {
            $notification.post(title, subt, desc, toEnvOpts(opts))
          } else if (this.isQuanX()) {
            $notify(title, subt, desc, toEnvOpts(opts))
          }
        }
        if (!this.isMuteLog) {
          let logs = ['', '==============📣系统通知📣==============']
          logs.push(title)
          subt ? logs.push(subt) : ''
          desc ? logs.push(desc) : ''
          console.log(logs.join('\n'))
          this.logs = this.logs.concat(logs)
        }
      }
  
      log(...logs) {
        if (logs.length > 0) {
          this.logs = [...this.logs, ...logs]
        }
        console.log(logs.join(this.logSeparator))
      }
  
      logErr(err, msg) {
        const isPrintSack = !this.isSurge() && !this.isQuanX() && !this.isLoon()
        if (!isPrintSack) {
          this.log('', `❗️${this.name}, 错误!`, err)
        } else {
          this.log('', `❗️${this.name}, 错误!`, err.stack)
        }
      }
  
      wait(time) {
        return new Promise((resolve) => setTimeout(resolve, time))
      }
  
      done(val = {}) {
        const endTime = new Date().getTime()
        const costTime = (endTime - this.startTime) / 1000
        this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
        this.log()
        if (this.isSurge() || this.isQuanX() || this.isLoon()) {
          $done(val)
        }
      }
    })(name, opts)
  }