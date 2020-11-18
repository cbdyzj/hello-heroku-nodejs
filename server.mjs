import { fileURLToPath } from 'url'
import { join as joinPath, dirname } from 'path'

import express from 'express'

const __dirname = dirname(fileURLToPath(import.meta.url))

const handleStatic = (...ds) => ds.map(d => express.static(joinPath(__dirname, d)))

const app = express()

// static files
app.use(...handleStatic('static', 'dist'))

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/ping', (req, res) => {
    res.end('pong')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Serving on port ' + port)
})
