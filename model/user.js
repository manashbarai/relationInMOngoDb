const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    todo: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Todo'
        }
    ]

}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
