import React, { Component } from 'react';

class Products extends Component {

  getProducts() {
    return [
    {
        imageUrl: "http://loremflickr.com/150/150?random=1",
        productName: "Product 1",
        releasedDate: "May 31, 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 4,
        numOfReviews: 2
    },
    {
        imageUrl: "http://loremflickr.com/150/150?random=2",
        productName: "Product 2",
        releasedDate: "October 31, 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 2,
        numOfReviews: 12
    },
    {
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
        rating: 5,
        numOfReviews: 2
    }];
  }

  render () {

    const products = ["Learning React", "Pro React", "Beginning React"];
    const listProducts = products.map((product) =>
      <li key={product.toString()}>{product}</li>
    );

    return (
      <div>
        <h2>
          Products
        </h2>
        <ul>{listProducts}</ul>
      </div>
    );
  }
}

export default Products;
