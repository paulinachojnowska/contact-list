import React, { Component } from 'react';
import './App.css';
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

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
                    category: category.length > 0 ? category.split(",").map(element => element.trim()).filter(element => element.length > 0) : []
                })
            })
        )
    }

    removeContact = contactId => {
        this.setState(function (oldState) {
            return {
                contacts: oldState.contacts.filter(function (contact) {
                    return contact.id !== contactId
                })
            }
        })
    }

  render() {
    return (
        <div>
            <h1>Your list of contacts</h1>
            <ContactForm
                addContact={this.addContact}
            />
            <br/>
            <ContactList
                contacts={this.state.contacts}
                removeContact={this.removeContact}
            />
        </div>

    );
  }
}

export default App;
