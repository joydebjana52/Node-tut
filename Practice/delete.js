const dbConnect = require('./index');

const deleteData = async()=>{
    let data = await dbConnect();
    const result = await data.deleteMany({catagory:"Lol"}) ;

    if(result.acknowledged)
    {
        console.log('Deleted');
    }
}

deleteData();