// const dbConnect = require('./mongodb');

// const insert = async()=>{
//     const db = await dbConnect();
//     const result = await db.insert({
//         name:'9 pro',
//         brand:'realme',
//         price:350,
//         catagory:'mobile'
//     });
//     if(result.acknowledged)
//         console.log('Data inserted');
// };

// insert();

// const dbConnect = require('./mongodb');

// const insert = async()=>{
//     const db = await dbConnect();
//     const result = await db.insert(
//         [
//             {name:'6 pro',brand:'realme',price:350,catagory:'mobile'},
//             {name:'7 pro',brand:'redmi',price:360,catagory:'mobile'},
//             {name:'8 pro',brand:'realme',price:390,catagory:'mobile'},
//             {name:'9 pro',brand:'redmi',price:270,catagory:'mobile'}
//         ]
//     );
//     if(result.acknowledged)
//         console.log('Data Pushed...');
// };

// insert();






const dbConnect = require('./mongodb');


const insert = async()=>{
    let db = await dbConnect();
    const result = await db.insert(
        [
            {name:'narzo 10',brand:'realme',price:200,catagory:'mobile'}   
        ]
    );
    if(result.acknowledged)
        console.log('Data inserted');
};

insert();