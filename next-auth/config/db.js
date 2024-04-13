import mongoose from "mongoose";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
        process.exit(1);
    }
};

export default connectDb()