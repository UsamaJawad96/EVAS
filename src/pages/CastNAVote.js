import React, { Component } from 'react';
import './Dashboard.css';
import SupervisorDashboard from '../pages/SupervisorDashboard';
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
import Search from './Search';
import ViewVoteStatus from './ViewVoteStatus';
import HandleRequests from './HandleRequests';
import ScheduleElections from './ScheduleElections';
import ViewResults from './ViewResults';

class CastNAVote extends Component {

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
        return (
            <Router>

                <Switch>
                    <Route exact path="/CastNAVote" exact render={() => {
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
                                        <label>NA-132</label>
                                    </div>

                                    <div className="Subtitle">
                                        <label className="Subtitle">Cast National Assembly Vote</label>
                                    </div>

                                    <hr></hr>

                                    <div className="PartyText">
                                        <label>Candidate 1 (Party 1)</label>
                                    </div>

                                    <div className="Headline">
                                        <img src={"./p1_symbol.jpg"}></img>
                                    </div>

                                    <Link to={{ pathname: '/SupervisorDashboard' }}><Button className="VoteButton" color="primary" size="lg"><img src={"./checked.png"} style={{ margin: '10px' }} alt="Vote Logo" />Cast Vote</Button></Link>

                                    <hr></hr>

                                    <div className="PartyText">
                                        <label>Candidate 2 (Party 2)</label>
                                    </div>

                                    <div className="Headline">
                                        <img style={{ height: '328px', width: '730px' }} src={"./p2_symbol.jpg"}></img>
                                    </div>

                                    <Link to={{ pathname: '/SupervisorDashboard' }}><Button className="VoteButton" color="primary" size="lg"><img src={"./checked.png"} style={{ margin: '10px' }} alt="Vote Logo" />Cast Vote</Button></Link>
                                    <br></br><br></br>
                                </div>
                            </div>
                        );
                    }} />

                    <Route exact path="/SupervisorDashboard" component={SupervisorDashboard} />
                    <Route exact path="/Search" component={Search} />
                    <Route exact path="/ViewVoteStatus" component={ViewVoteStatus} />
                    <Route exact path="/HandleRequests" component={HandleRequests} />
                    <Route exact path="/ScheduleElections" component={ScheduleElections} />
                    <Route exact path="/ViewResults" component={ViewResults}/>
                </Switch>

            </Router>
        );
    }
}

export default CastNAVote;