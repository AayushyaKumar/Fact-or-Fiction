const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please enter your name."],
  },
  email: {
    type: String,
    unique: true,
    validate: [validator.isEmail, "Enter valid email"],
    lowercase: true,
  },
  password: {
    type: String,
    unique: true,
    required: [true,"Enter Password"],
    select:false
  },
  confirmPassword: {
    type: String,
    required:[true,"Confirm the password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password does not match",
    },
  },
  passwordChangedAt: Date,

  role:{
    type:String,
    enum:['user','contriubter','admin'],
    default: 'user'
    
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 8);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword= async function(candidatePassword, userPassword){
  return await bcrypt.compare(candidatePassword,userPassword)
}
userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

const Create = mongoose.model("Create", userSchema);
module.exports = Create;
