import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { StartAddPatient } from '../../redux/actions/patient'

class Patient extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            mobile : '',
            email :'',
            age : '',
            bloodGroup : '',
            dateOfBirth : ''
        }
    }
 
    componentDidMount(){
         var category = this.props.match.params.id 
         console.log(category)
    }
    

    handleChange = (e) => {
        e.persist()
        this.setState(()=> ({
            [e.target.name] : e.target.value
        }))
    }
    handleSubmit =(e)=> {
        e.preventDefault()
        const formData = {
            name : this.state.name,
            mobile : this.state.mobile,
            email : this.state.email,
            bloodGroup :  this.state.bloodGroup,
            age : this.state.age,
            dateOfBirth : this.state.dateOfBirth,
            category : this.props.match.params.id 
        }
        this.props.dispatch(StartAddPatient(formData))
    }
    render(){
        return(
            <div>
                <h2>Add a patient here</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        name
                        <input type = "text" value = {this.state.name} onChange ={this.handleChange} name = "name"/>
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
                        bloodGroup
                        <input type = "text" value = {this.state.bloodGroup} onChange = {this.handleChange} name = "bloodGroup"/>
                    </label><br/>
                    <label>
                        Age
                        <input type = "text" value = {this.state.age} onChange = {this.handleChange} name = "age"/>
                    </label><br/>
                    <label>
                        Date of Birth
                        <input type = "text" value = {this.state.dateOfBirth} onChange = {this.handleChange} name = "dateOfBirth" />
                    </label><br/>

                    <input type = "submit"/>
                 
                </form>
                <Link to = "/category"> Back </Link>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Patient)