import React from 'react'
import { connect } from 'react-redux'
import { StartLogin } from '../../redux/actions/users';

class Login extends React.Component {
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
       //console.log(this.props.users.username)
       //console.log(this.props)
        return (
            <div className = "text-center ">
                
                <form 
                className="form-signin m-auto" 
                 onSubmit = { this.handleSubmit}>
                   
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input
                     type="email"
                      id="inputEmail" 
                      className="form-control" 
                      placeholder="Email address" 
                      required autofocus
                      name = "email"
                      value = {this.state.email}
                      onChange = {this.handleChange}
                      />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input
                     type="password"
                      id="inputPassword" 
                      className="form-control"
                      placeholder="Password" 
                      required
                      name = "password"
                      value = {this.state.password}
                      onChange = {this.handleChange}/>
                    <div className="checkbox mb-3">
                        {/* <label>
                        <input type="checkbox" value="remember-me"> Remember me
                        </label> */}
                    </div>
                    <button 
                    className="btn btn-lg btn-primary btn-block"
                     type="submit">
                     Sign in
                     </button>
                    {/* <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p> */}
                </form>
                {/* <form onSubmit={this.handleSubmit}>
                    <label>
                        email :
                        <input type='email' value={this.state.email} name='email' onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        password :
                        <input type='password' value={this.state.password} name='password' onChange={this.handleChange}/>
                    </label> <br/>
                    <input type='submit' />
                </form> */}

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