const express = require('express');
const router = express.Router();

const patientService = require('../service/patient.service');

/* GET home page. */
router.get('/', async (req, res, next) => {
    const patients = await patientService.read();
    res.json(patients);
});

router.get('/count', async (req, res, next) => {
    const patients = await patientService.read();
    const output = {
        count: patients.filter( p => p.vaccine !== 'none' ).length
    };
    res.json(output);
});

module.exports = router;