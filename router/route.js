const Layer = require('./layer');

function Route(path) {
  this.path = path;
  this.stack = [];
  this.methods = {};
}

Route.prototype.get = function(handler) {
  const layer = new Layer('/' , {}, handler);
  layer.method = 'get';
  this.stack.push(layer);
  this.methods['get'] = true;
}

Route.prototype.dispatch = function(req, res, out) {
  let idx = 0;
  let layer;
  const next = () => {
    if (idx >= this.stack.length) return out();
    layer = this.stack[idx++];
    if (layer.method === req.method.toLowerCase()) {
      layer.handle(req, res, next);
    } else {
      next()
    }
  };
  next();
}

module.exports = Route;