// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userModel = require('../model/auth.model')

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await userModel.find({}, 'fullname email');

    res.json(users);
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
