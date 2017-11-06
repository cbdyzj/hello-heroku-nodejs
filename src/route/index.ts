import * as Router from 'koa-router'

const router = new Router

router.get('/ping', ctx => ctx.body = 'pong')

export default router
