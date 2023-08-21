const mongoose = require("mongoose")

const data = new mongoose.Schema({
    host_id:String,
    type_event:String,
    name_event:String,
    description:String,
    starting_date:String,
    ending_date:String,
    last_date:String,
    per_team_size:Number,
    allowed_numbers_team:Number,
    registered_teams:[{
        team_id:String,
        team_name:String,
        perticipents:[{
            candidate_name:String,
            cadidate_id:String
        }],
        team_stat:String
    }],
    age_limitation:Number
})

module.exports = mongoose.model.Event || mongoose.model('Event',data)