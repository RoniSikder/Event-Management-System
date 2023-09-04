const express = require('express')
const route = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv')

const Host_Model = require('../Database System/Models/Host_Model')

route.post('/login', async (request, response) => {
    const { email, password } = request.body
    const data = await Host_Model.findOne({ email: email })
    if (data) {
        const check = await bcrypt.compare(password,data.password)
        if (check) {
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
            if (token) {
                response.send({
                    massage:"Email and Password combination and Token Genaration Successfull ",
                    token:token
                })
            }
            else {
                response.send("Sorry for Interuption and Tokenization Failed")
            }
        }
        else{
            response.send("Email and Password combination is not matched")
        }
    }
    else{
        response.send("Email is not Found in Database")
    }
})

module.exports = route;