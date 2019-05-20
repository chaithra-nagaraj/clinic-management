const mongoose = require('mongoose')

const Schema = mongoose.Schema
const observationSchema = new Schema({

    patientId : {
        type: Schema.Types.ObjectId,
        ref: 'patient'
    },
    sugar : {
        type : String,
        required : true
    },
    bp : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    createdDateAndTime : {
        type : Date,
        default : new Date().toLocaleDateString()
    },
})

const Observation = mongoose.model('Observation' , observationSchema)

module.exports = {
    Observation
}