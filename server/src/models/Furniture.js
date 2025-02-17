import { Schema, model, Types } from "mongoose";

const furnitureSchema = new Schema({
    make: {
        type: String,
        required: true,
        minLength: 4,
    },
    model: {
        type: String,
        required: true,
        minLength: 4,
    },
    year: {
        type: Number,
        min: 1950,
        max: 2050,
    },
    description: {
        type: String,
        minLength: 10,
    },
    price: {
        type: Number,
        min: 0,
    },
    img: {
        type: String,
        required: true,
    },
    material: {
        type: String,
        required: false,
    },
    creator: {
        type: Types.ObjectId,
        ref: 'User',
    }
});

const Furniture = model('Furniture', furnitureSchema);

export default Furniture;