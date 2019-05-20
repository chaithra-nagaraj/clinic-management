import React from 'react'
import axios from '../../config/axios'
import { connect } from 'react-redux'
import { StartLogin } from '../../redux/actions/users'
import profile from '../../images/prof.jpg'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password: '',
            redirect : false,
            notice : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        e.persist()
        this.setState(() =>({
            [e.target.name] : e.target.value
        }))
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            email : this.state.email,
            password : this.state.password
        }
        this.props.dispatch(StartLogin(formData, this.props))
    }
    render(){
        
        console.log(this.props.users.username)
        return(



            <div className="wrapper fadeInDown">
            <div id="formContent">
             
              <div className="fadeIn first">
                <img src={profile} id="icon" alt="User Icon" />
                
              </div>
          
             
              <form onSubmit = {this.handleSubmit}>
                <input type="text" id="login" className="fadeIn second"  placeholder="email"
                        onChange = {this.handleChange}
                                    value = {this.state.email} name = "email"/>
                <input type="password" id="password" className="fadeIn third"  placeholder="password"
                        onChange = {this.handleChange}
                       value = {this.state.password} name = "password"/>
                <input type="submit" className="fadeIn fourth" value="Log In" />
              </form>
          
              
              {/* <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
              </div> */}
          
            </div>
          </div>
        //     <div className = "container" >
        //      <div className = "row mt-4">
        //        <br/>
        //         <div className = "row justify-content-center" >
               

        //             <div className = "card" >
        //                 <header className = "card-header" >
        //                         <a href = "" className = "float-right btn btn-outline-primary mt-1"> Sign Up </a>
        //                         <h4 className = "card-title mt-2"> Login</h4>
        //                 </header>
        //                <article className = "car-body">
        //                     <form>
        //                         <div className = "form-row" >
        //                             <div className = "col form-group">
        //                                 <label>
        //                                     Email

        //                                 </label>
        //                                     <input type = "text" onChange = {this.handleChange}
        //                                     value = {this.state.email} name = "email" placeholder = "Email"/>
                                        
        //                             </div> 
                                
        //                         </div>

                                 
        //                             <div className="form-row">
        //                                 <div className = "form-group">
                                        
        //                                     <label>
                                            
        //                                         Password

        //                                     </label>
        //                                     <input type = "password" onChange = {this.handleChange}
        //                                         value = {this.state.password} name = "password" placeholder = "password"/>
        //                                 </div> 
        //                             </div>
                                    
        //                             <div className = "form-row">
        //                                 <div className = "form-group">
        //                                 <center>
        //                                 <input type = "submit"/>
        //                                 </center>
                                           
                                        
        //                                 </div>
        //                             </div>

                                    
                                
        //                     </form>
        //                 </article>
        //             </div>
               
        //         </div>
        //     </div>

        // </div>               

        )
    }
}
const mapStateToProps = (state) => {
    return{
        users: state.user
    }
}
export default connect(mapStateToProps)(Login)