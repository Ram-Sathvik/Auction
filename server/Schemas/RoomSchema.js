import mongoose from "mongoose";

const room = mongoose.Schema({
    code: {
        type: Number,
        required: true,
        unique: true
    }
})