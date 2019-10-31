import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Badge,
    DropdownItem } from 'reactstrap';

export default class CartSummary extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Your Card - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                  {this.props.cart.map(cartItem => (
                   <DropdownItem key={cartItem.product.id}>
                   {cartItem.product.productname} : <Badge color="success">{cartItem.quantity}</Badge>
                 </DropdownItem>  
                  ))}
                  <DropdownItem divider></DropdownItem>
                  <DropdownItem>
                      Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
        )
    }
}
