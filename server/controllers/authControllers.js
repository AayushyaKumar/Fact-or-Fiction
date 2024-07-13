require("dotenv").config();
const Create = require("../models/user-models")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser");
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
    const token = jwt.sign({id:newUser._id})
    res.status(201).json({
        status:"ok",
        token,
        data:{
            newUser
        }
        
    })
    // console.log(token+ "\n" + data.newUser)
}catch({name,message}){
        res.status(404).json({
            status:name,
            message
        })
        console.error(message)
        

    }
    
}


exports.login=async(req,res,next)=>{
    try{
        const{email,password}=req.body;

        if(!email|| !password){
        return ("Something went wrong")
       }

       const user = await Create.findOne({email}).select('+password')
       const correct = await user.correctPassword(password,user.password)
       if(!user || !correct){
        return next("Something went wrong")
       }
//       console.log()
       const token= signToken(user._id)
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