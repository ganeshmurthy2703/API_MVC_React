import './App.css';
import React, { Component } from 'react'; 
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SongView from './SongView';
import Home from './Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/" >
  My Music Store
  </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Songs" id="basic-nav-dropdown">
        <NavDropdown.Item href="/LemonTree">
          Song1
          </NavDropdown.Item>
          <NavDropdown.Item>
          <Link to="/StayinAlive">Song2</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
          <Link to="/SweetChild">Song3</Link>
          </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
<Switch>
  <Route path="/LemonTree">
    <SongView baseUrl = "LemonTree" songKey = "LemonTree" />
  </Route>

  <Route path="/StayinAlive">
    <SongView baseUrl = "LemonTree" songKey = "StayinAlive" />
  </Route>

  <Route path="/SweetChild">
    <SongView baseUrl = "LemonTree" songKey = "SweetChild" />
  </Route>

  <Route path="/">
    <Home />
  </Route>

</Switch>

    </div>
    </Router>    
  );
}

export default App;
