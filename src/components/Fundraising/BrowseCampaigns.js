import React from "react";
import "../../product.css";
import "../Common/Search.css";
import { Link, withRouter } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Card, Accordion, Button } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

function BrowseCampaigns({ history, match }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.root);

  const { _campus } = state;

  /**
   * Filter By Categories
   */
  const FilterByCategories = [
    { filterby_categories_name: "Animal Rescue" },
    { filterby_categories_name: "Arts / Music / Film" },
    { filterby_categories_name: "Business" },
    { filterby_categories_name: "Community / Neighborhoods" },
    { filterby_categories_name: "Gift / Financial Aid" },
    { filterby_categories_name: "Hobbies" },
    { filterby_categories_name: "Medical Awareness / Research" },
    { filterby_categories_name: "Military" },
    { filterby_categories_name: "Personal Profit" },
    { filterby_categories_name: "Religion" },
    { filterby_categories_name: "Schools / Education" },
    { filterby_categories_name: "Social Activism" },
    { filterby_categories_name: "Sports League / Teams" },
    { filterby_categories_name: "Storefront" },
  ];
  /**
   * Filter By Products
   */
  const FilterByProducts = [
    { filterby_products_name: "Long Sleeve" },
    { filterby_products_name: "Sweatshirts" },
    { filterby_products_name: "Ladies & Juniors" },
    { filterby_products_name: "T-Shirts" },
    { filterby_products_name: "Others" },
    { filterby_products_name: "Short Sleeve T-shirts" },
    { filterby_products_name: "Long Sleeve T-shirts" },
    { filterby_products_name: "Hoodies & Sweatshirts" },
    { filterby_products_name: "Women's T-shirts" },
    { filterby_products_name: "Tank Tops" },
    { filterby_products_name: "Hats, Bags, & More" },
    { filterby_products_name: "Face Masks" },
  ];
  /**
   * Filter By Closed Campaigns
   */
  const FilterByClosedCampaigns = [
    {
      filterby_closedcampaigns_name:
        "Include closed campaigns in the search results",
    },
  ];
  /**
   * Filter By Closed Campaigns
   */
  const FilterByCollections = [
    {
      filterby_collections_name: "Include collections in the search results",
    },
  ];

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
       * BrowseCampaigns Navbar
       */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav mx-auto ">
            <li class="nav-item mr-5">
              <Link
                class="nav-link font-size-2"
                onClick={() => {
                  history.push(
                    "/" + _campus.name + "/fundraising/browsecampaigns"
                  );
                }}
              >
                Browse Campaigns
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link font-size-2"
                onClick={() => {
                  history.push("/" + _campus.name + "/fundraising/howitworks");
                }}
              >
                How It Works
              </Link>
            </li>
            <li class="nav-item ml-5">
              <Link
                class="nav-link font-size-2"
                onClick={() => {
                  history.push(
                    "/" + _campus.name + "/fundraising/startafundraiser"
                  );
                }}
              >
                Start a Fundraiser
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid" style={{ backgroundColor: "#ededed" }}>
        {/**
         * Sell Custom T-shirts. Collect Donations. Easy.
         */}
        <div className="container-fluid col-9 headerText pt-5 ">
          <h1
            className="display-4 text-center font-weight-bold font-size-10"
            style={{ color: "#444444" }}
          >
            Browse T-shirt Fundraising Campaigns
          </h1>
        </div>

        {/**
         *ACTUAL SEARCH BOX
         */}
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

        <div className="col-2 p-3 mr-5  text-center h-100">
          <div class="row d-flex justify-content-between  ">
            {/**
             * Filter By Categories
             */}
            <Accordion
              className="font-weight-normal font-size-3 border border-dark border-right-0 border-left-0 border-bottom-0"
              defaultActiveKey="0"
            >
              <Accordion.Toggle
                className="mr-3 link-black-100"
                as={Button}
                variant="link"
                eventKey="0"
              >
                <IoIosArrowForward size={20} /> Categories
              </Accordion.Toggle>
              <Link to="#">
                <span className="font-weight-normal font-size-2 ml-5 ">
                  Clear All
                </span>
              </Link>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="border border-right-0 border-left-0">
                  {FilterByCategories.map((v, i) => {
                    return (
                      <div className="mt-3">
                        <div class="input-text d-flex align-items-center ">
                          <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                          />
                          <span className="font-size-1 ml-1">
                            {" "}
                            {v.filterby_categories_name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>

            {/**
             * Filter By Products
             */}
            <Accordion
              className="font-weight-normal font-size-3 "
              defaultActiveKey="0"
            >
              <Accordion.Toggle
                className="mr-3 link-black-100"
                as={Button}
                variant="link"
                eventKey="0"
              >
                <IoIosArrowForward size={20} /> Products
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                <Card.Body className="border border-right-0 border-left-0">
                  {FilterByProducts.map((v, i) => {
                    return (
                      <div className="mt-3">
                        <div class="input-text d-flex align-items-center ">
                          <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                          />
                          <span className="font-size-1 ml-1">
                            {" "}
                            {v.filterby_products_name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>

            {/**
             * Filter By Closed Campaigns
             */}
            <Accordion
              className="font-weight-normal font-size-3 "
              defaultActiveKey="0"
            >
              <Accordion.Toggle
                className="mr-3 link-black-100"
                as={Button}
                variant="link"
                eventKey="0"
              >
                <IoIosArrowForward size={20} /> Closed Campaigns
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                <Card.Body className="border border-right-0 border-left-0">
                  {FilterByClosedCampaigns.map((v, i) => {
                    return (
                      <div className="mt-3">
                        <div class="input-text d-flex align-items-center ">
                          <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                          />
                          <span className="font-size-1 ml-1">
                            {v.filterby_closedcampaigns_name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>

            {/**
             * Filter By Collections
             */}
            <Accordion
              className="font-weight-normal font-size-3 "
              defaultActiveKey="0"
            >
              <Accordion.Toggle
                className="mr-3 link-black-100"
                as={Button}
                variant="link"
                eventKey="0"
              >
                <IoIosArrowForward size={20} /> Collections
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                <Card.Body className="border border-right-0 border-left-0">
                  {FilterByCollections.map((v, i) => {
                    return (
                      <div className="mt-3">
                        <div class="input-text d-flex align-items-center ">
                          <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                          />
                          <span className="font-size-1 ml-1">
                            {v.filterby_collections_name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </div>
        </div>

        {/**
         * PRODUCTS SECTION
         */}
        <div className="col-6 p-4 my-3 text-center h-100  border-top border-dark ">
          <div class="row  my-5">
            {Products.map((v, i) => {
              return (
                <div className="col-4 px-5 container">
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
       * Start a Fundraiser Button
       */}
      <div className="container d-flex justify-content-center mb-5 ">
        <Link
          to="/fundraising/startafundraiser"
          className="btn btn-dark btn-lg p-3"
        >
          Start a Fundraiser
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(BrowseCampaigns);
