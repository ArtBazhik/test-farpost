require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


const mongoUri = process.env.MONGO_DB_TOKEN
const port = process.env.SERVER_PORT || 5050


mongoose.connect(mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})
.then(() => console.log("MongoDB conected..."))

app.use(require('cors')())
const mongoUri = process.env.MONGO_DB_TOKEN
app.use(require('morgan')('dev'))