const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')

const port = process.env.PORT || 8080

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.all('/echo', (req, res) => {
    const { query, body } = req
    console.log(query, body)
    res.json({ query, body })
})
http.createServer(app).listen(port, () => console.info(`server listening ${port}`))
