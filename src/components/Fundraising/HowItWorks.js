import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import axios from "axios";
// Port //
import { api } from "../../utils/Contant";

import { useDispatch, useSelector } from "react-redux";

function HowItWorks({ history, match }) {
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

  return (
    <div>
      <Header />
      {/**
       * Fundraising Navbar
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

      <div class="conatiner-fluid">
        <img
          className="img-img-fluid"
          style={{ height: "100%", width: "100%" }}
          src="./assets/img/Fundraising_Images/howitworks_banner1.jpg"
          alt=""
        />
      </div>

      {/**
       * Start a Fundraiser Button
       */}
      <div className="container d-flex justify-content-center pt-5 my-5">
        <Link
          to="/fundraising/startafundraiser"
          className="btn btn-dark btn-lg p-3"
        >
          Start a Fundraiser
        </Link>
      </div>

      {/**
       * Sell Apparel. Accept Donations. No Risk or Cost
       */}
      <div class="container ">
        <div className="container-fluid d-flex justify-content-center headerText pt-3 font-weight-bold mt-3">
          <h1
            className="display-4 text-center font-weight-bold font-size-7"
            style={{ color: "#444444" }}
          >
            Sell Apparel. Accept Donations. No Risk or Cost
          </h1>
        </div>
        <div class="row">
          <div class="offset-2"></div>
          <div class="col-8 d-flex justify-content-center">
            <div class="col-4 d-flex justify-content-center">
              <div class="mb-3">
                <ul className="list-unstyled mt-5 text-right">
                  <li>
                    <p
                      className="font-size-3 font-weight-bold"
                      style={{ color: "#444444" }}
                    >
                      Raise Funds
                    </p>
                    <p className="font-size-2" style={{ color: "#444444" }}>
                      Increase fundraising across all key donor segments and
                      initiatives. Your potential is limitless!
                    </p>
                  </li>
                  <li>
                    <p
                      className="font-size-3 font-weight-bold"
                      style={{ color: "#444444" }}
                    >
                      Raise Spirits
                    </p>
                    <p className="font-size-2" style={{ color: "#444444" }}>
                      Custom apparel boosts spirits, inspires a sense of
                      community and brings supporters together.
                    </p>
                  </li>
                  <li>
                    <p
                      className="font-size-3 font-weight-bold"
                      style={{ color: "#444444" }}
                    >
                      Proven Success
                    </p>
                    <p className="font-size-2" style={{ color: "#444444" }}>
                      Tens of thousands of individuals use Custom Ink
                      Fundraising every day. Join other schools, small
                      businesses, charities and more!
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-4 d-flex justify-content-center">
              <img
                className="img-img-fluid  mb-5"
                style={{ height: "100%", width: "100%" }}
                src="./assets/img/Fundraising_Images/howitworks_banner2.jpg"
                alt=""
              />
            </div>
            <div class="col-4 d-flex justify-content-center">
              <div class="mb-3">
                <ul className="list-unstyled mt-5">
                  <li>
                    <p
                      className="font-size-3 font-weight-bold"
                      style={{ color: "#444444" }}
                    >
                      Raise Awareness
                    </p>
                    <p className="font-size-2" style={{ color: "#444444" }}>
                      Custom Ink fundraisers act as content for your social
                      channels. Supporters spread your message like walking,
                      talking billboards.
                    </p>
                  </li>
                  <li>
                    <p
                      className="font-size-3 font-weight-bold"
                      style={{ color: "#444444" }}
                    >
                      Easy, Fast and Fun
                    </p>
                    <p className="font-size-2" style={{ color: "#444444" }}>
                      It’s easy to put custom apparel up for sale on a
                      personalized page. Pick products, create your design then
                      share your story.
                    </p>
                  </li>
                  <li>
                    <p
                      className="font-size-3 font-weight-bold"
                      style={{ color: "#444444" }}
                    >
                      No Risk or Inventory
                    </p>
                    <p className="font-size-2" style={{ color: "#444444" }}>
                      Sell custom apparel without buying any products upfront or
                      worrying about handling inventory.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="offset-2"></div>
        </div>
      </div>

      {/**
       * 3 Easy Steps to Make Custom Ink
       */}
      <div className="mt-5" style={{ backgroundColor: "#ededed" }}>
        <div className="container-fluid">
          <div className="container-fluid d-flex justify-content-center headerText pt-5 font-weight-bold mt-5">
            <h1
              className="display-4 text-center font-weight-bold font-size-7 pt-4"
              style={{ color: "#444444" }}
            >
              3 Easy Steps to Make Fundraising Work For You
            </h1>
          </div>
          <div className="row py-5 mt-5">
            <div className="offset-2"></div>
            <div className="col-8 ">
              <ul className="list-unstyled d-flex justify-content-around text-center ">
                <li>
                  <img
                    className=""
                    style={{ height: "40%", width: "auto" }}
                    src="./assets/img/Fundraising_Images/3steps1.png"
                  />
                  <div className="d-flex justify-content-center pt-1">
                    <span
                      className="d-block text-white"
                      style={{
                        borderRadius: "50%",
                        lineHeight: "30px",
                        height: "30px",
                        width: "30px",
                        background: "#444444",
                      }}
                    >
                      1
                    </span>
                  </div>
                  <span
                    className="d-block font-weight-bold font-size-3 pt-2"
                    style={{ color: "#444444" }}
                  >
                    Create Your Design
                  </span>
                  <span
                    className="d-block font-weight-normal font-size-2 pt-2"
                    style={{ color: "#444444" }}
                  >
                    Hundreds of products
                  </span>
                  <span
                    className="d-block font-weight-normal font-size-2 pt-2"
                    style={{ color: "#444444" }}
                  >
                    Powerful design lab
                  </span>
                  <span
                    className="d-block font-weight-normal font-size-2 pt-2"
                    style={{ color: "#444444" }}
                  >
                    Expert help
                  </span>
                  <span
                    className="d-block font-weight-normal font-size-2 pt-2"
                    style={{ color: "#444444" }}
                  >
                    Set price to meet goal
                  </span>
                </li>
                <li>
                  <img
                    className="img-fluid "
                    style={{ height: "40%", width: "auto" }}
                    src="./assets/img/Fundraising_Images/3steps2.png"
                  />
                  <div className="d-flex justify-content-center pt-1">
                    <span
                      className="d-block text-white"
                      style={{
                        borderRadius: "50%",
                        lineHeight: "30px",
                        height: "30px",
                        width: "30px",
                        background: "#444444",
                      }}
                    >
                      2
                    </span>
                  </div>
                  <span
                    className="d-block font-weight-bold font-size-3 pt-2"
                    style={{ color: "#444444" }}
                  >
                    Promote Your Campaign
                  </span>
                  <span
                    className="d-block font-weight-normal font-size-2 pt-2"
                    style={{ color: "#444444" }}
                  >
                    Raise funds with each sale
                  </span>
                  <span
                    className="d-block font-weight-normal font-size-2 pt-2"
                    style={{ color: "#444444" }}
                  >
                    Supporters can add a donation
                  </span>
                  <span
                    className="d-block font-weight-normal font-size-2 pt-2"
                    style={{ color: "#444444" }}
                  >
                    Track sales, donations and visitors
                  </span>
                  <span
                    className="d-block font-weight-normal font-size-2 pt-2"
                    style={{ color: "#444444" }}
                  >
                    Connect with supporters
                  </span>
                </li>
                <li>
                  <img
                    className="img-fluid "
                    style={{ height: "40%", width: "auto" }}
                    src="./assets/img/Fundraising_Images/3steps3.png"
                  />
                  <div className="d-flex justify-content-center pt-1">
                    <span
                      className="d-block text-white"
                      style={{
                        borderRadius: "50%",
                        lineHeight: "30px",
                        height: "30px",
                        width: "30px",
                        background: "#444444",
                      }}
                    >
                      3
                    </span>
                  </div>
                  <span
                    className="d-block font-weight-bold font-size-3 pt-2"
                    style={{ color: "#444444" }}
                  >
                    Collect Your Funds
                  </span>
                  <span
                    className="d-block font-weight-normal font-size-2 pt-2"
                    style={{ color: "#444444" }}
                  >
                    PayPal, Check or credit options
                  </span>
                  <span
                    className="d-block font-weight-normal font-size-2 pt-2"
                    style={{ color: "#444444" }}
                  >
                    Fulfillment and logistics handled
                  </span>
                  <span
                    className="d-block font-weight-normal font-size-2 pt-2"
                    style={{ color: "#444444" }}
                  >
                    No upfront costs
                  </span>
                  <span
                    className="d-block font-weight-normal font-size-2 pt-2"
                    style={{ color: "#444444" }}
                  >
                    No wasted merchandise
                  </span>
                </li>
              </ul>

              <div class="row d-flex justify-content-center pb-5">
                <button className="btn btn-dark btn-lg p-3">
                  Frequently Asked Questions
                </button>
              </div>
            </div>

            <div class="offset-2"></div>
          </div>
        </div>
      </div>

      {/**
       * The Custom Ink Difference
       */}
      <div class="container-fluid mt-5 py-5 pb-5">
        <div class="row">
          <div class="offset-2"></div>
          <div class="col-8">
            <div class="row">
              <div class="col-6 mt-5">
                <img src="./assets/img/Fundraising_Images/humanity.jpg" />
              </div>
              <div class="col-6 ">
                <div class="bg-white p-4">
                  <h2
                    className="font-weight-bold "
                    style={{ color: "#444444" }}
                  >
                    The Custom Ink Difference
                  </h2>
                  <p
                    className="font-weight-normal mt-3"
                    style={{ color: "#444444" }}
                  >
                    Behind every fundraiser shirt is Custom Ink - the trusted
                    name in custom t-shirts with more than 14 years experience
                    and 50 million t-shirts produced. We provide great-looking,
                    no hassle custom printing, guaranteed. Read our story or
                    check out our live uncensored reviews to see what others are
                    saying!
                  </p>
                  <button className="btn btn-md btn-outline-dark font-weight-bold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="offset-2"></div>
        </div>
      </div>

      {/**
       * Sell Apparel. Accept Donations. No Risk or Cost
       */}
      <div
        class="container-fluid mt-5 py-3"
        style={{ backgroundColor: "#ededed" }}
      >
        <div className="container-fluid d-flex justify-content-center headerText pt-3 font-weight-bold mt-3">
          <h1
            className="display-4 text-center font-weight-bold font-size-7 pt-2"
            style={{ color: "#444444" }}
          >
            Easy Tools You'll Love
          </h1>
        </div>
        <div class="row">
          <div class="offset-2"></div>
          <div class="col-8 d-flex justify-content-center">
            <div class="col-5 d-flex justify-content-center">
              <div class="mb-3">
                <ul className="list-unstyled mt-5">
                  <li>
                    <div class="d-flex justify-content-center">
                      <img
                        className="img-fluid "
                        src="./assets/img/Fundraising_Images/easytools1.png"
                        style={{ height: "40%", width: "40%" }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-size-3 text-center font-weight-bold"
                        style={{ color: "#444444" }}
                        style={{ color: "#444444" }}
                      >
                        Built-in Social Sharing
                      </p>

                      <p
                        className="font-size-2 text-center"
                        style={{ color: "#444444" }}
                        style={{ color: "#444444" }}
                      >
                        Supporters can share campaigns with their extended
                        network on social media, increasing fundraising
                        potential.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex justify-content-center">
                      <img
                        className="img-fluid "
                        src="./assets/img/Fundraising_Images/easytools2.png"
                        style={{ height: "40%", width: "40%" }}
                      />
                    </div>

                    <p
                      className="font-size-3 text-center font-weight-bold"
                      style={{ color: "#444444" }}
                    >
                      Multiple Products
                    </p>
                    <p
                      className="font-size-2 text-center"
                      style={{ color: "#444444" }}
                    >
                      Include up to six products or colors per campaign page.
                    </p>
                  </li>
                  <li>
                    <div class="d-flex justify-content-center">
                      <img
                        className="img-fluid "
                        src="./assets/img/Fundraising_Images/easytools3.png"
                        style={{ height: "40%", width: "40%" }}
                      />
                    </div>

                    <p
                      className="font-size-3 text-center font-weight-bold"
                      style={{ color: "#444444" }}
                    >
                      Collection Page
                    </p>
                    <p
                      className="font-size-2 text-center"
                      style={{ color: "#444444" }}
                    >
                      A storefront view, so you can show more than 1 set of
                      products and colored choices at any time.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-2 d-flex justify-content-center"></div>
            <div class="col-5 d-flex justify-content-center">
              <div class="mb-3">
                <ul className="list-unstyled mt-5">
                  <li>
                    <div class="d-flex justify-content-center">
                      <img
                        className="img-fluid "
                        src="./assets/img/Fundraising_Images/easytools4.png"
                        style={{ height: "40%", width: "40%" }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-size-3 text-center font-weight-bold"
                        style={{ color: "#444444" }}
                        style={{ color: "#444444" }}
                      >
                        Additional Donation
                      </p>

                      <p
                        className="font-size-2 text-center"
                        style={{ color: "#444444" }}
                        style={{ color: "#444444" }}
                      >
                        Collect contributions above and beyond the purchase of
                        your product.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex justify-content-center">
                      <img
                        className="img-fluid "
                        src="./assets/img/Fundraising_Images/easytools5.png"
                        style={{ height: "40%", width: "40%" }}
                      />
                    </div>

                    <p
                      className="font-size-3 text-center font-weight-bold"
                      style={{ color: "#444444" }}
                    >
                      Dashboard Tracking
                    </p>
                    <p
                      className="font-size-2 text-center"
                      style={{ color: "#444444" }}
                    >
                      Track your progress and communicate directly with your
                      supporters.
                    </p>
                  </li>
                  <li>
                    <div class="d-flex justify-content-center">
                      <img
                        className="img-fluid "
                        src="./assets/img/Fundraising_Images/easytools6.png"
                        style={{ height: "40%", width: "40%" }}
                      />
                    </div>

                    <p
                      className="font-size-3 text-center font-weight-bold"
                      style={{ color: "#444444" }}
                    >
                      Hybrid Shipping
                    </p>
                    <p
                      className="font-size-2 text-center"
                      style={{ color: "#444444" }}
                    >
                      Your supporters can receive an individual shipment for a
                      low shipping fee, or pick up the order for free from you
                      (we'll send you the box).
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="offset-2"></div>
        </div>
      </div>

      {/**
       * Support a Campaign. Get Inspired.
       */}
      <div className="container col-9 headerText py-5 mt-5 ">
        <h1
          className="display-4 text-center font-weight-bold font-size-7 mt-2"
          style={{ color: "#444444" }}
        >
          Join Successful Organizers
          <p
            className="text-center font-weight-normal font-size-2 pt-3"
            style={{ color: "#444444" }}
          >
            Thousands have already created campaigns to support their cause.
            <span className="font-weight-normal font-size-2 pl-1">
              <Link to="#"> Discover More</Link>
            </span>
          </p>
        </h1>
      </div>

      <div className="row py-3 mb-5 mr-auto ">
        <div class="offset-md-2"></div>

        {/**
         * PRODUCTS SECTION
         */}
        <div className="col-8 p-4  text-center h-100  border-top border-dark ">
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
                        Go to Campaign
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
           * Start a Fundraiser Button
           */}
          <div className="container d-flex justify-content-center  py-4 ">
            <Link
              to="/:name/fundraising/startafundraiser"
              className="btn btn-dark btn-lg p-3"
            >
              Start a Fundraiser
            </Link>
          </div>
        </div>
        <div className="offset-md-2"></div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(HowItWorks);
