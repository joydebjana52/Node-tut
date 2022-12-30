const demo = require('./mongodb');

const main = async()=>{
    let data = await demo();
    data = await data.find({name:'5 pro'}).toArray();
    console.log((data));
};

main();