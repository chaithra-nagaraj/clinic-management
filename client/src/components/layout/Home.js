import React from 'react'
import { connect } from 'react-redux'
import { StartGetDoctors } from '../../redux/actions/doctors'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBCardHeader , MDBRow } from 'mdbreact';



class Home extends React.Component{

    constructor(props){
        super(props)
    }


    handleBooking = (e) => {
        console.log("book an appointmnet clicked")
    }
    componentDidMount(){
        this.props.dispatch(StartGetDoctors())
    }
    
    render(){
        return(
            
            <div>
              
                <MDBRow center>
            { this.props.doctors.map(doctor => {
                if(doctor.approved == true){
                    return (
                        <MDBCard style={{ width: "22rem" }} className="m-2">
                        <MDBCardHeader>
                        <MDBCardTitle>{doctor.doctorId.username}</MDBCardTitle>
                        </MDBCardHeader>
                        <MDBCardBody>
                        <MDBCardText>
                                     mobile -           {doctor.mobile} <br/>
                                    email -            {doctor.doctorId.email} <br/>
                                    location -         {doctor.location} <br/>
                        </MDBCardText>
                        <MDBBtn onClick = {() => {
                                    this.handleBooking(doctor._id)}}>Book an Appointment</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                    )
                }
            })}
            </MDBRow>
               
               
            
 

           
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user ,
        doctors : state.doctors,
        adminDoctors : state.adminDoctors
    }
}

export default connect(mapStateToProps)(Home)