const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { User } = require('../models/user')
const { Doctor } = require('../models/doctor')
const { authenticateUser } = require('../middlewares/authenticateUser')


router.get('/' , function(req , res){
    Doctor.find().populate('doctorId')
        .then(function(doctors){
            res.send(doctors)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.post('/' , authenticateUser ,  function(req,res){
    const body = req.body
    const doctor = new Doctor(body)
    doctor.doctorId = req.user._id
    doctor.save()
        .then(function(doctor){
            res.send(doctor)
        })
        .catch(function(err){
            res.send(err)
        })

})

router.get('/:id' , authenticateUser , function(req, res){
    const id = req.params.id
    Doctor.findOne({_id: id} , {doctorId : req.user._id}).populate('doctorId')
        .then(function(doctor){
            res.send(doctor)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.put('/:id' , authenticateUser , function(req, res){
    const id = req.params.id
    const body = req.body
    console.log(id , body)

    Doctor.findOneAndUpdate({_id : id} , {$set : body} , {runValidators : true , new : true} )
        .then(function(){
            User.findOneAndUpdate({ _id : req.user._id} , { $set : body} , {runValidators : true , new : true} )
            .then(function(user){
                res.send({notice : "successfully updated "})
            })
        })
        .catch(function(err){
            res.send(err)
        })   
       
})

module.exports = {
    doctorRouter : router
}