const { createProxyMiddleware } = require('http-proxy-middleware');
const targetUrl = process.env.REACT_APP_HOST

module.exports = (app) => {
    app.use(
        createProxyMiddleware("/api" , {
            target: targetUrl,
            changeOrigin: true
        })
    );
};