// import React from 'react'
// import axios from '../../config/axios'

// class Register extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             username : '',
//             email : '',
//             password : '',
//             role : '',
//             notice : ''
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(e){
//         e.persist()
//         this.setState(()=>({
//             [e.target.name] : e.target.value
//         }))
//     }

//     handleSubmit(e){
//         e.preventDefault()
//         const formData = {
//             username : this.state.username,
//             email : this.state.email,
//             password : this.state.password,
//             role : this.state.role
//         }
//         axios.post('/users/register' , formData)
//             .then((response) => {
//                 this.setState(()=>({
//                     username : '' , email : '' , password : '', notice : 'successfully registered !:) Taking you to the Login Page'
//                 }))
//                 setTimeout(() => {
//                     this.props.history.push('/users/login')
//                 },2000);
//             })
//     }
//     render(){
//         return(
//             <div>
//                  {this.state.notice && this.state.notice}
//                 <form onSubmit = {this.handleSubmit}>
//                     <label>
//                         Username
//                         <input type = "text" value = {this.state.username} onChange = {this.handleChange} name = "username"/>
//                     </label><br/>
//                     <label>
//                         email
//                         <input type = "email" value = {this.state.email} onChange = {this.handleChange} name = "email"/>
//                     </label><br/>
//                     <label>
//                         password
//                         <input type = "password" value = {this.state.password} onChange = {this.handleChange} name = "password"/>
//                     </label><br/>
//                     <label>
//                         Are you a Doctor?
//                         <input type = "radio" name = "role" value = "doctor" onChange = {this.handleChange} name = "role"/>
//                     </label>
//                     <label>
//                         Are you a patient?
//                         <input type = "radio" name = "role" value = "patient" onChange = {this.handleChange} name = "role"/>
//                     </label>

                    
                    
//                     <input type = "submit"/>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Register

import React from "react";
import axios from '../../config/axios'

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBCardHeader , MDBRow , MDBContainer , MDBInput } from 'mdbreact';

class  Register extends React.Component{
    constructor(props){
                super(props)
                this.state = {
                    username : '',
                    email : '',
                    password : '',
                    role : '',
                    notice : ''
                }
            }

            handleSubmit = (e) => {
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

            handleChange = (e) => {
                        e.persist()
                        this.setState(()=>({
                            [e.target.name] : e.target.value
                        }))
                    }
    render(){
        return (
          <div className="container">
              <MDBCard className="mx-5">
              {/* <MDBCardHeader>
              <MDBCardTitle>{doctor.doctorId.username}</MDBCardTitle>
              </MDBCardHeader> */}
              <MDBCardBody>
               
                  <form  >
                    <p className="h5 text-center mb-4">Sign up</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Your name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        name = "username"
                        value = {this.state.username}
                        onChange = {this.handleChange}
                      />
                      <MDBInput
                        label="Your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        name = "email"
                        value = {this.state.email}
                        onChange = {this.handleChange}
                      />
                      <MDBInput
                        label="Your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        name = "password"
                        value = {this.state.password}
                        onChange = {this.handleChange}
                      />
                    </div>
                    <label>
                       
                        <input type = "radio" name = "role" value = "doctor" onChange = {this.handleChange} name = "role"/>
                         Doctor?
                    </label> 
                    <label>
                        <input type = "radio" name = "role" value = "patient" onChange = {this.handleChange} name = "role"/>
                         patient?
                    </label>
                    <div className="text-center">
                      <MDBBtn color="primary" onClick = {this.handleSubmit}>Register</MDBBtn>
                    </div>
                  </form>
                  </MDBCardBody>
                  </MDBCard>
                  </div>
            
        )
    }
 

};

export default Register;