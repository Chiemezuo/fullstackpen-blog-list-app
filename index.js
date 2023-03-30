const mongoose = require('mongoose')
const { mongoUrl, PORT } = require('./utils/config')
const app = require('./app')

mongoose.connect(mongoUrl)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})