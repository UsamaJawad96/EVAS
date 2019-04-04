import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, NavLink } from 'react-router-dom';
import axios from 'axios'
import SupervisorDashboard from '../pages/SupervisorDashboard';
import ContactUsForm from '../pages/ContactUsForm';

class SignInForm extends Component {

  constructor( props ) {
    super( props );
    // since you're using this method in a callback, don't forget to
    // bind the this context
    this.handleSubmit = this.handleSubmit.bind( this );
}

  handleSubmit(){
    /*axios.defaults.withCredentials = true;
    axios.post('http://e22a3165.ngrok.io/api/query/authenticateuser', {
      cnic: '1',
      password: 'abc',
      withCredentials: true
    })
    .then(function (response) {
      alert(response)
    })
    .catch(function (error) {
      alert(error)
    });*/
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => {
            return (

              <div className="App">
                <div className="App__Aside"><img src={"./Vote-PNG-Photos.png"} alt="Vote logo" class="Image_center" /></div>
                <div className="App__Form">
                  <div className='PageSwitcher'>
                    <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                    <NavLink to="/contact-us" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Contact Us</NavLink>
                  </div>

                  <div className="FormTitle">
                    <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink to="/contact-us" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Contact Us</NavLink>
                  </div>

                  <div className="FormCenter">
                    <form className="FormFields">
                      
                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="cnic">CNIC:</label>
                        <input type="text" id="cnic" className="FormField__Input"  placeholder="Enter your CNIC without dashes" name="cnic" />
                      </div>

                      <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password:</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" />
                      </div>

                      <div className="FormField">
                        <Link to={{
                          pathname: '/SupervisorDashboard'
                        }} className="FormField__Button mr-20" onClick={this.handleSubmit}>Sign In</Link>

                      </div>
                    </form>
                  </div>
                </div>

              </div>
            );
          }} />
          <Route exact path="/SupervisorDashboard" component={SupervisorDashboard} />
          <Route path="/contact-us" component={ContactUsForm} />
        </Switch>
      </Router>
    );
  }
}

export default SignInForm;