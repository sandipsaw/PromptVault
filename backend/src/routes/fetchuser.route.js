const verifyToken = require('../controller/middleware');
const userModel = require('../model/auth.model');
const express = require('express')
const router = express.Router();

router.get('/fetchUser', verifyToken, async (req, res) => {
    const user = await userModel.findById(req.userId);

    res.status(200).json({
        message: "User fetched successfully",
        user:user
    });
})

module.exports = router;