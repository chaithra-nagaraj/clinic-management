const mongoose = require('mongoose')
const { Category } = require('./category')
const { Doctor } = require('./doctor')
const Schema = mongoose.Schema
const patientSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true ,
        minlength : 10 ,
        maxlength : 10
    },
    email : {
        type : String
    },
    bloodGroup : {
        type : String ,
        required : true
    },
    dateOfBirth : {
        type : String ,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : 'Category'
    },
    doctorId : {
        type : Schema.Types.ObjectId ,
        ref : 'Doctor'
    }
    // createdDateAndTime : {
    //     type : Date,
    //     default : new Date().toLocaleDateString()
    // },
})

const Patient = mongoose.model('Patient' , patientSchema)

module.exports = {
    Patient
}