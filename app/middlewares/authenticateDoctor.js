const { Doctor } = require('../models/doctor')
const { User } = require('../models/user')

const authenticateDoctor = function(req,res,next){
    const token = req.header('x-auth')
    console.log('token')
        User.findByToken(token)
        .then(function(user){
            if(user){
                console.log('user know' , user.username)
                Doctor.findOne({ doctorId : user._id})
                    .then(function(doctor){
                        if(doctor){
                            console.log('doctor - ')
                            req.doctor = doctor
                            next()
                        }else{
                            res.status('404').send({ notice : 'Not an authorised doctor'})
                        }
                    })
                // req.user = user 
                // req.token = token
                // next()
            }else{
                res.status('401').send({notice :'token not avaliable'})
            }
        })
}

module.exports ={
    authenticateDoctor
}