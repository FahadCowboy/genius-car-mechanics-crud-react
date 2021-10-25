const {MongoClient} = require('mongodb')
const express = require('express')
const cors = require('cors')
const app = express()

// MiddleWire
app.use(cors())
app.use(express.json())
