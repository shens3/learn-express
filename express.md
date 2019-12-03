1. 集成路由、二级路由、模板路由
2. 中间件、静态文件
3. 内置模板引擎
4. req,rep 有新增方法 render send json;path query params 
5. 中间件可扩展成异步

### 包
1. http
 createServe().listener
2. url
 parse(req.url).pathname
 parse(req.url).query
3. fs
 createReadStream.pipe
4. methods
5. path-to-regexp
6. body-parser
7. multer
 解析文件上传
8. cookie-parser
9. express-session


### 架构
application
middleware
router
  route
  layer


### 关键思路
lazyrouter
尽量少循环匹配，通过记录
区分路由和中间件: 有没有route


express.Route
是一个类又是一个可执行的函数

function Router() {
  let route = (req, res, next) => {

  };
  route.stack = []
  return route;
}

n级路由匹配：进删出加

路径参数
1. 正则
2. 发布订阅 params


静态文件中间件
express.static(dirname)
扩展方法中间件

set('views',)
set('view engine')
engine('html')    
get('views')