import React from 'react'
import { Link } from 'react-router-dom'
import { getAdminDoctors , StartEditAdminDoctor , StartDeleteDoctor } from '../../redux/actions/admin'
import { connect } from 'react-redux'

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
                <h4>Listings Doctors </h4>
                <ul>
                    {this.props.adminDoctors.map(doctor => {
                        if(doctor.approved == false){
                            return (<li key = {doctor._id}>
                            <div>
                               <h4> Doctor -  {doctor.doctorId.username} </h4> 
                               <h4> mobile -    {doctor.mobile}</h4> 
                                <h4> email  -    {doctor.doctorId.email}</h4>
                                <h4> location -  {doctor.location}</h4>
                                <h4>Reistration Number - {doctor.registrationNum}</h4>
                                <button onClick = {() => {
                                    this.handleApprove(doctor._id)
                                }}>Approve</button><button onClick = {() => {this.handelReject(doctor._id)}}>Reject</button>
                                </div><br/><hr/>
                            
                            </li>
                            )
                        }
                        // return <li key = {doctor._id}><Link to = {`/admin/doctor/${doctor._id}`}>{doctor.doctorId.username}</Link> <button>Approve</button><button>Reject</button></li>
                       
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