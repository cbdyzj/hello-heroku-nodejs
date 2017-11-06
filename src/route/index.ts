import * as Router from 'koa-router'
import database from '../database'

const router = new Router

router.get('/ping', ctx => ctx.body = 'pong')


router.post('/login', async ctx => {
    console.info('login')
    ctx.body = database
})

export default router
