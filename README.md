# weijie_repository_public

https://juejin.im/post/6859388700858679303
现在，我们用git remote -v查看远程库信息，可以看到两个远程库
eg
git remote add github git@github.com:Jackson0714/PassJava-Learning.
git remote add gitee git@gitee.com:jayh2018/PassJava-Learning.git
git remote -v
同步：
GitHub拉取本地，使用命令： git pull github master 
码云拉取到本地，使用命令： git pull gitee master 
如果要推送到GitHub，使用命令： git push github master 
如果要推送到码云，使用命令： git push gitee master    强制推送 git push -f gitee master
这样一来，本地库就可以同时与多个远程库互相同步。

git remote add gitee https://gitee.com/qq1257554929/ylz_erp.git
