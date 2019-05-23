const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { Doctor } = require('../models/doctor')
const { User } = require('../models/user')
const { authenticateUser } = require('../middlewares/authenticateUser')

router.get('/' , authenticateUser , function(req , res){
    Doctor.find().populate('doctorId')
        .then(function(doctors){
            res.send(doctors)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.put('/:id' , authenticateUser , function(req , res){
    const id = req.params.id
    const body = req.body
    console.log(req.body)
    Doctor.findOneAndUpdate({_id : id} , {$set : body} , {runValidators: true , new : true})
        .then(function(doctor){
            res.send(doctor)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.delete('/:id' , authenticateUser ,  function(req , res){
    const id = req.params.id
    Doctor.findOneAndDelete({_id : id})
        .then(function(doctor){
            res.send({notice : 'doctor deleted succesfully'})
        })
        .catch(function(err){
            res.send(err)
        })
})


module.exports = {
    adminRouter : router
}