import React from 'react'
import axios from '../../config/axios'
import { connect } from 'react-redux'
import { StartLogin } from '../../redux/actions/users'

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
            <div>
                <h2>Login</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Email-id
                        <input type = "text" onChange = {this.handleChange}
                        value = {this.state.email} name = "email"/>
                    </label><br/>
                    <label>
                        password
                        <input type = "password" onChange = {this.handleChange}
                        value = {this.state.password} name = "password"/>
                    </label><br/>
                    <input type = "submit"/>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        users: state.user
    }
}
export default connect(mapStateToProps)(Login)


// import React from 'react'
// import axios from '../../config/axios'

// class Login extends React.Component{
//     redner(){
//         return(
//             <div>
//                 Login with us
//             </div>
//         )
//     }

// export default Login