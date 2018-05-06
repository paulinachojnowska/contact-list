import React, { Component } from 'react';

class ContactForm extends Component {

    state = {
        name: '',
        telephone: '',
        email: '',
        category: ''
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.addContact(this.state.name, this.state.telephone, this.state.email, this.state.category);

        this.setState({
            name: '',
            telephone: '',
            email: '',
            category: ''
        })


    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleCategoryChange = event => {
        const inputCategory = event.target.value;
        this.setState({
            category: inputCategory.split(",").map(element => element.trim())
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Name
                <br/>
                <input
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <br/><br/>
                Telephone number
                <br/>
                <input
                    name='telephone'
                    value={this.state.telephone}
                    onChange={this.handleChange}
                />
                <br/><br/>
                Email address
                <br/>
                <input
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <br/><br/>
                Category
                <br/>
                <input
                    name='category'
                    value={this.state.category}
                    onChange={this.handleCategoryChange}
                />
                <br/><br/>
                <button>Add</button>
            </form>
        )
    }
}

export default ContactForm