import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";

import ContactForm from "./ContactForm/ContactForm";
import { ContactFormProvider } from "./ContactForm/ContactFormContext";

function App() {
  return (
    <ContactFormProvider>
      <div className="App">
        <ContactForm />
      </div>
    </ContactFormProvider>
  );
}

export default App;
