import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { IoAddCircle } from "react-icons/io5";
import { Card, Accordion, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ShippingAndPayment = ({ history, match }) => {
  const [select, setSelect] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.root);
  const { _user, _campus } = state;

  /**
   * Need Help
   */
  const NeedHelp = [
    { needhelp: "Rental FAQs", needhelp_route: "/rentalfaqs" },
    { needhelp: "Payment & Delivery", needhelp_route: "/paymentanddelivery" },
    { needhelp: "Refunds", needhelp_route: "/returnsandrefunds" },
  ];
  const { needhelp, needhelp_route } = NeedHelp;

  const onChangeHandler = (e) => {
    setSelect(e.target.value);
  };

  const [state1, setState] = useState({
    form: [
      {
        term: [{ item: "SPRING 2021" }],
        department: [
          { item: "Select Department" },
          { item: "ACC" },
          { item: "ART" },
          { item: "IT" },
        ],
        course: [
          { item: "Select Course" },
          { item: "201" },
          { item: "203" },
          { item: "205" },
        ],
        section: [
          { item: "Select Section" },
          { item: "A" },
          { item: "B" },
          { item: "C" },
        ],
      },
      {
        term: [{ item: "SPRING 2020" }],
        department: [
          { item: "Select Department" },
          { item: "ACC" },
          { item: "ART" },
          { item: "IT" },
        ],
        course: [
          { item: "Select Course" },
          { item: "201" },
          { item: "203" },
          { item: "205" },
        ],
        section: [
          { item: "Select Section" },
          { item: "A" },
          { item: "B" },
          { item: "C" },
        ],
      },
      {
        term: [{ item: "SPRING 2020" }],
        department: [
          { item: "Select Department" },
          { item: "ACC" },
          { item: "ART" },
          { item: "IT" },
        ],
        course: [
          { item: "Select Course" },
          { item: "201" },
          { item: "203" },
          { item: "205" },
        ],
        section: [
          { item: "Select Section" },
          { item: "A" },
          { item: "B" },
          { item: "C" },
        ],
      },
      {
        term: [{ item: "SPRING 2020" }],
        department: [
          { item: "Select Department" },
          { item: "ACC" },
          { item: "ART" },
          { item: "IT" },
        ],
        course: [
          { item: "Select Course" },
          { item: "201" },
          { item: "203" },
          { item: "205" },
        ],
        section: [
          { item: "Select Section" },
          { item: "A" },
          { item: "B" },
          { item: "C" },
        ],
      },
    ],
  });

  const { form } = state;

  const addMoreCourses = () => {
    setState((prevState) => {
      return {
        ...prevState,
        form: [
          ...state.form,
          {
            term: [{ item: "SPRING 2020" }],
            department: [
              { item: "Select Department" },
              { item: "ACC" },
              { item: "ART" },
              { item: "IT" },
            ],
            course: [
              { item: "Select Course" },
              { item: "201" },
              { item: "203" },
              { item: "205" },
            ],
            section: [
              { item: "Select Section" },
              { item: "A" },
              { item: "B" },
              { item: "C" },
            ],
          },
        ],
      };
    });
  };

  const deleteCourse = (index) => {
    const filteredCourses = form.filter((v, i) => i !== index);

    console.log("filteredCourses", filteredCourses);

    setState((prevState) => {
      return {
        ...prevState,
        form: filteredCourses,
      };
    });
  };

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <Header />

      <div className="container col-9 headerText pt-2 mt-5">
        <h1 className="display-4 text-center text-uppercase font-size-10">
          Shipping & Payment
        </h1>
        <hr />
      </div>
      <div className="row mt-5 py-3 mb-5 mr-auto">
        <div class="offset-md-2"></div>
        <div
          className="col-2 p-3 mr-5 my-3 text-center h-100 "
          style={{ backgroundColor: "white", borderTop: "2px solid black" }}
        >
          <h4 className="font-weight-normal mt-2 text-justify font-size-3">
            MY ACCOUNT
          </h4>
          <div className="mt-3">
            <Link
              onClick={() => history.push("/" + _campus.name + "/myaccount")}
              className="d-block text-justify link-black-100  link-black-100 font-size-1 "
            >
              OVERVIEW
            </Link>
            <Link
              onClick={() =>
                history.push("/" + _campus.name + "/myaccount/yourrentals")
              }
              className="d-block text-justify pt-2 link-black-100  link-black-100 font-size-1 "
            >
              YOUR RENTALS
            </Link>
            <Link
              onClick={() =>
                history.push(
                  "/" + _campus.name + "/myaccount/orderhistoryandstatus"
                )
              }
              className="d-block text-justify pt-2 link-black-100  link-black-100 font-size-1 "
            >
              ORDER HISTORY & STATUS
            </Link>
            <Link
              onClick={() =>
                history.push(
                  "/" + _campus.name + "/myaccount/shippingandpayment"
                )
              }
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              SHIPPING & PAYMENT
            </Link>
            <Link
              onClick={() =>
                history.push("/" + _campus.name + "/myaccount/emailaddress")
              }
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              EMAIL ADDRESS
            </Link>
            <Link
              onClick={() =>
                history.push(
                  "/" + _campus.name + "/myaccount/accountinformation"
                )
              }
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              ACCOUNT INFORMATION
            </Link>

            <h4 className="font-weight-normal mt-5 text-justify font-size-3">
              HELP{" "}
            </h4>
            <Link
              onClick={() =>
                history.push("/" + _campus.name + "/textbooks/textbookrentals")
              }
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              TEXTBOOK RENTAL INFO
            </Link>
            <Link
              onClick={() =>
                history.push(
                  "/" + _campus.name + "/textbooks/digitalcontentfaqs"
                )
              }
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              DIGITAL CONTENT FAQs
            </Link>
            <Link
              onClick={() =>
                history.push("/" + _campus.name + "/returnandexchange")
              }
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              RETURN & EXCHANGES
            </Link>
            <Link
              onClick={() => history.push("/" + _campus.name + "/contactus")}
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              CONTACT US
            </Link>
          </div>
        </div>

        <div class="col-6 ">
          <div className="py-2 pb-5">
            <div className="d-flex justify-content-between ">
              <p>SAVED ADDRESSES(0)</p>
            </div>
            <div
              className="container p-4 my-3  text-center "
              style={{ backgroundColor: "white", borderTop: "2px solid black" }}
            >
              <p className="font-size-2 text-left ">
                You have no rental books.
              </p>
            </div>

            <Accordion
              className="font-weight-normal font-size-3 px-2 "
              defaultActiveKey="0"
            >
              <div className=" d-flex justify-content-center">
                <Accordion.Toggle
                  className="link-black-100 "
                  as={Button}
                  variant="link"
                  eventKey="0"
                >
                  <p className="">
                    <span className="font-size-5">
                      <IoAddCircle />
                    </span>
                    <span className="font-size-2"> Add a new Address</span>
                  </p>
                </Accordion.Toggle>
              </div>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div
                    className="col-12 p-4 my-3 text-center h-100"
                    style={{
                      backgroundColor: "white",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className="container">
                      <div className="row ">
                        <div className="col-6">
                          <label
                            className="text-left font-size-2"
                            label
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            COUNTRY
                          </label>
                          <select
                            id="inputState"
                            onChange={onChangeHandler}
                            className="form-control"
                          >
                            <option selected>please choose from list</option>
                            <option>pAKISTAN</option>
                            <option>AFGHANISTAN</option>
                            <option>AMERICA</option>
                            <option>AUSTRALIA</option>
                            <option>CANADA</option>
                            <option>IRAN</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row pt-5">
                        <div className="col-4">
                          <label
                            className="font-size-2"
                            style={{ float: "left" }}
                            for="coupon_code"
                          >
                            ZIP CODE
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            autocomplete="off"
                          />
                        </div>
                        <div className="col-4">
                          <label
                            className="font-size-2"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            CITY
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            autocomplete="off"
                          />
                        </div>
                        <div className="col-4">
                          <label
                            className="text-left font-size-2"
                            label
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            STATE
                          </label>
                          <select
                            id="inputState"
                            onChange={onChangeHandler}
                            className="form-control"
                          >
                            <option selected>Select One</option>
                            <option>pAKISTAN</option>
                            <option>AFGHANISTAN</option>
                            <option>AMERICA</option>
                            <option>AUSTRALIA</option>
                            <option>CANADA</option>
                            <option>IRAN</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="container pt-5">
                      <div className="row">
                        <div className="col-6">
                          <label
                            className="text-left font-size-2"
                            style={{ float: "left" }}
                            for="coupon_code"
                          >
                            FIRST NAME
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            placeholder="First Name"
                            autocomplete="off"
                          />
                        </div>
                        <div className="col-6">
                          <label
                            className="text-left font-size-2"
                            label
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            LAST NAME
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            placeholder="List Name"
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="container pt-5">
                      <div className="row">
                        <div className="col-6">
                          <label
                            className="text-left font-size-2 text-uppercase"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            Phone Number (Mobile Prefered)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            placeholder="Phone number"
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="container pt-5 text-left text-uppercase">
                      <Link class="btn btn-dark font-size-2" to="#">
                        Save Address
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </div>

          <div className="py-5 pb-2">
            <p>SAVED PAYMENT METHODS(0)</p>
            <div
              className="container p-4 my-3 "
              style={{ backgroundColor: "white", borderTop: "2px solid black" }}
            >
              <p className="font-size-2 text-left">
                You have placed no orders.
              </p>
            </div>
            <Accordion
              className="font-weight-normal font-size-3 px-2 "
              defaultActiveKey="0"
            >
              <div className=" d-flex justify-content-center">
                <Accordion.Toggle
                  className="link-black-100 "
                  as={Button}
                  variant="link"
                  eventKey="0"
                >
                  <p className="">
                    <span className="font-size-5">
                      <IoAddCircle />
                    </span>
                    <span className="font-size-1 text-uppercase">
                      Add a new Card
                    </span>
                  </p>
                </Accordion.Toggle>
              </div>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div
                    className="col-12 p-4 my-3 text-center h-100"
                    style={{
                      backgroundColor: "white",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className="container pt-5">
                      <div className="row">
                        <div className="col-6">
                          <label
                            className="text-left font-size-2 text-uppercase"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            CARD NUMBER
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container pt-5">
                      <div className="row">
                        <div className="col-6">
                          <label
                            className="text-left font-size-2 text-uppercase"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            NAME ON CARD
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            placeholder="Name"
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container pt-5">
                      <div className="row ">
                        <div className="col-4 ">
                          <label
                            className="text-left font-size-2"
                            label
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            CARD EXPIRATION DATE
                          </label>
                          <select
                            id="inputState"
                            onChange={onChangeHandler}
                            className="form-control"
                          >
                            <option selected>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>June</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sept</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dec</option>
                          </select>
                        </div>

                        <div className="col-4 d-flex align-items-end">
                          <label
                            className="text-left font-size-2"
                            label
                            for="coupon_code"
                            style={{ float: "left" }}
                          ></label>
                          <select
                            id="inputState"
                            onChange={onChangeHandler}
                            className="form-control"
                          >
                            <option selected>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row pt-5">
                        <div className="col-4">
                          <label
                            className="font-size-2"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            SECURITY CODE
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            autocomplete="off"
                          />
                          <p className="text-left font-size-2">
                            <Link>What's This?</Link>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="container pt-5">
                      <div>
                        <h4 className="font-size-3 border-bottom border-dark pb-3">
                          BILLING ADDRESS
                        </h4>
                      </div>
                      <div className="row ">
                        <div className="col-6 pt-5">
                          <label
                            className="text-left font-size-2"
                            label
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            COUNTRY
                          </label>
                          <select
                            id="inputState"
                            onChange={onChangeHandler}
                            className="form-control"
                          >
                            <option selected>United States</option>
                            <option>Pakistan</option>
                            <option>Afghanistan</option>
                            <option>UAE</option>
                            <option>Australia</option>
                            <option>Canda</option>
                            <option>Iran</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="row pt-5">
                        <div className="col-4">
                          <label
                            className="font-size-2"
                            style={{ float: "left" }}
                            for="coupon_code"
                          >
                            ZIP CODE
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            autocomplete="off"
                          />
                        </div>
                        <div className="col-4">
                          <label
                            className="font-size-2"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            CITY
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            autocomplete="off"
                          />
                        </div>
                        <div className="col-4">
                          <label
                            className="text-left font-size-2"
                            label
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            STATE
                          </label>
                          <select
                            id="inputState"
                            onChange={onChangeHandler}
                            className="form-control"
                          >
                            <option selected>Select One</option>
                            <option>pAKISTAN</option>
                            <option>AFGHANISTAN</option>
                            <option>AMERICA</option>
                            <option>AUSTRALIA</option>
                            <option>CANADA</option>
                            <option>IRAN</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="container pt-5">
                      <div className="row">
                        <div className="col-6">
                          <label
                            className="text-left font-size-2"
                            style={{ float: "left" }}
                            for="coupon_code"
                          >
                            FIRST NAME
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            placeholder="First Name"
                            autocomplete="off"
                          />
                        </div>
                        <div className="col-6">
                          <label
                            className="text-left font-size-2"
                            label
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            LAST NAME
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            placeholder="List Name"
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="container pt-5">
                      <div className="row">
                        <div className="col-6">
                          <label
                            className="text-left font-size-2 text-uppercase"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            Phone Number (Mobile Prefered)
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            placeholder="Phone number"
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="container pt-5 text-left text-uppercase">
                      <Link class="btn btn-dark font-size-2" to="#">
                        Save Card
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </div>

          <div className="py-5 pb-2">
            <p className="text-uppercase">Saved Topper Card(0)</p>
            <div
              className="container p-4 my-3 "
              style={{ backgroundColor: "white", borderTop: "2px solid black" }}
            >
              <p className="font-size-2 text-left">
                You have placed no orders.
              </p>
            </div>
            <Accordion
              className="font-weight-normal font-size-3 px-2 "
              defaultActiveKey="0"
            >
              <div className=" d-flex justify-content-center">
                <Accordion.Toggle
                  className="link-black-100 "
                  as={Button}
                  variant="link"
                  eventKey="0"
                >
                  <p className="">
                    <span className="font-size-5">
                      <IoAddCircle />
                    </span>
                    <span className="font-size-1 text-uppercase">
                      Add a new Card
                    </span>
                  </p>
                </Accordion.Toggle>
              </div>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div
                    className="col-12 p-4 my-3 text-center h-100"
                    style={{
                      backgroundColor: "white",
                      borderTop: "2px solid black",
                    }}
                  >
                    <div className="container pt-5">
                      <div className="row">
                        <div className="col-6">
                          <label
                            className="text-left font-size-2 text-uppercase"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            CARD NUMBER
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="container pt-5">
                      <div>
                        <h4 className="font-size-3 border-bottom border-dark pb-3 pt-3">
                          BILLING ADDRESS
                        </h4>
                      </div>
                      <div className="row ">
                        <div className="col-6 pt-5">
                          <label
                            className="text-left font-size-2"
                            label
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            COUNTRY
                          </label>
                          <select
                            id="inputState"
                            onChange={onChangeHandler}
                            className="form-control"
                          >
                            <option selected>United States</option>
                            <option>Pakistan</option>
                            <option>Afghanistan</option>
                            <option>UAE</option>
                            <option>Australia</option>
                            <option>Canda</option>
                            <option>Iran</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="row pt-5">
                        <div className="col-4">
                          <label
                            className="font-size-2"
                            style={{ float: "left" }}
                            for="coupon_code"
                          >
                            ZIP CODE
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            autocomplete="off"
                          />
                        </div>
                        <div className="col-4">
                          <label
                            className="font-size-2"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            CITY
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            autocomplete="off"
                          />
                        </div>
                        <div className="col-4">
                          <label
                            className="text-left font-size-2"
                            label
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            STATE
                          </label>
                          <select
                            id="inputState"
                            onChange={onChangeHandler}
                            className="form-control"
                          >
                            <option selected>Select One</option>
                            <option>pAKISTAN</option>
                            <option>AFGHANISTAN</option>
                            <option>AMERICA</option>
                            <option>AUSTRALIA</option>
                            <option>CANADA</option>
                            <option>IRAN</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="container pt-5">
                      <div className="row">
                        <div className="col-6">
                          <label
                            className="text-left font-size-2"
                            style={{ float: "left" }}
                            for="coupon_code"
                          >
                            FIRST NAME
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            placeholder="First Name"
                            autocomplete="off"
                          />
                        </div>
                        <div className="col-6">
                          <label
                            className="text-left font-size-2"
                            label
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            LAST NAME
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            placeholder="List Name"
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="container pt-5 text-left text-uppercase">
                      <Link class="btn btn-dark font-size-2" to="#">
                        Save Card
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </div>
        </div>
      </div>

      {/**
       * A SMARTER WAY TO BUY TEXTBOOKS
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
                  className="d-inline text-center font-weight-normal px-2 font-size-1 border-right border-secondary mx-1"
                >
                  {v.needhelp}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  btn: {
    backgroundColor: "#232f3f",
    color: "#fff",
    borderRadius: 0,
  },
};

export default withRouter(ShippingAndPayment);
