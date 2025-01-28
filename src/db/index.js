import mongoose from "mongoose";
import dotenv from "dotenv";

import { DB_NAME } from "../constants.js";

dotenv.config(); // Ensure .env is configured before accessing variables



const connectDB = async () => {
    try {
        // console.log("MongoDB URI:", process.env.MONGODB_URI);
        const dbURI = `${process.env.MONGODB_URI}/${DB_NAME}`;
        // const dbURI='mongodb+srv://sahiltalwekar123:Sahil%40Mongo1@cluster0.eg5g0.mongodb.net/videoname?retryWrites=true&w=majority'
        console.log("Connecting to MongoDB with URI:", dbURI); // Debugging

        const connectionInstance = await mongoose.connect(dbURI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        console.log(`✅ MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("❌ MONGODB connection FAILED:", error.message);
        throw error; // Allows higher-level error handling
    }
};

export default connectDB;
