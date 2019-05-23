const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { Category } = require('../models/category')
const { authenticateDoctor } = require('../middlewares/authenticateDoctor')

router.get('/' , authenticateDoctor , function(req,res){
    Category.find({ doctorId : req.doctor._id})
        .then(function(categories){
            res.send(categories)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.post('/' , authenticateDoctor , function(req,res){
    const body = req.body
    const category = new Category(body)
    category.doctorId = req.doctor._id
    category.save()
        .then(function(category){
            res.send(category)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.delete('/:id' , authenticateDoctor , function(req , res){
    const id = req.params.id
    Category.findOneAndDelete({ _id : id} , {doctorId : req.doctor._id})
        .then(function(category){
            res.send(category)
        })
        .catch(function(err){
            res.send(err)
        })
})


module.exports = {
    categoryRouter : router
}