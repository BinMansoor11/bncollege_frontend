import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import axios from "axios";
// Port //
import { api } from "../../utils/Contant";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/Actions";

const MyAccount = ({ history, match }) => {
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

  /**
   * Axios GET API
   */
  useEffect(() => {
    // fetchData();
  }, []);

  let config = {
    headers: {
      Authorization:
        "decoded eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY2RAZ21haWwuY29tIiwidXNlcklkIjoiNWZmZTgwYmRkMWQwMzQwMTNjNzcwZGE4IiwiaWF0IjoxNjEwNTE5NzE0fQ.8jgwgaywyfi_Zk51QjDASO2431NBF66HQK5lts0KXdg",
    },
  };

  const fetchData = async () => {
    try {
      let response = await axios.get(
        api + "5009/api/5ffe80bdd1d034013c770da8",
        config
      );

      // dispatch(getUser(response.data));
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log(match);

  return _user ? (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <Header />

      <div className="container col-9 headerText pt-2 mt-5">
        <h1 className="display-4 text-center text-uppercase font-size-10">
          My Account
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
          <div className="py-2">
            <div className="d-flex justify-content-between">
              <p>RENTED TEXTBOOKS</p>
            </div>
            <div className="edit-link">
              <p className="text-right font-size-2">
                <Link
                  onClick={() => {
                    history.push(`${match.url}/yourrentals`);
                  }}
                >
                  View Rentals
                </Link>
              </p>
            </div>
            <div
              className="container p-4 my-3  text-center "
              style={{ backgroundColor: "white", borderTop: "2px solid black" }}
            >
              <p className="font-size-2 text-left ">
                You have no rental books.
              </p>
            </div>
          </div>
          <div className="py-2 pb-2">
            <p>ORDER HISTORY</p>
            <div
              className="container p-4 my-3 "
              style={{ backgroundColor: "white", borderTop: "2px solid black" }}
            >
              <p className="font-size-2 text-left">
                You have placed no orders.
              </p>
            </div>
          </div>
          <div className="py-2 pb-2">
            <div className="d-flex justify-content-between">
              <p>PAYMENT AND SHIPPING INFORMATION</p>
            </div>
            <div className="edit-link">
              <p className="text-right font-size-2">
                <Link
                  onClick={() => {
                    history.push(`${match.url}/shippingandpayment`);
                  }}
                >
                  Edit
                </Link>
              </p>
            </div>
            <div
              className="container p-4 my-3   text-center "
              style={{ backgroundColor: "white", borderTop: "2px solid black" }}
            >
              <div class="row">
                <div class="col-6">
                  <p className="font-size-2 ">PRIMARY SHIPPING ADDRESS</p>
                  <p className="font-size-2 ">You have no saved addresses.</p>
                </div>
                <div class="col-6 ">
                  <div className="border-left">
                    <p className="font-size-2 ">PRIMARY SHIPPING ADDRESS</p>
                    <p className="font-size-2 ">
                      You have no saved payment card.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 pb-5">
            <div className="d-flex justify-content-between">
              <p>ACCOUNT INFORMATION</p>
            </div>
            <div className="edit-link">
              <p className="text-right font-size-2">
                <Link
                  onClick={() => {
                    history.push(`${match.url}/accountinformation`);
                  }}
                >
                  Edit
                </Link>
              </p>
            </div>
            <div
              className="container p-4 my-3   text-center "
              style={{ backgroundColor: "white", borderTop: "2px solid black" }}
            >
              <div class="row ">
                <div class="col-6">
                  <div className="container d-flex justify-content-start">
                    <div className="d-flex justify-content-between ">
                      <span className="font-size-2">First Name</span>
                      <span className="ml-4 font-size-2">
                        {_user.user.first_name}
                      </span>
                    </div>
                  </div>
                  <div className="container d-flex justify-content-start">
                    <div className="d-flex justify-content-between py-2">
                      <span className="font-size-2">Last Name</span>
                      <span className="ml-4 font-size-2">
                        {_user.user.last_name}
                      </span>
                    </div>
                  </div>
                  <div className="container d-flex justify-content-start">
                    <div className="d-flex justify-content-between ">
                      <span className="font-size-2">Email Address</span>
                      <span className="ml-4 font-size-2">
                        {_user.user.email}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div className="border-left">
                    <div className="container d-flex justify-content-start">
                      <div className="d-flex justify-content-between ">
                        <span className="font-size-2">Password</span>

                        <span className="ml-4 font-size-2">
                          <Link to="#">Change Password</Link>
                        </span>
                      </div>
                    </div>
                    <div className="container d-flex justify-content-start">
                      <div className="d-flex justify-content-between py-2">
                        <span className="font-size-2">Phone number</span>
                        <span className="ml-4 font-size-2">
                          {_user.user.mobile}
                        </span>
                      </div>
                    </div>
                    <div className="container d-flex justify-content-start">
                      <div className="d-flex justify-content-between ">
                        <span className="font-size-2">Member Type</span>
                        <span className="ml-4 font-size-2">
                          {_user.user.user_type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  ) : (
    <p>{history.push("/" + _campus.name)}</p>
  );
};

const styles = {
  btn: {
    backgroundColor: "#232f3f",
    color: "#fff",
    borderRadius: 0,
  },
};

export default withRouter(MyAccount);
