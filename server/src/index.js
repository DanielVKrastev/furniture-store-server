import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

try{
    const uri = 'mongodb://127.0.0.1:27017/furnitures';
    await mongoose.connect(uri);

    console.log('Success DB connect!');
    
}catch(err){
    console.log('Connection do DB failed!');
    console.log(err.message);
}

// Setup CORS
/*
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // access query from ... (*) all

    next();
});
*/
app.use(cors()); // access query

app.get('/', (req, res) => {
    res.json({message: 'It works!'})
});

app.get('/data/catalog', (req, res) => {
    res.json({message: 'Some data'});
})

app.listen(3030, () => console.log('RESTful server is running on http://localhost:3030...'));