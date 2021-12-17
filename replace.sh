#!/bin/bash
cd ../scripts/ 

arr=("zero205" "Aaron-lv" "lsh26" "transfer" "fastgit" "smiek2121" "lukelucky6" "fatelight")

sed -i  's/zero205/test/' `grep -rl zero205 ./`
sed -i  's/Aaron-l/test/' `grep -rl Aaron-l ./`
sed -i  's/lsh26/test/' `grep -rl lsh26 ./`
sed -i  's/transfer/test/' `grep -rl transfer ./`
sed -i  's/fastgit/test/' `grep -rl fastgit ./`
sed -i  's/smiek2121/test/' `grep -rl smiek2121 ./`
sed -i  's/jdsharecode/test/g' `grep -rl jdsharecode  ./`
sed -i  's/fatelight/test/g' `grep -rl fatelight  ./`
sed -i  's/lukelucky6/test/g' `grep -rl lukelucky6  ./`

#clean inviteCodes
sed -i "s/$.newShareCodes \= inviteCodes/\/\//g" `grep "$.newShareCodes \= inviteCodes" -rl  ./*` >/dev/null 2>&1
 if [ $? -ne 0 ]; then
        echo "已清理过，跳过"
    else
        echo "inviteCodes库清理成功！"
    fi  

sed -i "s/newShareCodes \= inviteCodes/\/\//g" `grep "newShareCodes \= inviteCodes" -rl  ./*` >/dev/null 2>&1
 if [ $? -ne 0 ]; then
        echo "已清理过，跳过"
    else
        echo "inviteCodes库清理成功！"
    fi  
