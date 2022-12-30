const dbConnect = require('./mongodb');

const update = async()=>{
    let data = await dbConnect();
    // console.log(data);
    let result = await data.updateOne(
        {name:'5 pro'}, // Condition
        {$set:{name:'5 Pro'}}   // What'll be changed in the file
    )
    console.log(result);
};

update();