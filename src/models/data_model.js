const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dataSchema = new Schema({
    cpuname: {
        type: String
    },

    type: {
        type: String
    },

    platform: {
        type: String
    },

    release: {
        type: String
    },

    remainingRam: {
        type: Number
    },

    totalRam: {
        type: Number
    },
}, 
{versionKey: false})

module.exports = mongoose.model("data", dataSchema, process.env.MONGO_COLLECTION)
