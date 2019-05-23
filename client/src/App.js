// import React from 'react';
// import { Link , BrowserRouter , Route , Switch } from 'react-router-dom'
// import Register from './components/authentication/Register'
// import Login from './components/authentication/Login'
// import Logout from './components/authentication/Logout'
// import Home from './components/layout/Home'
// import DoctorProfileShow from './components/doctor/profileShow'
// import { connect } from 'react-redux'
// import { isAuthenticated } from './components/commons/isAuth'
// // import About from './components/about/About'
// import AddPatient from './components/doctor/AddPatient'
// class App extends React.Component{
  
//   render(){
//     return(
//       <BrowserRouter>
//       <div> 
     
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
 
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav">
//       <li className="nav-item active">
//         <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/about">About</a>
//       </li>
//        {/* <li className="nav-item">
//         <a className="nav-link" href="/list">List</a>
//       </li> */}
//      {/* <li class="nav-item">
//         <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//       </li>   */}
//     </ul>
//   </div>

// { isAuthenticated(this.props.user) && (
//        <div>
//          logged in 
//          <Link to = "/users/logout">Logout</Link>
//       </div>
//      ) }

// { !isAuthenticated(this.props.user) && (
//              <div> 
//                <Link to = "/users/register">Register</Link> |
//                 <Link to = "/users/login">Login</Link>|
//                 not logged in   <br/><br/>          
//               </div>
//            ) }
         
         
//          </nav>

//           <Switch>
//           <Route path = "/" component = {Home} exact = {true}/>
//           {/* <Route path = "/about" component = {About} exact = {true} /> */}
//           <Route path = "/profile" component = {DoctorProfileShow} />
//           {/* <Route path = "/doctor/addpatient" component = {AddPatient} /> */}
//           <Route 
//             path = "/users/register" 
//             component = {Register} 
//             exact = {true}
//           />
//           <Route 
//             path =  "/users/login" 
//             component = {Login}
//             exact = {true}
//           />
//           <Route 
//             path =  "/users/logout" 
//             component={Logout} 
//             exact = {true}
//           />
        
//           </Switch>
//           </div>
// </BrowserRouter>

    
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     user: state.user
//   }
// }

// export default connect(mapStateToProps)(App);





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
    <Route path = "/users/logout" component = {Logout} exact = {true}/>
    <Route path  = "/home" component = {Home} exact = {true}/>
    <Route path = "/dashboard" component = {Dashboard} exact = {true}/>
    <Route path = "/profile" component = {DoctorProfileShow} exact = {true}/>
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
