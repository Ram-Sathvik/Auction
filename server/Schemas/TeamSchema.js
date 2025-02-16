import mongoose from "mongoose";

const team = mongoose.Schema({
    code: {
        type: Number,
        required: true,
        unique: true,
        min: 1000,
        max: 9999
    },
    name: {
        type: String,
        required: true,
        unique: true,
        min: 2,
        max: 4
    },
    password: {
        type: String,
        required: true,
        min: 4
    },
    players: {
        type: Array,
        max: 25
    }
})

export default team;