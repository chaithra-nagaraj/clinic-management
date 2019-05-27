
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { StartLogin } from '../../redux/actions/users'
import { connect } from 'react-redux'
 

class Login extends React.Component{
    constructor(props){
                super(props)
                this.state = {
                    email : '',
                    password : '', 
                }
            }

    handleChange = (e) =>{
      console.log(e.target)
                e.persist()
                this.setState(()=>({
                    [e.target.name] : e.target.value
                }))
            }

            handleSubmit = (e) => {
                        e.preventDefault()
                        const formData = {
                            email : this.state.email,
                            password : this.state.password,
                           
                        }
                 this.props.dispatch(StartLogin(formData, this.props))
            }
    render(){
        return (
          <MDBCard className="container">
            <MDBCardBody>
            <form>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Type your email"
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
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        value = {this.state.password}
                        onChange = {this.handleChange}
                        name = "password"
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn onClick = {this.handleSubmit}>Login</MDBBtn>
                    </div>
                  </form>
            </MDBCardBody>
          </MDBCard>

                 
            
          );
    }
 
};

const mapStateToProps = (state) => {
  return {
    user : state.user
  }
}

export default connect(mapStateToProps)(Login);

