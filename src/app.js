const express = require('express')
const cors = require('cors')
const app = express()

const port = 3000

const mainRouter = require('./routes/main.route')
app.use(cors({
    origin: '*'
}))

app.use('/api/v1', mainRouter)


app.listen(port)