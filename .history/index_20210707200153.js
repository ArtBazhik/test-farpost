require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')




app.use(require('cors')())
app.use(require('morgan')('dev'))