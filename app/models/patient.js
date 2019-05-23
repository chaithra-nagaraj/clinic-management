const mongoose = require('mongoose')
const { Doctor }   = require('./doctor')

const Schema = mongoose.Schema

const patientSchema = new Schema ({
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
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
    bloodgroup : {
         type : String,
         required: true
    },
    createdDateAndTime : {
        type : Date,
        default : new Date().toLocaleDateString()
    },
})
const Patient = mongoose.model('Patient',patientSchema)

module.exports = {
    Patient
}
