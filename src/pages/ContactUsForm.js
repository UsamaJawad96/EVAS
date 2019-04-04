import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, NavLink, withRouter, Switch } from 'react-router-dom';
import SignInForm from '../pages/SignInForm';

class ContactUsForm extends Component {

    render() {

        let linkStyle = {
            color: 'green'
        };

        return (
            <Router>
                <Switch>
                    <Route exact path="/contact-us" exact render={() => {
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

                                    <label htmlFor="email">Please contact us at <a href="mailto:usama.jawad@gmail.com?Subject=About%20EVAS" style={linkStyle} target="_top">usama.jawad@gmail.com</a> or call us at 0123 4567891. </label>

                                </div>

                            </div>
                        );
                    }} />
                    <Route path="/" component={SignInForm} />
                </Switch>
            </Router>
        );
    }
}
export default ContactUsForm;