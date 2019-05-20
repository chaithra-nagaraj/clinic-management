import React from 'react'
import { connect } from 'react-redux'
import { StartLogin } from '../../redux/actions/users'
import profile from '../../images/prof.jpg'
class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            notice:'',
            redirect:false

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e){
        e.persist()
        this.setState(()=> ({
            [e.target.name]:e.target.value
        }))
    }
    handleSubmit(e){
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        this.props.dispatch(StartLogin(formData, this.props))
        // this.props.handleIsAuthenticated(true)
        // this.props.props.history.push('/')

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
          
              </div>
          </div>

        )
    }
} 

const mapStateToProps=(state) => {
    // console.log(state)
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(Login)