const express = require('express')
const route = express.Router()

const Event = require('../Database System/Models/Event.js')

route.post('/create_event', async (request, responce) => {
    const { image_id, host_id, type, sub_type, event_name, description, deadline, start, end, team_size, number_teams, entry_fees, address } = request.body
    const event_data = new Event({
        image_id: image_id,
        host_id: host_id,
        type_event: type,
        sub_type_event: sub_type,
        name_event: event_name,
        description: description,
        starting_date: start,
        ending_date: end,
        last_date: deadline,
        per_team_size: team_size,
        allowed_numbers_team: number_teams,
        entry_fees: entry_fees,
        address: address
    })

    event_data.save()
    .then((res)=>{
        responce.send({
            message:"Success",
            res
        })
    })
    .catch((error)=>{
        responce.send({
            message:"Failed",
            error
        })
    })

})

module.exports = route;