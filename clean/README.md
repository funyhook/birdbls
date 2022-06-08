####使用必读
## 清助力（replace.sh）使用方法：
#### 1、进入青龙容器
``` shell
docker exec -it 你的青龙名称 bash
```
#### 2、clear.sh
``` shell
2.10版本：
cd /ql/config && wget https://ghproxy.com/https://raw.githubusercontent.com/funyhook/birdbls/main/clean/clear.sh

2.12及以上版本：
cd /ql/data/config && wget https://ghproxy.com/https://raw.githubusercontent.com/funyhook/birdbls/main/clean/clear.sh

```

#### 3、打开青龙面板-新建定时任务
``` shell

2.10版本：
task /ql/config/clear.sh 

2.12及以上版本
task /ql/data/config/clear.sh
```
#### 4、于拉库命令先后执行，建议间隔至少50秒
- 举例：
  - 拉库命令 ：30 * * * * # 每小时三十分执行
  - 清理脚本 ：50 30 * * * * # 每小时三十分五十秒执行


# 新版青龙（V2.13） 订阅管理 可以直接拉库，并在拉库之后执行任何操作！！！
### 按照下图即可一劳永逸！


<img width="481" alt="image" src="https://user-images.githubusercontent.com/24806319/172526530-59f327d9-07e7-43ac-946a-c448079f4b9b.png">


