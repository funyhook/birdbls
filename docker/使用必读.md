
## 清理docker冗余日志（clearDockerLog.sh）释放空间 :
#### 1、进入青龙容器
``` shell
docker exec -it 你的青龙名称 bash
```
#### 2、拉取clearDockerLog.sh
``` shell
cd /ql/config && wget  https://ghproxy.com/https://raw.githubusercontent.com/funyhook/cleansteal/main/clearDockerLog.sh
```
#### 3、新建定时任务（定时自己设置）

``` shell
task /ql/config/clearDockerLog.sh 

