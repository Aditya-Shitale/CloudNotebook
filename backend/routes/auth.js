const express = require('express');
const { body, validationResult } = require('express-validator');
const User=require('../models/User');
const router=express.Router();



//create a user using :POST "/api/auth/" dosent require auth
router.post('/',[
    body('name','Enter valid name').isLength({ min: 3 }),
    body('email','Enter valid email').isEmail(),
    body('password').isLength({ min: 5 })
],(req,res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      }).then(user => res.json(user))
      .catch(err=>{console.log(err) 
        res.json({error:'please enter a unique email',message: err.message}) })
})

module.exports = router

