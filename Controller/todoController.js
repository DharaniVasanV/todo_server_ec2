import todoCollection from "../Model/todoModel.js";
export const addTodo = async (req, res) => {
    try {
        /*const data = req.body;
        const todo = await todoCollection.create({ data });
        await todo.save();*/
        const data=new todoCollection(req.body);//Creates document in memory only
        await data.save();//actually stores data in database
        res.status(200).json({message:"Data has been stored"});
    } catch (error) {
        res.status(500).json({message:error});
    }
};
export const getTodo=async(req,res)=>{
    try{
        const data=await todoCollection.find({});
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({message:error});
    }
};
export const updateTodo=async(req,res)=>{
    try{
        const data=await todoCollection.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({message:error});
    }
}
export const deleteTodo=async(req,res)=>{
    try{
        await todoCollection.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Data has been deleted"});
    }
    catch(error){
        res.status(500).json({message:error});
    }
}