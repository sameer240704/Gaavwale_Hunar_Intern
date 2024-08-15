const { Patient, Doctor, Admin } = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const getUserModel = (userType) => {
    switch (userType) {
        case 'PATIENT':
            return Patient;
        case 'DOCTOR':
            return Doctor;
        case 'ADMIN':
            return Admin;
        default:
            throw new Error('Invalid user type');
    }
};

const signUp = async (req, res) => {
    const { name, email, password, dateOfBirth, contactNo, medicalRegistrationNumber, userType } = req.body;

    try {
        const UserModel = getUserModel(userType);
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const userData = {
            name,
            email,
            password: hashedPassword,
            dateOfBirth,
            contactNo,
            userType
        };

        if (userType === 'DOCTOR' && medicalRegistrationNumber) {
            userData.medicalRegistrationNumber = medicalRegistrationNumber;
            userData.ap
        }

        const newUser = new UserModel(userData);
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error in sign up:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const signIn = async (req, res) => {
    const { email, password, userType } = req.body;

    try {
        const UserModel = getUserModel(userType);
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        if (userType === 'DOCTOR' && user.status !== 'APPROVED') {
            return res.status(403).json({ message: 'Doctor account not approved yet' });
        }

        const token = jwt.sign({ userId: user._id, userType }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, message: 'Sign in successful' });
    } catch (error) {
        console.error('Error in sign in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    signUp,
    signIn,
};
