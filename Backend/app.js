const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' 
}));

const JWT_SECRET = 'your_secret_key';

// Signup Route
app.post('/create', async (req, res) => {
    try {
      console.log('Received data:', req.body);
      const { username, email, password, bloodtype } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log('User already exists');
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        Bloodgroup: bloodtype, 
      });
  
      await newUser.save();
      console.log('User saved:', newUser);
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
