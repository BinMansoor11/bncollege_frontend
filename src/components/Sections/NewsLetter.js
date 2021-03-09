import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Success from "../Login/Success";
import Failed from "../Login/Failed";
import { api } from "../../utils/Contant";

function NewsLetter(props) {
  const state = useSelector((state) => state.root);
  const [email, setEmail] = useState("");
  const { _campus } = state;

  const subscribeToNewsLetter = async () => {
    if (email == "") {
      Failed("Please provide an email to subscribe to the newsletter");
      return;
    }
    let response = await axios.post(api + "5005/api/newsletter/create", {
      email: email,
      campus_storeid: _campus._id,
    });

    if (response.status == 200) {
      Success(response.data.message);
      setEmail("");
    } else {
      Failed("Oops! Something Went Wrong");
    }
  };

  return (
    <div>
      <section className="space-bottom-3">
        <div className="container">
          <div className="space-bottom-md-1">
            <div className="text-center mb-5">
              <h5 className="font-size-7 font-weight-medium">
                Join Our Newsletter
              </h5>
              <p className="text-gray-700">
                Signup to be the first to hear about exclusive deals, special
                offers and upcoming collections
              </p>
            </div>

            <div className="form-row justify-content-center">
              <div className="col-md-5 mb-3 mb-md-2">
                <div className="js-form-message">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control px-5 height-60 border-dark"
                      name="name"
                      id="signupSrName"
                      placeholder="Enter email for weekly newsletter."
                      aria-label="Your name"
                      required=""
                      data-msg="Name must contain only letters."
                      data-error-class="u-has-error"
                      data-success-class="u-has-success"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-2 ml-md-2">
                <button
                  type="submit"
                  className="btn btn-dark rounded-0 btn-wide py-3 font-weight-medium"
                  style={{ backgroundColor: _campus.header_primary_color }}
                  onClick={subscribeToNewsLetter}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsLetter;
