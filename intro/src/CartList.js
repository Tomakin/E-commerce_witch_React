import React, { Component } from "react";
import { Table, Badge } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
            <tr>
                <th>#</th>
                <th>CategoryID</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Units in Stock</th>
                <th>Quantity</th>
                <th color="danger">Delete</th>
            </tr>
        </thead>
        <tBody>
            {
                this.props.cart.map(cartitem => (
                    <tr key={cartitem.product.id}>
                        <td>{cartitem.product.id}</td>
                        <td>{cartitem.product.categoryID}</td>
                        <td>{cartitem.product.productname}</td>
                        <td>{cartitem.product.unitPrice}</td>
                        <td>{cartitem.product.unitsInStock}</td>
                        <td>{cartitem.quantity}</td>
                        <td><Badge href="#" color="danger" onClick={() => this.props.removeFromCart(cartitem.product)}>X</Badge></td>
                    </tr>
                ))
            }
        </tBody>
      </Table>
    );
  }

  render() {
    return <div>
        {this.renderCart()}
    </div>;
  }
}
