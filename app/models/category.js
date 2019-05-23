const mongoose = require('mongoose')
const { Doctor } = require('./doctor') 
const Schema = mongoose.Schema
const categorySchema = new Schema({
    category : {
        type : String
    },
    doctorId : {
        type : Schema.Types.ObjectId,
        ref : 'Doctor'
    }
})

const Category = mongoose.model('Category' , categorySchema)
module.exports = {
    Category
}