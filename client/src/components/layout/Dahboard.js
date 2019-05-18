import React from 'react'
import Doctor from '../doctor/Doctor'
import  Admin  from '../admin/Admin'
import { connect } from 'react-redux'

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                Dashboard
            {this.props.user.role === "doctor" && (
                <Doctor/>
      
    )}
    {this.props.user.role === "admin" && (
      <Admin/>
      
    )}

    {this.props.user.role === "patient" && (
      <h2> Welcome {this.props.user.username}</h2>
    )}
    </div>
            
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}


export default connect(mapStateToProps)(Dashboard)