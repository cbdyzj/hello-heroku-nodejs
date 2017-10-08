const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
http.createServer(app).listen(port, () => console.info(`server listening ${port}`))
