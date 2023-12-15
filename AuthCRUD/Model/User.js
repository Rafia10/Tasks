import mongoose from "mongoose";
import  paginate  from "mongoose-paginate-v2";
import bcrypt from 'bcrypt'
const User= new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true, required: true },
    password: { type: String },
    firstname:{type:String,required:true },
    lastname:{type:String,required:true },
    isEmailVerified: { type: Boolean, default: false },
  })
  User.pre("save", async function (next) {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  
    next();
  });
  
  User.virtual("id").get(function () {
    return this._id.toHexString();
  });
  
  User.set("toJSON", {
    virtuals: true,
  });
  
  User.plugin(paginate);
  
export default mongoose.model("User", User);