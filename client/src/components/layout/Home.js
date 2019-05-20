import React from 'react'
import { connect } from 'react-redux'
import { StartGetDoctors } from '../../redux/actions/doctors'



class Home extends React.Component{

    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(StartGetDoctors())
    }
    
    render(){
        return(
            
            <div>
                    Book an Appointment with our Doctors --
            <ul>
              {this.props.doctors.map(doctor => {
                if(doctor.approved == true)
                return <li key ={doctor._id}>{doctor.doctorId && (doctor.doctorId.username)}</li>
                  // return  <li key ={doctor._id}>{doctor.doctorId.username}</li>
              })}

            </ul> 
         
           
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user ,
        doctors : state.doctors
    }
}

export default connect(mapStateToProps)(Home)