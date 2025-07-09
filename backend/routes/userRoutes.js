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

    // create jwt
    const payload={user: {id:user._id,role:user.role}};

    jwt.sign(payload,process.env.JWT_SECRET_KEY,{expiresIn: '40h'},(err,token)=>{
      if(err) throw err;

      res.status(201).json({
        user:{
          _id:user._id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        token
      })
    })

  }
  catch(err){
    console.log(err);
    res.status(500).send("server error");
  }
})

module.exports=router;