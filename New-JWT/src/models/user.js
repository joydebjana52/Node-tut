const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type : String,
        required : true,
    },
    password:{
        type : String,
        require : true,
    },
    email:{
        type : String,
        required : true
    }
},{ TimeStamps:true });

const userModel = mongoose.model("User",userSchema);
module.exports = userModel;