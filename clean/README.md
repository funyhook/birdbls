####使用必读
## 清助力（replace.sh）使用方法：
#### 1、进入青龙容器
``` shell
docker exec -it 你的青龙名称 bash
```
#### 2、拉取replace.sh
``` shell
cd /ql/config && wget https://ghproxy.com/https://raw.githubusercontent.com/funyhook/birdbls/main/clean/clear.sh
```
#### 3、打开青龙面板-新建定时任务
``` shell
task /ql/config/replace.sh 
```
#### 4、于拉库命令先后执行，建议间隔至少50秒
- 举例：
  - 拉库命令 ：30 * * * * # 每小时三十分执行
  - 清理脚本 ：50 30 * * * * # 每小时三十分五十秒执行

