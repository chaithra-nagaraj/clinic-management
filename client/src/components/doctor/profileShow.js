import React from 'react'
import axios from '../../config/axios'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { StartEditUser } from '../../redux/actions/users'

class DoctorProfileShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : this.props.user.username,
            email : this.props.user.email
        }
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email : this.state.email,
            username : this.state.username
        }
       
        this.props.dispatch(StartEditUser(formData , this.props.user._id))
    }
    render(){
        return(
            <div>
                <h2>Customize your Profile Dr.{this.props.user.username}</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        username
                        <input type = "text" value = {this.state.username} onChange ={this.handleChange} name = "username"/>
                    </label><br/>
                    <label>
                        email
                        <input type = "text" value = {this.state.email} onChange = {this.handleChange} name = "email" />
                    </label><br/>
                    <input type = "submit" />
                </form>

                <Link to = "/"> Back </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}
export default connect(mapStateToProps)(DoctorProfileShow) 