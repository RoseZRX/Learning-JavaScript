# Learning-JavaScript

W3C 的 JavaScript Tutorial
https://www.w3schools.com/js/

2020-08-25
1. \<p\>和\<ul\>的区别
  
  
  
  
常用链接
https://www.w3schools.com/js/



Git提交代码：

一次性准备工作：
1. 设置sshkey
ssh-keygen –t rsa
将生成的公钥 id_rsa.pub内容拷贝到网站指定位置



例行工作
1. 进入对应目录，先把git上的代码下载到本地，并生成.git版本管理目录（用git方式，不要用https方式，https方式要输入用户名密码）
git clone git@github.com:RoseZRX/Learning-JavaScript.git（https://github.com/CKTim/BlueTooth.git替换成你之前复制的地址）

2. 进入对应的目录，把想提交的文件，复制到对应位置
cd Learning-JavaScript

3. 提交代码
git add .
git commit  -m  "提交信息"  （注：“提交信息”里面换成你需要，如“first commit”）
git push -u origin master   （注：此操作目的是把本地仓库push到github上面，提交到master分支，git方式可以不要账号密码）



其他：
解决git push代码到github上一直提示输入用户名及密码的问题
https://blog.csdn.net/yychuyu/article/details/80186783?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~default-1.no_search_link&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~default-1.no_search_link


先查看当前方式：

git remote -v


把http方式改为ssh方式。先移除旧的http的origin：

git remote rm origin

再添加新的ssh方式的origin：

git remote add origin git@github.com:yychuyu/linux-system-programming.git

检查一下有没改变成功：

改动完之后直接执行git push是无法推送代码的，需要设置一下上游要跟踪的分支，与此同时会自动执行一次git push命令，此时已经不用要求输入用户名及密码啦！

git push --set-upstream origin master
