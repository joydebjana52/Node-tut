const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm';

const main = async()=>{
    let result = await client.connect();
    const db = result.db(database);
    return db.collection('electronics');
};

module.exports = main;