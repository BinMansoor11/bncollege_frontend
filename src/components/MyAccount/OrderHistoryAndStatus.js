import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { useDispatch, useSelector } from "react-redux";

const OrderHistoryAndStatus = ({ history, match }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.root);
  const { _user, _campus } = state;

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
          Order History & Status
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

        <div
          className="col-6 p-4 my-3 text-center h-100"
          style={{ backgroundColor: "white", borderTop: "2px solid black" }}
        >
          <p className="font-size-2 text-left">You have placed no orders.</p>
        </div>
        <div class="offset-md-2"></div>
      </div>
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

const styles = {
  btn: {
    backgroundColor: "#232f3f",
    color: "#fff",
    borderRadius: 0,
  },
};

export default withRouter(OrderHistoryAndStatus);
