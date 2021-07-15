const express = require('express');
const router = express.Router();

const patientService = require('../service/patient.service');

//http-errors: npm i http-errors -S 
const createError = require("http-errors");

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

// http://localhost:3000/patients/1/vaccinated
router.get('/:id/vaccinated', async (req, res, next) => {

    const patients = await patientService.read();
    const { id } = req.params;
    const patient = patients.find( patient => patient.id === parseInt(id, 10));
  
    if (!patient) {
        return next(new createError.NotFound("Patient not found"));
    }

    res.json(
        patient.vaccine === "" ? false : true);
    
  });

module.exports = router;