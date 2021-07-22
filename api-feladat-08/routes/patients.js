const express = require('express');
const router = express.Router();
const fsp = require('fs').promises;
// const { join } = require('path');

//const jsonPath = join('db','patients.json');
//const patients = require('../db/patients.json');
// const patients = require('../db/data');

const Patient = require('../models/patient.model');

//http-errors: npm i http-errors -S 
const createError = require("http-errors");

/* GET home page. */
router.get('/', async (req, res, next) => {
    const patients = await Patient.find();
    res.json(patients);
});

// http://localhost:3000/patients/count
router.get('/count', async (req, res, next) => {
    const patients = await Patient.find();
    res.json(patients.length);
});

// http://localhost:3000/patients/vaccinated
router.get('/vaccinated', async (req, res, next) => {
    const vaccinatedPatients = await Patient.find({ vaccine: { $nin: ['', null] } }).exec();
    res.json(vaccinatedPatients);
});

/*
// Get one patient
router.get('/:id', async (req, res, next) => {

    const patient = await Patient.findById(req.params.id);

     if (!patient) {
         return next(new createError.NotFound("Invalid Id, patient not found"));
     }

     res.json(patient);

   });


// http://localhost:3000/patients/1/vaccinated
router.get('/:id/vaccinated', async (req, res, next) => {

    const patient = await Patient.findById(req.params.id);

    const { id } = req.params;
    const patient = patients.find( patient => patient.id === parseInt(id, 10));
  
    if (!patient) {
        return next(new createError.NotFound("Patient not found"));
    }

    res.json(
        patient.vaccine === "" ? false : true);
    
  });

// New patient
/*
fetch('http://localhost:3000/patients', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({firstName: 'Jack', lastName: 'London', vaccine: 'Moderna'})
}).then( r => r.json() )
.then( d => console.log(d) );
*/
/*
router.post('/', async (req, res, next) => {

    const { firstName, lastName, vaccine } = req.body;

    if (!firstName || !lastName || !vaccine) {
        return next(
            new createError.BadRequest("Missing properties")
        );
    }

    const newPatient = req.body;
    newPatient.id = patients[patients.length - 1].id + 1;
    patients.push(newPatient);

    await fsp.writeFile(jsonPath, JSON.stringify(patients));
    
    res.status(201);
    res.json(newPatient);

});

// Update
router.put('/:id/:vaccine', (req, res, next) => {

    const id = req.params.id;
    const vaccine = req.params.vaccine;
    const index = patients.findIndex( p => p.id === Number(id) );

    if (!lastName || !firstName || !vaccine) {
        return next(
            new createError.BadRequest("Missing properties")
        );
    }

    patients[index] = {
        id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        vaccine
    };

    res.json(patients[index]);
});

// Delete
router.delete('/:vaccine', (req, res,next) => {

    const vaccine = req.params.vaccine;

    if (!vaccine) {
        return next(new createError.NotFound("Vaccine not found"));
    }

    patients.forEach(( patient, index) => {
        if (patient.vaccine === vaccine) {
            patients.splice(index, 1);                   // így kell megadni, hogy azt törölje, ahol van találat és ne máshol
        }
    });

    res.json({});
});
*/

module.exports = router;