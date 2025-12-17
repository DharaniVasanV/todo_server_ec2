import mongoose from "mongoose";
const todoSchema=new mongoose.Schema({
    todo:{
        type:String,
        required:true,
        unique:true
    }
})
const todoCollection=mongoose.model("todo",todoSchema);
export default todoCollection;