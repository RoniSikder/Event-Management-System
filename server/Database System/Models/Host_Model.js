const mongoose = require('mongoose');

const data =  new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    username:String,
    password:String,
    organized_matches:[{
        event_id:String
    }]
})

module.exports = mongoose.model.Host || mongoose.model('Host',data)