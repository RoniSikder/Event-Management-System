const mongoose = require('mongoose');

const data = new mongoose.Schema({
    email :{
        type:String
    },
    otp : {
        type:String
    },
    used:{
        type:Boolean
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
        expires: 600 
    }
})

module.exports = mongoose.model.HostOtp || mongoose.model('HostOtp',data);