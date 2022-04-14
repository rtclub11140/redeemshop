const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Transaction = new Schema({
    idReward:{
        type: String
    },
    idUser:{
        type: String
    },
    dateRedeem:{
        type: String
    },
    rewardName:{
        type: String
    }
}) 

module.exports = mongoose.model('Transaction', Transaction);