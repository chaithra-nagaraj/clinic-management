import React from 'react'
import { connect } from 'react-redux'
import { StartAddCategory } from '../../redux/actions/category'

class AddCategory extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            category : ''
        }

    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            category : this.state.category
        }
        this.props.dispatch(StartAddCategory(formData))
        this.setState(() => ({
            render : false
        }))
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input
                    type = "text"
                    value = {this.state.category}
                    name = "category"
                    onChange = {this.handleChange}></input>
                    <input type = "submit"/>
                </form>
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

export default connect(mapStateToProps)(AddCategory)