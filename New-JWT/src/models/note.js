const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title:{
        type : String,
        required : true,
    },
    description:{
        type : String,
        require : true,
    },
    userid:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User" ,
        required : true
    }
},{ TimeStamps:true });

const noteModel = mongoose.model("Note",noteSchema);
module.exports = noteModel;