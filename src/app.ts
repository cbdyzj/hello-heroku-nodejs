import * as path from 'path'
import * as Koa from 'koa'
import * as serve from 'koa-static'
import * as bodyParser from 'koa-bodyparser'
import * as session from 'koa-session'

import route from './route'

const app = new Koa
app.keys = ['cbdyzj']

app.use(serve(path.join(__dirname, '../public')))

app.use(bodyParser())
app.use(session(app))

app.use(route.routes())

export default app
