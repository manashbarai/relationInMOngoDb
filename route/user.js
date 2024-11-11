const User = require("../model/user")

const route=require("express").Router()


route.get("/",async(req,res)=>{

    try {

       const user=await User.find()
       res.json(user)


    } catch (error) {
            console.log(error);
            
    }


})
route.post("/",async(req,res)=>{

    try {

        const user=new User(req.body)
        await user.save()
        res.json(user)


    } catch (error) {
            console.log(error);
            
    }


})
module.exports=route;