const express = require('express')
const { static } = require('express')
const { join } = require('path')

const PORT = process.env.PORT || 3000

express().use(static(join(__dirname, 'public'))).listen(PORT)
