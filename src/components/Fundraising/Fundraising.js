import React, { useEffect, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaRegFlag } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoShirtOutline } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { Link, withRouter } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import axios from "axios";
// Port //
import { api } from "../../utils/Contant";

import { useDispatch, useSelector } from "react-redux";

function Fundraising({ history, match }) {
  const [products, setProducts] = useState(null);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.root);

  const { _campus } = state;

  useEffect(() => {
    axios
      .get(api + "5004/api/fund_raiser")
      .then((res) => {
        setProducts(res.data.prods);
        // console.log("product ----->", res.data.prods);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Pagination = [
    { page: "1", page_route: "#" },
    { page: "2", page_route: "#" },
    { page: "3", page_route: "#" },
  ];
  const { page, page_route } = Pagination;

  /**
   * woocommerce-tabs
   */

  /**
   * Product Title Stars
   */
  const ProductTitleStars = [
    { product_stars: <RiStarSFill /> },
    { product_stars: <RiStarSFill /> },
    { product_stars: <RiStarSFill /> },
    { product_stars: <RiStarSFill /> },
    { product_stars: <RiStarSFill /> },
  ];

  const ProgressStars = [
    { progress_stars: 5, progress_rating: 205 },
    { progress_stars: 4, progress_rating: 55 },
    { progress_stars: 3, progress_rating: 33 },
    { progress_stars: 2, progress_rating: 2 },
    { progress_stars: 1, progress_rating: 5 },
  ];
  const { progress_stars, progress_rating } = ProgressStars;

  const CustomerReviewsRatings = {
    customer_reviews: 3714,
    customer_reviews_rating: 4.6,
  };

  const CustomerReviewsStars = [
    { customer_stars: <RiStarSFill /> },
    { customer_stars: <RiStarSFill /> },
    { customer_stars: <RiStarSFill /> },
    { customer_stars: <RiStarSFill /> },
    { customer_stars: <RiStarSFill /> },
  ];
  const { customer_stars } = CustomerReviewsStars;

  /**
   * Write a Review Stars
   */
  const WriteReviewStars = [
    { write_stars: <RiStarSFill /> },
    { write_stars: <RiStarSFill /> },
    { write_stars: <RiStarSFill /> },
    { write_stars: <RiStarSFill /> },
    { write_stars: <RiStarSFill /> },
  ];
  const { write_stars } = WriteReviewStars;

  /**
   * Reviews
   */
  const Reviews = [
    {
      reviews_head: " Amazing Story! You will LOVE it",
      reviews_body:
        "Such an incredibly complex story! I had to buy it because there was a waiting list of 30+ at the local library for this book. Thrilled that I made the purchase",
      reviews_date: "Staci, February 22, 2020",
      review_num: 90,
      reviews_like: <BiLike />,
      reviews_dislike: <BiDislike />,
      reviews_flag: <FaRegFlag />,
      reviews_stars: <RiStarSFill />,
    },
  ];

  return (
    <div>
      <Header />
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

      <div className="container-fluid col-9 headerText pt-5 mt-5">
        <h1
          className="display-4 text-center font-weight-bold font-size-10"
          style={{ color: "#444444" }}
        >
          Sell Custom T-shirts. Collect Donations. Easy.
          <p
            className="text-center font-weight-bold font-size-4 pt-3"
            style={{ lineHeight: "0.2rem", color: "#444444" }}
          >
            Custom Ink Fundraising makes raising funds and awareness risk-free.
          </p>
        </h1>
      </div>

      <div className="container">
        <div class="row py-5 mt-5">
          <div class="offset-2"></div>
          <div class="col-8 mt-5">
            <div class="row">
              <div className="col-6 pr-5">
                <img
                  className="img-fluid "
                  style={{ height: "300px", width: "auto" }}
                  src="./assets/img/Fundraising_Images/zoofundraiser.jpg"
                />
              </div>
              <div class="col-6 pl-5">
                <h1
                  className="display-4 text-justify font-weight-bold font-size-7"
                  style={{ color: "#444444" }}
                >
                  Engage your community with
                </h1>
                <h1
                  className="display-4 text-justify font-weight-bold font-size-7"
                  style={{ lineHeight: "1rem", color: "#444444" }}
                >
                  custom t-shirts and more
                </h1>
                <p className="text-justify font-size-3 pt-3">
                  Sell custom t-shirts and take donations with no inventory,
                  hassles or risk. Just design your shirt, share why you are
                  raising and then share your campaign. We fill the orders and
                  send along the funds you raise! Custom Ink Fundraising is a
                  great tool for any group, cause or community.
                </p>
              </div>
            </div>
          </div>
          <div class="offset-2"></div>
        </div>
      </div>

      {/**
       * Start a Fundraiser
       */}
      <div className="container">
        <div className="row py-5 mt-5">
          <div className="offset-2"></div>
          <div className="col-8">
            <ul className="list-unstyled d-flex justify-content-around text-center ">
              <li>
                <img
                  className=""
                  style={{ height: "50%", width: "auto" }}
                  src="./assets/img/Fundraising_Images/Design_Your_Shirt.png"
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
                  Design your shirt
                </span>
              </li>
              <li>
                <img
                  className="img-fluid "
                  style={{ height: "50%", width: "auto" }}
                  src="./assets/img/Fundraising_Images/Tell_Your_Story.png"
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
                  Tell your story
                </span>
              </li>
              <li>
                <img
                  className="img-fluid "
                  style={{ height: "50%", width: "auto" }}
                  src="./assets/img/Fundraising_Images/Track_Your_Progress.png"
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
                  Track your progress
                </span>
              </li>
              <li>
                <img
                  className="img-fluid "
                  style={{ height: "50%", width: "auto" }}
                  src="./assets/img/Fundraising_Images/Easy_Fulfillment.png"
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
                    4
                  </span>
                </div>
                <span
                  className="d-block font-weight-bold font-size-3 pt-2"
                  style={{ color: "#444444" }}
                >
                  Easy fulfillment
                </span>
              </li>
            </ul>

            <div class="row d-flex justify-content-center">
              <Link
                to="/fundraising/startafundraiser"
                className="btn btn-lg p-3"
                style={{
                  backgroundColor: _campus.header_primary_color,
                  color: _campus.header_font_primary_color,
                }}
              >
                Start a Fundraiser
              </Link>
            </div>
          </div>

          <div class="offset-2"></div>
        </div>
      </div>

      {/**
       * Woocommerce Tabs and Content
       */}
      <div
        className="woocommerce-tabs wc-tabs-wrapper mb-10 my-5"
        style={{ backgroundColor: "#ededed" }}
      >
        <ul
          className="tabs wc-tabs nav border-bottom justify-content-md-center flex-nowrap flex-md-wrap overflow-auto overflow-md-visble"
          id="pills-tab"
          role="tablist"
        >
          <div className="d-flex align-items-center">
            <span>
              <img
                style={{ height: "30px", width: "30px" }}
                src="./assets/img/Fundraising_Images/bfd4.jpg"
                alt="..."
                class="rounded-circle "
              />
            </span>
          </div>
          <li className="flex-shrink-0 flex-md-shrink-1 nav-item">
            <a
              className="py-4 nav-link font-weight-medium active"
              id="pills-one-example1-tab"
              data-toggle="pill"
              href="#pills-one-example1"
              role="tab"
              aria-controls="pills-one-example1"
              aria-selected="true"
            >
              <span>Simple and easy</span>
              <span className="d-block text-muted font-size-2">
                Lane Elementary
              </span>
            </a>
          </li>

          <div className="d-flex align-items-center">
            <span>
              <img
                style={{ height: "30px", width: "30px" }}
                src="./assets/img/Fundraising_Images/bfd3.jpg"
                alt="..."
                class="rounded-circle "
              />
            </span>
          </div>
          <li className="flex-shrink-0 flex-md-shrink-1 nav-item">
            <a
              className="py-4 nav-link font-weight-medium"
              id="pills-two-example1-tab"
              data-toggle="pill"
              href="#pills-two-example1"
              role="tab"
              aria-controls="pills-two-example1"
              aria-selected="false"
            >
              <span>Additional donations</span>
              <span className="d-block text-muted font-size-2">Team Nat</span>
            </a>
          </li>

          <div className="d-flex align-items-center">
            <span>
              <img
                style={{ height: "30px", width: "30px" }}
                src="./assets/img/Fundraising_Images/bfd2.jpg"
                alt="..."
                class="rounded-circle "
              />
            </span>
          </div>
          <li className="flex-shrink-0 flex-md-shrink-1 nav-item">
            <a
              className="py-4 nav-link font-weight-medium"
              id="pills-three-example1-tab"
              data-toggle="pill"
              href="#pills-three-example1"
              role="tab"
              aria-controls="pills-three-example1"
              aria-selected="false"
            >
              <span>Great customer</span>
              <span className="d-block text-muted font-size-2">
                Support Bill Sager
              </span>
            </a>
          </li>
          <div className="d-flex align-items-center">
            <span>
              <img
                style={{ height: "30px", width: "30px" }}
                src="./assets/img/Fundraising_Images/bfd1.jpg"
                alt="..."
                class="rounded-circle "
              />
            </span>
          </div>
          <li className="flex-shrink-0 flex-md-shrink-1 nav-item">
            <a
              className="py-4 nav-link font-weight-medium"
              id="pills-four-example1-tab"
              data-toggle="pill"
              href="#pills-four-example1"
              role="tab"
              aria-controls="pills-four-example1"
              aria-selected="false"
            >
              <span>No Upfront Cost</span>
              <span className="d-block text-muted font-size-2">
                Big Fluffy Dog Rescue
              </span>
            </a>
          </li>
        </ul>

        <div className="tab-content container" id="pills-tabContent">
          {/**
           * PILL ONE EXAMPLE 1
           */}
          <div
            className="woocommerce-Tabs-panel panel col-xl-8 offset-xl-2 entry-content wc-tab tab-pane fade pt-9 pb-5 show active"
            id="pills-one-example1"
            role="tabpanel"
            aria-labelledby="pills-one-example1-tab"
          >
            <div className="container ">
              <div className="d-flex justify-content-center pb-3">
                <img
                  style={{
                    height: "70px",
                    width: "auto",
                    border: " 5px solid white",
                  }}
                  src="./assets/img/Fundraising_Images/bfd4.jpg"
                  alt="..."
                  class="rounded-circle"
                />
              </div>
              <div class="row">
                <div class="col-8 bg-white rounded-left ">
                  <p
                    className="font-weight-normal mt-3"
                    style={{ color: "#444444" }}
                  >
                    Our T-shirt campaign was great! All orders were placed
                    online by each individual so we did not have to order
                    inventory in advance. The t-shirts were delivered to our
                    school, ready for distribution to our students. I can't wait
                    to do it again!
                  </p>
                  <p
                    className="font-weight-normal mt-3"
                    style={{ color: "#444444" }}
                  >
                    <b>Sharon Sussin,</b> President
                    <br /> <a href="#">Lane Elementary</a>
                  </p>
                </div>
                <div
                  class="col-4 rounded-right"
                  style={{ backgroundColor: "#d5d5d5" }}
                >
                  <div class="d-flex justify-content-center ">
                    <ul className="list-unstyled d-block mt-3">
                      <li className="py-2 ">
                        <p className="">
                          <span className="font-size-3 pr-3">
                            <AiOutlineClockCircle />
                          </span>
                          <b>54 </b> days
                        </p>
                      </li>

                      <li className="py-2  border-light border-top ">
                        <p className="mt-2">
                          <span className="font-size-3 pr-3">
                            <IoShirtOutline />
                          </span>
                          <b>126</b> shirts sold
                        </p>
                      </li>

                      <li className="py-2  border-light border-top">
                        <p className=" mt-2">
                          <span className="font-size-3 pr-3">
                            <GiMoneyStack />
                          </span>
                          <b>$1,796</b> funds raised
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/**
           * PILL ONE EXAMPLE 2
           */}
          <div
            className="woocommerce-Tabs-panel panel col-xl-8 offset-xl-2 entry-content wc-tab tab-pane fade pt-9 pb-5"
            id="pills-two-example1"
            role="tabpanel"
            aria-labelledby="pills-two-example1-tab"
          >
            <div className="container ">
              <div className="d-flex justify-content-center pb-3">
                <img
                  style={{
                    height: "70px",
                    width: "auto",
                    border: " 5px solid white",
                  }}
                  src="./assets/img/Fundraising_Images/bfd3.jpg"
                  alt="..."
                  class="rounded-circle"
                />
              </div>
              <div class="row">
                <div class="col-8 bg-white rounded-left">
                  <p
                    className="font-weight-normal mt-3"
                    style={{ color: "#444444" }}
                  >
                    The whole experience of running a Custom Ink fundraiser
                    exceeded my expectations. This is such a valuable platform,
                    because it takes a lot of stress away from fundraising.
                    Through my Custom Ink fundraiser, we raised 4 times what we
                    thought we would raise!
                  </p>
                  <p
                    className="font-weight-normal mt-3"
                    style={{ color: "#444444" }}
                  >
                    <b>Celeste Homan,</b> Organizer
                    <br /> <a href="#">Team Nat</a>
                  </p>
                </div>
                <div
                  class="col-4 rounded-right"
                  style={{ backgroundColor: "#d5d5d5" }}
                >
                  <div class="d-flex justify-content-center ">
                    <ul className="list-unstyled d-block mt-3">
                      <li className="py-2 ">
                        <p className="">
                          <span className="font-size-3 pr-3">
                            <AiOutlineClockCircle />
                          </span>
                          <b>26</b> days
                        </p>
                      </li>

                      <li className="py-2  border-light border-top ">
                        <p className="mt-2">
                          <span className="font-size-3 pr-3">
                            <IoShirtOutline />
                          </span>
                          <b>255</b> shirts sold
                        </p>
                      </li>

                      <li className="py-2  border-light border-top">
                        <p className=" mt-2">
                          <span className="font-size-3 pr-3">
                            <GiMoneyStack />
                          </span>
                          <b>$4,257</b> funds raised
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="woocommerce-Tabs-panel panel col-xl-8 offset-xl-2 entry-content wc-tab tab-pane fade pt-9 pb-5"
            id="pills-three-example1"
            role="tabpanel"
            aria-labelledby="pills-three-example1-tab"
          >
            <div className="container ">
              <div className="d-flex justify-content-center pb-3">
                <img
                  style={{
                    height: "70px",
                    width: "auto",
                    border: " 5px solid white",
                  }}
                  src="./assets/img/Fundraising_Images/bfd2.jpg"
                  alt="..."
                  class="rounded-circle"
                />
              </div>
              <div class="row">
                <div class="col-8 bg-white rounded-left">
                  <p
                    className="font-weight-normal mt-3"
                    style={{ color: "#444444" }}
                  >
                    We set a small goal of, 'OK, let's try to sell 100 shirts.'
                    Then, we realized, shortly after it went live, that it was
                    going to turn into something way bigger. Ultimately we
                    raised more than $9,000 and sold over 600 shirts to family,
                    friends, and even complete strangers - including a few
                    stationed in Afghanistan.
                  </p>
                  <p
                    className="font-weight-normal mt-3"
                    style={{ color: "#444444" }}
                  >
                    <b>Tony Re,</b> Organizer
                    <br /> <a href="#">Support Bill Sager</a>
                  </p>
                </div>
                <div
                  class="col-4 rounded-right"
                  style={{ backgroundColor: "#d5d5d5" }}
                >
                  <div class="d-flex justify-content-center ">
                    <ul className="list-unstyled d-block mt-3">
                      <li className="py-2 ">
                        <p className="">
                          <span className="font-size-3 pr-3">
                            <AiOutlineClockCircle />
                          </span>
                          <b>13</b> days
                        </p>
                      </li>

                      <li className="py-2  border-light border-top ">
                        <p className="mt-2">
                          <span className="font-size-3 pr-3">
                            <IoShirtOutline />
                          </span>
                          <b>603</b> shirts sold
                        </p>
                      </li>

                      <li className="py-2  border-light border-top">
                        <p className=" mt-2">
                          <span className="font-size-3 pr-3">
                            <GiMoneyStack />
                          </span>
                          <b>$9,152</b> funds raised
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="woocommerce-Tabs-panel panel col-xl-8 offset-xl-2 entry-content wc-tab tab-pane fade pt-9 pb-5"
            id="pills-four-example1"
            role="tabpanel"
            aria-labelledby="pills-four-example1-tab"
          >
            <div className="container ">
              <div className="d-flex justify-content-center pb-3">
                <img
                  style={{
                    height: "70px",
                    width: "auto",
                    border: " 5px solid white",
                  }}
                  src="./assets/img/Fundraising_Images/bfd1.jpg"
                  alt="..."
                  class="rounded-circle"
                />
              </div>
              <div class="row">
                <div class="col-8 bg-white rounded-left">
                  <p
                    className="font-weight-normal mt-3"
                    style={{ color: "#444444" }}
                  >
                    Having to preorder t-shirts without knowing what people need
                    and fronting that cost and taking orders and shipping them
                    all out individually is impossible for us, but possible
                    through the Custom Ink Fundraising tool.
                  </p>
                  <p
                    className="font-weight-normal mt-3"
                    style={{ color: "#444444" }}
                  >
                    <b>Jillian Kaplan,</b> Fundraising Chair
                    <br /> <a href="#">Big Fluffy Dog Rescue</a>
                  </p>
                </div>
                <div
                  class="col-4 rounded-right"
                  style={{ backgroundColor: "#d5d5d5" }}
                >
                  <div class="d-flex justify-content-center ">
                    <ul className="list-unstyled d-block mt-3">
                      <li className="py-2 ">
                        <p className="">
                          <span className="font-size-3 pr-3">
                            <AiOutlineClockCircle />
                          </span>
                          <b>24</b> days
                        </p>
                      </li>

                      <li className="py-2  border-light border-top ">
                        <p className="mt-2">
                          <span className="font-size-3 pr-3">
                            <IoShirtOutline />
                          </span>
                          <b>3777</b> shirts sold
                        </p>
                      </li>

                      <li className="py-2  border-light border-top">
                        <p className=" mt-2">
                          <span className="font-size-3 pr-3">
                            <GiMoneyStack />
                          </span>
                          <b>$117,551</b> funds raised
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container col-9 headerText py-5 mt-5">
        <h1
          className="display-4 text-center font-weight-bold font-size-10 "
          style={{ color: "#444444" }}
        >
          Support a Campaign. Get Inspired.
          <p
            className="text-center font-weight-bold font-size-3 pt-3"
            style={{ color: "#444444" }}
          >
            Some of our top Custom Ink fundraisers show you what's possible
          </p>
        </h1>
      </div>
      <div className="row py-3 mb-5 mr-auto ">
        <div class="offset-md-2"></div>

        <div className="col-8 p-4 my-3 text-center h-100  border-top border-dark ">
          <div class="row  my-5">
            {products?.map((item, key) => {
              return (
                <div className="col-4 px-5 container ">
                  <button
                    className="border-0"
                    onClick={() =>
                      history.push("/" + _campus.name + "/imageeditor2")
                    }
                  >
                    <img className="image img-fluid" src={item.images} />
                    <div className="middle ">
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
                    <p className="font-weight-bold font-size-1">{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
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
      <div
        className="container-fluid mt-5 pb-5"
        style={{ backgroundColor: "#ededed" }}
      >
        <div class="row">
          <div class="offset-2"></div>
          <div class="col-8">
            <div class="row">
              <div class="col-6 mt-5">
                <img src="./assets/img/Fundraising_Images/humanity.jpg" />
              </div>
              <div class="col-6 mt-5">
                <div class="bg-white p-4">
                  <h4
                    className="font-weight-bold "
                    style={{ color: "#444444" }}
                  >
                    Smarter Fundraising for Nonprofits
                  </h4>
                  <p
                    className="font-weight-normal mt-3"
                    style={{ color: "#444444" }}
                  >
                    Raise money and awareness for your cause. Sell custom
                    apparel. Accept donations for free.
                  </p>
                  <button
                    className="btn btn-sm"
                    style={{
                      backgroundColor: _campus.header_primary_color,
                      color: _campus.header_font_primary_color,
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="offset-2"></div>
        </div>
        <div class="container d-flex justify-content-center py-3 mt-5">
          <div class="row">
            <img
              style={{ filter: "grayscale(100%)" }}
              src="./assets/img/Fundraising_Images/sayitwithink.jpg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(Fundraising);
