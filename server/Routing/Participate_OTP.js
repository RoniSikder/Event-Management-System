const express = require('express')
const route = express.Router();

const Participate_OTP_Model = require('../Database System/Models/Participate_OTP_Model')
const Participate_OTP_Genaretor = require('../OTP Management/Participate_OTP_Genaretor')
const Mail_Setup = require('../OTP Management/Mail_Setup')

route.post('/otp',(request,response)=>{
    const otp = Participate_OTP_Genaretor();
    Mail_Setup(request.body.email,otp)
    const data = new Participate_OTP_Model({
        email:request.body.email,
        otp:otp,
        used:false
    })
    data.save()
    .then(()=>{
        console.log("OTP send Successfully")
    })
    .catch(()=>{
        console.log("Error Occures! Internet Breaks")
    })
})

module.exports = route;