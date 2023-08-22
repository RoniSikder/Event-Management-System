const express = require('express')
const route = express.Router()
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const HostOtp = require('../Database System/Models/Host_OTP_Model')
const Host = require('../Database System/Models/Host_Model')

route.post('/signup', async (request, response) => {
    const { first_name, last_name, email, username, password, otp } = request.body
    const data = await HostOtp.findOne({ $and: [{ email: email }, { otp: otp }, { used: false }] })
    if (data) {
        const finder_sub = await Host.findOne({ email: email })
        if (finder_sub) {
            console.log("Email is already exist")
        }
        else {
            const hashedpassword = await bcrypt.hash(password, 10)
            if (hashedpassword) {
                const host = new Host({
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    username: username,
                    password: hashedpassword,
                })
                host.save()
                    .then(async () => {
                        const reset = await HostOtp.updateOne({ _id: data._id }, { $set: { used: true } })
                        if (reset) {
                            const token = await jwt.sign(
                                {
                                    uid: data._id,
                                    email: data.email,
                                    password: data.password
                                },
                                process.env.Host_Token_Secret,
                                {
                                    expiresIn: "24h"
                                }
                            )
                            if(token){
                                response.send({
                                    massage: "OTP update successfull and Host Profile Created Successfull",
                                    id: data._id,
                                    token
                                })
                            }
                            else{
                                response.send({
                                    massage:"Failed to Genarate JSON-Web-Token"
                                })
                            }

                        }
                        else {
                            response.send({
                                massage: "otp can not send"
                            })
                        }
                    })
                    .catch((error) => {
                        response.send({
                            massage: "Error! Creating Host Profile",
                            error
                        })
                    })
            }
            else {
                (error) => {
                    response.send({
                        massage: "Hashing of Password is not done",
                        error
                    })
                }
            }

        }
    }
    else {
        response.send({
            massage: "Sorry the otp you enter is already used"
        })
    }
})

module.exports = route;