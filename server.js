const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

dotenv.config({ path: './config.env' })

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001
const DB = process.env.DATABASE
//connect to mongoose
mongoose.connect(DB, { useUnifiedTopology: true, useNewUrlParser: true })

//require route
app.use('/', require('./routes/dataRoute'))

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('frontend/build'))
}

app.listen(PORT, function () {
  console.log(`Express server is running on port ${PORT}`)
})
