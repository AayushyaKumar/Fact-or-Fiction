// require("dotenv").config();
const Create = require("../models/user-models")
// const jwt = require("jsonwebtoken")

exports.signup=async(req,res,next)=>{
    try{
        
        const newUser= await Create.create({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,

        
    })
    // const token = jwt.sign({id:newUser._id}, process.env.JWT_SECRET,{
    //     expiresIn:process.env.JWT_EXPIRES
    // })
    res.status(201).json({
        status:"ok",
        // token,
        data:{
            newUser
        }
    })}catch({name,message}){
        res.status(404).json({
            status:name,
            message
        })
        

    }
    
}