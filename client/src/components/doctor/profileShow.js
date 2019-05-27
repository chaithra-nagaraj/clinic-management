import React from 'react'
//import axios from '../../config/axios'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
//import Select from 'react-select'
import { StartGetDoctor , StartAddDoctor, StartEditDoctor } from '../../redux/actions/doctor'

class DoctorProfileShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : this.props.user.username,
            email : this.props.user.email,
            mobile : this.props.doctor.mobile,
            location : this.props.doctor.location,
            filterOptions : this.props.doctor.specializations,
            registrationNum : this.props.doctor.registrationNum,
            multiValue : []

        }
    }
    componentDidMount(){
    //     {Object.keys(this.props.doctor).length == 0 ? this.props :  this.props.dispatch(StartGetDoctor()}
    //    )
        this.props.dispatch(StartGetDoctor())
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }
    // handleMultiChange(option) {
    //     this.setState(state => {
    //       return {
    //         multiValue: option
    //       };
    //     });
    //   }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email : this.state.email,
            username : this.state.username,
            location : this.state.location ,
            registrationNum : this.state.registrationNum,
            mobile : this.state.mobile
        }
        console.log('formdata' , formData)

        {Object.keys(this.props.doctor).length == 0 ? this.props.dispatch(StartAddDoctor(formData)) : this.props.dispatch(StartEditDoctor(this.props.doctor._id , formData) )}
     
       

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
                    <label><br/>
                        Mobile
                        <input type = "text" value = {this.state.mobile || ''} onChange = {this.handleChange} name = "mobile"/>
                    </label><br/>
                    <label>
                        Location
                        <input type = "text" value = {this.state.location} onChange = {this.handleChange} name = "location"/>
                    </label><br/>
                    <label>
                        Registration Number
                        <input type = "text" value = {this.state.registrationNum} onChange = {this.handleChange} name = "registrationNum" />
                    </label><br/>
                    <input type = "submit"/>
                    {/* <label>
                        Specializations 
                    <Select
                        placeholder="Specializations"
                        value={this.state.multiValue}
                        options={this.state.filterOptions}
                        onChange={this.handleMultiChange}
                        multi
                        />
                    </label> */}
                </form>

               <Link to = "/dashboard"> Back </Link>
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
export default connect(mapStateToProps)(DoctorProfileShow) 