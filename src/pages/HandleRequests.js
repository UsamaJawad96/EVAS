import React, { Component } from 'react';
import './Dashboard.css';
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
    Button,
    InputGroup,
} from 'reactstrap';
import ViewVoteStatus from './ViewVoteStatus';
import Search from './Search';
import SupervisorDashboard from './SupervisorDashboard';
import ScheduleElections from './ScheduleElections';
import ViewResults from './ViewResults';

class HandleRequests extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <Router>
                <Switch>
                    <Route exact path="/HandleRequests" exact render={() => {
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
                                                <Link to={'/Search'}><NavLink> Search</NavLink></Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link to={'/ViewVoteStatus'}><NavLink> View Vote Status</NavLink></Link>
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
                                        <label>Modification Requests</label>
                                    </div>

                                    <hr></hr>

                                    <label className="StandardText">Zaid Tariq, District Admin of District 2 has requested that you change his District name from District 1 to District 2.</label>

                                    <Link to={{ pathname: '/SupervisorDashboard' }}><Button className="VoteButton" color="success" size="lg"><img src={"./checked.png"} style={{ margin: '10px' }} alt="Tick Logo" />Approve Request</Button></Link>
                                    <Link to={{ pathname: '/SupervisorDashboard' }}><Button className="VoteButton" color="danger" size="lg"><img src={"./close.png"} style={{ margin: '10px' }} alt="Cross Logo" />Reject Request</Button></Link>

                                    <hr></hr>

                                    <label className="StandardText">Abdullah Siddiqui, Constituency Admin of Constituency 2 has requested that you change his Constituency name from Constituency 1 to Constituency 2.</label>

                                    <Link to={{ pathname: '/SupervisorDashboard' }}><Button className="VoteButton" color="success" size="lg"><img src={"./checked.png"} style={{ margin: '10px' }} alt="Tick Logo" />Approve Request</Button></Link>
                                    <Link to={{ pathname: '/SupervisorDashboard' }}><Button className="VoteButton" color="danger" size="lg"><img src={"./close.png"} style={{ margin: '10px' }} alt="Cross Logo" />Reject Request</Button></Link>

                                    <br></br><br></br>
                                </div>

                            </div>
                        );
                    }} />
                    <Route exact path="/SupervisorDashboard" component={SupervisorDashboard} />
                    <Route exact path="/Search" component={Search} />
                    <Route exact path="/ViewVoteStatus" component={ViewVoteStatus} />
                    <Route exact path="/ScheduleElections" component={ScheduleElections} />
                    <Route exact path="/ViewResults" component={ViewResults} />
                </Switch>
            </Router>

        );
    }
}

export default HandleRequests;