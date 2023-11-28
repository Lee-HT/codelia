const { createProxyMiddleware } = require("http-proxy-middleware");
const targetUrl = process.env.REACT_APP_HOST;

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: targetUrl,
      changeOrigin: true,
    })
  );
};
