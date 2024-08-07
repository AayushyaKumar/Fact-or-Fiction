const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require('crypto')
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
  }, role:{
    type:String,
    enum:['user','contriubter','admin'],
    default: 'admin'
    
  },
  passwordChangedAt: Date,
  passwordResetToken:String,
  passwordResetExpires: Date,

 
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 8);
  this.confirmPassword = undefined;
  next();
});

userSchema.pre('save', function(next){
  if(this.isModified('password') || this.isNew) return next()
  this.passwordChangedAt= Date.now()- 1000

})

userSchema.methods.correctPassword= async function(candidatePassword, userPassword){
  console.log(await bcrypt.compare(candidatePassword,userPassword))
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

userSchema.methods.createPasswordResetToken = function(){
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
console.log({resetToken}, this.passwordResetToken)
  this.passwordResetExpires = Date.now() + 10*60*1000;
  return resetToken;
  
}
const Create = mongoose.model("Create", userSchema);
module.exports = Create;
