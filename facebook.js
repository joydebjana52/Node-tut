// const mongoose = require('mongoose');

// const myApp = async()=>{
//     await mongoose.connect('mongodb://localhost:27017/facebook');
//     const mySchema = new mongoose.Schema({
//         username : {type:String, required:true},// index:{unique:true}},
//         password : String
//     });
//     const myModel = new mongoose.model('users',mySchema);
//     let user = new myModel({username:'janajoydeb083',password:'I_Love_Your_Mom'});
//     let result = await user.save();
//     console.log(result);
// };

const mongoose = require('mongoose');

const myUsers = async()=>{
    await mongoose.connect('mongodb://localhost:27017/facebook');
    const userSchema = new mongoose.Schema({
        username : {
            type : String,
            required : true,
            index : {unique : false}
        },
        password : {
            type : String,
            required : true
        }
    });
    const userModel = new mongoose.model('users',userSchema);
    const user = new userModel({username : 'janajoydeb083' , password : 'Fuck_You'});
    let result = await user.save((error)=>{
        if(error)
        {
            console.log('username already taken');
        }
        else
        {
            console.log('User saved');
        }
    });
};

myUsers();