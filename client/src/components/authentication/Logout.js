import React from 'react'
import axios from '../../config/axios';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { StartRemoveUser } from '../../redux/actions/users';
import { removeDoctor } from '../../redux/actions/doctor'
import { removeDoctors } from '../../redux/actions/admin'


class Logout extends React.Component{
    constructor(props){
        super(props)
      
    }
    componentDidMount(){
        this.props.dispatch(StartRemoveUser())
        this.props.dispatch(removeDoctor())
        this.props.dispatch(removeDoctors())
        console.log(this.props.user.username)
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
                <h2>Logout successfully.......</h2>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        doctor : state.doctor
    }
}

export default connect(mapStateToProps)(Logout) 