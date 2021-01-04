const express = require('express')
const app = express()

const port = 3000

const mainRouter = require('./routes/main.route')

app.use('/v1/api', mainRouter)

app.listen(port)