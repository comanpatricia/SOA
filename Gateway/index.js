const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// PHP microservice 1
app.use('/php1', createProxyMiddleware({ target: 'http://php1:80', changeOrigin: true }));

// PHP microservice 2
app.use('/php2', createProxyMiddleware({ target: 'http://php2:80', changeOrigin: true }));

// Vue microfrontend 1
app.use('/vue1', createProxyMiddleware({ target: 'http://vue1:80', changeOrigin: true }));

// Vue microfrontend 2
app.use('/vue2', createProxyMiddleware({ target: 'http://vue2:80', changeOrigin: true }));

// Vue microfrontend 3
app.use('/vue3', createProxyMiddleware({ target: 'http://vue3:80', changeOrigin: true }));

app.listen(80, () => {
  console.log('Gateway service listening on port 80');
});
