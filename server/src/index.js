import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';    

import routes from './routes.js';
import { auth } from './middlewares/authMiddleware.js';

const app = express();

try{
    const uri = 'mongodb://127.0.0.1:27017/furnitures';
    await mongoose.connect(uri);

    console.log('Success DB connect!');
    
}catch(err){
    console.log('Connection do DB failed!');
    console.log(err.message);
}

// Setup CORS manual
/*
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // access query from ... (*) all

    next();
});
*/
app.use(express.json());
app.use(cors()); // access query
app.use(auth)

app.use(routes);

app.listen(3030, () => console.log('RESTful server is running on http://localhost:3030...'));