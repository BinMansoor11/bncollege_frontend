import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const ForgotPassword = () => {
  const [state, setState] = useState({
    emailAddress: "",
  });

  const { emailAddress } = state;

  const onchangeHandler = (e) => {
    setState({ emailAddress: e.target.value });
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("emailAddress", emailAddress);
  };

  return (
    <div>
      <Header />
      <div id="content" className="site-content bg-punch-light space-bottom-3">
        <div className="col-full container">
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              <article
                id="post-6"
                className="post-6 page type-page status-publish hentry"
              >
                <header className="entry-header space-top-2 mb-1">
                  <h4 className="entry-title font-size-7 text-center">
                    Forgot Password?
                  </h4>
                </header>
                <div className="entry-content">
                  <div className="woocommerce">
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
                        style={{ margin: "auto", height: "360px" }}
                      >
                        <h4 className="pb-3">Recover Password</h4>
                        <div className="coupon mb-5">
                          <label for="coupon_code">Email Address:</label>
                          <input
                            type="text"
                            name="emailAddress"
                            style={{ width: "100%" }}
                            id="coupon_code"
                            value={this.state.emailAdress}
                            onChange={this.state.emailAdress}
                            placeholder="Email Address"
                            autocomplete="off"
                          />
                        </div>
                        <a href="#">Back to Login</a>
                        <a
                          href="order-received.html"
                          className="mt-3 button alt btn btn-dark btn-block rounded-0 py-4"
                          onClick={onClickHandler}
                        >
                          Submit
                        </a>
                        <div className="clearfix"></div>
                        <center style={{ paddingTop: "10px" }}>
                          <a href="#">Haven't Registered? Signup Now!</a>
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
  );
};

export default ForgotPassword;
