import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>home page..</h2>
                {this.props.user.role == "doctor" ? 
                <div>
                    <h2>Welcome Dr.{this.props.user.username} </h2>
                    <Link to = "/profile">My Profile |</Link>
                    <Link>Recent patients |</Link>
                    <Link  >Add Patient |</Link>
                    <Link>Appointments </Link>

                </div>
                    
                    : 
                    <h2>Welcome {this.props.user.username}</h2>
                
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Home)