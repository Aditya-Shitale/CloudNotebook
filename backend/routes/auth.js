const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const router = express.Router();

//create a user using :POST "/api/auth/createUser" No login required dosent require auth
router.post(
  "/createuser",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter valid email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //if there are errors return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check whether email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorryy..!!A user Already exist with this email id" });
      }
      user = User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      });
      // .then(user => res.json(user))
      // .catch(err=>{console.log(err)
      //   res.json({error:'please enter a unique email',message: err.message}) })
      res.json(req.body);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("error 404");
    }
  }
);

module.exports = router;
