const express = require('express');

const User=require('../models/User');
const router=express.Router();



//create a user using :POST "/api/auth/" dosent require auth
router.post('/',(req,res)=>{
console.log(req.body);
const user = User(req.body);
user.save()
// res.send("hello");
res.send(req.body);
})

module.exports = router