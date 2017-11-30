import * as Router from 'koa-router'

const router = new Router

router.get('/api/ping', ctx => ctx.body = 'pong')

router.post('/api/login', async ctx => {
    const { username, password } = ctx.request.body

    if (username !== 'Ada' || password !== 'password') {
        return ctx.body = { message: '登录失败!' }
    }

    ctx.session.user = 'Ada'
    return ctx.body = { message: '登录成功!' }
})

router.get('/api/login', async ctx =>
    ctx.body = { user: ctx.session.user || 'Anonymous' })


export default router
