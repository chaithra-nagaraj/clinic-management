import React from 'react'
import { connect } from 'react-redux'

class Profile extends React.Component{
    constructor(props){
        super(props)
        
    }
  
    render(){
        console.log()
        return(
            <div>
                <h2>Profile</h2>
                <h3>{this.props.user.username}</h3>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Profile)