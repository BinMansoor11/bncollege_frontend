import React, { Component } from "react";

function Products(props) {
  return (
    <div>
      <div className="container bg-dark text-light">
        <span>
          <center className="py-4">
            FREE GROUND SHIPPING ON ORDERS $49 OR MORE!
          </center>
        </span>
      </div>
      <div className="container my-4">
        <img src="assets/img/covid.jpg" className="img-fluid" width="100%" />
      </div>
    </div>
  );
}

export default Products;
