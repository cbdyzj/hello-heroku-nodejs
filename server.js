const express = require('express')
const { join } = require('path')

const port = process.env.PORT || 3000

const app = express()

app.use(express.static(join(__dirname, 'static')))
app.get('/ping', (req, res) => res.end('pong'))

app.listen(port)
