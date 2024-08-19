const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicalSchema = new Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
  },
  prescriptionName: {
    type: String,
    required: true,
  },
  prescriptionTime: {
    type: String,
    required: true,
  },
  prescriptionSchedule: {
    type: String,
    required: true,
  },
});

const notesSchema = new Schema({
  ...medicalSchema.obj,
  doctorId: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
  details: {
    type: String,
    required: true,
  },
  heartRate: [
    {
      type: Number,
    },
  ],
  bloodPressure: [
    {
      systolic: { type: Number, required: true },
      diastolic: { type: Number, required: true },
    },
  ],
  temperature: [
    {
      type: Number,
    },
  ],
  weight: [
    {
      type: Number,
    },
  ],
});

const prescriptionSchema = new Schema({
  ...medicalSchema.obj,
  details: {
    type: String,
    required: true,
  },
});

const Notes = mongoose.model("Notes", notesSchema);
const Prescription = mongoose.model("Prescription", prescriptionSchema);

module.exports = { Notes, Prescription };
