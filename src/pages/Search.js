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
import { InputGroupAddon, Input } from 'reactstrap';
import ViewVoteStatus from './ViewVoteStatus';
import HandleRequests from './HandleRequests';
import ScheduleElections from './ScheduleElections';
import ViewResults from './ViewResults';

class Search extends Component {
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
                    <Route exact path="/Search" exact render={() => {
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

                                <div>

                                    <label className="StandardText" style={{ marginLeft: '20px', paddingTop: '1%' }}>Enter search query:</label>
                                    <br></br>

                                    <InputGroup style={{ padding: '20px' }} >
                                        <Input />
                                        <InputGroupAddon addonType="append">
                                            <Button color="secondary">Search</Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                            </div>
                        );
                    }} />
                    <Route exact path="/Search" component={Search} />
                    <Route exact path="/ViewVoteStatus" component={ViewVoteStatus} />
                    <Route exact path="/HandleRequests" component={HandleRequests} />
                    <Route exact path="/ScheduleElections" component={ScheduleElections} />
                    <Route exact path="/ViewResults" component={ViewResults} />
                </Switch>
            </Router>

        );
    }
}

export default Search;