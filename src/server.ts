import * as session from 'express-session'
import * as express from 'express'
import * as http from 'http'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import route from './route'


export class Server {
    app: express.Application = express()
    router: express.Router = express.Router()

    bootstrap(port: number | string = 3000): Server {
        http.createServer(this.app).listen(port, () => console.log(`bind ${port}`))
        return this
    }

    constructor() {
        //中间件
        this.app.use(session({
            resave: false,
            saveUninitialized: false,
            secret: 'node-stack',
        }))
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))

        this.app.use(express.static(path.join(__dirname, '../public')))

        //路由
        route(this.router)
        this.app.use(this.router)
    }

}