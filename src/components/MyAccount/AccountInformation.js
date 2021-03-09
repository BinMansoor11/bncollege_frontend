import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// Port //
import { api } from "../../utils/Contant";
import { getUser, updateUser } from "../../redux/actions/Actions";

const AccountInformation = ({ history, match }) => {
  const [localUser, setLocalUser] = useState(null);
  const [select, setSelect] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.root);
  const { _user, _campus } = state;
  useEffect(() => {
    // fetchData();
    setLocalUser(_user);
  }, [_user]);

  const fetchData = async () => {
    try {
      let response = await axios.get(
        api + "5009/api/5ffe80bdd1d034013c770da8",
        { headers: { Authorization: "decoded " + _user.token } }
      );
      setLocalUser(_user);
    } catch (error) {
      console.log("error", error);
    }
  };

  /**
   * Need Help
   */
  const NeedHelp = [
    { needhelp: "Rental FAQs", needhelp_route: "/rentalfaqs" },
    { needhelp: "Payment & Delivery", needhelp_route: "/paymentanddelivery" },
    { needhelp: "Refunds", needhelp_route: "/returnsandrefunds" },
  ];
  const { needhelp, needhelp_route } = NeedHelp;

  const onChangeHandler2 = (e) => {
    const { name, value } = e.target;
    setLocalUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const onChangeHandler = (e) => {
    setSelect(e.target.value);
  };

  const { form } = state;

  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return _user ? (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <Header />

      <div className="container col-9 headerText pt-2 mt-5">
        <h1 className="display-4 text-center text-uppercase font-size-10">
          Account Information
        </h1>
        <hr />
      </div>
      <div className="row mt-5 py-3 pb-5  mb-5 mr-auto">
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
              to="/myaccount"
              className="d-block text-justify link-black-100  link-black-100 font-size-1 "
            >
              OVERVIEW
            </Link>
            <Link
              to="/myaccount/yourrentals"
              className="d-block text-justify pt-2 link-black-100  link-black-100 font-size-1 "
            >
              YOUR RENTALS
            </Link>
            <Link
              to="/myaccount/orderhistoryandstatus"
              className="d-block text-justify pt-2 link-black-100  link-black-100 font-size-1 "
            >
              ORDER HISTORY & STATUS
            </Link>
            <Link
              to="/myaccount/shippingandpayment"
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              SHIPPING & PAYMENT
            </Link>
            <Link
              to="/myaccount/emailaddress"
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              EMAIL ADDRESS
            </Link>
            <Link
              to="/myaccount/accountinformation"
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              ACCOUNT INFORMATION
            </Link>

            <h4 className="font-weight-normal mt-5 text-justify font-size-3">
              HELP{" "}
            </h4>
            <Link
              to="/textbooks/textbookrentals"
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              TEXTBOOK RENTAL INFO
            </Link>
            <Link
              to="/textbooks/digitalcontentfaqs"
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              DIGITAL CONTENT FAQs
            </Link>
            <Link
              to="/returnandexchange"
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              RETURN & EXCHANGES
            </Link>
            <Link
              to="/contactus"
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
          <div className="container">
            <div className="row">
              <div className="col-6">
                <label
                  className="text-left"
                  style={{ float: "left" }}
                  for="coupon_code"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  id="coupon_code"
                  placeholder={localUser && localUser.user.first_name}
                  autocomplete="off"
                  onChange={onChangeHandler2}
                />
              </div>
              <div className="col-6">
                <label for="coupon_code" style={{ float: "left" }}>
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  id="coupon_code"
                  placeholder={localUser && localUser.user.last_name}
                  autocomplete="off"
                  onChange={onChangeHandler2}
                />
              </div>
            </div>
          </div>
          <div className="container-fluid my-3">
            <div className="row  d-block">
              <div class="col-12">
                <div class="row py-1 ml-0 ">
                  <div class=" d-flex justify-content-start ">
                    <label
                      className="text-center font-size-2 text-uppercase"
                      for="coupon_code"
                      style={{ float: "left" }}
                    >
                      Email Address:
                    </label>
                    <label className="ml-2 font-size-2" for="coupon_code">
                      {localUser && localUser.user.email}{" "}
                      <Link
                        to="#"
                        onClick={() => setShowEmail(!showEmail)}
                        for="coupon_code"
                        style={{ color: "red", cursor: "pointer" }}
                      >
                        Change
                      </Link>
                    </label>
                  </div>

                  <div className="container py-2 pt-2">
                    <div className="row">
                      {showEmail === true ? (
                        <div className="col-6">
                          <label
                            className="text-left font-size-2 text-uppercase"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            Current Email Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="coupon_code"
                            value={localUser && localUser.user.email}
                            autocomplete="off"
                            disabled
                            onChange={onChangeHandler2}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="container py-2">
                    <div className="row">
                      {showEmail === true ? (
                        <div className="col-6">
                          <label
                            className="text-left font-size-2 text-uppercase"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            New Email Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="coupon_code"
                            placeholder="New Email Address"
                            autocomplete="off"
                            onChange={onChangeHandler2}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="container py-2 pb-2">
                    <div className="row">
                      {showEmail === true ? (
                        <div className="col-6">
                          <label
                            className="text-left font-size-2 text-uppercase"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            Confirm Email
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="confirm_email"
                            id="coupon_code"
                            placeholder="Confirm Email"
                            autocomplete="off"
                          />
                        </div>
                      ) : null}
                      {showEmail === true ? (
                        <div className="container pt-5 text-left text-uppercase">
                          <button
                            class="btn btn-dark font-size-2"
                            onClick={async () => {
                              await axios
                                .put(
                                  "http://192.168.18.9:5009/api/" +
                                    _user.user._id,
                                  localUser,
                                  {
                                    headers: {
                                      Authorization: "decoded " + _user.token,
                                    },
                                  }
                                )
                                .then((res) => console.log(res.data));
                              dispatch(updateUser(localUser));
                            }}
                          >
                            Save Changes
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div class="row py-1 ml-0 ">
                  <div class="">
                    <label
                      className="font-size-2"
                      for="coupon_code"
                      style={{ float: "left" }}
                    >
                      PASSWORD:
                    </label>
                    <label className="ml-2 font-size-2" for="coupon_code">
                      **********{" "}
                      <Link
                        to="#"
                        onClick={() => setShowPassword(!showPassword)}
                        for="coupon_code"
                        style={{ color: "red", cursor: "pointer" }}
                      >
                        Change
                      </Link>
                    </label>
                  </div>
                  <div className="container py-2 pt-2">
                    <div className="row">
                      {showPassword === true ? (
                        <div className="col-6">
                          <label
                            className="text-left font-size-2 text-uppercase"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            placeholder="Current Password"
                            autocomplete="off"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="container py-2">
                    <div className="row">
                      {showPassword === true ? (
                        <div className="col-6">
                          <label
                            className="text-left font-size-2 text-uppercase"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            New Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            placeholder="New Password"
                            autocomplete="off"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="container py-2 pb-2">
                    <div className="row">
                      {showPassword === true ? (
                        <div className="col-6">
                          <label
                            className="text-left font-size-2 text-uppercase"
                            for="coupon_code"
                            style={{ float: "left" }}
                          >
                            Verify New Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="firstname"
                            id="coupon_code"
                            placeholder="Verify New Password"
                            autocomplete="off"
                          />
                        </div>
                      ) : null}
                      {showPassword === true ? (
                        <div className="container pt-5 text-left text-uppercase">
                          <Link class="btn btn-dark font-size-2" to="#">
                            Save Changes
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row ">
              <div className="col-6">
                <label
                  className="font-size-2"
                  for="coupon_code"
                  style={{ float: "left" }}
                >
                  I am a
                </label>
                <select
                  id="inputState"
                  onChange={onChangeHandler}
                  className="form-control"
                >
                  <option selected>
                    {_user ? _user.user.user_type : "please login first"}
                  </option>
                  <option>student</option>
                  <option>Alumni</option>
                  <option>Faculty</option>
                  <option>Parent or family member</option>
                  <option>Athletic fan</option>
                  <option>other</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                {select === "student" ? (
                  <label for="coupon_code" style={{ float: "left" }}>
                    year of graduation
                  </label>
                ) : null}
                {select === "Alumni" ? (
                  <>
                    {" "}
                    <label for="coupon_code">year of graduation</label>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      style={{ width: "100%" }}
                      id="coupon_code"
                      autocomplete="off"
                    />
                  </>
                ) : null}
                {select === "Faculty" ? (
                  <>
                    <label for="coupon_code" style={{ float: "left" }}>
                      Department
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      style={{ width: "100%" }}
                      id="coupon_code"
                      autocomplete="off"
                    />
                  </>
                ) : null}
                {select === "Parent or family member" ? (
                  <label for="coupon_code" style={{ float: "left" }}>
                    student's year of graduation
                  </label>
                ) : null}
                {select === "Athletic fan" || "other"?.null}
                {select === "student" ? (
                  <select
                    id="inputState"
                    style={{ width: "100%" }}
                    className="form-control"
                  >
                    <option selected>please choose from list</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                  </select>
                ) : null}
                {select === "Parent or family member" ? (
                  <select id="inputState" className="form-control">
                    <option selected>please choose from list</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                  </select>
                ) : null}
              </div>
            </div>
          </div>
          <div className="container pt-5">
            <div className="row">
              <div className="col-6">
                <label
                  className="text-left font-size-2"
                  for="coupon_code"
                  style={{ float: "left" }}
                >
                  Phone Number (Mobile Prefered)
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  id="coupon_code"
                  placeholder={localUser && localUser.user.mobile}
                  autocomplete="off"
                  onChange={onChangeHandler2}
                />
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
                  Student Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  style={{ width: "100%" }}
                  id="coupon_code"
                  placeholder="student_id"
                  autocomplete="off"
                  value={_user.user.student_id}
                  disabled
                />
              </div>
              <div className="col-6">
                <label
                  className="font-size-2"
                  for="coupon_code"
                  style={{ float: "left" }}
                >
                  Verify Student Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  style={{ width: "100%" }}
                  id="coupon_code"
                  placeholder="verify student id"
                  value={_user.user.student_id}
                  disabled
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <div className="container pt-5 text-left">
            <button
              class="btn btn-dark font-size-2"
              onClick={() => {
                axios
                  .put(
                    "http://192.168.18.9:5009/api/" + _user.user._id,
                    localUser,
                    { headers: { Authorization: "decoded " + _user.token } }
                  )
                  .then((res) => {
                    console.log(res.data);
                    dispatch(updateUser(localUser));
                  });
              }}
            >
              Save Changes
            </button>
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

export default withRouter(AccountInformation);
