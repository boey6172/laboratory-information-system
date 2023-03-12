const express = require('express');
const router = express.Router(); 
const {Users} = require ("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bcrypt = require("bcrypt")
const {sign} = require("jsonwebtoken")


router.get("/", async(req,res) =>{
    // const postId = req.params.postId
    const users =  await Users.findAll({
        // where: {PostId: postId}
    })
    res.json(users)
});

router.post("/", async(req,res) =>{
    const {username,password} = req.body
    try {
        const user = await Users.findOne({
            where: {username:username}
        })
        if (user) res.json({error:"Account username already exist"})

        bcrypt.hash(password, 10).then((hash) =>{
            Users.create({
                username:username,
                password:hash
            })
        })
        res.json("yehey");
        
        
    } catch (error) {
        console.log(error)
    }


});

router.post("/changePassword", async(req,res) =>{
    const {employee,old_password, confirm_password, new_password} = req.body
    try {
        const user = await Users.findOne({
            where: {employee:employee}
        })
        if(new_password !== confirm_password) res.json({error:" Confirm Password Does not Match"})
        
        bcrypt.compare(old_password, user.password).then((match)=>{
            if(!match) res.json({error:" Old Password Does not Match"})
            // res.json(match)
            bcrypt.hash(new_password, 10).then((hash) =>{
                Users.update({
                    password:hash,
                },{
                    where:{
                        id:user.id
                    }
                });
            })
            res.json("Password Has Been changed");
        })
        
        
    } catch (error) {
        console.log(error)
    }


});


router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    const user = await Users.findOne({
      where: { username: username }
    });
  
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
  
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Incorrect password" });
    }
  
    const accessToken = sign({ username: user.username, id: user.id }, "pbpbrns12301234", {
      expiresIn: 60 * 60 * 24,
    });
  
    const data = {
      token: accessToken,
      user: {
        role: user.role,
        employee: user.employee,
      },
    };
  
    res.json(data);
  });

router.post("/checkUsername",async(req,res) => { 
    const {username} = req.body;

    const user = await Users.findOne({
        where: {username:username}
    })
    if (user) res.json({error:"Account Username exist"})

});




module.exports = router;