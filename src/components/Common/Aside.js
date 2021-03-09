import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";

const Aside = (props) => {
  /**
   * ASIDE PRODUCT CART
   */
  const [AsideProductCart, setAsideProductCart] = useState([
    {
      aside_product_img: "./assets/img/120x180/img6.jpg",
      aside_product_material: "Hard Cover",
      aside_product_name:
        "The Ride of a Lifetime: Lessons Learned from 15 Years as CEO",
      aside_product_author: "Robert Iger",
      aside_product_qty: 1,
      aside_product_price: 125.3,
    },
    {
      aside_product_img: "./assets/img/120x180/img6.jpg",
      aside_product_material: "Hard Cover",
      aside_product_name:
        "The Ride of a Lifetime: Lessons Learned from 15 Years as CEO",
      aside_product_author: "Robert Iger",
      aside_product_qty: 1,
      aside_product_price: 125.3,
    },
    {
      aside_product_img: "./assets/img/120x180/img6.jpg",
      aside_product_material: "Hard Cover",
      aside_product_name:
        "The Ride of a Lifetime: Lessons Learned from 15 Years as CEO",
      aside_product_author: "Robert Iger",
      aside_product_qty: 1,
      aside_product_price: 125.3,
    },
  ]);

  const {
    aside_product_img,
    aside_product_material,
    aside_product_name,
    aside_product_author,
    aside_product_qty,
    aside_product_price,
  } = AsideProductCart;

  /**
   *  REMOVE PRODUCTS FROM CART
   */
  const deleteProducts = (index) => {
    const filteredProducts = AsideProductCart.filter((v, i) => i !== index);
    console.log("Product Removed :>> ", filteredProducts);

    setAsideProductCart(filteredProducts);
  };

  /**
   * ASIDE PRODUCT SUBTOTAL
   */
  const Subtotal = {
    subtotal: 750.0,
  };
  const { subtotal } = Subtotal;

  return (
    <div>
      {/**
       * MY ACCOUNT
       */}
      <aside
        id="sidebarContent"
        className="u-sidebar u-sidebar__lg"
        aria-labelledby="sidebarNavToggler"
      >
        <div className="u-sidebar__scroller">
          <div className="u-sidebar__container">
            <div className="u-header-sidebar__footer-offset">
              <div className="d-flex align-items-center position-absolute top-0 right-0 z-index-2 mt-5 mr-md-6 mr-4">
                <button
                  type="button"
                  className="close ml-auto"
                  aria-controls="sidebarContent"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-unfold-event="click"
                  data-unfold-hide-on-scroll="false"
                  data-unfold-target="#sidebarContent"
                  data-unfold-type="css-animation"
                  data-unfold-animation-in="fadeInRight"
                  data-unfold-animation-out="fadeOutRight"
                  data-unfold-duration="500"
                >
                  <span aria-hidden="true">
                    Close <i className="fas fa-times ml-2"></i>
                  </span>
                </button>
              </div>
              <div className="js-scrollbar u-sidebar__body">
                <div className="u-sidebar__content u-header-sidebar__content">
                  <form className="">
                    <div id="login" data-target-group="idForm">
                      <header className="border-bottom px-4 px-md-6 py-4">
                        <h2 className="font-size-3 mb-0 d-flex align-items-center">
                          <span className=" mr-2 font-size-7">
                            <BsPerson />
                          </span>
                          <span className="mt-2 font-size-3">Account</span>
                        </h2>
                      </header>
                      <div className="p-4 p-md-6">
                        <div className="form-group mb-4">
                          <div className="js-form-message js-focus-state">
                            <label
                              id="signinEmailLabel"
                              className="form-label"
                              htmlFor="signinEmail"
                            >
                              Username or email *
                            </label>
                            <input
                              type="email"
                              className="form-control rounded-0 height-4 px-4"
                              name="email"
                              id="signinEmail"
                              placeholder="creativelayers088@gmail.com"
                              aria-label="creativelayers088@gmail.com"
                              aria-describedby="signinEmailLabel"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <div className="js-form-message js-focus-state">
                            <label
                              id="signinPasswordLabel"
                              className="form-label"
                              htmlFor="signinPassword"
                            >
                              Password *
                            </label>
                            <input
                              type="password"
                              className="form-control rounded-0 height-4 px-4"
                              name="password"
                              id="signinPassword"
                              placeholder=""
                              aria-label=""
                              aria-describedby="signinPasswordLabel"
                              required
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-between mb-5 align-items-center">
                          <div className="js-form-message">
                            <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="termsCheckbox"
                                name="termsCheckbox"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="termsCheckbox"
                              >
                                <span className="font-size-2 text-secondary-gray-700">
                                  Remember me
                                </span>
                              </label>
                            </div>
                          </div>
                          <a
                            className="js-animation-link text-dark font-size-2 t-d-u link-muted font-weight-medium"
                            href="javascript:;"
                            data-target="#forgotPassword"
                            data-link-group="idForm"
                            data-animation-in="fadeIn"
                          >
                            Forgot Password?
                          </a>
                        </div>
                        <div className="mb-4d75">
                          <button
                            type="submit"
                            className="btn btn-block py-3 rounded-0 btn-dark"
                          >
                            Sign In
                          </button>
                        </div>
                        <div className="mb-2">
                          <a
                            href="javascript:;"
                            className="js-animation-link btn btn-block py-3 rounded-0 btn-outline-dark font-weight-medium"
                            data-target="#signup"
                            data-link-group="idForm"
                            data-animation-in="fadeIn"
                          >
                            Create Account
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      id="signup"
                      style={{ display: "none", opacity: "0" }}
                      data-target-group={"idForm"}
                    >
                      <header className="border-bottom px-4 px-md-6 py-4">
                        <h2 className="font-size-3 mb-0 d-flex align-items-center">
                          <i className="flaticon-resume mr-3 font-size-5"></i>
                          Create Account
                        </h2>
                      </header>
                      <div className="p-4 p-md-6">
                        <div className="form-group mb-4">
                          <div className="js-form-message js-focus-state">
                            <label
                              id="signinEmailLabel1"
                              className="form-label"
                              htmlFor="signinEmail1"
                            >
                              Email *
                            </label>
                            <input
                              type="email"
                              className="form-control rounded-0 height-4 px-4"
                              name="email"
                              id="signinEmail1"
                              placeholder="creativelayers088@gmail.com"
                              aria-label="creativelayers088@gmail.com"
                              aria-describedby="signinEmailLabel1"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <div className="js-form-message js-focus-state">
                            <label
                              id="signinPasswordLabel1"
                              className="form-label"
                              htmlFor="signinPassword1"
                            >
                              Password *
                            </label>
                            <input
                              type="password"
                              className="form-control rounded-0 height-4 px-4"
                              name="password"
                              id="signinPassword1"
                              placeholder=""
                              aria-label=""
                              aria-describedby="signinPasswordLabel1"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <div className="js-form-message js-focus-state">
                            <label
                              id="signupConfirmPasswordLabel"
                              className="form-label"
                              htmlFor="signupConfirmPassword"
                            >
                              Confirm Password *
                            </label>
                            <input
                              type="password"
                              className="form-control rounded-0 height-4 px-4"
                              name="confirmPassword"
                              id="signupConfirmPassword"
                              placeholder=""
                              aria-label=""
                              aria-describedby="signupConfirmPasswordLabel"
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-3">
                          <button
                            type="submit"
                            className="btn btn-block py-3 rounded-0 btn-dark"
                          >
                            Create Account
                          </button>
                        </div>
                        <div className="text-center mb-4">
                          <span className="small text-muted">
                            Already have an account?
                          </span>
                          <a
                            className="js-animation-link small"
                            href="javascript:;"
                            data-target="#login"
                            data-link-group="idForm"
                            data-animation-in="fadeIn"
                          >
                            Login
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      id="forgotPassword"
                      style={{ display: " none", opacity: "0" }}
                      data-target-group={"idForm"}
                    >
                      <header className="border-bottom px-4 px-md-6 py-4">
                        <h2 className="font-size-3 mb-0 d-flex align-items-center">
                          <i className="flaticon-question mr-3 font-size-5"></i>
                          Forgot Password?
                        </h2>
                      </header>
                      <div className="p-4 p-md-6">
                        <div className="form-group mb-4">
                          <div className="js-form-message js-focus-state">
                            <label
                              id="signinEmailLabel3"
                              className="form-label"
                              htmlFor="signinEmail3"
                            >
                              Email *
                            </label>
                            <input
                              type="email"
                              className="form-control rounded-0 height-4 px-4"
                              name="email"
                              id="signinEmail3"
                              placeholder="creativelayers088@gmail.com"
                              aria-label="creativelayers088@gmail.com"
                              aria-describedby="signinEmailLabel3"
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-3">
                          <button
                            type="submit"
                            className="btn btn-block py-3 rounded-0 btn-dark"
                          >
                            Recover Password
                          </button>
                        </div>
                        <div className="text-center mb-4">
                          <span className="small text-muted">
                            Remember your password?
                          </span>
                          <a
                            className="js-animation-link small"
                            href="javascript:;"
                            data-target="#login"
                            data-link-group="idForm"
                            data-animation-in="fadeIn"
                          >
                            {" "}
                            Login
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/**
       * MY CART
       */}
      <aside
        id="sidebarContent1"
        className="u-sidebar u-sidebar__xl"
        aria-labelledby="sidebarNavToggler1"
      >
        <div className="u-sidebar__scroller js-scrollbar">
          <div className="u-sidebar__container">
            <div className="u-header-sidebar__footer-offset">
              <div className="d-flex align-items-center position-absolute top-0 right-0 z-index-2 mt-5 mr-md-6 mr-4">
                <button
                  type="button"
                  className="close ml-auto"
                  aria-controls="sidebarContent1"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-unfold-event="click"
                  data-unfold-hide-on-scroll="false"
                  data-unfold-target="#sidebarContent1"
                  data-unfold-type="css-animation"
                  data-unfold-animation-in="fadeInRight"
                  data-unfold-animation-out="fadeOutRight"
                  data-unfold-duration="500"
                >
                  <span aria-hidden="true">
                    Close <i className="fas fa-times ml-2"></i>
                  </span>
                </button>
              </div>
              <div className="u-sidebar__body">
                <div className="u-sidebar__content u-header-sidebar__content">
                  <header className="border-bottom px-4 px-md-6 py-4">
                    <h2 className="font-size-3 mb-0 d-flex align-items-center">
                      <span className="mr-2 font-size-7">
                        <HiOutlineShoppingBag />
                      </span>
                      <span className="mt-2 font-size-3 ">
                        {" "}
                        Your shopping bag (3)
                      </span>
                    </h2>
                  </header>

                  {AsideProductCart.length == 0 ? (
                    <div className="text-center pt-5">
                      <p className="text-danger font-size-3">
                        <b>Your cart is empty!</b>
                      </p>
                    </div>
                  ) : (
                    AsideProductCart.map((v, i) => {
                      return (
                        <div className="px-4 py-5 px-md-6 border-bottom">
                          <div className="media">
                            <a href="#" className="d-block">
                              <img
                                src={v.aside_product_img}
                                className="img-fluid"
                                alt="image-description"
                              />
                            </a>
                            <div className="media-body ml-4d875">
                              <div className="text-primary text-uppercase font-size-1 mb-1 text-truncate">
                                <a href="#">{v.aside_product_material}</a>
                              </div>
                              <h2 className="woocommerce-loop-product__title h6 text-lh-md mb-1 text-height-2 crop-text-2">
                                <a href="#" className="text-dark">
                                  {v.aside_product_name}
                                </a>
                              </h2>
                              <div className="font-size-2 mb-1 text-truncate">
                                <a href="#" className="text-gray-700">
                                  {v.aside_product_author}
                                </a>
                              </div>
                              <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                <span className="woocommerce-Price-amount amount">
                                  {v.aside_product_qty}x{" "}
                                  <span className="woocommerce-Price-currencySymbol">
                                    ${v.aside_product_price}
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="mt-3 ml-3">
                              <button
                                onClick={() => deleteProducts(i)}
                                type="button"
                                class="close"
                                aria-label="Close"
                              >
                                <i className="fas fa-times"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                  <div className="px-4 py-5 px-md-6 d-flex justify-content-between align-items-center font-size-3">
                    <h4 className="mb-0 font-size-3">Subtotal:</h4>
                    <div className="font-weight-medium">${subtotal}</div>
                  </div>
                  <div className="px-4 mb-8 px-md-6">
                    <Link
                      to="/cart"
                      className="btn btn-block py-4 rounded-0 btn-outline-dark mb-4"
                    >
                      View Cart
                    </Link>
                    <Link
                      to="/checkout"
                      className="btn btn-block py-4 rounded-0 btn-dark"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/* <aside
        id="sidebarContent2"
        className="u-sidebar u-sidebar__md u-sidebar--left"
        aria-labelledby="sidebarNavToggler2"
      >
        <div className="u-sidebar__scroller js-scrollbar">
          <div className="u-sidebar__container">
            <div className="u-header-sidebar__footer-offset">
              <div className="u-sidebar__body">
                <div className="u-sidebar__content u-header-sidebar__content">
                  <header className="border-bottom px-4 px-md-5 py-4 d-flex align-items-center justify-content-between">
                    <h2 className="font-size-3 mb-0">SHOP BY CATEGORY</h2>
                    <div className="d-flex align-items-center">
                      <button
                        type="button"
                        className="close ml-auto"
                        aria-controls="sidebarContent2"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-unfold-event="click"
                        data-unfold-hide-on-scroll="false"
                        data-unfold-target="#sidebarContent2"
                        data-unfold-type="css-animation"
                        data-unfold-animation-in="fadeInLeft"
                        data-unfold-animation-out="fadeOutLeft"
                        data-unfold-duration="500"
                      >
                        <span aria-hidden="true">
                          <i className="fas fa-times ml-2"></i>
                        </span>
                      </button>
                    </div>
                  </header>
                  <div className="border-bottom">
                    <div className="zeynep pt-4">
                      <ul>
                        <li className="has-submenu">
                          <a href="#" data-submenu="off-pages">
                            Pages
                          </a>
                          <div id="off-pages" className="submenu">
                            <div
                              className="submenu-header"
                              data-submenu-close="off-pages"
                            >
                              <a href="#">Pages</a>
                            </div>
                            <ul>
                              <li className="has-submenu">
                                <a href="#" data-submenu="off-home">
                                  Home Pages
                                </a>
                                <div
                                  id="off-home"
                                  className="submenu js-scrollbar"
                                >
                                  <div
                                    className="submenu-header"
                                    data-submenu-close="off-home"
                                  >
                                    <a href="#">Home Pages</a>
                                  </div>
                                  <ul className="">
                                    <li>
                                      <a href="index-2.html">Home v1</a>
                                    </li>
                                    <li>
                                      <a href="home-v2.html">Home v2</a>
                                    </li>
                                    <li>
                                      <a href="home-v3.html">Home v2</a>
                                    </li>
                                    <li>
                                      <a href="home-v3.html">Home v3</a>
                                    </li>
                                    <li>
                                      <a href="home-v4.html">Home v4</a>
                                    </li>
                                    <li>
                                      <a href="home-v5.html">Home v5</a>
                                    </li>
                                    <li>
                                      <a href="home-v6.html">Home v6</a>
                                    </li>
                                    <li>
                                      <a href="home-v7.html">Home v7</a>
                                    </li>
                                    <li>
                                      <a href="home-v8.html">Home v8</a>
                                    </li>
                                    <li>
                                      <a href="home-v9.html">Home v9</a>
                                    </li>
                                    <li>
                                      <a href="home-v10.html">Home v10</a>
                                    </li>
                                    <li>
                                      <a href="home-v11.html">Home v11</a>
                                    </li>
                                    <li>
                                      <a href="home-v12.html">Home v12</a>
                                    </li>
                                    <li>
                                      <a href="home-v13.html">Home v13</a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="has-submenu">
                                <a href="#" data-submenu="off-single-product">
                                  Single Product
                                </a>
                                <div
                                  id="off-single-product"
                                  className="submenu js-scrollbar"
                                >
                                  <div
                                    className="submenu-header"
                                    data-submenu-close="off-single-product"
                                  >
                                    <a href="#">Single Product</a>
                                  </div>
                                  <ul className="">
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/single-product-v1.html">
                                        Single Product v1
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/single-product-v2.html">
                                        Single Product v2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/single-product-v3.html">
                                        Single Product v3
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/single-product-v4.html">
                                        Single Product v4
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/single-product-v5.html">
                                        Single Product v5
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/single-product-v6.html">
                                        Single Product v6
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/single-product-v7.html">
                                        Single Product v7
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="has-submenu">
                                <a href="#" data-submenu="off-shop-pages">
                                  Shop Pages
                                </a>
                                <div
                                  id="off-shop-pages"
                                  className="submenu js-scrollbar"
                                >
                                  <div
                                    className="submenu-header"
                                    data-submenu-close="off-shop-pages"
                                  >
                                    <a href="#">Shop Pages</a>
                                  </div>
                                  <ul className="">
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/cart.html">
                                        Shop cart
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/checkout.html">
                                        Shop checkout
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/my-account.html">
                                        Shop My Account
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/order-received.html">
                                        Shop Order Received
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/order-tracking.html">
                                        Shop Order Tracking
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/store-location.html">
                                        Shop Store Location
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="has-submenu">
                                <a href="#" data-submenu="off-shop-list">
                                  Shop List
                                </a>
                                <div
                                  id="off-shop-list"
                                  className="submenu js-scrollbar"
                                >
                                  <div
                                    className="submenu-header"
                                    data-submenu-close="off-shop-list"
                                  >
                                    <a href="#">Shop List</a>
                                  </div>
                                  <ul className="">
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/v1.html">
                                        Shop List v1
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/v2.html">
                                        Shop List v2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/v3.html">
                                        Shop List v3
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/v4.html">
                                        Shop List v4
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/v5.html">
                                        Shop List v5
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/v6.html">
                                        Shop List v6
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/v7.html">
                                        Shop List v7
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/v8.html">
                                        Shop List v8
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/shop/v9.html">
                                        Shop List v9
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="has-submenu">
                                <a href="#" data-submenu="off-blog">
                                  Blog
                                </a>
                                <div
                                  id="off-blog"
                                  className="submenu js-scrollbar"
                                >
                                  <div
                                    className="submenu-header"
                                    data-submenu-close="off-blog"
                                  >
                                    <a href="#">Blog</a>
                                  </div>
                                  <ul className="">
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/blog/blog-v1.html">
                                        Blog v1
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/blog/blog-v2.html">
                                        Blog v2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/blog/blog-v3.html">
                                        Blog v3
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/blog/blog-single.html">
                                        Blog Single
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="has-submenu">
                                <a href="#" dat-submenu="off-others">
                                  Others
                                </a>
                                <div
                                  id="off-others"
                                  className="submenu js-scrollbar"
                                >
                                  <div
                                    className="submenu-header"
                                    data-submenu-close="off-others"
                                  >
                                    <a href="#">Others</a>
                                  </div>
                                  <ul className="">
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/others/404.html">
                                        404
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/others/about.html">
                                        About Us
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/others/authors-list.html">
                                        Authors List
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/others/authors-single.html">
                                        Authors Single
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/others/coming-soon.html">
                                        Coming Soon
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/others/contact.html">
                                        Contact Us
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/others/faq.html">
                                        FAQ
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/others/pricing-table.html">
                                        Pricing Table
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/others/terms-conditions.html">
                                        Terms Conditions
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="px-5">
                                <a
                                  href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/documentation/index.html"
                                  className="btn btn-primary mb-3 mb-md-0 mb-xl-3 mt-4 font-size-2 btn-block"
                                >
                                  Documentation
                                </a>
                              </li>
                              <li className="px-5 mb-4">
                                <a
                                  href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/starter/index.html"
                                  className="btn btn-secondary font-size-2 btn-block mb-2"
                                >
                                  Starter
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a href="#" data-submenu="art-photo">
                            Arts & Photography
                          </a>
                          <div id="art-photo" className="submenu">
                            <div
                              className="submenu-header"
                              data-submenu-close="art-photo"
                            >
                              <a href="#">Arts & Photography</a>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Architecture</a>
                              </li>
                              <li>
                                <a href="#">Business of Art</a>
                              </li>
                              <li>
                                <a href="#">
                                  Collections, Catalogs & Exhibitions
                                </a>
                              </li>
                              <li>
                                <a href="#">Decorative Arts & Design</a>
                              </li>
                              <li>
                                <a href="#">Drawing</a>
                              </li>
                              <li>
                                <a href="#">Fashion</a>
                              </li>
                              <li>
                                <a href="#">Graphic Design</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a href="#" data-submenu="biography">
                            Biographies & Memoirs
                          </a>
                          <div id="biography" className="submenu">
                            <div
                              className="submenu-header"
                              data-submenu-close="biography"
                            >
                              <a href="#">Biographies & Memoirs</a>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Istanbul</a>
                              </li>
                              <li>
                                <a href="#">Mardin</a>
                              </li>
                              <li>
                                <a href="#">Amed</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a href="#" data-submenu="children">
                            Children's Books
                          </a>
                          <div id="children" className="submenu">
                            <div
                              className="submenu-header"
                              data-submenu-close="children"
                            >
                              <a href="#">Children's Books</a>
                            </div>
                            <ul>
                              <li className="has-submenu">
                                <a href="#" data-submenu="electronics">
                                  Electronics
                                </a>
                                <div
                                  id="electronics"
                                  className="submenu js-scrollbar"
                                >
                                  <div
                                    className="submenu-header"
                                    data-submenu-close="electronics"
                                  >
                                    <a href="#">Electronics</a>
                                  </div>
                                  <ul className="">
                                    <li>
                                      <a href="#">Camera & Photo</a>
                                    </li>
                                    <li>
                                      <a href="#">Home Audio</a>
                                    </li>
                                    <li>
                                      <a href="#">Tv & Video</a>
                                    </li>
                                    <li>
                                      <a href="#">Computers & Accessories</a>
                                    </li>
                                    <li>
                                      <a href="#">Car & Vehicle Electronics</a>
                                    </li>
                                    <li>
                                      <a href="#">Portable Audio & Video</a>
                                    </li>
                                    <li>
                                      <a href="#">Headphones</a>
                                    </li>
                                    <li>
                                      <a href="#">Accessories & Supplies</a>
                                    </li>
                                    <li>
                                      <a href="#">Video Projectors</a>
                                    </li>
                                    <li>
                                      <a href="#">Office Electronics</a>
                                    </li>
                                    <li>
                                      <a href="#">Wearable Technology</a>
                                    </li>
                                    <li>
                                      <a href="#">Service Plans</a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a href="#">Books</a>
                              </li>
                              <li>
                                <a href="#">Video Games</a>
                              </li>
                              <li>
                                <a href="#">Computers</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a href="#" data-submenu="computers">
                            Computers & Technology
                          </a>
                          <div id="computers" className="submenu">
                            <div
                              className="submenu-header"
                              data-submenu-close="computers"
                            >
                              <a href="#">Computers & Technology</a>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Istanbul</a>
                              </li>
                              <li>
                                <a href="#">Mardin</a>
                              </li>
                              <li>
                                <a href="#">Amed</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a href="#" data-submenu="cookbook">
                            Cookbooks, Food & Wine
                          </a>
                          <div id="cookbook" className="submenu">
                            <div
                              className="submenu-header"
                              data-submenu-close="cookbook"
                            >
                              <a href="#">Cookbooks, Food & Wine</a>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Istanbul</a>
                              </li>
                              <li>
                                <a href="#">Mardin</a>
                              </li>
                              <li>
                                <a href="#">Amed</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a href="#" data-submenu="education">
                            Education & Teaching
                          </a>
                          <div id="education" className="submenu">
                            <div
                              className="submenu-header"
                              data-submenu-close="education"
                            >
                              <a href="#">Education & Teaching</a>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Istanbul</a>
                              </li>
                              <li>
                                <a href="#">Mardin</a>
                              </li>
                              <li>
                                <a href="#">Amed</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a href="#" data-submenu="health">
                            Health, Fitness & Dieting
                          </a>
                          <div id="health" className="submenu">
                            <div
                              className="submenu-header"
                              data-submenu-close="health"
                            >
                              <a href="#">Health, Fitness & Dieting</a>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Istanbul</a>
                              </li>
                              <li>
                                <a href="#">Mardin</a>
                              </li>
                              <li>
                                <a href="#">Amed</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a href="#" data-submenu="history">
                            History
                          </a>
                          <div id="history" className="submenu">
                            <div
                              className="submenu-header"
                              data-submenu-close="history"
                            >
                              <a href="#">History</a>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Istanbul</a>
                              </li>
                              <li>
                                <a href="#">Mardin</a>
                              </li>
                              <li>
                                <a href="#">Amed</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a href="#" data-submenu="romance">
                            Romance
                          </a>
                          <div id="romance" className="submenu">
                            <div
                              className="submenu-header"
                              data-submenu-close="romance"
                            >
                              <a href="#">Romance</a>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Istanbul</a>
                              </li>
                              <li>
                                <a href="#">Mardin</a>
                              </li>
                              <li>
                                <a href="#">Amed</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a href="#" data-submenu="sports">
                            Sports & Outdoors
                          </a>
                          <div id="sports" className="submenu">
                            <div
                              className="submenu-header"
                              data-submenu-close="sports"
                            >
                              <a href="#">Sports & Outdoors</a>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Istanbul</a>
                              </li>
                              <li>
                                <a href="#">Mardin</a>
                              </li>
                              <li>
                                <a href="#">Amed</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-submenu">
                          <a href="#" data-submenu="travel">
                            Travel
                          </a>
                          <div id="travel" className="submenu">
                            <div
                              className="submenu-header"
                              data-submenu-close="travel"
                            >
                              <a href="#">Travel</a>
                            </div>
                            <ul>
                              <li>
                                <a href="#">Istanbul</a>
                              </li>
                              <li>
                                <a href="#">Mardin</a>
                              </li>
                              <li>
                                <a href="#">Amed</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="px-4 px-md-5 pt-5 pb-4 border-bottom">
                    <h2 className="font-size-3 mb-3">HELP & SETTINGS </h2>
                    <ul className="list-group list-group-flush list-group-borderless">
                      <li className="list-group-item px-0 py-2 border-0">
                        <a href="#" className="h-primary">
                          Your Account
                        </a>
                      </li>
                      <li className="list-group-item px-0 py-2 border-0">
                        <a href="#" className="h-primary">
                          Help
                        </a>
                      </li>
                      <li className="list-group-item px-0 py-2 border-0">
                        <a href="#" className="h-primary">
                          Sign In
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="px-4 px-md-5 py-5">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a className="h-primary pr-2 font-size-2" href="#">
                          <span className="fa fa-facebook-f btn-icon__inner"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="h-primary pr-2 font-size-2" href="#">
                          <span className="fab fa-google btn-icon__inner"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="h-primary pr-2 font-size-2" href="#">
                          <span className="fab fa-twitter btn-icon__inner"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="h-primary pr-2 font-size-2" href="#">
                          <span className="fab fa-github btn-icon__inner"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
     */}
    </div>
  );
};

export default Aside;
