import React from 'react'
import { connect } from 'react-redux';
import { StartGetPatients } from '../../redux/actions/patients'
import { Link } from 'react-router-dom'

class ListPatients extends React.Component{
    constructor(props){
        super(props)

    
    }
    componentDidMount(){
        var id = this.props.match.params.id
        console.log(id)
        this.props.dispatch(StartGetPatients())
    }
    render(){
        return(
            <div>
                <h4>Listing patients</h4>
                <ul>
                    {
                        this.props.patients.map(patient => {
                            if(patient.category == this.props.match.params.id){
                                return <li key = {patient._id}><Link to = {`/patient/${patient._id}`}>{patient.name}</Link></li>
                            }
                          
                        })
                    }
                </ul>
                <Link to = "/patientRecords"> back</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user : state.user,
        patients : state.patients
    }
}

export default connect(mapStateToProps)(ListPatients)