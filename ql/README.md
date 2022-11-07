#青龙一键部署命令
```script
docker run -dit \
-v $PWD/ql/config:/ql/config \
-v $PWD/ql/scripts:/ql/scripts \
-v $PWD/ql/repo:/ql/repo \
-v $PWD/ql/log:/ql/log \
-v $PWD/ql/db:/ql/db \
-v $PWD/ql/jbot:/ql/jbot \
-v $PWD/ql/raw:/ql/raw \
-v $PWD/ql/deps:/ql/deps \
-p 5700:5700 \
--name mql \
--hostname mql \
--restart always \
whyour/qinglong:2.11.3
```
