import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

import User from "../models/User.js"
import { JWT_SECRET } from '../config.js';

export default {
    register(userData) {
        return User.create(userData);
    },
    async login(email, password){
        // if user exists
        const user = await User.find({ email });
        if(! user){
            throw new Error('Email or password are incorrect!');
        }

        // if password is valid
        const isValid = await bcrypt.compare(password, user.password);
        if(! isValid){
            throw new Error('Email or password are incorrect!');
        }

        // generate token
        const payload = {
            id: user.id,
            email: user.email,
        }

        const token = jsonwebtoken.sign(payload, JWT_SECRET);

        // return token
        return token;
    }
}