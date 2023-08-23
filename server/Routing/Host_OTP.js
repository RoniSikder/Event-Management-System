const express = require('express')
const route = express.Router();

const Host_OTP_Model = require('../Database System/Models/Host_OTP_Model')
const Host_OTP_Genaretor = require('../OTP Management/Host_OTP_Genaretor')
const Email_Sender = require('../OTP Management/Mail_Setup')

route.post('/otp', (request, response) => {
    const otp = Host_OTP_Genaretor();
    Email_Sender(request.body.email, otp)
        .then((res) => {
            const data = new Host_OTP_Model({
                email: request.body.email,
                otp: otp,
                used: false
            })
            data.save()
                .then(() => {
                    response.send("OTP send Successfully " + otp)
                })
                .catch(() => {
                    console.log("Error Occures! Internet Breaks")
                })
        })
        .catch((error) => {
            error
        })
})

module.exports = route;