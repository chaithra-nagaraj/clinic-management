const express = require('express')
const mongoose = require('./config/database')
const cors = require('cors')
const { userRouter } = require('./app/controllers/userController')
const { doctorRouter } = require('./app/controllers/doctorController')
const { adminRouter } = require('./app/controllers/adminController')

const port = 3005
const app = express()
app.use(express.json())
app.use(cors())

app.use('/users' , userRouter )
app.use('/doctor' , doctorRouter)
app.use('/admin' , adminRouter)

app.listen(port , function(){
    console.log('Listening to the port',port)
}) 