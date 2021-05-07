const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
let db;
MongoClient.connect('mongodb+srv://dbGyft:Pass123.@cluster0.zunyj.mongodb.net/Webstore?retryWrites=true&w=majority', (err, client) => {
    db = client.db ('Webstore');
})

app.use(express.json());

app.param('collectionName', (req, res, next, collectionName)=> {
    req.collection = db.collection(collectionName);
    return next();
});

app.get('/', (req, res, next) => {
res.send('Select a collection with /collection/collectionName')
});

app.listen(6000, () =>{
    console.log('mongodb testing')
})