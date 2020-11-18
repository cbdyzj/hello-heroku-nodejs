# 搞一个Nodejs应用放到Heroku上

[Heroku](https://www.heroku.com/)是一个PAAS厂商，类似新浪云，提供一些的方便的云服务

### Nodejs应用

以这个应用[hello-heroku-nodejs](https://github.com/cbdyzj/hello-heroku-nodejs)为例

- Procfile：这个文件比较重要，它指定了Heroku会执行的命令，格式是`<process type>: <command>`，`web`是一种特殊的`process type`，会塞一个`PORT`到环境变量，所以在JavaScript代码中这样`const port = process.env.PORT`就可以取到了。更多细节参考[Heroku的文档](https://devcenter.heroku.com/articles/procfile)
- 代码仓库：可以把应用与GitHub的代码关联，Heroku可以拿到GitHub的hook，push即可发布
- 域名：可以让自己的域名CNAME到Heroku的应用，需要绑定信用卡💳（支持银联）

