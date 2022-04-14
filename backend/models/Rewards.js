const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Rewards = new Schema({
    idReward:{
        type: String
    },
    rewardName:{
        type: String
    },
    detail:{
        type: String
    },
    point:{
        type: String
    },
    status:{
        type: String
    },
}) 

module.exports = mongoose.model('Rewards', Rewards);