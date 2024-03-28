const express = require ('express')
const mongoose = require ('mongoose')
const crypto = require ('crypto')
const nodemailer = require ('nodemailer')
const bodyParser = require ('body-parser')
const cors = require ('cors')

const app = express ()
const port = 3000
app.use (cors())

app.use(bodyParser.urlencoded ({extended:false}))
app.use(bodyParser.json ())
const jwt = require ("jsonwebtoken")

mongoose.connect 
('mongodb+srv://traderdre:Password@check.stfyn8v.mongodb.net/', {    
}).then (() => {
    console.log ('Connected to MongoDB')
}).catch ((err) => {
    console.log ('Error Connecing to MongoDB')
})

app.listen (port, () => {
    console.log ('Server is running on port 3000')
})

const User = require ('./user')

//registration
