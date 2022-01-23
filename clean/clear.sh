#!/bin/bash
#by：微信公众号：玩机匠
cd ../scripts/ 

arr=("zero205" "Aaron-lv" "lsh26" "transfer" "shufflewzc" "fastgit" "smiek2121" "smeik2221" "lukelucky6" "fatelight" "Annyoo2021" "KingRan521" "smiek")

#echo ${array[0]}
for((i=0;i<${#arr[@]};i++));
do
    echo "正在清理${arr[$i]}。。。。。。"
    sleep 1
    sed -i  's/'${arr[$i]}'/test/' `grep -rl ${arr[$i]} ./`>/dev/null 2>&1
    if [ $? -ne 0 ]; then
        echo "已清理过，跳过"
    else
        echo "${arr[$i]}库清理成功！"
    fi 
done

#clean inviteCodes
echo "正在清理偷助力1。。。。。。"
sed -i "s/$.newShareCodes \= inviteCodes/\/\//g" `grep "$.newShareCodes \= inviteCodes" -rl  ./*` >/dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "【偷助力1】已清理过，跳过"
else
    echo "【偷助力1】助力清理成功！"
fi  

echo "正在清理偷助力2。。。。。。"
sed -i "s/newShareCodes \= inviteCodes/\/\//g" `grep "newShareCodes \= inviteCodes" -rl  ./*` >/dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "【偷助力2】已清理过，跳过"
else
    echo "【偷助力2】助力清理成功！"
fi  
    
echo "正在清理偷邀请1。。。。。。"
sed -i "s/$.newShareCodes \= shareCodes/\/\//g" `grep "$.newShareCodes \= shareCodes" -rl  ./*`>/dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "【偷邀请1】已清理过，跳过"
else
    echo "【偷邀请1】助力清理成功！"
fi  
    
echo "正在清理偷邀请2。。。。。。"
sed -i "s/newShareCodes \= shareCodes/\/\//g" `grep "newShareCodes \= shareCodes" -rl  ./*`>/dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "【偷邀请2】已清理过，跳过"
else
    echo "【偷邀请2】助力清理成功！"
fi  
    
    
    
