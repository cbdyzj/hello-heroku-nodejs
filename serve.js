import express from 'express'

const { static: serveStatic } = express

const app = express()

app.use(serveStatic('static'))
app.use(serveStatic('slides'))
app.use(serveStatic('dist'))

app.get('/ping', (req, res) => {
    res.end('pong')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Serving on port ' + port)
})
