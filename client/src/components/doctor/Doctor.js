import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

class Doctor extends React.Component{
    render(){
        return(
            <div>
            <Link to = "/profile">My Profile |</Link>
          <Link to = "/patientRecords" > Patient Records|</Link>
          <Link to = "/category"  >Add Patient |</Link>
          <Link>Appointments </Link>
         

          <h2>Welcome Dr.{this.props.user.username} </h2><br/>
          <h4>Please go ahead and complete your profile for further registration </h4>
 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Doctor)