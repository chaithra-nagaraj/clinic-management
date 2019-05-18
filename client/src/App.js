import React from 'react';
import { Link , BrowserRouter , Route , Switch } from 'react-router-dom'
import Register from './components/authentication/Register'
import Login from './components/authentication/Login'
import Logout from './components/authentication/Logout'
import Home from './components/layout/Home'
import DoctorProfileShow from './components/doctor/profileShow'
import { connect } from 'react-redux'
import { isAuthenticated } from './components/commons/isAuth'
import  Dashboard  from './components/layout/Dahboard'




class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
     
        <BrowserRouter>
           <div>
  
           <Link to = "/home">Home</Link><br/>
           
        { isAuthenticated(this.props.user) && (
             <div>
            
               <Link to = "/users/logout">Logout</Link>
               <Link to = "/dashboard">Dashboard</Link>
            </div>
           ) }


        { !isAuthenticated(this.props.user) && (
             <div> 
               <Link to = "/users/register">Register</Link>   
               <Link to = "/users/login">Login</Link>        
              </div>
           ) }
      <Switch>
   
    <Route path = "/users/login" component  = {Login} exact = {true}/>
    <Route path = "/users/register" component ={Register} exact = {true}/>
    <Route path  = "/home" component = {Home} exact = {true}/>
    </Switch>
        
                    
                   
           
         
         


         
          </div>
        </BrowserRouter>
    
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user ,
   doctors : state.doctors
  }
}

export default connect(mapStateToProps)(App);
