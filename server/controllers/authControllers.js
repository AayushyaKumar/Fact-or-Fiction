require("dotenv").config();
const Create = require("../models/user-models")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser");
const {promisify}= require('util');
const { Error } = require("mongoose");
// const catchAsync = require('./../utils/catchAsync')
bodyParser.json();

const signToken = id =>{
    return jwt.sign({ id},process.env.JWT_SECRET,{
       expiresIn: process.env.JWT_EXPIRES
     }) };


exports.signup=async(req,res,next)=>{
    try{
        
        const newUser= await Create.create({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,

        
    })
    const token = signToken(newUser._id)
    console.log(token);
    res.status(201).json({
        status:"ok",
        token,
        
    })
    // console.log(token+ "\n" + data.newUser)
}catch({name,message}){
        res.status(404).json({
            status:name,
            message
        })
        // console.error(message)
        // console.log(process.env.JWT_SECRET)
        // console.log(process.env.PORT)
        // console.log(token)

    }
    
}


exports.login=async(req,res,next)=>{
    try{
        const{email,password}=req.body;

        if(!email|| !password){
        return "Something went wrong";
       }

       const user = await Create.findOne({email}).select('+password')
       const correct = await user.correctPassword(password,user.password)
       if(!user || !correct){
        return  ;
       }
//       console.log()
       const token= signToken(user._id);
       console.log(user);
       res.status(200).json({
        status:"success",
        token
       })}
       
catch({name,message}){
    res.status(401).json({
        status:name,
        message
       
    }) 
    console.log(message);
}

}


exports.AllUser= async(req,res)=>{
    const Users = await Create.find();
    try{
      res.status(200).json({
        status:"success",
        data:{
            Users
        }
    })  
    }catch({name,message}){
         name,
        message
    }
    
}

exports.protectedRoute= async (req,res,next)=>{
    try{ let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
  
    if (!token) {
      return next(
        'You are not logged in! Please log in to get access.', 401
      );
    }
  
    // 2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  
    // 3) Check if user still exists
    const currentUser = await Create.findById(decoded.id);
    if (!currentUser) {
      return next(
       
          'The user belonging to this token does no longer exist.',
          401
        
      );
    }
  
    // 4) Check if user changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return next
      ('User recently changed password! Please log in again.', 401)
      
    }
  
    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();}catch({name,message}){
        res.status(401).json({
           status: name,
            message
        })
    }
    // 1) Getting token and check of it's there
   
}

exports.restrictTo=(...roles)=>{
  return(req,res,next)=>{

    try{
      
      if(roles.includes(req.user.role)){
      return next();

   }
      next(new Error()) 
   

  


 }catch({name,message}){
  res.status(401).json({
     status: name,
      message
  })
}


}
    //roles is an array
   
  next();
}