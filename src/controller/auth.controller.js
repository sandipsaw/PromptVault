const userModel = require('../model/auth.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const registerController = async (req, res) => {
    const { fullname: { firstname, lastname }, email, password,confirmPassword } = req.body;

    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const isUserAlreadyExists = await userModel.findOne({
        email
    })
    if(isUserAlreadyExists){
        return res.status(400).json({message:"user Already exists Now you login"})
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashPassword = await bcrypt.hash(password,10)

    const user = await userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password:hashPassword

    })
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.cookie("token",token);

    res.status(201).json({
        message:"User Registered successfully",
        user:{
            fullname:{
                firstname:firstname,
                lastname:lastname
            },
            email:email,
            password:password,
            id:user._id,
        }
    })

}

const loginController = async(req,res)=>{
    const { email, password } = req.body;

    if ( !email || !password ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const User = await userModel.findOne({
        email
    })
    if(!User){
        return res.status(404).json({message:"User not found!"})
    }
    const isPassword = await bcrypt.compare(password,User.password)

    if(!isPassword){
        return res.status(401).json({message:"Invalid password"})
    }

    const token = jwt.sign({id:User._id},process.env.JWT_SECRET)
    res.cookie("token",token);

    res.status(201).json({
        message:"User looged in successfully",
        User:{
            fullname:User.fullname,
            email:email,
            id:User._id,
        }
    })
}
module.exports = {registerController,loginController};

