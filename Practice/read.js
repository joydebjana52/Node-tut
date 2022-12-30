const dbConnect = require('./index');

const readData = async()=>{
    let data = await dbConnect();   // console.log(data);
    data = await data.find({}).toArray();
    console.log(data);
}

readData();