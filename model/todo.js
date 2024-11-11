const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
