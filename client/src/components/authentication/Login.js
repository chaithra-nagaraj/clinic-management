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
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        email :
                        <input type='email' value={this.state.email} name='email' onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        password :
                        <input type='password' value={this.state.password} name='password' onChange={this.handleChange}/>
                    </label> <br/>
                    <input type='submit' />
                </form>

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