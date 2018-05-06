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
            taskName: '',
            taskDescription: '',
            email: '',
            category: ''
        })


    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    name='telephone'
                    value={this.state.telephone}
                    onChange={this.handleChange}
                />
                <input
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <input
                    name='category'
                    value={this.state.category}
                    onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default ContactForm