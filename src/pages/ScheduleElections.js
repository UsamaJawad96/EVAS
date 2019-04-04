import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Dropdown
} from 'reactstrap';
import DateTimePicker from 'react-datetime-picker';
import ViewVoteStatus from './ViewVoteStatus';
import HandleRequests from './HandleRequests';
import Search from './Search';
import SupervisorDashboard from './SupervisorDashboard';
import ViewResults from './ViewResults';

const electionTypes = [
    { label: "General Elections", value: 1 },
    { label: "National Assembly Elections", value: 2 },
    { label: "Provincial Assembly Elections", value: 3 },
];

class ScheduleElections extends Component {
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

    state = {
        date: new Date(),
        date2: new Date(),
    }

    onChange = date => this.setState({ date })
    onChange2 = date2 => this.setState({ date2 })

    render() {
        const { classes } = this.props;
        return (
            <Router>
                <Switch>
                    <Route exact path="/ScheduleElections" exact render={() => {
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
                                    <div className="Headline" style={{ paddingBottom: '2%' }}>
                                        <label>Schedule Elections</label>
                                    </div>

                                    <Form>
                                        <FormGroup>
                                            <Label className="StandardText" for="electionName">Election Name:</Label>
                                            <Input type="text" style={{ marginLeft: '3%', width: '300px' }} name="election" id="electionName" placeholder="Enter election name" />
                                        </FormGroup>
                                    </Form>

                                    <br></br>

                                    <label className="StandardText">Select election type:</label>
                                    <br></br>

                                    <div style={{ marginLeft: '2%' }} className="col-md-4">
                                        <Select options={electionTypes} />
                                    </div>

                                    <br></br>

                                    <label className="StandardText" style={{ paddingRight: '30px' }}>Select start time:</label>

                                    <DateTimePicker
                                        onChange={this.onChange}
                                        value={this.state.date}
                                    />

                                    <br></br><br></br>

                                    <label className="StandardText" style={{ paddingRight: '37px' }}>Select end time:</label>

                                    <DateTimePicker
                                        onChange={this.onChange2}
                                        value={this.state.date2}
                                    />

                                    <br></br>

                                    <Link to={{ pathname: '/SupervisorDashboard' }}><Button className="VoteButton" color="success" size="lg"><img src={"./checked.png"} style={{ margin: '10px' }} alt="Tick Logo" />Confirm</Button></Link>
                                </div>

                            </div>


                        );
                    }} />
                    <Route exact path="/Search" component={Search} />
                    <Route exact path="/ViewVoteStatus" component={ViewVoteStatus} />
                    <Route exact path="/HandleRequests" component={HandleRequests} />
                    <Route exact path="/SupervisorDashboard" component={SupervisorDashboard} />
                    <Route exact path="/ViewResults" component={ViewResults} />
                </Switch>
            </Router>

        );
    }
}

export default ScheduleElections;