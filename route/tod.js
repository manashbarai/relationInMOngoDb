const Todo = require("../model/todo");
const User = require("../model/user");

const route=require("express").Router()


route.get("/",async(req,res)=>{

    try {

       const user=await User.find()
       res.json(user)


    } catch (error) {
            console.log(error);
            
    }


})
route.post("/:userId",async(req,res)=>{
    const {userId}=req.params.userId;
    const todo=new Todo(...req.body,userId)
    try {
        await todo.save()
        await User.findByIdAndUpdate(userId, { $push: { todo: todo._id } });

        res.json(todo);

    } catch (error) {
            console.log(error);
            
    }


})
module.exports=route;