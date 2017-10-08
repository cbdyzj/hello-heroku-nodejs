import { Server } from './server'

const port = process.env.PORT

const server = new Server()
server.bootstrap(port)
