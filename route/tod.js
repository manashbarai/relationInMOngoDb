const Todo = require("../model/todo");
const User = require("../model/user");

const route=require("express").Router()


route.get("/",async(req,res)=>{

    try {

       const user=await Todo.find().populate('userId')
       res.json(user)


    } catch (error) {
            console.log(error);
            
    }


})
route.post("/:userId",async(req,res)=>{
    console.log(req.body);
    
    const {userId}=req.params;
    const todo=new Todo({...req.body,userId})
    try {
        await todo.save()
        await User.findByIdAndUpdate(userId, { $push: { todo: todo._id } });
        console.log(userId);
        
        res.json(todo);

    } catch (error) {
            console.log(error);
            
    }


})
module.exports=route;