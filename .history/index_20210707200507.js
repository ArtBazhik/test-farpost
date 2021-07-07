require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


const mongoUri = process.env.MONGO_DB_TOKEN


app.use(require('cors')())
const mongoUri = process.env.MONGO_DB_TOKEN
app.use(require('morgan')('dev'))