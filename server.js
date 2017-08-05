const express = require('express')
const path = require('path')
const http = require('http')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
http.createServer(app).listen(8080)
console.info('server listening 8080')
