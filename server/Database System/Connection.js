const mongoose = require('mongoose')
require('dotenv').config()

const connection = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.Database_Connection_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Connection Setting Up Successfull")
    })
    .catch((error)=>{
        console.log("Failed To Establishing Connection with Database")
        console.log(error)
    })
}

module.exports = connection;