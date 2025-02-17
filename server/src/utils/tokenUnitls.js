import jsonwebtoken from 'jsonwebtoken';

import { JWT_SECRET } from '../config.js';

export const generateToken = (user) => {
    // generate token
    const payload = {
        id: user.id,
        email: user.email,
    }

    const token = jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: '2h'});

    // return token
    return token;
}