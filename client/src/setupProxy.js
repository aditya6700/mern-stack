import { createProxyMiddleware } from 'http-proxy-middleware';

const proxy = {
    target: 'http://localhost:1432',
    changeOrigin: true
}

export default function(app) {
  app.use(
    '/api',
    createProxyMiddleware(proxy)
  );
};