import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Badge,
  DropdownItem
} from "reactstrap";

export default class CartSummary extends Component {
  renderSymmary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          {this.props.cart.length > 0
            ? "Your Card - " + this.props.cart.length
            : "Empty Cart"}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(cartItem => (
            <DropdownItem key={cartItem.product.id}>
              <Badge color="danger" onClick={() => this.props.removeItem(cartItem.product)}>x</Badge>
              {cartItem.product.productname} :{" "}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider></DropdownItem>
          <DropdownItem >
            <Link to="cart">Go to Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return <div>
      {this.renderSymmary()}
    </div>;
  }
}
