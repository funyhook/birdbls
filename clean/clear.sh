#!/bin/bash
cd ../scripts/ 

arr=("JD-Scripts" "zero205" "Aaron-lv" "lsh26" "transfer" "fastgit" "shufflewzc" "smiek2121" "smiek2221" "lukelucky6" "fatelight" "Annyoo2021" "KingRan521" "smiek")
echo "#by：微信公众号：玩机匠"


#echo ${array[0]}
for((i=0;i<${#arr[@]};i++));
do
    echo "正在清理${arr[$i]}。。。。。。"
    sed -i  's/'${arr[$i]}'/test/' `grep -rl ${arr[$i]} ./`>/dev/null 2>&1
    if [ $? -ne 0 ]; then
        echo "已清理过，跳过"
    else
        echo "${arr[$i]}库清理成功！"
    fi 
done

#clean inviteCodes
echo "正在清理偷助力1。。。。。。"
sed -i "s/deb51eda516f4ad481fccb34b4a65203/564e43ecaa414556a7b3d42aa9a7038d/g" `grep "564e43ecaa414556a7b3d42aa9a7038d" -rl  ./*`>/dev/null 2>&1
sed -i "s/0ca1c88a3437428c9f0c2376af590c7f/ba7064c41dba48c5a8078cef2da0f6e2/g" `grep "0ca1c88a3437428c9f0c2376af590c7f" -rl  ./*`>/dev/null 2>&1
sed -i "s/k1Nobb+P0er+C2sysxnx\/P2KELO9izRVpwCyqu0eqVZ5aW7RHzlMobrzJ\/e9r\/uf/pxQwblvEb6l5N7qNrN9VWF4tLNYA4seuA67MOIYQxEk3Vl9+AVo4NF+tgyeIc6A6kdK3rLBQpEQH9V4tdrrh0w==/g" `grep "k1Nobb+P0er+C2sysxnx\/P2KELO9izRVpwCyqu0eqVZ5aW7RHzlMobrzJ\/e9r\/uf" -rl  ./*`>/dev/null 2>&1
sed -i "s/$.newShareCodes \= inviteCodes/\/\//g" `grep "$.newShareCodes \= inviteCodes" -rl  ./*` >/dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "【偷助力1】已清理过，跳过"
else
    echo "【偷助力1】助力清理成功！"
fi  

echo "正在清理偷助力2。。。。。。"
sed -i "s/deb51eda516f4ad481fccb34b4a65203/564e43ecaa414556a7b3d42aa9a7038d/g" `grep "564e43ecaa414556a7b3d42aa9a7038d" -rl  ./*`>/dev/null 2>&1
sed -i "s/k1Nobb+P0er+C2sysxnx\/P2KELO9izRVpwCyqu0eqVZ5aW7RHzlMobrzJ\/e9r\/uf/pxQwblvEb6l5N7qNrN9VWF4tLNYA4seuA67MOIYQxEk3Vl9+AVo4NF+tgyeIc6A6kdK3rLBQpEQH9V4tdrrh0w==/g" `grep "k1Nobb+P0er+C2sysxnx\/P2KELO9izRVpwCyqu0eqVZ5aW7RHzlMobrzJ\/e9r\/uf" -rl  ./*`>/dev/null 2>&1
sed -i "s/newShareCodes \= inviteCodes/\/\//g" `grep "newShareCodes \= inviteCodes" -rl  ./*` >/dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "【偷助力2】已清理过，跳过"
else
    echo "【偷助力2】助力清理成功！"
fi  
    
echo "正在清理偷邀请1。。。。。。"
sed -i "s/deb51eda516f4ad481fccb34b4a65203/564e43ecaa414556a7b3d42aa9a7038d/g" `grep "564e43ecaa414556a7b3d42aa9a7038d" -rl  ./*`>/dev/null 2>&1
sed -i "s/k1Nobb+P0er+C2sysxnx\/P2KELO9izRVpwCyqu0eqVZ5aW7RHzlMobrzJ\/e9r\/uf/pxQwblvEb6l5N7qNrN9VWF4tLNYA4seuA67MOIYQxEk3Vl9+AVo4NF+tgyeIc6A6kdK3rLBQpEQH9V4tdrrh0w==/g" `grep "k1Nobb+P0er+C2sysxnx\/P2KELO9izRVpwCyqu0eqVZ5aW7RHzlMobrzJ\/e9r\/uf" -rl  ./*`>/dev/null 2>&1
sed -i "s/$.newShareCodes \= shareCodes/\/\//g" `grep "$.newShareCodes \= shareCodes" -rl  ./*`>/dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "【偷邀请1】已清理过，跳过"
else
    echo "【偷邀请1】助力清理成功！"
fi  
    
echo "正在清理偷邀请2。。。。。。"
sed -i "s/deb51eda516f4ad481fccb34b4a65203/564e43ecaa414556a7b3d42aa9a7038d/g" `grep "564e43ecaa414556a7b3d42aa9a7038d" -rl  ./*`>/dev/null 2>&1
sed -i "s/k1Nobb+P0er+C2sysxnx\/P2KELO9izRVpwCyqu0eqVZ5aW7RHzlMobrzJ\/e9r\/uf/pxQwblvEb6l5N7qNrN9VWF4tLNYA4seuA67MOIYQxEk3Vl9+AVo4NF+tgyeIc6A6kdK3rLBQpEQH9V4tdrrh0w==/g" `grep "k1Nobb+P0er+C2sysxnx\/P2KELO9izRVpwCyqu0eqVZ5aW7RHzlMobrzJ\/e9r\/uf" -rl  ./*`>/dev/null 2>&1
sed -i "s/newShareCodes \= shareCodes/\/\//g" `grep "newShareCodes \= shareCodes" -rl  ./*`>/dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "【偷邀请2】已清理过，跳过"
else
    echo "【偷邀请2】助力清理成功！"
fi  

    
    
