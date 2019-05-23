import React from 'react'
import { Link } from 'react-router-dom'
import { getAdminDoctors , StartEditAdminDoctor , StartDeleteDoctor } from '../../redux/actions/admin'
import { connect } from 'react-redux'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBCardHeader , MDBRow } from 'mdbreact';

class Admin extends React.Component{
    constructor(props){
        super(props)
    }

    handleApprove = (id) => {
         const approval = {
            approved : true
        }
        this.props.dispatch(StartEditAdminDoctor(id , approval))
    }

    handelReject = (id) => {
        this.props.dispatch(StartDeleteDoctor(id))
    }

    componentDidMount(){
         this.props.dispatch(getAdminDoctors())
    }
    render(){
        return(
            <div>
                <h2>Welcome {this.props.user.username}</h2>
                <MDBRow center>
                
            { this.props.adminDoctors.map(doctor => {
                if(doctor.approved == false){
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
                                    registrationNum    {doctor.registrationNum}
                        </MDBCardText>
                        <MDBBtn onClick = {() => {
                                    this.handleApprove(doctor._id)}}>Approve</MDBBtn>
                        <MDBBtn onClick = {() => {
                                    this.handelReject(doctor._id)}}>Reject</MDBBtn>
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
        user :  state.user ,
        adminDoctors : state.adminDoctors
    }
}

export default connect(mapStateToProps)(Admin)