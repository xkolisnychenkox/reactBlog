import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo192.png';

//import pages
import Home from "../pages/Home";
import About from "../pages/About";



class header extends Component {
    render() {
        return (
            <>
            <Navbar  bg="warning" variant="light" collapseOnSelect expand="sm" >
            <Navbar.Brand href="#home"> BLOG 
            <img src={logo} height="30" width="30" className="d-inline-block align-top" alt="logo"/> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                </Nav>
                
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
              <Button variant="outline-danger">Search</Button>
            </Form>
            </Navbar.Collapse>
           </Navbar>

           <Router>
               <Switch>
                   <Route exact path="/" component={Home} />
                   <Route exact path="/about" component={About} />
                 
               </Switch>
           </Router>
           </>
        );
    }
}

export default header;