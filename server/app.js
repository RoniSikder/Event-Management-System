const express = require('express')
const cors = require('cors');
const database = require('./Database System/Connection')

const Host_OTP = require('./Routing/Host_OTP')
const Host_SignUp = require('./Routing/Host_SignUp')
const Host_LogIn = require('./Routing/Host_LogIn')
const Host_Event_Create = require('./Routing/Host_Event_Create')
const Host_Create_Imgupload = require('./Routing/Image_Upload')
const Participate_OTP = require('./Routing/Participate_OTP')
const Participate_SignUp = require('./Routing/Participate_SignUp')
const Participate_Login = require('./Routing/Participate_LogIn')


const app = express()
app.use(cors());
app.use(express.json())

database()

app.use('/host/',Host_OTP)
app.use('/host/',Host_SignUp)
app.use('/host/',Host_LogIn)
app.use('/host/',Host_Create_Imgupload)
app.use('/host/',Host_Event_Create)
app.use('/participate/',Participate_OTP)
app.use('/participate/',Participate_SignUp)
app.use('/participate/',Participate_Login)

app.get('/',(request,response)=>{
    response.send("Hello Buddy");
})

module.exports = app;