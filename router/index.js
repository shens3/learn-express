const Layer = require('./layer');
const Route = require('./route');
const url = require('url');

function Router() {
  this.stack = []
}

Router.prototype.get = function(path, handler) {
  const route = this.route(path);
  route.get(handler)
}

// 初始化一个路由注册,用layer包装,并返回一个route
Router.prototype.route = function(path) {
  const route = new Route();
  const layer = new Layer(path, {}, route.dispatch.bind(route));
  this.stack.push(layer);
  layer.route = route;
  return route;
}

// 一次请求触发的handle
Router.prototype.handle = function(req, res) {
  let idx = 0;
  let layer;
  
  const next = () => {
    if (idx >= this.stack.length) return;
    layer = this.stack[idx++];
    if (layer.path === url.parse(req.url).path) {
      layer.handle(req, res, next);
    } else {
      next()
    }
  };
  next();
}

module.exports = Router;