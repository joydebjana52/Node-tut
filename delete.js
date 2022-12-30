const dbConnect = require('./mongodb');

const deleteData = async()=>{
    let data = await dbConnect();
    const result = await data.deleteMany({name:'narzo 10'});

    if(result.acknowledged)
    {
        console.log(result.acknowledged);
    }
};

deleteData();