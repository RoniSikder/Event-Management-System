const mongoose = require('mongoose')

const data = new mongoose.Schema({
    match_id:String,
    team_name:String,
    participate:[{
        name:String,
        player_id:String,
        role:String
    }]
})

module.exports = mongoose.model.Team || mongoose.model('Team',data)