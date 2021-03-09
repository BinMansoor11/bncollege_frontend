import React, { useEffect, useState } from "react";
import Aside from "../Common/Aside";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link } from "react-router-dom";
import TopSection from "../Sections/TopSection";
import { useDispatch, useSelector } from "react-redux";
import RootReducer from "../../redux/reducers/RootReducer";
import {
  addItem,
  clearCart,
  clearItemFromCart,
  removeItem,
} from "../../redux/actions/Actions";
import { removeItemFromCart } from "../../redux/actions/Cart.utils";

// React Toastify //

import CartFeedback from "./CartFeedback";
import error from "./error";
import warning from "./warning";

const Cart = (props) => {
  const state = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const { _cart, _campus } = state;
  // const [state, setState] = useState({
  //   firstName: "",
  //   lastName: "",
  //   companyName: "",
  //   countryName: "",
  //   streetAddress: "",
  //   town: "",
  //   county: "",
  //   postCode: "",
  //   phone: "",
  //   emailAddress: "",
  //   additionalInformation: "",
  // });
  // const {
  //   firstname,
  //   lastName,
  //   companyName,
  //   countryName,
  //   streetAddress,
  //   town,
  //   country,
  //   postCode,
  //   phone,
  //   emailAddress,
  //   additionalInformation,
  // } = state;

  const onChangeHandler = (e) => {
    e.persist();

    // setState((prevState) => ({
    //   ...prevState,
    //   [e.target.name]: e.target.value,
    // }));
  };
  let totals = _cart.reduce(
    (accumulatedValue, cartItem) =>
      accumulatedValue + cartItem.quantity * cartItem.price,
    0
  );
  /**
   * Input Value Increment And Decrement
   */
  const [ValueCart, setValueCart] = useState(1);

  const IncrementValue = () => {
    setValueCart(ValueCart + 1);
  };

  const DecrementValue = () => {
    if (ValueCart == 1) {
      setValueCart(ValueCart);
    } else {
      setValueCart(ValueCart - 1);
    }
  };

  /**
   * PRODUCT CART
   */
  const [ProductCart, setProductCart] = useState([
    {
      product_img: "./assets/img/90x138/img1.jpg",
      product_name: "The Overdue Life of Amy Byler",
      product_author: "Kelly Harms",
      product_price: 79.99,
    },
    {
      product_img: "./assets/img/90x138/img1.jpg",
      product_name: "The Overdue Life of Amy Byler",
      product_author: "Kelly Harms",
      product_price: 79.99,
    },
  ]);
  const { product_name, product_author, product_price } = ProductCart;

  /**
   * REMOVE PRODUCT FROM CART
   */
  const deleteProducts = (index) => {
    const filteredProducts = ProductCart.filter((v, i) => i !== index);
    console.log("Product Removed", filteredProducts);

    setProductCart(filteredProducts);
  };
  const [total, setTotal] = useState(0);
  const totalfunction = () => {
    _cart &&
      _cart.map((v) => {
        setTotal((prev) => prev + v.price);
      });
  };
  useEffect(() => {
    totalfunction();
  }, []);
  return _cart.length < 1 ? (
    <div>
      <Header />
      {/* <Aside /> */}

      <div
        className="site-content overflow-hidden"
        id="content"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div className="container" style={{ paddingBottom: "10%" }}>
          <header className="entry-header space-top-2 space-bottom-1 mb-3">
            <div className="container col-9 headerText  pb-3">
              <h1 className="display-4 text-center text-uppercase font-size-10">
                your shopping cart
              </h1>
              <hr />
            </div>
            <div className="py-2">
              {/**
               * OFFER SECTION
               */}
              <div
                className="container w-100 text-light"
                style={{ backgroundColor: _campus.header_primary_color }}
              >
                <span>
                  <center className="py-4 font-size-2">
                    Add non-textbook items to your order to qualify for{" "}
                    <b>Free Standard Shipping</b> Exclusions apply.
                  </center>
                </span>
              </div>
            </div>
          </header>

          <div className="row pb-8">
            {/**
             *PRODUCT PRICE QUANTITY TOTAL
             */}

            <div class="col-xl-8 col-lg-12 ">
              <div id="primary" className="content-area">
                <main id="main" className="site-main ">
                  <div className="page type-page status-publish hentry">
                    <div className="entry-content">
                      <div className="woocommerce">
                        <form className="woocommerce-cart-form table-responsive">
                          <table
                            className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                            style={{ borderTop: "2px solid black" }}
                          >
                            <thead>
                              <tr>
                                <th className="product-name">Product</th>
                                <th className="product-price">Price</th>
                                <th className="product-quantity">Quantity</th>
                                <th className="product-subtotal">Total</th>
                                <th className="product-remove">&nbsp;</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>PLEASE ADD ITEMS TO CART</td>
                              </tr>
                              <tr>
                                <td colspan="5" className="actions">
                                  <input
                                    onClick={() => {
                                      dispatch(clearCart());
                                      warning("CART IS ALREADY EMPTY");
                                    }}
                                    className="button text-light"
                                    value="Clear Cart"
                                    style={{
                                      backgroundColor:
                                        _campus.header_primary_color,
                                    }}
                                  />
                                  <input
                                    type="hidden"
                                    id="_wpnonce"
                                    name="_wpnonce"
                                    value="db025d7a70"
                                  />
                                  <input
                                    type="hidden"
                                    name="_wp_http_referer"
                                    value="/storefront/cart/"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </form>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            {/**
             * CART
             */}
            <div class="col-xl-4 col-lg-block col-md-block">
              <div
                id="secondary"
                className="sidebar cart-collaterals order-1"
                role="complementary"
              >
                <div
                  id="cartAccordion"
                  className="bg-white mb-5"
                  style={{ borderTop: "2px solid black" }}
                >
                  <div className="p-4d875">
                    <div id="cartHeadingOne" className="cart-head">
                      <a
                        className="d-flex align-items-center justify-content-between text-dark"
                        href="#"
                        data-toggle="collapse"
                        data-target="#cartCollapseOne"
                        aria-expanded="true"
                        aria-controls="cartCollapseOne"
                      >
                        <h3 className="cart-title mb-0 font-weight-medium font-size-3">
                          Cart Totals
                        </h3>
                        <svg
                          className="mins"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="2px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(22, 22, 25)"
                            d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                          />
                        </svg>
                        <svg
                          className="plus"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="15px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(22, 22, 25)"
                            d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div
                      id="cartCollapseOne"
                      className="mt-4 cart-content collapse show"
                      aria-labelledby="cartHeadingOne"
                      data-parent="#cartAccordion"
                    >
                      <table className="shop_table shop_table_responsive">
                        <tbody>
                          <tr className="cart-subtotal">
                            <th>Subtotal</th>
                            <td data-title="Subtotal">
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">
                                  £
                                </span>
                                {totals}
                              </span>
                            </td>
                          </tr>
                          <tr className="order-shipping">
                            <th>Shipping</th>
                            <td data-title="Shipping">Free Shipping</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="p-4d875 border">
                    <div id="cartHeadingTwo" className="cart-head">
                      <a
                        className="d-flex align-items-center justify-content-between text-dark"
                        href="#"
                        data-toggle="collapse"
                        data-target="#cartCollapseTwo"
                        aria-expanded="true"
                        aria-controls="cartCollapseTwo"
                      >
                        <h3 className="cart-title mb-0 font-weight-medium font-size-3">
                          Shipping
                        </h3>
                        <svg
                          className="mins"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="2px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(22, 22, 25)"
                            d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                          />
                        </svg>
                        <svg
                          className="plus"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="15px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(22, 22, 25)"
                            d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div
                      id="cartCollapseTwo"
                      className="mt-4 cart-content collapse show"
                      aria-labelledby="cartHeadingTwo"
                      data-parent="#cartAccordion"
                    >
                      <ul id="shipping_method">
                        <li>
                          <input
                            type="radio"
                            name="shipping_method[0]"
                            data-index="0"
                            id="shipping_method_0_flat_rate1"
                            value="flat_rate:1"
                            className="shipping_method"
                          />
                          <label for="shipping_method_0_flat_rate1">
                            Free shipping
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="shipping_method[0]"
                            data-index="0"
                            id="shipping_method_0_flat_rate2"
                            value="flat_rate:2"
                            className="shipping_method"
                            checked="checked"
                          />
                          <label for="shipping_method_0_flat_rate2">
                            Flat rate:{" "}
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              15
                            </span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="shipping_method[0]"
                            data-index="0"
                            id="shipping_method_0_flat_rate3"
                            value="flat_rate:2"
                            className="shipping_method"
                            checked="checked"
                          />
                          <label for="shipping_method_0_flat_rate3">
                            Local pickup::{" "}
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              8
                            </span>
                          </label>
                        </li>
                      </ul>
                      <span className="font-size-2">Shipping to Turkey.</span>
                      <a
                        href="#"
                        className="font-weight-medium h-primary ml-3 font-size-2"
                      >
                        Change Address
                      </a>
                    </div>
                  </div>
                  <div className="p-4d875 border">
                    <div id="cartHeadingThree" className="cart-head">
                      <a
                        className="d-flex align-items-center justify-content-between text-dark"
                        href="#"
                        data-toggle="collapse"
                        data-target="#cartCollapseThree"
                        aria-expanded="true"
                        aria-controls="cartCollapseThree"
                      >
                        <h3 className="cart-title mb-0 font-weight-medium font-size-3">
                          Coupon
                        </h3>
                        <svg
                          className="mins"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="2px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(22, 22, 25)"
                            d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                          />
                        </svg>
                        <svg
                          className="plus"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="15px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(22, 22, 25)"
                            d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div
                      id="cartCollapseThree"
                      className="mt-4 cart-content collapse show"
                      aria-labelledby="cartHeadingThree"
                      data-parent="#cartAccordion"
                    >
                      <div className="coupon">
                        <label for="coupon_code">Coupon:</label>
                        <input
                          type="text"
                          name="coupon_code"
                          className="input-text"
                          id="coupon_code"
                          value=""
                          placeholder="Coupon code"
                          autocomplete="off"
                        />
                        <input
                          type="submit"
                          className="button"
                          name="apply_coupon"
                          value="Apply coupon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4d875 border">
                    <table className="shop_table shop_table_responsive">
                      <tbody>
                        <tr className="order-total">
                          <th>Total</th>
                          <td data-title="Total">
                            <strong>
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">
                                  £
                                </span>
                                {totals}
                              </span>
                            </strong>{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="">
                  <Link
                    to={"/" + _campus.name + "/checkout"}
                    className="checkout-button button alt wc-forward btn btn-block rounded-0 py-4"
                    style={{
                      backgroundColor: _campus.header_primary_color,
                      color: _campus.header_font_secondary_color,
                    }}
                  >
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**
       * NEED HELP AND A SMARTER WAY TO BUY TEXTBOOKS
       */}

      <div
        className="col-12 py-3 text-center h-100"
        style={{ backgroundColor: "white" }}
      >
        <h3 className="font-weight-normal mt-2 font-size-5">
          A SMARTER WAY TO BUY TEXTBOOKS
        </h3>
        <div class="row pt-5 d-flex justify-content-center ">
          <div class="col-6 col-md-3">
            <h5 className="font-weight-normal mt-2 font-size-3">
              THE RIGHT EDITION,
              <br />
              GUARANTEED.
            </h5>
            <p className=" text-center text-muted mt-5 font-size-1">
              We work closely with your professors to ensure we only sell the
              editions they use in the classroom, saving you time and stress
              about finding it yourself.
            </p>
          </div>
          <div class="col-6 col-md-3">
            <h5 className="font-weight-normal mt-2 font-size-3">
              DROP A COURSE?
              <br />
              NO PROBLEM.
            </h5>
            <p className="text-center  text-muted mt-5 font-size-1">
              Don't stick with a class just because you bought the books. Return
              them during the add/drop period of the semester for a full refund.
            </p>
          </div>
          <div class="col-6 col-md-3">
            <h5 className="font-weight-normal mt-2 font-size-3">
              TRUSTED ADVICE ON
              <br />
              TEXTBOOKS.
            </h5>
            <p className="text-center text-muted mt-5 font-size-1">
              On the fence about buying books for a class? We let you know
              what's required on Day 1 and when to wait to purchase. Service you
              won't find anywhere else.
            </p>
          </div>
        </div>
        <div class="container col-9 pt-5">
          <hr />
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-6  text-center">
            <p className="d-inline text-center font-weight-bold font-size-1">
              NEED HELP?
            </p>
            <Link
              to="/rentalfaqs"
              className="d-inline text-center font-weight-normal px-2 font-size-1"
            >
              Rental FAQs
            </Link>
            <span class="border-right border-secondary mx-1"></span>

            <Link
              to="/paymentanddelivery"
              className="d-inline text-center font-weight-normal mx-1 font-size-1"
            >
              Payment & Delivery
            </Link>
            <span class="border-right border-secondary mx-1"></span>

            <Link
              to="/returnsandrefunds"
              className="d-inline text-center font-weight-normal px-2 font-size-1"
            >
              Refunds
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <div>
      <Header />
      {/* <Aside /> */}

      <div
        className="site-content overflow-hidden"
        id="content"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div className="container" style={{ paddingBottom: "10%" }}>
          <header className="entry-header space-top-2 space-bottom-1 mb-3">
            <div className="container col-9 headerText  pb-3">
              <h1 className="display-4 text-center text-uppercase font-size-10">
                your shopping cart
              </h1>
              <hr />
            </div>
            <div className="py-2">
              {/**
               * OFFER SECTION
               */}
              <div className="container w-100 bg-dark text-light">
                <span>
                  <center className="py-4 font-size-2">
                    Add non-textbook items to your order to qualify for{" "}
                    <b>Free Standard Shipping</b> Exclusions apply.
                  </center>
                </span>
              </div>
            </div>
          </header>

          <div className="row pb-8">
            {/**
             *PRODUCT PRICE QUANTITY TOTAL
             */}

            <div class="col-xl-8 col-lg-12 ">
              <div id="primary" className="content-area">
                <main id="main" className="site-main ">
                  <div className="page type-page status-publish hentry">
                    <div className="entry-content">
                      <div className="woocommerce">
                        <form
                          className="woocommerce-cart-form table-responsive"
                          // action="#"
                          // method="post"
                        >
                          <table
                            className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                            style={{ borderTop: "2px solid black" }}
                          >
                            <thead>
                              <tr>
                                <th className="product-name">Product</th>
                                <th className="product-price">Price</th>
                                <th className="product-quantity">Quantity</th>
                                <th className="product-subtotal">Total</th>
                                <th className="product-remove">&nbsp;</th>
                              </tr>
                            </thead>
                            <tbody>
                              {_cart &&
                                _cart.map((v, i) => {
                                  return (
                                    <tr className="woocommerce-cart-form__cart-item cart_item">
                                      <td
                                        className="product-name"
                                        data-title="Product"
                                      >
                                        <div className="d-flex align-items-center">
                                          <img
                                            className="attachment-shop_thumbnail size-shop_thumbnail wp-post-image"
                                            src={
                                              v.images !== undefined
                                                ? v.images[0]
                                                : null
                                            }
                                            style={{
                                              width: "35%",
                                              height: "35%",
                                            }}
                                            alt=""
                                          />
                                          <div className="ml-3 m-w-200-lg-down">
                                            <a href="#">{v.name}</a>{" "}
                                          </div>
                                          {/*
                                          <a
                                            href="#"
                                            className="text-gray-700 font-size-2 d-block"
                                            tabindex="0"
                                          >
                                            {v.product_author}
                                          </a>
                                        </div> */}
                                        </div>
                                      </td>

                                      <td
                                        className="product-price"
                                        data-title="Price"
                                      >
                                        <span className="woocommerce-Price-amount amount">
                                          <span className="woocommerce-Price-currencySymbol">
                                            <span className="woocommerce-Price-currencySymbol">
                                              £
                                            </span>
                                            {v.price}
                                          </span>
                                        </span>
                                      </td>
                                      <td
                                        className="product-quantity"
                                        data-title="Quantity"
                                      >
                                        <div className="quantity d-flex align-items-center">
                                          <div className="border px-3 width-120 bg-white">
                                            <div className="js-quantity">
                                              <div className="d-flex align-items-center">
                                                <label class="screen-reader-text sr-only">
                                                  Quantity
                                                </label>
                                                <span
                                                  className="woocommerce-Price-currencySymbol"
                                                  style={{
                                                    padding: 20,
                                                    cursor: "pointer",
                                                  }}
                                                  onClick={() => {
                                                    dispatch(
                                                      clearItemFromCart(v)
                                                    );
                                                    error("ITEM REMOVED");
                                                  }}
                                                >
                                                  -
                                                </span>
                                                <span>{v.quantity}</span>
                                                <span
                                                  className="woocommerce-Price-currencySymbol"
                                                  style={{
                                                    padding: 20,
                                                    cursor: "pointer",
                                                  }}
                                                  onClick={() => {
                                                    dispatch(addItem(v));
                                                    CartFeedback(
                                                      "ITEM ADDED TO CART"
                                                    );
                                                  }}
                                                >
                                                  +
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td
                                        className="product-subtotal"
                                        data-title="Total"
                                      >
                                        <span className="woocommerce-Price-amount amount">
                                          <span className="woocommerce-Price-currencySymbol">
                                            £
                                          </span>
                                          {v.quantity * v.price}
                                        </span>
                                      </td>
                                      <td className="product-remove">
                                        <button
                                          onClick={async () => {
                                            error("ITEM DELETED FROM CART");
                                            dispatch(removeItem(v));
                                          }}
                                          type="button"
                                          class="close"
                                          aria-label="Close"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="15px"
                                            height="15px"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              fill="rgb(22, 22, 25)"
                                              d="M15.011,13.899 L13.899,15.012 L7.500,8.613 L1.101,15.012 L-0.012,13.899 L6.387,7.500 L-0.012,1.101 L1.101,-0.012 L7.500,6.387 L13.899,-0.012 L15.011,1.101 L8.613,7.500 L15.011,13.899 Z"
                                            />
                                          </svg>
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                              <tr>
                                <td colspan="5" className="actions">
                                  <input
                                    onClick={(e) => {
                                      e.preventDefault();
                                      dispatch(clearCart());
                                      error("CART IS NOW EMPTY");
                                    }}
                                    className="button bg-dark text-light"
                                    value="Clear Cart"
                                  />
                                  <input
                                    type="hidden"
                                    id="_wpnonce"
                                    name="_wpnonce"
                                    value="db025d7a70"
                                  />
                                  <input
                                    type="hidden"
                                    name="_wp_http_referer"
                                    value="/storefront/cart/"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </form>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            {/**
             * CART
             */}
            <div class="col-xl-4 col-lg-block col-md-block">
              <div
                id="secondary"
                className="sidebar cart-collaterals order-1"
                role="complementary"
              >
                <div
                  id="cartAccordion"
                  className="bg-white mb-5"
                  style={{ borderTop: "2px solid black" }}
                >
                  <div className="p-4d875">
                    <div id="cartHeadingOne" className="cart-head">
                      <a
                        className="d-flex align-items-center justify-content-between text-dark"
                        href="#"
                        data-toggle="collapse"
                        data-target="#cartCollapseOne"
                        aria-expanded="true"
                        aria-controls="cartCollapseOne"
                      >
                        <h3 className="cart-title mb-0 font-weight-medium font-size-3">
                          Cart Totals
                        </h3>
                        <svg
                          className="mins"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="2px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(22, 22, 25)"
                            d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                          />
                        </svg>
                        <svg
                          className="plus"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="15px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(22, 22, 25)"
                            d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div
                      id="cartCollapseOne"
                      className="mt-4 cart-content collapse show"
                      aria-labelledby="cartHeadingOne"
                      data-parent="#cartAccordion"
                    >
                      <table className="shop_table shop_table_responsive">
                        <tbody>
                          <tr className="cart-subtotal">
                            <th>Subtotal</th>
                            <td data-title="Subtotal">
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">
                                  £
                                </span>
                                {totals}
                              </span>
                            </td>
                          </tr>
                          <tr className="order-shipping">
                            <th>Shipping</th>
                            <td data-title="Shipping">Free Shipping</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="p-4d875 border">
                    <div id="cartHeadingTwo" className="cart-head">
                      <a
                        className="d-flex align-items-center justify-content-between text-dark"
                        href="#"
                        data-toggle="collapse"
                        data-target="#cartCollapseTwo"
                        aria-expanded="true"
                        aria-controls="cartCollapseTwo"
                      >
                        <h3 className="cart-title mb-0 font-weight-medium font-size-3">
                          Shipping
                        </h3>
                        <svg
                          className="mins"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="2px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(22, 22, 25)"
                            d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                          />
                        </svg>
                        <svg
                          className="plus"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="15px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(22, 22, 25)"
                            d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div
                      id="cartCollapseTwo"
                      className="mt-4 cart-content collapse show"
                      aria-labelledby="cartHeadingTwo"
                      data-parent="#cartAccordion"
                    >
                      <ul id="shipping_method">
                        <li>
                          <input
                            type="radio"
                            name="shipping_method[0]"
                            data-index="0"
                            id="shipping_method_0_flat_rate1"
                            value="flat_rate:1"
                            className="shipping_method"
                          />
                          <label for="shipping_method_0_flat_rate1">
                            Free shipping
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="shipping_method[0]"
                            data-index="0"
                            id="shipping_method_0_flat_rate2"
                            value="flat_rate:2"
                            className="shipping_method"
                            checked="checked"
                          />
                          <label for="shipping_method_0_flat_rate2">
                            Flat rate:{" "}
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              15
                            </span>
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            name="shipping_method[0]"
                            data-index="0"
                            id="shipping_method_0_flat_rate3"
                            value="flat_rate:2"
                            className="shipping_method"
                            checked="checked"
                          />
                          <label for="shipping_method_0_flat_rate3">
                            Local pickup::{" "}
                            <span className="woocommerce-Price-amount amount">
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              8
                            </span>
                          </label>
                        </li>
                      </ul>
                      <span className="font-size-2">Shipping to Turkey.</span>
                      <a
                        href="#"
                        className="font-weight-medium h-primary ml-3 font-size-2"
                      >
                        Change Address
                      </a>
                    </div>
                  </div>
                  <div className="p-4d875 border">
                    <div id="cartHeadingThree" className="cart-head">
                      <a
                        className="d-flex align-items-center justify-content-between text-dark"
                        href="#"
                        data-toggle="collapse"
                        data-target="#cartCollapseThree"
                        aria-expanded="true"
                        aria-controls="cartCollapseThree"
                      >
                        <h3 className="cart-title mb-0 font-weight-medium font-size-3">
                          Coupon
                        </h3>
                        <svg
                          className="mins"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="2px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(22, 22, 25)"
                            d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                          />
                        </svg>
                        <svg
                          className="plus"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="15px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(22, 22, 25)"
                            d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div
                      id="cartCollapseThree"
                      className="mt-4 cart-content collapse show"
                      aria-labelledby="cartHeadingThree"
                      data-parent="#cartAccordion"
                    >
                      <div className="coupon">
                        <label for="coupon_code">Coupon:</label>
                        <input
                          type="text"
                          name="coupon_code"
                          className="input-text"
                          id="coupon_code"
                          value=""
                          placeholder="Coupon code"
                          autocomplete="off"
                        />
                        <input
                          type="submit"
                          className="button"
                          name="apply_coupon"
                          value="Apply coupon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4d875 border">
                    <table className="shop_table shop_table_responsive">
                      <tbody>
                        <tr className="order-total">
                          <th>Total</th>
                          <td data-title="Total">
                            <strong>
                              <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">
                                  £
                                </span>
                                {totals}
                              </span>
                            </strong>{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="wc-proceed-to-checkout">
                  <Link
                    to={"/" + _campus.name + "/checkout"}
                    className="checkout-button button alt wc-forward btn btn-dark btn-block rounded-0 py-4"
                  >
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**
       * NEED HELP AND A SMARTER WAY TO BUY TEXTBOOKS
       */}

      <div
        className="col-12 py-3 text-center h-100"
        style={{ backgroundColor: "white" }}
      >
        <h3 className="font-weight-normal mt-2 font-size-5">
          A SMARTER WAY TO BUY TEXTBOOKS
        </h3>
        <div class="row pt-5 d-flex justify-content-center ">
          <div class="col-6 col-md-3">
            <h5 className="font-weight-normal mt-2 font-size-3">
              THE RIGHT EDITION,
              <br />
              GUARANTEED.
            </h5>
            <p className=" text-center text-muted mt-5 font-size-1">
              We work closely with your professors to ensure we only sell the
              editions they use in the classroom, saving you time and stress
              about finding it yourself.
            </p>
          </div>
          <div class="col-6 col-md-3">
            <h5 className="font-weight-normal mt-2 font-size-3">
              DROP A COURSE?
              <br />
              NO PROBLEM.
            </h5>
            <p className="text-center  text-muted mt-5 font-size-1">
              Don't stick with a class just because you bought the books. Return
              them during the add/drop period of the semester for a full refund.
            </p>
          </div>
          <div class="col-6 col-md-3">
            <h5 className="font-weight-normal mt-2 font-size-3">
              TRUSTED ADVICE ON
              <br />
              TEXTBOOKS.
            </h5>
            <p className="text-center text-muted mt-5 font-size-1">
              On the fence about buying books for a class? We let you know
              what's required on Day 1 and when to wait to purchase. Service you
              won't find anywhere else.
            </p>
          </div>
        </div>
        <div class="container col-9 pt-5">
          <hr />
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-6  text-center">
            <p className="d-inline text-center font-weight-bold font-size-1">
              NEED HELP?
            </p>
            <Link
              to="/rentalfaqs"
              className="d-inline text-center font-weight-normal px-2 font-size-1"
            >
              Rental FAQs
            </Link>
            <span class="border-right border-secondary mx-1"></span>

            <Link
              to="/paymentanddelivery"
              className="d-inline text-center font-weight-normal mx-1 font-size-1"
            >
              Payment & Delivery
            </Link>
            <span class="border-right border-secondary mx-1"></span>

            <Link
              to="/returnsandrefunds"
              className="d-inline text-center font-weight-normal px-2 font-size-1"
            >
              Refunds
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
