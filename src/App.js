import React, { Component } from 'react';
import './App.css';
import ContactForm from "./ContactForm";

class App extends Component {
    state = {
        contacts: [],
    }

    addContact = (name, telephone, email, category) => {
        this.setState(
            ({ contacts }) => ({
                contacts: contacts.concat({
                    id: contacts.length === 0 ? 1 : Math.max(...contacts.map(contact => contact.id)) + 1,
                    name: name,
                    telephone: telephone,
                    email: email,
                    category: category
                })
            })
        )
    }

  render() {
    return (
        <div>
            <h1>Your list of contacts</h1>
            <ContactForm addContact={this.addContact}/>
        </div>

    );
  }
}

export default App;
