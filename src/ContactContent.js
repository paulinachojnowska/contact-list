import React, { Component } from 'react';

class ContactContent extends Component {
    render() {
        const contact = this.props.contact;
        return (
            <React.Fragment>
                <strong>{contact.name}</strong>
                <br/>
                {contact.telephone}, {contact.email}
                <br/>
                {contact.category}
            </React.Fragment>
        )
    }
}

export default ContactContent