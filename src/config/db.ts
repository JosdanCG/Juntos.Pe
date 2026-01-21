import mongoose from "mongoose";
import User, {IUser} from "../models/User";

export const connectDB = async () => { 
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI || '');
        const url = `${connection.host}:${connection.port}`
        console.log(`Connecting to the database... en ${url}` );
        
    }
    catch (error) {
        console.error("Error connecting t  o the database", error);
        process.exit(1);
    }
}