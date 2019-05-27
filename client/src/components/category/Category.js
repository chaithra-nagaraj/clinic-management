import React from 'react'
import { connect } from 'react-redux';
import { StartGetCategories } from '../../redux/actions/category';
import { Link } from 'react-router-dom'
import AddCategory from './Add'

class Category extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            render : false
        }
    }

    componentDidMount(){
        this.props.dispatch(StartGetCategories())
   }

   handleClick = (e) => {
       this.setState(() =>({
           render : true
       }))
   }
 

   
    render(){
        return(
            <div>
                 select Category
                 <ul>
                     {this.props.categories.map(category => {
                         return <li key = {category._id}><Link to = {`/addPatient/${category._id}`}>{category.category}</Link></li>
                     })}
                 </ul>
                    
                     <button onClick = {this.handleClick}>Add category</button>
                     { this.state.render && <AddCategory/>}
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
export default connect(mapStateToProps)(Category)