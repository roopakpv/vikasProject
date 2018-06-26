import React, { Component } from 'react';
import { ListGroup,CardBody,Card,CardTitle,CardText,Button, Navbar, NavbarBrand, Badge,NavbarNav, NavbarToggler, NavItem, Footer, Fa,Mask,ListGroupItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const NavLink = require('react-router-dom').NavLink;

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Router>
       
        {/* <div className="flyout"> */}
      
        <div style={{background: 'white'}}>
          <div>
          <Navbar color="indigo" dark expand="md"  scrolling>
            <NavbarBrand href="/">
              <Fa icon="bars" />
            </NavbarBrand>
            <NavbarBrand href="/">
              <Fa icon="angle-left" />
            </NavbarBrand>
            <NavbarBrand href="/">
              <Fa icon="home" />
            </NavbarBrand>
            <NavbarBrand href="/">
              <Fa icon="microchip" />
            </NavbarBrand>
            <NavbarBrand href="/">
              <Fa icon="cube" />
            </NavbarBrand>
            <NavbarBrand href="/">
              <Fa icon="film" />
            </NavbarBrand>
            <NavbarBrand href="/">
              <Fa icon="flask" />
            </NavbarBrand>
            <NavbarBrand href="/">
              <Fa icon="database" />
            </NavbarBrand>
            <NavbarBrand href="/">
              <Fa icon="crop" />
            </NavbarBrand>
            <NavbarBrand href="/">
              <Fa icon="compass" />
            </NavbarBrand>
            <NavbarBrand href="/">
              <Fa icon="angle-right" />
            </NavbarBrand>
            <NavbarBrand href="/">
              <input type='text'></input>
            </NavbarBrand>
            <NavbarBrand href="/">
              Project
            </NavbarBrand>
            <NavbarBrand href="/">
              <Fa icon="glass" />
            </NavbarBrand>
            <NavbarBrand href="/">
              <Fa icon="gavel" />
            </NavbarBrand>
            <NavbarBrand href="/">
               <Fa icon="gears" />
            </NavbarBrand>
            <NavbarBrand href="/">
               <Fa icon="film" />
            </NavbarBrand>
            <NavbarBrand href="/">
               <Fa icon="user-circle" />
            </NavbarBrand>
            <NavbarBrand href="/">
               <Fa icon="ellipsis-v" />
            </NavbarBrand>
            <NavbarToggler />
            <div className="collapse navbar-collapse" id="reactNavbar">

              <NavbarNav className="ml-auto">
              
                <NavItem>
                <Fa icon="user-circle" />
                </NavItem>
              </NavbarNav>
            </div>
          </Navbar>
          </div>
          <div className="row">
              <div className="col-sm-2 - newboa">
              
                <h4><Fa icon="home" />  Home</h4>
                
              </div>
              <div className="col-sm-10 - newboa" >
                <h4 style={{display: 'inline'}}>Dashboard</h4>
                <div style={{display: 'inline', float: 'right'}} className="rrr">
                <Fa icon="edit" className="paa" />
                <h6 style={{textAlign: 'right', display: 'inline',    padding: '5px', float: 'right'}} > CUSTOMIZE</h6>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-2 - newboaa">
              <div style={{padding: '10px'}}>
                <Fa icon="dashboard" />
                <span> Dashboard</span>
              </div>
              <div style={{padding: '10px'}}>
                <Fa icon="dropbox" />
                <span> Activity</span>
              </div>
              </div>
              <div className="col-sm-10">
              <div className="row">
               <div className="col-sm-4">
               <Card style={{width: '22rem', marginTop: '1rem'}}>
                <ListGroup>
                  <ListGroupItem>Project:Random</ListGroupItem>
                  <ListGroupItem>ID:1419698</ListGroupItem>
                </ListGroup>
              </Card>
              <Card style={{width: '22rem', marginTop: '1rem'}}>
                <ListGroup>
                  <ListGroupItem>Resources</ListGroupItem>
                  <ListGroupItem>Compute
                    <div><Fa icon="female" /> App Engine</div>
                    <div style={{padding: '7px'}}>0 instances</div>
                  </ListGroupItem>
                </ListGroup>
              </Card>
              <Card style={{width: '22rem', marginTop: '1rem'}}>
                <ListGroup>
                  <ListGroupItem>Explore Other services</ListGroupItem>
                  <ListGroupItem>Compute
                    <div><Fa icon="female" /> Fine Engine</div>
                  </ListGroupItem>
                  <ListGroupItem>Services</ListGroupItem>
                  <ListGroupItem>Try the new cloud debbuggr</ListGroupItem>
                  
                </ListGroup>
              </Card>
                </div>
                <div className="col-sm-4">
                <Card style={{width: '22rem', marginTop: '1rem'}}>
                <ListGroup>
                  <ListGroupItem>App Engine</ListGroupItem>
                  <ListGroupItem>Summery

                    <img src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg' className="img-fluid" alt="" />
                    <Fa icon="check-square" /> Requests:.0333333
                  </ListGroupItem>
                </ListGroup>
              </Card>
                </div>
                <div className="col-sm-4">
                <Card style={{width: '22rem', marginTop: '1rem'}}>
                <ListGroup>
                  <ListGroupItem>Google Cloud platform status</ListGroupItem>
                  <ListGroupItem><Fa icon="check-square" /> All service normal</ListGroupItem>
                </ListGroup>
              </Card>
                </div>
              </div>
              </div>
          </div>

          
         </div>
      </Router>
    );
  }
}

export default App;
