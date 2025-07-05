const express=require('express');
const User=require('../models/User');
const jwt=require('jsonwebtoken');

const router=express.Router();


// user router
router.post('/register',async(req,res)=>{
  const {name,email,password}=req.body;
  try{
    res.send({name,email,password});
  }
  catch(err){
    console.log(err);
    res.status(500).send("server error");
  }
})

module.exports=router;