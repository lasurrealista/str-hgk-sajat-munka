const express = require('express');
const router = express.Router();

const patientService = require('../service/patient.service');

/* GET home page. */
router.get('/', async (req, res, next) => {
    const patients = await patientService.read();
    res.json(patients);
});

// http://localhost:3000/patients/count
router.get('/count', async (req, res, next) => {
    const patients = await patientService.read();
    const output = {
        count: patients.filter( p => p.vaccine !== 'none' ).length
    };
    res.json(output);
});

// http://localhost:3000/patients/vaccinated
router.get('/vaccinated', async (req, res, next) => {
    const patients = await patientService.read();
    const vaccinatedPatients = patients.filter( (patient) => patient.vaccine );
    res.json(vaccinatedPatients);
  });

module.exports = router;