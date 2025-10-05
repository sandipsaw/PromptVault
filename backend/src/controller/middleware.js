const jwt = require('jsonwebtoken');


const verifyToken = async (req, res,next) => {
    const token = req.cookies.token;
    console.log(token);

    if (!token) {
        return res.status(401).json({
            message: "User not logged in"
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports = verifyToken;
