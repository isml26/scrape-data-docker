import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true
        },
    }, {
        versionKey: false,
        toJSON:{
            transform(doc,ret){
                ret.id = ret._id;
                delete ret._id
            }
        }
    },
);

const Product = mongoose.model('Product', productSchema);

export default Product;