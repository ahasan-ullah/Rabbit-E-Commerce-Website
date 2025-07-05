const express=require('express');
const User=require('../models/User');
const jwt=require('jsonwebtoken');

const router=express.Router();


// user router
router.post('/register',async(req,res)=>{
  const {name,email,password}=req.body;
  try{
    let user=await User.findOne({email});
    if(user){
      res.status(400).json({message:"User already exists"});
    }
    user=new User({name,email,password});
    await user.save();


  }
  catch(err){
    console.log(err);
    res.status(500).send("server error");
  }
})

module.exports=router;