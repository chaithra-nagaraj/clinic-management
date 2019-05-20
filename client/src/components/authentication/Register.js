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
        axios.post('/users/register' , formData)
            .then((response) => {
                this.setState(()=>({
                    username : '' , email : '' , password : '', notice : 'successfully registered !:) Taking you to the Login Page'
                }))
                setTimeout(() => {
                    this.props.history.push('/users/login')
                },2000);
            })
    }

    render(){
        return(

            <div className="container">
                {this.state.notice && this.state.notice}
                <form onSubmit = {this.handleSubmit}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <header className="card-header">
                                <a href="/users/login" className="float-right btn btn-outline-primary mt-1">Log in</a>
                                <h4 className="card-title mt-2">Sign up</h4>
                            </header>
                            <article className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Username </label>   
                                            <input type="text" className="form-control" 
                                            
                                            value = {this.state.username} onChange = {this.handleChange} 
                                            name = "username" placeholder="Username" />
                                            
                                        </div> 
                                        
                                    </div> 
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Email address</label>
                                            <input type="text" className="form-control"                                            
                                            value = {this.state.email} onChange = {this.handleChange}
                                             name = "email"  placeholder = "Email"
                                            
                                        />
                                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" 
                                                 name = "role" value = "doctor" 
                                                 onChange = {this.handleChange} 
                                                />
                                                <span className="form-check-label"> Doctor </span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" 
                                                name = "role" value = "patient" onChange = {this.handleChange}
                                                />
                                                <span className="form-check-label"> Patient</span>
                                            </label>
                                        </div> 
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Create password</label>
                                            <input className="form-control" type="password" placeholder = "Password"/>
                                        </div> 
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block"> Register  </button>
                                        </div> 
                                    

                                    </div>   
                                                                   
                                </form>
                            
                            </article> 
                   </div> 
                    </div>

            </div>  
           
            </form>
        </div> 


        )
        }
}                    
export default Register