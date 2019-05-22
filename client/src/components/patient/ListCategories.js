import React from 'react'
import { connect } from 'react-redux'
import { StartGetCategories } from '../../redux/actions/category';
import { Link } from 'react-router-dom'

class ListCategories extends React.Component{

    componentDidMount(){
        this.props.dispatch(StartGetCategories())
    }
    render(){
        return(
            <div>
                Select a category
                <ul>
                     {this.props.categories.map(category => {
                         return <li key = {category._id}><Link to = {`/Patients/${category._id}`}>{category.category}</Link></li>
                     })}
                 </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user ,
        categories : state.categories
    }
}

export default connect(mapStateToProps)(ListCategories)