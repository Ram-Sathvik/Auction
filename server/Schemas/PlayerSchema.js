import mongoose from "mongoose";

const player = mongoose.Schema({
    id: {
        type: Number,
        required: null,
        unique: true
    },
    name: {
        type: String,
        required: true,
        min: 5,
        max: 20
    },
    image: String,
    basePrice: {
        type: Number,
        required: true
    },
    bidPrice: {
        type: Number,
        default: 0
    },
    role: String
})

export default player;