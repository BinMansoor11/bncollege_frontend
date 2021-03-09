import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

import { useSelector, useDispatch } from "react-redux";
import { getData, getUser } from "../../redux/actions/Actions";
import axios from "axios";
import Signup from "../signup/Signup";

// React Toastify //
import Success from "./Success";
import Failed from "./Failed";

// Port //
import { api } from "../../utils/Contant";

function Login({ history }) {
  const dispatch = useDispatch();

  const _state = useSelector((state) => state.root);
  const { data } = _state;
  const { _user } = _state;
  const { _campus } = _state;

  const [switchState, setSwitchState] = useState(true);

  const [state, setState] = useState({
    emailAddress: "",
    password: "",
  });

  const { emailAddress, password } = state;

  /**
   * Axios POST API
   */

  const postData = async () => {
    // console.log("state :>> ", state);
    if (emailAddress !== "" && password !== "") {
      try {
        let response = await axios.post(api + "5009/api/login", {
          email: emailAddress,
          password: password,
        });

        console.log("response.status :>> ", response.status);

        response.data.message == "Login successful"
          ? setTimeout(() => {
              Success(response.data.message);
              dispatch(getUser(response.data));
              history.push("/" + _campus.name);
            }, 500)
          : Failed("Incorrect email or password.");
      } catch (error) {
        console.log("error", error);
      }
    } else if (emailAddress == emailAddress || password !== "") {
      Failed("Incorrect email or password.");
    } else if (emailAddress !== "" || password == password) {
      Failed("Incorrect email or password.");
    } else {
      Failed("Invalid email or password.");
    }
  };

  const onChangeHandler = (e) => {
    e.persist();

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

  return switchState === true ? (
    <div>
      <Header />
      <div
        id="content"
        className="site-content space-bottom-3"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div className="col-full container">
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              <article
                id="post-6"
                className="post-6 page type-page status-publish hentry"
              >
                <header className="entry-header space-top-2 mb-1">
                  <h4 className="entry-title font-size-7 text-center mb-5">
                    Login
                  </h4>
                </header>
                <div className="entry-content">
                  <div className="woocommerce">
                    <form
                    // name="checkout"
                    // method="post"
                    // className="checkout woocommerce-checkout row mt-8"
                    // action="https://themes.woocommerce.com/storefront/checkout/"
                    // enctype="multipart/form-data"
                    // novalidate="novalidate"
                    >
                      <h3 id="order_review_heading" className="d-none">
                        Your order
                      </h3>
                      <div
                        id="order_review"
                        className="col-md-6 col-lg-5 col-xl-4 bg-white  p-5 woocommerce-checkout-review-order"
                        style={{ margin: "auto" }}
                      >
                        <h4 className="pb-3">Login</h4>

                        <label for="coupon_code">Email</label>
                        <div className="coupon mb-5">
                          <input
                            type="text"
                            name="emailAddress"
                            style={{ width: "100%" }}
                            onChange={onChangeHandler}
                            placeholder="Email"
                            autocomplete="off"
                          />
                        </div>

                        <label for="coupon_code">Password</label>
                        <div className="coupon mb-5">
                          <input
                            type="password"
                            name="password"
                            style={{ width: "100%" }}
                            onChange={onChangeHandler}
                            placeholder="Password"
                            autocomplete="off"
                          />
                        </div>
                        <button
                          className="mt-3 button alt btn btn-dark btn-block"
                          onClick={(e) => {
                            e.preventDefault();
                            postData();
                            // setTimeout(() => {
                            //   history.push("/" + _campus.name);
                            // }, 2000);
                          }}
                        >
                          Login
                        </button>
                        <div className=" d-flex justify-content-end pt-2">
                          <Link to="#" className="text-right font-size-2">
                            Forgot Password?
                          </Link>
                        </div>
                        <div className="clearfix"></div>
                        <center className="pt-3">
                          <button
                            onClick={() => {
                              setSwitchState(false);
                            }}
                            className="btn btn-sm btn-outline-dark"
                          >
                            SignUp
                          </button>
                        </center>
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
  ) : (
    <Signup setSwitchState={setSwitchState} />
  );
}

export default withRouter(Login);
