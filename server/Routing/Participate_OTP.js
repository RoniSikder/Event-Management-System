const express = require('express')
const route = express.Router();

const Participate_OTP_Model = require('../Database System/Models/Participate_OTP_Model')
const Participate_OTP_Genaretor = require('../OTP Management/Participate_OTP_Genaretor')
const Email_Setup = require('../OTP Management/Mail_Setup')

route.post('/otp', (request, response) => {
    const otp = Participate_OTP_Genaretor();
    Email_Setup(request.body.email, otp)
        .then((res) => {
            const data = new Participate_OTP_Model({
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