
# 清助力（replace.sh）使用方法：
### 1、进入青龙容器
``` shell
docker exec -it 你的青龙名称 bash
```
### 2、拉取replace.sh
``` shell
cd /ql/config && wget https://ghproxy.com/https://raw.githubusercontent.com/funyhook/cleansteal/main/replace.sh
```
### 3、打开青龙面板-新建定时任务 
``` shell
task /ql/config/replace.sh 
```
### 4、可以将清理脚本定时任务设置在定时拉库后1分钟执行！~

# 清理docker日志（clearDockerLog.sh）使用方法:
### 1、进入青龙容器
``` shell
docker exec -it 你的青龙名称 bash
```
### 2、拉取clearDockerLog.sh
``` shell
cd /ql/config && wget  https://ghproxy.com/https://raw.githubusercontent.com/funyhook/cleansteal/main/clearDockerLog.sh
```
### 3、新建定时任务（定时自己设置）
``` shell
task /ql/config/clearDockerLog.sh 
```
