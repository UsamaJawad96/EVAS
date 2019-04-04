import React, { Component } from 'react';
import './Dashboard.css';
import CastNAVote from './CastNAVote';
import CastPAVote from './CastPAVote';
import Search from './Search';
import ViewVoteStatus from './ViewVoteStatus';
import HandleRequests from './HandleRequests';
import ScheduleElections from './ScheduleElections';
import ViewResults from './ViewResults';

import {
    BrowserRouter as Router,
    Link,
    Route,
    withRouter,
    Switch
} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';


class SupervisorDashboard extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            nameVal: 'Hammad Farooq',
            positionVal: 'Chief Election Commissioner',
            cnicVal: '1111111111111',
            dobVal: '15th August, 2018',
            addressVal: 'XYZ City',
            naVal: 'NA-132',
            paVal: 'PP-32',
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/SupervisorDashboard" exact render={() => {
                            return (
                                <div>

                                    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
                                        <NavbarBrand href="/SupervisorDashboard">EVAS</NavbarBrand>
                                        <NavbarToggler onClick={this.toggle} />
                                        <Collapse isOpen={this.state.isOpen} navbar>
                                            <Nav className="ml-auto" navbar>
                                                <NavItem>
                                                    <NavLink href="/SupervisorDashboard">Profile</NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <Link to={'/HandleRequests'}><NavLink>Handle Requests</NavLink></Link>
                                                </NavItem>
                                                <NavItem>
                                                    <Link to={'/Search'}><NavLink>Search</NavLink></Link>
                                                </NavItem>
                                                <NavItem>
                                                    <Link to={'/ViewVoteStatus'}><NavLink>View Vote Status</NavLink></Link>
                                                </NavItem>
                                                <UncontrolledDropdown nav inNavbar>
                                                    <DropdownToggle nav caret>
                                                        Manage Elections
                                                </DropdownToggle>
                                                    <DropdownMenu right>
                                                        <Link to={'/ScheduleElections'}>
                                                            <NavLink>
                                                                <DropdownItem>
                                                                    Schedule Elections
                                                    </DropdownItem>
                                                            </NavLink>
                                                        </Link>
                                                        <Link to={'/ViewResults'}>
                                                            <NavLink>
                                                                <DropdownItem>
                                                                    ViewResults
                                                    </DropdownItem>
                                                            </NavLink>
                                                        </Link>
                                                        <DropdownItem divider />
                                                        <DropdownItem href="/ManageAdmins">
                                                            Manage Administrator Accounts
                                                    </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                                <NavItem>
                                                    <NavLink href="/">Logout</NavLink>
                                                </NavItem>
                                            </Nav>
                                        </Collapse>
                                    </Navbar>

                                    <div className="App__Background">
                                        <div className="Headline">
                                            <label>{this.state.nameVal}</label>
                                        </div>

                                        <div className="Subtitle">
                                            <label>{this.state.positionVal}</label>
                                        </div>

                                        <div>
                                            <label className="StandardText">CNIC: {this.state.cnicVal}</label>
                                            <br></br>
                                            <label className="StandardText">Date of birth: {this.state.dobVal}</label>
                                            <br></br>
                                            <label className="StandardText">Address: {this.state.addressVal}</label>
                                            <br></br>
                                            <label className="StandardText">National Assembly Constituency: {this.state.naVal}</label>
                                            <br></br>
                                            <label className="StandardText">Provincial Assembly Constituency: {this.state.paVal}</label>
                                            <br></br>
                                        </div>


                                        <Link to={{ pathname: '/CastNAVote' }}><Button className="VoteButton" color="primary" size="lg"><img src={"./vote.png"} style={{ margin: '10px' }} alt="NA Vote Logo" />Cast National Assembly Vote</Button></Link>
                                        <Link to={{ pathname: '/CastPAVote' }}><Button className="VoteButton" color="primary" size="lg"><img src={"./vote.png"} style={{ margin: '10px' }} alt="PA Vote Logo" />Cast Provincial Assembly Vote</Button></Link>
                                    </div>
                                </div>
                            );
                        }} />



                        <Route exact path="/CastNAVote" component={CastNAVote} />
                        <Route exact path="/CastPAVote" component={CastPAVote} />
                        <Route exact path="/Search" component={Search} />
                        <Route exact path="/ViewVoteStatus" component={ViewVoteStatus} />
                        <Route exact path="/HandleRequests" component={HandleRequests} />
                        <Route exact path="/ScheduleElections" component={ScheduleElections} />
                        <Route exact path="/ViewResults" component={ViewResults} />
                    </Switch>
                </div>
            </Router>

        );
    }

}

export default SupervisorDashboard;