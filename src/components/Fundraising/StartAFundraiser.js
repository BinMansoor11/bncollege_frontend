import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import axios from "axios";
// Port //
import { api } from "../../utils/Contant";

import { useDispatch, useSelector } from "react-redux";

function StartAFundraiser({ history, match }) {
  const [products, setProducts] = useState(null);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.root);

  const { _campus } = state;

  useEffect(() => {
    axios
      .get(api + "5004/api/fund_raiser")
      .then((res) => {
        setProducts(res.data.prods);
        console.log("product ----->", res.data.prods);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  return (
    <div>
      <Header />
      <div className="container-fluid" style={{ backgroundColor: "#ededed" }}>
        {/**
         * Sell Custom T-shirts. Collect Donations. Easy.
         */}
        <div className="container-fluid col-9 headerText pt-5 py-5">
          <h1
            className="display-4 text-center font-weight-bold font-size-10"
            style={{ color: "#444444" }}
          >
            Start Your Own Fundraiser
          </h1>
          <p
            className="text-center font-weight-bold font-size-3 pt-3 mt-3 "
            style={{ lineHeight: "0.2rem", color: "#444444" }}
          >
            Jump right in by choosing a customizable product or design idea!
          </p>
        </div>
      </div>

      {/**
       * Start with a Blank Product
       */}

      <div class="container-fluid col-6 pt-5 my-5 py-3">
        <h1
          className="display-4 text-center font-weight-bold font-size-5"
          style={{ color: "#444444" }}
        >
          Start With a Blank Product
        </h1>
        <p
          className="text-center font-weight-normal font-size-2 pt-3"
          style={{ color: "#444444" }}
        >
          Start by choosing the first product for your fundraiser. Consider your
          audience, weather, and style. Add up to 5 additional color or style
          choices for your fundraiser.
        </p>
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
        <div class="offset-md-1"></div>
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
        <div className="col-8 p-4 my-3 text-center h-100  border-top border-dark ">
          <div class="row  my-5">
            {products?.map((item, key) => {
              return (
                <div className="col-4 px-5 container">
                  <button
                    className="border-0"
                    onClick={() =>
                      history.push("/" + _campus.name + "/imageeditor2")
                    }
                  >
                    <img className="image img-fluid" src={item.images} />
                    <div className="middle">
                      <div
                        class="text"
                        style={{ textColor: "white" }}
                        onClick={"/product/" + item._id}
                      >
                        VIEW PRODUCT
                      </div>
                    </div>
                  </button>
                  <div className="container mt-4">
                    <p className="font-size-2">{item.headline}</p>
                    <p className="font-size-1">{item.title}</p>
                    <p className="font-weight-bold font-size-1">
                      ${item.price}
                    </p>
                  </div>
                </div>
              );
            })}
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
        <div className="offset-md-1"></div>
      </div>

      {/**
       * Start with a Design Idea
       */}

      <div class="container-fluid col-6 my-5 py-5">
        <h1
          className="display-4 text-center font-weight-bold font-size-5"
          style={{ color: "#444444" }}
        >
          Start With a Design Idea
        </h1>
        <p
          className="text-center font-weight-normal font-size-2 pt-3"
          style={{ color: "#444444" }}
        >
          Need some inspiration? Choose from our collection of professionally
          designed templates - all customizable in our Design Lab.
        </p>
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
        <div class="offset-md-1"></div>
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
        <div className="col-8 p-4 my-3 text-center h-100  border-top border-dark ">
          <div class="row  my-5">
            {products?.map((item, key) => {
              return (
                <div className="col-4 px-5 container">
                  <Link to="#">
                    <img className="image img-fluid" src={item.images} />
                    <div className="middle">
                      <div
                        class="text"
                        style={{ textColor: "white" }}
                        onClick={"/product/" + item._id}
                      >
                        QUICK VIEW
                      </div>
                    </div>
                  </Link>
                  <div className="container mt-4">
                    <p className="font-size-2">{item.headline}</p>
                    <p className="font-size-1">{item.title}</p>
                    <p className="font-weight-bold font-size-1">
                      ${item.price}
                    </p>
                  </div>
                </div>
              );
            })}
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
        <div className="offset-md-1"></div>
      </div>
      {/**
       * Start a Fundraiser Button
       */}
      <div className="container d-flex justify-content-center pt-5 my-5">
        <Link
          onClick={() => history.push("/" + _campus.name + "/story")}
          className="btn btn-lg p-3"
          style={{
            backgroundColor: _campus.header_primary_color,
            color: _campus.header_font_primary_color,
          }}
        >
          Start a Fundraiser
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default withRouter(StartAFundraiser);
