import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { GettingStarted } from './components/Getting-started';
import { MainMenu } from './components/Navbar';
import { FormFooter } from './components/form-footer';

ReactDOM.render(
  <React.StrictMode>

    <MainMenu></MainMenu>
    <GettingStarted></GettingStarted>
    <FormFooter></FormFooter>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();


