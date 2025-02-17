import { Schema } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.pre('save', function() {
    this.password = bcrypt.hash(this.password, 10);
});

const User = model('User', userSchema);

export default User;