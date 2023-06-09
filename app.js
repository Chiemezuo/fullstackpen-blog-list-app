const express = require('express')
const app = express()
const cors = require('cors')

const blogRouter = require('./routers/blogRouter')

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)

module.exports = app