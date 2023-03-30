const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./routers/blogRouter')
const { mongoUrl, PORT } = require('./utils/config')

mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})