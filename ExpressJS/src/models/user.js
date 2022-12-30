const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type : String,
        required : true,
    },
    password:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true
    }
}, {Timestamp : true}); // add to attributes "Created-at" & "modified-at"

module.exports = mongoose.model('User',userSchema);