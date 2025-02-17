import express from 'express';
import mongoose from 'mongoose';

const app = express();

try{
    const uri = 'mongodb://127.0.0.1:27017/furnitures';
    await mongoose.connect(uri);

    console.log('Success DB connect!');
    
}catch(err){
    console.log('Connection do DB failed!');
    console.log(err.message);
}

app.get('/', (req, res) => {
    res.json({message: 'It works!'})
});

app.listen(3030, () => console.log('RESTful server is running on http://localhost:3030...'));