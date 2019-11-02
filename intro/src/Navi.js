import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import CartSummary from './CartSummary';

  export default class Navi extends Component {

    render() {
      return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand><Link to="/">Northwind App</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/form1">Form</Link></NavLink>
              </NavItem>

              <NavItem>
                <NavLink><Link to="/form2">Form2</Link></NavLink>
              </NavItem>

              <CartSummary removeItem= {this.props.removeItem} cart={this.props.cart}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      );
    }
  } 
  