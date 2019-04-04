import React, { Component } from 'react';
//import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import SignInForm from './pages/SignInForm';
import ContactUsForm from './pages/ContactUsForm';
import SupervisorDashboard from './pages/SupervisorDashboard';
import HandleRequests from './pages/HandleRequests';

class App extends Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={SignInForm}>

          </Route>

          <Route path="/contact-us" component={ContactUsForm}>

          </Route>

          <Route exact path="/SupervisorDashboard" component={SupervisorDashboard}>

          </Route>

          <Route exact path="/HandleRequests" component={HandleRequests}>

          </Route>

        </Switch>


      </Router>
    );
  }
}

export default App;
