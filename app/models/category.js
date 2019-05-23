const mongoose = require('mongoose')

const Schema = mongoose.Schema
const categorySchema = new Schema({

    name : {
        type: [string]
    },
    patientId : {
        type: Schema.Types.ObjectId,
        ref: 'patient'
    },
    
})

const Category = mongoose.model('Category' , categorySchema)

module.exports = {
    Category
}