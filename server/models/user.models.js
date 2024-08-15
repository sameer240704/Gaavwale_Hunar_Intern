const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baseUserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date
    },
    contactNo: {
        type: String
    },
    userType: {
        type: String
    }
});

const patientSchema = new Schema({
    ...baseUserSchema.obj,
});

const doctorSchema = new Schema({
    ...baseUserSchema.obj,
    medicalRegistrationNumber: {
        type: String
    },
    degree: {
        type: [String],
    },
    status: {
        type: String,
        enum: ['PENDING', 'APPROVED'],
        default: 'PENDING'
    },
});

const adminSchema = new Schema({
    ...baseUserSchema.obj,
    adminValidationNumber: {
        type: String
    },
});

const Patient = mongoose.model('Patient', patientSchema);
const Doctor = mongoose.model('Doctor', doctorSchema);
const Admin = mongoose.model('Admin', adminSchema);

module.exports = { Patient, Doctor, Admin };
