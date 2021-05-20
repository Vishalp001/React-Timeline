const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema([
    {
        name: {
            type: String,
        },
        date: {
            type: String,
        },
        tag: {
            type: String,
        },
        color: {
            type: String,
        },
        url: {
            type: String,
        },
        text: {
            type: String,
        }
    }

])

const Data = mongoose.model("USER", userDataSchema)

module.exports = Data;