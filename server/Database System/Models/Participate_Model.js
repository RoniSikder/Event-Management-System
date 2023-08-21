const mongoose = require('mongoose');

const data =  new mongoose.Schema({
    first_name:String,
    last_name:String,
    dob:String,
    email:String,
    username:String,
    password:String,
    participate_matches:[{
        event_id:String
    }]
})

module.exports = mongoose.model.Participate || mongoose.model('Participate',data)