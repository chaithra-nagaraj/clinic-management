const express = require('express')
const mongoose = require('./config/database')
const cors = require('cors')
const { userRouter } = require('./app/controllers/userController')
const { doctorRouter } = require('./app/controllers/doctorController')
<<<<<<< HEAD
const { patientRouter } = require('./app/controllers/patientsController')
=======
const { adminRouter } = require('./app/controllers/adminController')
>>>>>>> d6a67c646a65f7d752ea9505ef3c1ab32afe6f0f

const port = 3005
const app = express()
app.use(express.json())
app.use(cors())

app.use('/users' , userRouter )
app.use('/doctor' , doctorRouter)
<<<<<<< HEAD
app.use('./patient', patientRouter)
=======
app.use('/admin' , adminRouter)
>>>>>>> d6a67c646a65f7d752ea9505ef3c1ab32afe6f0f

app.listen(port , function(){
    console.log('Listening to the port',port)
}) 