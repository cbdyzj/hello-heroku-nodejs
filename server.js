const { join } = require('path')
const express = require('express')

const port = process.env.PORT || 3000
const app = express()

// static files
app.use(express.static(join(__dirname, 'static')))

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/ping', (req, res) => {
    res.end('pong')
})

app.listen(port, () => {
    console.log('Serving on port ' + port)
})
