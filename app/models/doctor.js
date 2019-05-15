const mongoose = require('mongoose')
const { User }   = require('./user')

const Schema = mongoose.Schema
const doctorSchema = new Schema({
    doctorId : {
        type : Schema.Types.ObjectId ,
        ref : 'User'
    },
    mobile : {
        type : Number,
        required : true,
        unique : true
    },
    location : {
        type : String,
        required : true
    },
    specializations : [
        {
            type : String
        }
    ],
    treatments : [
        {
            type : String
        }
    ]
})

const Doctor = mongoose.model('Doctor' , doctorSchema)

module.exports = {
    Doctor
}