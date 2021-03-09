import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import axios from "axios";
// Port //
import { api } from "../../utils/Contant";

import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/actions/Actions";

function Edit(props) {
  const dispatch = useDispatch();

  const _state = useSelector((state) => state.root);
  const { data } = _state;

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    gender: "",
    mobileNumber: "",
  });

  const {
    firstname,
    lastname,
    emailAddress,
    password,
    confirmPassword,
    gender,
    mobileNumber,
  } = state;

  /**
   * Axios POST API
   */

  const postData = async () => {
    console.log("state :>> ", state);
    try {
      let response = await axios.post(api + "5009/api", {
        first_name: firstname,

        last_name: lastname,

        email: emailAddress,

        password: password,

        mobile: "1255",

        gender: gender,
      });

      console.log(response.data);
      response.data.success == true
        ? alert(response.data.message)
        : alert("Oops! Something Went Wrong");
    } catch (error) {
      console.log("error", error);
    }
  };

  const onChangeHandler = (e) => {
    e.persist();

    console.log("e.target.name :>> ", e.target.name, e.target.value);

    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("emailAdress", emailAddress);
    data.append("password", password);
  };

  return (
    <div>
      <Header />
      <div
        id="content"
        className="site-content space-bottom-3"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div className="col-full container">
          <div id="primary" className="content-area">
            <main id="main" className="site-main ">
              <article
                id="post-6"
                className="post-6 page type-page status-publish hentry"
              >
                <header className="entry-header space-top-2 mb-1">
                  <h4 className="entry-title font-size-7 text-center">
                    Update Details
                  </h4>
                </header>
                <div className="entry-content">
                  <div className="woocommerce ">
                    <form
                      name="checkout"
                      method="post"
                      className="checkout woocommerce-checkout row mt-8"
                      action="https://themes.woocommerce.com/storefront/checkout/"
                      enctype="multipart/form-data"
                      novalidate="novalidate"
                    >
                      <h3 id="order_review_heading" className="d-none">
                        Your order
                      </h3>
                      <div
                        id="order_review"
                        className="col-md-6 col-lg-5 col-xl-4 bg-white p-5 woocommerce-checkout-review-order"
                        style={{ margin: "auto" }}
                      >
                        <h4 className="pb-3">Edit</h4>
                        <label for="coupon_code">First Name:</label>
                        <div className="coupon mb-3">
                          <input
                            type="text"
                            name="firstname"
                            style={{ width: "100%" }}
                            id="coupon_code"
                            onChange={onChangeHandler}
                            placeholder="First Name"
                            autocomplete="off"
                          />
                        </div>

                        <label for="coupon_code">Last Name:</label>
                        <div className="coupon mb-3">
                          <input
                            type="text"
                            name="lastname"
                            style={{ width: "100%" }}
                            id="coupon_code"
                            onChange={onChangeHandler}
                            placeholder="Last Name"
                            autocomplete="off"
                          />
                        </div>

                        <label for="coupon_code">Email:</label>
                        <div className="coupon mb-3">
                          <input
                            type="text"
                            name="emailAddress"
                            style={{ width: "100%" }}
                            id="coupon_code"
                            onChange={onChangeHandler}
                            placeholder="Email"
                            autocomplete="off"
                          />
                        </div>

                        <label for="coupon_code">Gender:</label>
                        <div className="coupon mb-3">
                          <input
                            type="text"
                            name="gender"
                            style={{ width: "100%" }}
                            id="coupon_code"
                            onChange={onChangeHandler}
                            placeholder="Gender"
                            autocomplete="off"
                          />
                        </div>

                        <label for="coupon_code">Password:</label>
                        <div className="coupon mb-3">
                          <input
                            type="text"
                            name="password"
                            style={{ width: "100%" }}
                            id="coupon_code"
                            onChange={onChangeHandler}
                            placeholder="Password"
                            autocomplete="off"
                          />
                        </div>

                        <label for="coupon_code">Confirm Password:</label>
                        <div className="coupon mb-3">
                          <input
                            type="confirmPassword"
                            name="confirmPassword"
                            style={{ width: "100%" }}
                            id="coupon_code"
                            onChange={onChangeHandler}
                            placeholder="Confirm Password"
                            autocomplete="off"
                          />
                        </div>
                        <div className="pt-4">
                          <Link
                            to="#"
                            className=" button alt btn btn-dark btn-block"
                            onClick={postData}
                          >
                            Update
                          </Link>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Edit;
