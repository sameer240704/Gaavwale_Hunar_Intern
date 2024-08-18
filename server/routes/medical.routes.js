const express = require("express");
const router = express.Router();
const {
  createNotes,
  getNotes,
  updateNotes,
  getNotesByPatientId,
  getNotesByDoctorId,
  getNotesByDoctorIdPatientId,

  createPrescription,
  getPrescription,
  getPrescriptionByPatientId,
} = require("../controllers/medical.controllers.js");

router.post("/notes", createNotes);
router.get("/notes", getNotes);
router.patch("/notes/:notesId", updateNotes);
router.get("/notes/patient/:patientId", getNotesByPatientId);
router.get("/notes/doctor/:doctorId", getNotesByDoctorId);
router.get("/notes/:doctorId/:patientId", getNotesByDoctorIdPatientId);

router.post("/prescription", createPrescription);
router.get("/prescription", getPrescription);
router.get("/prescription/:patientId", getPrescriptionByPatientId);

router.get("/notes", (req, res) => {
  res.send("GET request to the homepage");
});

module.exports = router;
