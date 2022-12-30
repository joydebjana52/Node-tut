const dbConnect = require('./index');

const updateData = async()=>{
    let data = await dbConnect();
    const result = await data.update(
        {name:'9 pro Max'},
        {$set:{price:290}}
    )
    if(result.acknowledged)
    {
        console.log('Data updated');
    }
}

updateData();