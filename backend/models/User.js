const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");

const userSchema=new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/.+\@.+\..+/, "Please eneter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
  },
  {
    timestamps: true,
  } 
);


// password hashing middleware
userSchema.pre("save",async function (next){
  if(!this.isModified("password")) return next();
  const salt=await bycrypt.genSalt(10);
  this.password=await bycrypt.hash(this.password,salt);
  next();
})


// match user password to ahshed password
userSchema.methods.matchPassword=async function(enteredPassword){
  return await bycrypt.compare(enteredPassword, this.password);
}


module.exports=mongoose.model("User", userSchema);