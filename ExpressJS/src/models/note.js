const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title:{
        type : String,
        required : true,
    },
    description:{
        type : String,
        required : true,
    },
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
}, {Timestamps  : true}); // add to attributes "Created-at" & "modified-at"

module.exports = mongoose.model('Note',noteSchema);