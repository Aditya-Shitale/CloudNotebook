const mongoose = require('mongoose');

const UserSchema = new Schema({
   name:{
    type:string,
    required:true
   },
   email:{
    type:string,
    required:true,
    unique: true

   },
   password:{
    type:string,
    required:true
   },
   date:{
    typeDate,
    defaut:Date.now
   },
  });
  module.exports=mongoose.model('user',UserSchema)