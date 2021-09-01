import mongoose from 'mongoose'

const MONGO_URI = "mongodb://mongo:27017/products"
const connectDB = async()=>{
    try {
        await mongoose.connect(MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Connected to MongoDb');
      } catch (err) {
        console.error(err);
      }
}

export {connectDB};