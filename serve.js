import express from 'express'

const app = express()

app.use(express.static('static'))
app.use(express.static('slides'))
app.use(express.static('dist'))

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Serving on port ' + port)
})
