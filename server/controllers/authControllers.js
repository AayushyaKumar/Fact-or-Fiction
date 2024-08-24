const crypto = require("crypto");
require("dotenv").config();
const Create = require("../models/user-models");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { promisify } = require("util");
const { Error } = require("mongoose");
// const catchAsync = require('./../utils/catchAsync')
bodyParser.json();
const sendEmail = require("./../utils/email");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

exports.signup = async (req, res, next) => {
  try {
    const newUser = await Create.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    const token = signToken(newUser._id);
    console.log(token);
    res.status(201).json({
      status: "ok",
      token,
    });
    // console.log(token+ "\n" + data.newUser)
  } catch ({ name, message }) {
    res.status(404).json({
      status: name,
      message,
    });
    // console.error(message)
    // console.log(process.env.JWT_SECRET)
    // console.log(process.env.PORT)
    // console.log(token)
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return "Something went wrong";
    }

    const user = await Create.findOne({ email }).select("+password");
    // const userName= await Create.findOne({email})

    const correct = await user.correctPassword(password, user.password);
    if (!correct) {
      return next(new Error("Incorrect Password"));
    }
    //       console.log()
    const token = signToken(user._id);
    console.log(user);
    res.status(200).json({
      status: "success",
      token,
      user: user.name,
    });
  } catch ({ name, message }) {
    res.status(401).json({
      status: name,
      message,
    });
    console.log(message);
  }
};

exports.AllUser = async (req, res) => {
  const Users = await Create.find();
  try {
    res.status(200).json({
      status: "success",
      data: {
        Users,
      },
    });
  } catch ({ name, message }) {
    name, message;
  }
};

exports.protectedRoute = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next("You are not logged in! Please log in to get access.", 401);
    }

    // 2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) Check if user still exists
    const currentUser = await Create.findById(decoded.id);
    if (!currentUser) {
      return next(
        "The user belonging to this token does no longer exist.",
        401
      );
    }

    // 4) Check if user changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return next("User recently changed password! Please log in again.", 401);
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();
  } catch ({ name, message }) {
    res.status(401).json({
      status: name,
      message,
    });
  }
  // 1) Getting token and check of it's there
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    try {
      if (roles.includes(req.user.role)) {
        return next();

        // next(new Error())
      }
    } catch ({ name, message }) {
      res.status(401).json({
        status: name,
        message,
      });
    }
  };
  //roles is an array

  next();
};

exports.forgotPassword = async (req, res, next) => {
  
  const user = await Create.findOne({ email: req.body.input });
  console.log(user);try {
  
    if (!user) {
      return next(new Error("There is no user with email address.", 404));
    }
    console.log(user.schema.methods);
    // 2) Generate the random reset token
    const resetToken = user.createPasswordResetToken();

    //  
    // user.confirmPassword= undefined;
   console.log(await user.save({ validateBeforeSave: false })) ;
 
    
    //  await user.updateOne({ bypassDocumentValidation: true });
   console.log( user.passwordResetToken)
    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/resetPassword/${resetToken}`;
    // console.log(resetURL)
    const message = `Forgot your password ? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}. \n IF you did not forget your password, please ignore this email!`;
    await sendEmail({
      email: user.email,
      subject: "Your password reset token (valid for 10min)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token send to email",
      resetToken
      
    });
  } catch ({ name, message }) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    res.status(404).json({
      name,
      message,
    
    });
    console.log(message);
  }
};

exports.resetPassword = async (req, res, next) => {
  //1 Get user based on the token
console.log(req.params.token)
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
    console.log(hashedToken)
   
  //2 If token has not expired and there is user then set the new password
// console.log(await Create.findOne({passwordResetExpires:{ $gt: Date.now() }}))
  const user = await Create.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  // console.log(user)
  // ,passwordResetExpires:{$gt: Date.now()
 
  if(!user){
    return next(new Error('Token is invalid or has expired', 400))
  }

 
 
  try {
    user.password = req.body.password,
    user.confirmPassword= req.body.confirmPassword,
    user.passwordResetToken=undefined,
    user.passwordResetExpires=undefined,
    await user.save()

    //3 Update changedPasswordAt property for the user

    //4 Log the user in, send JWT

     const token = signToken(user._id)
    res.status(200).json({
      status: "success",
      data: {
        token
      },
    });
  } catch ({ name, message }) {
    res.status(404).json({
      name,
      message,
    });

    next();
  }
};

exports.updateCurrentPassword = async (req, res, next) => {
  // 1. Get user from collection

  const user = await Create.findOne({ email: req.body.email }).select(
    "+password"
  );

  try {
    console.log(user);
    // 2. Check if posted current password is correct
    // const user = await Create.findOne({ email })
    const correct = await user.correctPassword(
      req.body.password,
      user.password
    );
    if (!correct) {
      return next(new Error("Password incorrect"));
    }
    // 3. If so, update password
    user.password = req.body.newPassword;
    user.confirmPassword = req.body.newPassword;
    // const newPassword = req.body.newPassword
    // user.password=newPassword

    await user.save();
    // 4. Log user in, send JWT

    const token = signToken(user._id);
    res.status(200).json({
      status: "success",
      token,
    });
  } catch ({ name, message }) {
    name, message;
  }
};
