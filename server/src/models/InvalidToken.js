import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const invalidTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        index: true,
    },
    expireAt: {
        type: Date,
        default: Date.now,
        expires: 2 * 60 * 60,
    }
}, {
    timestamps: true,
});

const InvalidToken = model('InvalidToken', invalidTokenSchema);

export default InvalidToken;