const express = require('express')
const database = require('./Database System/Connection')

const Host_OTP = require('./Routing/Host_OTP')
const Host_SignUp = require('./Routing/Host_SignUp')
const Host_LogIn = require('./Routing/Host_LogIn')
const Participate_OTP = require('./Routing/Participate_OTP')
const Participate_SignUp = require('./Routing/Participate_SignUp')


const app = express()
app.use(express.json())

database()

app.use('/host/',Host_OTP)
app.use('/host/',Host_SignUp)
app.use('/host/',Host_LogIn)
app.use('/participate/',Participate_OTP)
app.use('/participate/',Participate_SignUp)

app.get('/',(request,response)=>{
    response.send("Hello Buddy");
})

module.exports = app;