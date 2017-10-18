import * as Koa from 'koa'
import * as serve from 'koa-static'
import * as logger from 'koa-logger'
import * as jwt from 'koa-jwt'
import route from './route'

const app = new Koa

app.use(serve('public'))
app.use(logger())
// app.use(jwt({ secret: 'heroku' }))
app.use(route.routes())

export default app
