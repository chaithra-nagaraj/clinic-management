// import React, { Component } from "react";
// import { Link , BrowserRouter , Route , Switch } from 'react-router-dom'
// import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
// import Register from './components/authentication/Register'
// import Login from './components/authentication/Login'
// import Logout from './components/authentication/Logout'
// import Home from './components/layout/Home'
// import DoctorProfileShow from './components/doctor/profileShow'
// import { connect } from 'react-redux'
// import { isAuthenticated } from './components/commons/isAuth'
// import  Dashboard  from './components/layout/Dashboard'
// import "./index.css";
// import logo from "./logo.png";


// class App extends Component {
//   render() {
//     return (
//       <MDBContainer>
//           <BrowserRouter>
//            <div>

//            <Link to = "/home">Home</Link><br/>

//         { isAuthenticated(this.props.user) && (
//              <div>

//                <Link to = "/users/logout">Logout</Link>
//                <Link to = "/dashboard">Dashboard</Link>
//             </div>
//            ) }

//         { !isAuthenticated(this.props.user) && (
//              <div> 
//                <Link to = "/users/register">Register</Link>   
//                <Link to = "/users/login">Login</Link>        
//               </div>
//            ) }
//       <Switch>

//     <Route path = "/users/login" component  = {Login} exact = {true}/>
//     <Route path = "/users/register" component ={Register} exact = {true}/>
//     <Route path= "/users/logout" component = {Logout} exact = {true}/>
//     <Route path = "/dashboard" component = {Dashboard} exact = {true}/>
//     <Route path = "/profile" component = {DoctorProfileShow} exact = {true}/>
//     <Route path  = "/home" component = {Home} exact = {true}/>
//     </Switch>









//           </div>
//         </BrowserRouter>
//         {/* <MDBRow center style={{ height: "100vh" }}>
//           <MDBCol middle="true" sm="8" className="text-center">
//             <img src={logo} alt="logo" style={{ width: "10rem" }} /> */}

//             {/* <p className="mb-2">The application is configured and ready to import our components.</p>
//             <MDBBtn href="https://mdbootstrap.com/docs/react/" target="blank" color="light-blue"><strong>Check out our docs!</strong></MDBBtn>
//           </MDBCol>
//         </MDBRow> */}
//       </MDBContainer>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     user : state.user
//   }
// }

// export default connect(mapStateToProps)(App);

import { MDBNavbar, MDBNavbarBrand, MDBNavItem, MDBNavbarNav } from 'mdbreact'
import React from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './components/authentication/Register'
import Login from './components/authentication/Login'
import Logout from './components/authentication/Logout'
import Home from './components/layout/Home'
import DoctorProfileShow from './components/doctor/profileShow'
import { connect } from 'react-redux'
import { isAuthenticated } from './components/commons/isAuth'
import Dashboard from './components/layout/Dashboard'
import  Patient  from './components/patient/Patient'
import Category from './components/category/Category'
import ListCategories from './components/patient/ListCategories'
import ListPatients from './components/patient/ListPatients'




class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
        <div >
          {/* <nav className="navbar navbar-expand-md navbar-light fixed-top " style={{marginBottom:"44rem"}}  >
         
            
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  {(
                    <div className="header-bar">
                      <li className="nav-item">
                       
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                      </li>
                    </div>
                  )}
                  { (
                    <div className="header-bar">
                      <li className="nav-item">
                        <Link className="nav-link" to="/users/register">Register <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/users/login">Login</Link>
                      </li>
                    </div>
                  )}
                </ul>

              </div>
            </nav> */}
          <MDBNavbar color="indigo" dark expand="md" className="mb-3">
            <MDBNavbarBrand fixed="top" >
              <Link to="/home">Clinic Management</Link>
            </MDBNavbarBrand>
            
            { isAuthenticated(this.props.user) && (
              <MDBNavbarNav right >
               <MDBNavItem>
              <Link to="/dashboard">Dashboard</Link>
            </MDBNavItem>
              <MDBNavItem>
              <Link to="/users/logout">Logout</Link>
            </MDBNavItem>
            </MDBNavbarNav>
            )}

            { !isAuthenticated(this.props.user) && (
                <MDBNavbarNav right >
                  <MDBNavItem>
                  <Link to="/users/register">Register</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to="/users/login">Login</Link>
                </MDBNavItem>
                </MDBNavbarNav>
            )}
          </MDBNavbar>


          <Switch>

            <Route path="/users/login" component={Login} exact={true} />
            <Route path="/users/register" component={Register} exact={true} />
            <Route path="/users/logout" component={Logout} exact={true} />
            <Route path="/dashboard" component={Dashboard} exact={true} />
            <Route path="/profile" component={DoctorProfileShow} exact={true} />
            <Route path="/home" component={Home} exact={true} />
            <Route path = "/addPatient/:id" component = {Patient} exact = {true}/>
            <Route path = "/category" component   = {Category} exact = {true}/>
            <Route path = "/patientRecords" component = {ListCategories} exact = {true}/>
            <Route path = "/patients/:id" component = {ListPatients} exact = {true}/>
          </Switch>


        </div>
      </BrowserRouter>


    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    doctors: state.doctors
  }
}

export default connect(mapStateToProps)(App);

