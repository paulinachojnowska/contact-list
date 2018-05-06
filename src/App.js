import React, { Component } from 'react';
import './App.css';
import ContactForm from "./ContactForm";

class App extends Component {
    state = {
        contacts: [],
    }

  render() {
    return (
        <div>
            <h1>Your list of contacts</h1>
            <ContactForm/>
        </div>

    );
  }
}

export default App;
