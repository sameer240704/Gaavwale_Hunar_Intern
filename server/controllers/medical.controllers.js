const { Notes, Prescription } = require("../models/medical.models");
const { User } = require("../models/user.models");

const createNotes = async (req, res) => {
  const {
    prescriptionName,
    prescriptionTime,
    prescriptionSchedule,
    details,
    heartRate,
    bloodPressure,
    temperature,
    weight,
    patientId,
    doctorId,
  } = req.body;

  try {
    const newNotes = new Notes({
      patientId,
      doctorId,
      prescriptionName,
      prescriptionTime,
      prescriptionSchedule,
      details,
      heartRate,
      bloodPressure,
      temperature,
      weight,
    });

    await newNotes.save();

    res.status(201).json({ message: "Notes created successfully" });
  } catch (error) {
    console.error("Error in creating notes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateNotes = async (req, res) => {
  const { notesId } = req.params;
  const {
    prescriptionName,
    prescriptionTime,
    prescriptionSchedule,
    details,
    heartRate,
    bloodPressure,
    temperature,
    weight,
  } = req.body;

  try {
    const updatedFields = {};
    if (prescriptionName !== undefined)
      updatedFields.prescriptionName = prescriptionName;
    if (prescriptionTime !== undefined)
      updatedFields.prescriptionTime = prescriptionTime;
    if (prescriptionSchedule !== undefined)
      updatedFields.prescriptionSchedule = prescriptionSchedule;
    if (details !== undefined) updatedFields.details = details;

    const appendFields = {};
    if (heartRate !== undefined) appendFields.heartRate = heartRate;
    if (bloodPressure !== undefined) appendFields.bloodPressure = bloodPressure;
    if (temperature !== undefined) appendFields.temperature = temperature;
    if (weight !== undefined) appendFields.weight = weight;

    const updatedNotes = await Notes.findByIdAndUpdate(
      notesId,
      {
        $set: updatedFields,
        $push: appendFields,
      },
      { new: true, runValidators: true }
    );

    if (!updatedNotes) {
      return res.status(404).json({ message: "Notes not found" });
    }

    res
      .status(200)
      .json({ message: "Notes updated successfully", updatedNotes });
  } catch (error) {
    console.error("Error in updating notes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateNotes;

const getNotes = async (req, res) => {
  try {
    const notes = await Notes.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getting notes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getNotesByPatientId = async (req, res) => {
  const { patientId } = req.params;

  try {
    const notes = await Notes.find({ patientId });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getting notes by patient id:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getNotesByDoctorId = async (req, res) => {
  const { doctorId } = req.params;

  try {
    const notes = await Notes.find({ doctorId });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getting notes by doctor id:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getNotesByDoctorIdPatientId = async (req, res) => {
  const { doctorId, patientId } = req.params;

  try {
    const notes = await Notes.find({ doctorId, patientId });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getting notes by doctor id and patient id:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createPrescription = async (req, res) => {
  const {
    patientId,
    prescriptionName,
    prescriptionTime,
    prescriptionSchedule,
    details,
  } = req.body;

  try {
    const newPrescription = new Prescription({
      patientId,
      prescriptionName,
      prescriptionTime,
      prescriptionSchedule,
      details,
    });

    await newPrescription.save();

    res.status(201).json({ message: "Prescription created successfully" });
  } catch (error) {
    console.error("Error in creating prescription:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPrescription = async (req, res) => {
  try {
    const prescription = await Prescription.find();
    const notes = await Notes.find().select(
      "prescriptionName prescriptionTime prescriptionSchedule"
    );
    res.status(200).json({
      prescription,
      notes,
      
    });
  } catch (error) {
    console.error("Error in getting prescription:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPrescriptionByPatientId = async (req, res) => {
  const { patientId } = req.params;

  try {
    const prescription = await Prescription.find({ patientId });
    const notes = await Notes.find({ patientId }).select(
      "prescriptionName prescriptionTime prescriptionSchedule"
    );

    res.status(200).json({
      prescription,
      notes,
    });
  } catch (error) {
    console.error("Error in getting prescription by patient id:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createNotes,
  getNotes,
  updateNotes,
  getNotesByPatientId,
  getNotesByDoctorId,
  getNotesByDoctorIdPatientId,

  createPrescription,
  getPrescription,
  getPrescriptionByPatientId,
};
