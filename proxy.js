const Koa = require('koa')
const serve = require('koa-static')
const logger = require('koa-logger')
const ProxyServer = require('http-proxy')
const Router = require('koa-router')

const app = new Koa
const router = new Router
const proxy = new ProxyServer({ changeOrigin: true })

router.all(/^\/api/, ctx => new Promise((resolve, reject) =>
    proxy.web(
        ctx.req,
        ctx.res,
        { target: 'http://127.0.0.1:3000' },
        error => error ? reject(error) : resolve()
    )
))

app.use(logger())
app.use(router.routes())
app.use(ctx => new Promise((resolve, reject) =>
    proxy.web(
        ctx.req,
        ctx.res,
        { target: 'http://127.0.0.1:4200' },
        error => error ? reject(error) : resolve()
    )
))

require('./server')
require('./dist/server')
app.listen(8000)