const {MongoClient, CommandStartedEvent} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm';

const main = async()=>{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
}

module.exports = main;