const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { firstNameValidator, emailValidator, passwordValidator, userTypeValidator } = require('./validator');
const jwt = require('jsonwebtoken');

const expressValidator=require('express-validator');
exports.signup = [
    firstNameValidator,
    emailValidator,
    passwordValidator,
    userTypeValidator,    
    async (req, res) =>     
    {
    try {
        const { name, email, contact, password, type } = req.body;

         const errors = expressValidator.validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array());
            return res.status(422).json({
                success: false,
                message: errors.array().map((error) => error.msg)
            });
        }
       
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("User already exists",existingUser);
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }
       
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create new user
        const user = new User({
            firstName: name,
            lastName: name,
            email,
            password: hashedPassword,
            type
        });
        
        await user.save();
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: user
        });

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating user'
        });
    }

}]


exports.login = async (req, res) => {

    const {email,password}=req.body;

    try{
        const user=await User.findOne({email});

        if(!user){
            return res.status(400).json({message:"user not found"});
        }

        const isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const token=jwt.sign({userId:user._id,userType:user.type},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        )
        res.status(200).json({message: 'Login successful',type:user.type,token:token});
    }
    catch(err){
        console.log(error);
        res.status(500).json({message:"server error"});
    }

}