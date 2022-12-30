const dbConnect = require('./index');

const insertData = async()=>{
    let data = await dbConnect();
    const result = await data.insert(
        [
            {name:'Lol1',brand:'Lol2',price:100,catagory:'Lol'},
            {name:'Lol4',brand:'Lol5',price:150,catagory:'Lol'},
            {name:'Lol7',brand:'Lol8',price:200,catagory:'Lol'}
        ]
    );
    if(result.acknowledged)
        console.log('data inserted');
}

insertData();