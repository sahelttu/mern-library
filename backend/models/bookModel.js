const mongoose = require("mongoose");

const {Schema} = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Book", bookSchema);