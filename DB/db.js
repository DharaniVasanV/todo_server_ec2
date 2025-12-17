import mongoose from "mongoose"; // module
import dotenv from "dotenv";
dotenv.config();//it loads .env KEY file into process.env
const connectDb = () => {
   try {
    
    mongoose.connect(process.env.MONGODB_URL); 
    console.log("db has been connected");
    
   } catch (err) {
    console.error(err);
  }
}
export default connectDb;