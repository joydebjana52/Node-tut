// // // const http = require('http');
// // // http.createServer((req, res) => {
// // //     res.write("<b>Joydeb Jana</b>");
// // //     res.end();
// // // }).listen(3000);

// // const colors = require('colors');
// // console.log("Joydeb Jana".red);

// // // console.log("Joydeb Jana");

// // const http = require('http');
// // http.createServer((req,res)=>{
// //     res.writeHead(200,{'Content-Type':'application-json'});
// //     res.write(JSON.stringify({name : 'Joydeb Jana',email : 'janajoydeb083@gmail.com'}));
// //     res.end();
// // }).listen(9000);

// // console.log(process.argv[0]);
// // const fileName = process.argv[2];
// // const fileData = process.argv[3];

// // const fs = require('fs');
// // fs.writeFileSync(fileName,fileData);

// // -------------------------------------- Middleware

// // const express = require('express');
// // const app = express();

// // const reqFilter = (req,res,next)=>{
// //     if(!req.query.age)
// //     {
// //         res.send('Please provide age')
// //     }
// //     else
// //     {
// //         next();
// //     }
// // };

// // app.use(reqFilter);

// // app.get('/',(req,res)=>{
// //     res.send('Welcome to Home page');
// // });

// // app.get('/users',(req,res)=>{
// //     res.send('Welcome to users page ');
// // });

// // app.listen(5000);







// const express = require('express');
// const reqFilter = require('./middleware');
// const route = express.Router();
// const app = express();

// // const reqFilter = (req,res,next)=>{
// //     if(!req.query.age)
// //         res.send('Please provide age');
// //     else if(req.query.age < 18)
// //         res.send('This is 18+ web site');
// //     else
// //         next();
// // };

// route.use(reqFilter);

// app.get('/profile',(req,res)=>{
//     res.send('This is profile page');
// });

// // app.use(reqFilter); // If here we write this line then it'll be application based Middleware

// app.get('/',(req,res)=>{
//     res.send('Welcome to Home page');
// });

// // app.get('/about',(req,res)=>{
// //     res.send('This is about us page');
// // });
// route.get('/about',(req,res)=>{
//     res.send('This is about us page');
// });

// //app.get('/contact',reqFilter,(req,res)=>{
// //  res.send('This is contact Us page'); 
// // });
// route.get('/contact',reqFilter,(req,res)=>{
//     res.send('This is contact Us page'); 
//  });
 
// app.use('/',route);

// app.listen(5000);


// const express = require('express');
// const app = express();

// //setting view engine to ejs
// // app.set('views',);
// app.set('view engine', 'ejs');

// app.get('',(req,res)=>{
//    res.send('Home page'); 
// });

// app.get('/',(req,res)=>{
//     // res.send('Home page');
//     res.render('homepage');
// });

// app.get('/login',(req,res)=>{
//     res.render('loginpage');
// });

// app.listen(9090);

// ------------- Bresk Point --------------

// const express = require('express');
// const app = express();

// app.set('view engine','ejs');

// app.get('',(req,res)=>{
//     res.send('Hello This is Home page');
// });
// app.get('/',(req,res)=>{
//     res.send('Hello This is Home page');
// });

// app.get('/login',(req,res)=>{
//     res.render('loginpage');
// });

// app.listen(1111);

// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017' ; // Here we're using Local Host so,if we want then write online url
// const client = new MongoClient(url);
// const database = 'e-comm' ;

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let respond = await collection.find({}).toArray();
//     console.log(respond);
// };

// getData();


// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-comm';

// async function getData()
// {
//     let result = await client.connect() ;
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray() ;

//     console.log(response);
// }

// getData();


// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-comm';

// const demo = async()=>{
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');
// };

// demo().then((res)=>{
//     res.find({}).toArray().then((data)=>{
//         console.log(data);;
//     });
// });

// const demo = require('./mongodb');

// const main = async()=>{
//     let data = await demo();
//     data = await data.find({name:'5 pro'}).toArray();
//     console.log((data));
// };

// main();

/*
const mongoose = require('mongoose');
const saveInDB = async()=>{
    await mongoose.connect('mongodb://localhost:27017/e-comm');
    const productSchema = new mongoose.Schema({
        name:String,
        price:Number
    });
    const productsModel = new mongoose.model('products',productSchema);
    let data = new productsModel({name:"m8",price:1000});
    let result = await data.save();
    console.log(result);
}
saveInDB();
*/