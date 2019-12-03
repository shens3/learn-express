const http = require('http');
const Router = require('./router');

function Appliaction() {
  this.router = new Router()
}

Appliaction.prototype.get = function(path, handler) {
  this.router.get(path, handler)
}

Appliaction.prototype.listen = function(...args) {
  http.createServer((req, res) => {
    this.router.handle(req, res);
  }).listen(...args)
}

module.exports = Appliaction;