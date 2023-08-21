const express = require('express')
const route = express.Router()
const bcrypt = require("bcrypt")

const Participate_Otp = require('../Database System/Models/Participate_OTP_Model')
const Participate = require('../Database System/Models/Participate_Model')

route.post('/signup', async (request, response) => {
    const { first_name, last_name, email, username, password, otp } = request.body
    const data = await Participate_Otp.findOne({ $and: [{ email: email }, { otp: otp }, { used: false }] })
    if (data) {
        const finder_sub = await Participate.findOne({ email: email })
        if (finder_sub) {
            console.log("Email is already exist")
        }
        else {
            const hashedpassword = await bcrypt.hash(password, 10)
            if (hashedpassword) {
                const joiner = new Participate({
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    username: username,
                    password: hashedpassword,
                })
                joiner.save()
                    .then(async () => {
                        const reset = await Participate_Otp.updateOne({ _id: data._id }, { $set: { used: true } })
                        if (reset) {
                            response.send({
                                massage: "OTP update successfull and Participate Profile Created Successfull",
                                id: data._id
                            })
                        }
                        else {
                            response.send({
                                massage: "otp can not send"
                            })
                        }
                    })
                    .catch((error) => {
                        response.send({
                            massage: "Error! Creating Participate Profile",
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