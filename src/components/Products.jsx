import React, { Component } from "react";
import x from "../assets/imgs/2.jpg";
import { ProductItem } from "./ProductItem";
import { products } from "../models/productList";
export default class Products extends Component {
  productTitle = "Our Product";

  render() {
    return (
      <div className="bg-light p-5 text-center">
        <h2>{`${this.productTitle}`}</h2>
        <div className="container">
          <div className="row">
            {products.map((item) => {
              return <ProductItem key={item.id} product={item} />;
            })}
          </div>
        </div>
        {/* <h2>Gallary</h2>
        <img src="1.jpg" alt="" />
        <img src={x} alt="" /> */}
      </div>
    );
  }
}
