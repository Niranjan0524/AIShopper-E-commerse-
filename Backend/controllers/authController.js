const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { firstNameValidator, emailValidator, passwordValidator, userTypeValidator } = require('./validator');

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

    

    res.status(200).json({message: 'Login successful'});

}