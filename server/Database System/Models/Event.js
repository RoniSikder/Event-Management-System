const mongoose = require("mongoose")

const data = new mongoose.Schema({
    image_id: String,
    host_id: String,
    type_event: String,
    sub_type_event: String,
    name_event: String,
    description: String,
    starting_date: String,
    ending_date: String,
    last_date: String,
    per_team_size: Number,
    allowed_numbers_team: Number,
    entry_fees: String,
    registered_teams: [{
        team_id: String
    }],
    address: String,
})

module.exports = mongoose.model.Event || mongoose.model('Event', data)