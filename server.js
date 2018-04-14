const express = require('express')
const { join } = require('path')

const port = process.env.PORT || 3000

express().use(express.static(join(__dirname, 'public'))).listen(port)
