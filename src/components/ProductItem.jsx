import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export class ProductItem extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="col-sm-6 col-md-3">
        <Card>
          <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
            </Card.Text>
            <Card.Text>Price : {product.price}</Card.Text>
            <Card.Text>quantity : {product.quantity}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
