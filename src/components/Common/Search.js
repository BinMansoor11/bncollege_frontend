import React from "react";
import "../../product.css";
import "./Search.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Header from "./Header";
import Footer from "./Footer";

export default function Search() {
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
    {
      product_name: "Champion Triblend T Shirt",
      product_price: "$39.98",
      product_img: "./assets/img/Mens_SweatShirts/SMALLIMAGE_1634073.jpg",
    },
  ];

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
        <h1 className="display-4 text-center font-size-10 py-3">
          12 RESULTS FOR
        </h1>
      </div>
      {/**
       *ACTUAL SEARCH BOX
       */}
      {/* <div className="main py-1">
        <div class="form-group has-search">
          <span class="mt-1 form-control-feedback">
            <BsSearch />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your search details"
          />
        </div>
      </div> */}
      <div class="container col-6 mt-5 py-5">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-success" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="row mt-5 py-3 mb-5 mr-auto ">
        {/**
         * DISPLAYING ITEMS
         */}
        <div className="container-fluid">
          <div className="row ">
            <div class="offset-2"></div>
            <div class="col-4  text-left">
              <div class="input-text d-flex align-items-center ">
                <span className="font-size-1">Include:</span>
                <input
                  className="ml-4"
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <span className="font-size-1 ml-1"> TextBook</span>
                <input
                  className="ml-4"
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <span className="font-size-1 ml-1">Merchandise</span>
              </div>
            </div>
            <div class="col-4 text-right font-size-1 ">
              DISPLAYING 12 OF 40 ITEMS
            </div>
            <div class="offset-2"></div>
          </div>
        </div>
        <div class="offset-md-2"></div>

        {/**
         * PRODUCTS SECTION
         */}
        <div className="col-8 p-4 my-3 text-center h-100  border-top border-dark ">
          <div class="row  my-5">
            {Products.map((v, i) => {
              return (
                <div className="col-3 px-5 container">
                  <Link to="#">
                    <img className="image img-fluid" src={v.product_img} />
                    <div className="middle">
                      <div className="text">QUICKVIEW</div>
                    </div>
                  </Link>

                  <div className="container mt-4">
                    <p className="font-size-1">{v.product_name}</p>
                    <p className="font-weight-bold font-size-1">
                      {v.product_price}
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
