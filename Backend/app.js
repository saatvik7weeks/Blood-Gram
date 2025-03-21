const express = require('express')
const app = express()
const cors = require('cors');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
app.use(cors({
    origin: 'http://localhost:5000' 
  }));

  const JWT_SECRET = "your_secret_key";  

  app.post('/create',(req,res)=>{
    bcrypt.genSalt (10,(err,salt)=>{
        bcrypt.hash(req.body.password,salt,async(err,hash)=>{
            let createuser = await userModel.create({
                username:req.body.username,
                email:req.body.email,
                password:hash,
                age:req.body.age,
                bloodgroup:req.body.bloodgroup,
                address:req.body.address,
                gender:req.body.gender,
                contact:req.body.contact
            });
            let token = jwt.sign({email:req.body.email},JWT_SECRET);
            res.cookie("token",token);
            res.redirect('/login');
        });
    })
  })



app.listen (5000,()=>{
    console.log("Server is running on port 3000")
})