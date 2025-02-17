import bcrypt from 'bcrypt';


import User from "../models/User.js"
import { generateToken } from '../utils/tokenUnitls.js';

export default {
    register(userData) {
        return User.create(userData);
    },
    async login(email, password){
        // if user exists
        const user = await User.findOne({ email });
        if(! user){
            throw new Error('Email or password are incorrect!');
        }

        // if password is valid
        const isValid = await bcrypt.compare(password, user.password);
        if(! isValid){
            throw new Error('Email or password are incorrect!');
        }

        const token = generateToken(user);

        const result = {
            email,
            accessToken: token,
            _id: user.id,
        }

        return result;
    }
}