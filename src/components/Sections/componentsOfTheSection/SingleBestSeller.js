import React, { useState } from "react";

function SingleBestSeller(props) {
  return (
    <div className="pull-left">
      <div className="product product__no-border border-right">
        <div className="product__inner overflow-hidden px-3 px-md-4d875">
          <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
            <div className="woocommerce-loop-product__thumbnail">
              <a href="/product" className="d-block">
                <img
                  src={props.img}
                  className="d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid"
                  alt="image-description"
                />
              </a>
            </div>
            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
              <div className="text-uppercase font-size-1 mb-1 text-truncate">
                <a href="/product">{props.edition}</a>
              </div>
              <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark">
                <a href="/product">{props.tag}</a>
              </h2>
              <div className="font-size-2  mb-1 text-truncate">
                <a
                  href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/others/authors-single.html"
                  className="text-gray-700"
                >
                  {props.name}
                </a>
              </div>
              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>29
                </span>
              </div>
            </div>
            <div className="product__hover d-flex align-items-center">
              <a
                href="/product"
                className="text-uppercase text-dark h-dark font-weight-medium mr-auto"
              >
                <span className="product__add-to-cart">ADD TO CART</span>
                <span className="product__add-to-cart-icon font-size-4">
                  <i className="flaticon-icon-126515"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBestSeller;
