const express = require('express')
const router = express.Router()
const { Patient }  = require('../models/patient')
const { authenticateUser } = require('../middlewares/authenticateUser')
const { authenticateDoctor } = require('../middlewares/authenticateDoctor')

router.get('/' , authenticateDoctor ,  function(req,res){
    console.log('response -' , req.doctor)
    Patient.find({ doctorId : req.doctor._id})
        .then(function(patients){
            res.send(patients)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.post('/' , authenticateDoctor ,  function(req,res){
    const body = req.body
    const patient = new Patient(body)
    patient.doctorId = req.doctor._id
    patient.save()
        .then(function(patient){
            res.send(patient)
        })
        .catch(function(err){
            res.send(err)
        })
})


// router.put('/:id' , authenticateUser , function(req,res){
//     const id = req.params.id
//     const body = req.body
//     Patient.findByIdAndUpdate(id , {$set : body} , {new : true , runValidators : true})
//         .then(function(patient){
//             res.send(patient)
//         })
//         .catch(function(err){
//             res.send(err)
//         })
// })
router.delete('/:id', authenticateUser , function(req,res){
    const id = req.params.id
    Patient.findOneAndDelete({ _id : id})
        .then(function(patient){
            res.send(patient)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.get('/:id' ,  authenticateUser , function(req,res){
    const id = req.params.id
    Patient.findOne({ _id : id} , {doctorId : req.user._id})
        .then(function(patient){
            res.send(patient)
        })
        .catch(function(err){
            res.send(err)
        })
})

module.exports = {
    patientRouter : router
}