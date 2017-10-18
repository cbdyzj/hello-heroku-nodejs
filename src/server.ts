import app from './app'
import * as http from 'http'

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`监听端口：${port}`))
