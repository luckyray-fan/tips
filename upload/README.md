## 作用

将图片文件上传到电脑上

## 使用方法

- 手机电脑连接相同 wifi, 手机给电脑开热点, 电脑给手机开热点都可以
- 找到电脑的 ip 地址, 192.168.\*.\*, 在终端相应路径下输入 node uploadUrl
- 手机浏览器访问 192.168.\*.\*:5555 (端口), 我用的是 chrome
- 文件将会被上传至 image 文件夹

> 只能上传图片, 在 server 端写了判定的, 相关[博客地址]()
