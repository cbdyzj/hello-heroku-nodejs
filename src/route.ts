import * as Router from 'koa-router'
import database from './database'

const router = new Router

router.get('/api/ping', ctx => ctx.body = 'pong')

router.post('/api/login', async ctx => {
    console.info('登录请求：', ctx.request.body)
    const { username, password } = ctx.request.body
    if (username !== database.user.username
        || password !== database.user.password) {
        return ctx.body = { message: '登录失败!' }
    }
    ctx.session.user = database.user
    console.log(ctx.session.user)
    return ctx.body = { message: '登录成功!' }
})

router.get('/api/login', async ctx => {
    if (!ctx.session.user) {
        return ctx.body = { user: 'Anonymous' }
    }
    return ctx.body = { user: ctx.session.user }
})


export default router
