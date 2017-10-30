import * as Router from 'koa-router'
import { checkService } from '../service'

const router = new Router

router.get('/check', async ctx => {
    ctx.body = await checkService()
})

export default router
