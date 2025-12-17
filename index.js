import dotenv from 'dotenv';
import connectDb from "./DB/db.js";
import express from 'express';
import cors from 'cors';
import route from "./Routes/todoRouter.js";
dotenv.config();
const PORT=process.env.PORT||5000;
const app=express();
connectDb();
//middle wares
//middle wares
app.use(express.json());//Converts JSON input strings into JavaScript objects accessible via req.body
app.use(cors());//Allows your server to accept requests from different domains/ports
//http://localhost:5000/csbs
app.use('/csbs',route);
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})