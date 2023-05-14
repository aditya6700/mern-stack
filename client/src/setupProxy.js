// do not change to es6. react app will not work
const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
    target: 'http://localhost:1432',
    changeOrigin: true
}

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware(proxy)
  );
};