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
import  Patient  from './components/patient/Patient'
import Category from './components/category/Category'
import ListCategories from './components/patient/ListCategories'
import ListPatients from './components/patient/ListPatients'




class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
  <BrowserRouter>
  <section>
           <div>

           {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className= "nav-item active" to = "/home"> Home </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
    { isAuthenticated(this.props.user) && (
             <div>
            
            <li className="nav-item">
              <Link className="nav-link" to = "/users/logout">Logout</Link>
           </li>
           <li className="nav-item">
              <Link className="nav-link" to = "/dashboard">Dashboard</Link>
           </li>
            </div>
           ) }

           
        { !isAuthenticated(this.props.user) && (
             <div> 
                <li className= "nav-item">
                  <Link className="nav-link" to="/users/register">Register <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
           <Link className="nav-link" to = "/users/login">Login</Link>
                </li>       
              </div>
           ) }
    
     
     
    </ul>
  </div>
</nav> */}
           {/* <Link to = "/home">Home</Link><br/> */}
           
           <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <a class="navbar-brand" href="#">Fixed navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto">
    { isAuthenticated(this.props.user) && (
             <div className="header-bar">
                 <li className="nav-item">
                 <Link to = "/home">Home</Link>
           </li>
            
            <li className="nav-item">
              <Link className="nav-link" to = "/users/logout">Logout</Link>
           </li>
           <li className="nav-item">
              <Link className="nav-link" to = "/dashboard">Dashboard</Link>
           </li>
            </div>
           ) }
            { !isAuthenticated(this.props.user) && (
             <div className="header-bar"> 
                <li className= "nav-item">
                  <Link className="nav-link" to="/users/register">Register <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
           <Link className="nav-link" to = "/users/login">Login</Link>
                </li>       
              </div>
           ) }
    </ul>
   
  </div>
</nav>


      <Switch>
   
    <Route path = "/users/login" component  = {Login} exact = {true}/>
    <Route path = "/users/register" component ={Register} exact = {true}/>
    <Route path= "/users/logout" component = {Logout} exact = {true}/>
    <Route path = "/dashboard" component = {Dashboard} exact = {true}/>
    <Route path = "/profile" component = {DoctorProfileShow} exact = {true}/>
    <Route path  = "/home" component = {Home} exact = {true}/>
    <Route path = "/addPatient/:id" component = {Patient} exact = {true}/>
    <Route path = "/category" component   = {Category} exact = {true}/>
    <Route path = "/patientRecords" component = {ListCategories} exact = {true}/>
    <Route path = "/patients/:id" component = {ListPatients} exact = {true}/>
    </Switch>
        
                    
                   
           
         
         


         
          </div>
          </section>
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
