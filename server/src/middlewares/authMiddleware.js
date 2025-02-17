import jsonwebtoken from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';

export const auth = (req, res, next) => {
    const token = req.headers['x-authorization'];

    if(! token){
        return next();
    }

    try{
        const decodedToken = jsonwebtoken.verify(token, JWT_SECRET);
        req.user = decodedToken;
    }catch(err){
        return res.status(404).json({error: 'Invalid token!'});
    }
    
    next();
}