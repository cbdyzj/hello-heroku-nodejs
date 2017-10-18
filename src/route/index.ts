import * as Router from 'koa-router'
import { checkService } from '../service'

const router = new Router

router.get('/check', ctx => {
    ctx.body = checkService()
})

export default router
