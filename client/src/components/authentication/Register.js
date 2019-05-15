import React from 'react'
import axios from '../../config/axios'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            email : '',
            password : '',
            role : '',
            notice : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(()=>({
            [e.target.name] : e.target.value
        }))
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password,
            role : this.state.role
        }
        console.log(formData)
        axios.post('/users/register' , formData)
            .then((response) => {
                this.setState(()=>({
                    username : '' , email : '' , password : '', notice : 'successfully registered !:) Taking you to the Login Page'
                }))
                setInterval(() => {
                    this.props.history.push('/users/login')
                },2000);
            })
    }
    render(){
        return(
            <div>
                 {this.state.notice && this.state.notice}
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Username
                        <input type = "text" value = {this.state.username} onChange = {this.handleChange} name = "username"/>
                    </label><br/>
                    <label>
                        email
                        <input type = "text" value = {this.state.email} onChange = {this.handleChange} name = "email"/>
                    </label><br/>
                    <label>
                        password
                        <input type = "password" value = {this.state.password} onChange = {this.handleChange} name = "password"/>
                    </label><br/>
                    <label>
                        Are you a Doctor?
                        <input type = "radio" name = "role" value = "doctor" onChange = {this.handleChange} name = "role"/>
                    </label>
                    <label>
                        Are you a patient?
                        <input type = "radio" name = "role" value = "patient" onChange = {this.handleChange} name = "role"/>
                    </label>

                    
                    
                    <input type = "submit"/>
                </form>
            </div>
        )
    }
}

export default Register