import * as Router from 'koa-router'

const router = new Router

router.get('/api/ping', ctx => ctx.body = 'pong')

router.get('/api/login', ctx => ctx.body = { user: ctx.session.user || 'Anonymous' })

router.post('/api/login', async ctx => ctx.body = login(ctx.request.body, ctx.session))

function login({ username, password }, session) {
    if (username !== 'Ada' || password !== 'password') {
        return { message: '登录失败' }
    } else {
        session.user = 'Ada'
        return { message: '登陆成功' }
    }
}

export default router
