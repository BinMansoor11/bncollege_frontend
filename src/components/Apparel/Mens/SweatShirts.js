import React, { useEffect, useState } from "react";
import "../../.././product.css";
import { Link, withRouter } from "react-router-dom";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteCartItems,
  getCartItems,
  getProduct,
} from "../../../redux/actions/Actions";
import axios from "axios";
// Port //
import { api } from "../../../utils/Contant";

import CartFeedback from "../../Cart/CartFeedback";

function SweatShirts({ history, match }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.root);
  const { _cart, _product, _campus } = state;
  const [cartFeedback, setCartFeedback] = useState(false);
  useEffect(() => {
    fetchSweatshirts();
  }, []);
  const fetchSweatshirts = async () => {
    let response = await axios.get(api + "5007/api/product");

    dispatch(getProduct(response.data));
  };
  /**
   * Shop For
   */
  const ShopFor = [
    { shop: "T-SHIRTS & TANKS", shop_route: "/mens/tshirtsandtanks" },
    { shop: "PERFORMANCE APPAREL", shop_route: "/mens/performanceapparel" },
    { shop: "HATS", shop_route: "/mens/hats" },
    { shop: "BOTTOMS", shop_route: "/mens/bottoms" },
    { shop: "OUTERWEAR", shop_route: "/mens/outerwear" },
    { shop: "ACCESSORIES", shop_route: "/mens/accessories" },
  ];
  const { shop, shop_route } = ShopFor;

  /**
   * BreadCrumbs
   */
  const BreadCrumbs = [
    { breadcrumb: "Home", breadcrumb_route: "/" },
    { breadcrumb: "Sweat Shirts", breadcrumb_route: "/mens/sweatshirts" },
  ];
  const { breadcrumb, breadcrumb_route } = BreadCrumbs;

  /**
   * Products
   */
  const Products = [
    {
      product_name: "Nike Dri Fit Cotton Long Sleeve T Shirt",
      product_price: "$39.98",
      product_img: "./assets/img/Mens_SweatShirts/SMALLIMAGE_1634073.jpg",
    },
    {
      product_name: "Champion Triblend T Shirt",
      product_price: "$39.98",
      product_img: "./assets/img/Mens_SweatShirts/SMALLIMAGE_1634073.jpg",
    },
    {
      product_name: "Champion Triblend T Shirt",
      product_price: "$39.98",
      product_img: "./assets/img/Mens_SweatShirts/SMALLIMAGE_1634073.jpg",
    },
  ];
  const { product_name, product_price, product_img } = Products;

  /**
   * Pagination
   */
  const Pagination = [
    { page: "1", page_route: "#" },
    { page: "2", page_route: "#" },
    { page: "3", page_route: "#" },
  ];
  const { page, page_route } = Pagination;

  /**
   * Need Help
   */
  const NeedHelp = [
    { needhelp: "Rental FAQs", needhelp_route: "/rentalfaqs" },
    { needhelp: "Payment & Delivery", needhelp_route: "/paymentanddelivery" },
    { needhelp: "Refunds", needhelp_route: "/returnsandrefunds" },
  ];
  const { needhelp, needhelp_route } = NeedHelp;

  return (
    <div>
      <Header />
      {/**
       *SWEATSHIRTS HEADER
       */}
      <div className="container col-9 headerText pt-2 mt-5 ">
        <h1 className="display-4 text-center font-size-10">
          {match.params.subcat.toUpperCase()}
        </h1>
        <hr />
        {/**
         *BREADCRUMB
         */}
        <div className="container-fluid ">
          <nav aria-label="breadcrumb ">
            <ol
              class="breadcrumb font-size-1"
              style={{ backgroundColor: "#fff" }}
            >
              {BreadCrumbs.map((v, i) => {
                return (
                  <li
                    class="breadcrumb-item active text-uppercase"
                    aria-current={v.breadcrumb_route}
                  >
                    <Link to={v.breadcrumb_route} className="link-black-100">
                      {v.breadcrumb}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>

      <div className="row mt-5 py-3 mb-5 mr-auto ">
        {/**
         * DISPLAYING ITEMS
         */}
        <div class="container-fluid">
          <div className="col-10 font-weight-normal text-right mt-3 ml-5 font-size-1">
            DISPLAYING 9 OF 40 ITEMS
            {/* <span class="border-right border-secondary mx-1"></span> */}
            {/* <Link to="/" className="link-black-100">
              VIEW ALLL
            </Link> */}
          </div>
        </div>
        <div class="offset-md-2"></div>
        {/**
         * SHOP FOR
         */}
        <div className="col-2 p-3 mr-5 my-3 text-center h-100  border-top border-dark ">
          <h4 className="font-weight-normal mt-2 text-justify font-size-3">
            SHOP FOR
          </h4>
          {ShopFor.map((v, i) => {
            return (
              <div className="mt-3">
                <Link
                  to={v.shop_route}
                  className="d-block text-justify link-black-100"
                >
                  <span className="font-size-1">{v.shop}</span>
                </Link>
              </div>
            );
          })}
        </div>
        {/**
         * PRODUCTS SECTION
         */}
        <div className="col-6 p-4 my-3 text-center h-100  border-top border-dark ">
          <div class="row  my-5">
            {_product !== undefined ? (
              _product.prods
                .filter((value) => value.sub_category === match.params.subcat)
                .map((v, i) => {
                  console.log(match);
                  return (
                    <div className="col-4 px-5 container">
                      <button
                        onClick={() =>
                          history.push("/" + _campus.name + "/product/" + v._id)
                        }
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                      >
                        <img className="image img-fluid" src={v.images[0]} />
                        <div className="middle">
                          <div className="text">View Product</div>
                        </div>
                      </button>

                      <div className="container mt-4">
                        <p className="font-size-1">{v.name}</p>
                        <p className="font-weight-bold font-size-1">
                          {" "}
                          ${v.price}
                        </p>
                      </div>
                      {cartFeedback && <CartFeedback></CartFeedback>}
                    </div>
                  );
                })
            ) : (
              <p>Please Wait</p>
            )}
            {/* {Products.map((v, i) => {
              return (
                <div className="col-4 px-5 container">
                  <button
                    onClick={() => {
                      setCartFeedback(true);

                      setTimeout(setCartFeedback(false), 2000);
                      dispatch(getCartItems(v));
                    }}
                    style={{ border: "none", backgroundColor: "transparent" }}
                  >
                    <img className="image img-fluid" src={v.product_img} />
                    <div className="middle">
                      <div className="text">Add to cart</div>
                    </div>
                  </button>

                  <div className="container mt-4">
                    <p className="font-size-1">{v.product_name}</p>
                    <p className="font-weight-bold font-size-1">
                      {v.product_price}
                    </p>
                  </div>
                </div>
              );
            })} */}
          </div>

          {/**
           * PAGINATION
           */}
          <div class="container-fluid d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <Link class="page-link" to="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </Link>
                </li>
                {Pagination.map((v, i) => {
                  return (
                    <li class="page-item">
                      <Link class="page-link" to={v.page_route}>
                        {v.page}
                      </Link>
                    </li>
                  );
                })}

                <li class="page-item">
                  <Link class="page-link" to="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="offset-md-2"></div>
      </div>

      {/**
       * EVERYTHING YOU NEED TO SUCCEED
       */}
      <div className="container d-flex justify-content-center">
        <h1 className="display-4 my-5 font-size-5">
          EVERYTHING YOU NEED TO SUCCEED
        </h1>
      </div>

      <div class="container col-9 pt-5">
        <hr />
      </div>

      {/**
       * NEED HELP
       */}
      <div class="container-fluid mb-3 d-flex justify-content-center">
        <div class="col-6  text-center">
          <p className="d-inline text-center font-weight-bold font-size-1">
            NEED HELP?
          </p>
          {NeedHelp.map((v, i) => {
            return (
              <Link
                to={v.needhelp_route}
                className="d-inline text-center font-weight-normal px-2 font-size-1 border-right border-secondary"
              >
                {v.needhelp}
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default withRouter(SweatShirts);
