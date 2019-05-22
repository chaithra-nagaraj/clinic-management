import React from 'react'
import { Link } from 'react-router-dom'
import { getAdminDoctors , StartEditAdminDoctor , StartDeleteDoctor } from '../../redux/actions/admin'
import { connect } from 'react-redux'

class Admin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notice : false
        }
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
                {!this.state.notice && (
                    <div>
                        
                    </div>
                ) }
                <h4>Listings Doctors </h4>
                <ul>
                    {this.props.adminDoctors.map(doctor => {
                        if(doctor.approved == false){
                            return (<li key = {doctor._id}>
                            <div className="card w-50 new-card" >
                                <div className="card-body">
                                    <h5 className="card-title">{doctor.doctorId.username}</h5>
                                    <p className="card-text">
                                    mobile -           {doctor.mobile} <br/>
                                    email -            {doctor.doctorId.email} <br/>
                                    location -         {doctor.location} <br/>
                                    registrationNum - {doctor.registrationNum}</p>
                                    <button onClick = {() => {
                                    this.handleApprove(doctor._id)
                                }} className="btn btn-primary" >Approve </button>| 
                                    <button  onClick = {() => {

                                        this.handelReject(doctor._id)}} className="btn btn-primary"
                                        
                                    
                                        > Reject</button>
                                </div>
                            </div>

                            {/* <div>
                               <h4> Doctor -  {doctor.doctorId.username} </h4> 
                               <h4> mobile -    {doctor.mobile}</h4> 
                                <h4> email  -    {doctor.doctorId.email}</h4>
                                <h4> location -  {doctor.location}</h4>
                                <h4>Reistration Number - {doctor.registrationNum}</h4>
                                <button onClick = {() => {
                                    this.handleApprove(doctor._id)
                                }}>Approve</button><button onClick = {() => {this.handelReject(doctor._id)}}>Reject</button>
                                </div><br/><hr/> */}
                            
                            </li>
                            )
                        }
                        
                       
                    })}
                </ul>
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



