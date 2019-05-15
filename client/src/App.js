import React from 'react';
import { Link , BrowserRouter , Route , Switch } from 'react-router-dom'
import Register from './components/authentication/Register'
import Login from './components/authentication/Login'
import Logout from './components/authentication/Logout'
import Home from './components/layout/Home'
import DoctorProfileShow from './components/doctor/profileShow'
import { connect } from 'react-redux'
import { isAuthenticated } from './components/commons/isAuth'



class App extends React.Component{
  
  render(){
    return(
     
        <BrowserRouter>
           <div>
        <Link to = "/">Home</Link>
           { isAuthenticated(this.props.user) && (
             <div>
               logged in 
               <Link to = "/users/logout">Logout</Link>
            </div>
           ) }


        { !isAuthenticated(this.props.user) && (
             <div> 
               <Link to = "/users/register">Register</Link>   
               <Link to = "/users/login">Login</Link>
                not logged in            
              </div>
           ) }
         
         


          <Switch>
          <Route path = "/" component = {Home} exact = {true}/>
          <Route path = "/profile" component = {DoctorProfileShow} />
          <Route 
            path = "/users/register" 
            component = {Register} 
            exact = {true}
          />
          <Route 
            path =  "/users/login" 
            component = {Login}
            exact = {true}
          />
          <Route 
            path =  "/users/logout" 
            component={Logout} 
            exact = {true}
          />
        
          </Switch>
          </div>
        </BrowserRouter>
    
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
