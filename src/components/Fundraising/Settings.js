import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import axios from "axios";

// React Toastify //
import Success from "../Login/Success";
import Failed from "../Login/Failed";

// Port //
import { api } from "../../utils/Contant";

import { useDispatch, useSelector } from "react-redux";
import { getCategories, getData } from "../../redux/actions/Actions";

export default function Settings({ history, match }) {
  const [select, setSelect] = useState(null);
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState({
    showShipEverthing: false,
    showShipDirectly: false,
    showLetThem: false,
  });

  const { showShipEverthing, showShipDirectly, showLetThem } = show;

  const showRadio = (key) => {
    switch (key) {
      case "SHIPEVERYTHING":
        setShow((prevState) => {
          return {
            ...prevState,
            showShipEverthing: true,
            showShipDirectly: false,
            showLetThem: false,
          };
        });
        break;
      case "SHIPDIRECTLY":
        setShow((prevState) => {
          return {
            ...prevState,
            showShipEverthing: false,
            showShipDirectly: true,
            showLetThem: false,
          };
        });
        break;
      case "LETTHEM":
        setShow((prevState) => {
          return {
            ...prevState,
            showShipEverthing: false,
            showShipDirectly: false,
            showLetThem: true,
          };
        });
        break;

      default:
        return show;
    }
  };

  const dispatch = useDispatch();
  const _state = useSelector((state) => state.root);
  const { _campus } = _state;

  const [state, setState] = useState({
    paypalId: "",
    dayTimePhone: "",
    zipCode: "",
    paypalIdError: "",
    dayTimePhoneError: "",
    zipCodeError: "",
  });

  const {
    paypalId,
    dayTimePhone,
    zipCode,
    paypalIdError,
    dayTimePhoneError,
    zipCodeError,
  } = state;

  /**
   * Axios POST API
   */

  const postData = async () => {
    console.log("state :>> ", state);
    valid();
    if (paypalId !== "" && dayTimePhone !== "" && zipCode !== "") {
      try {
        let response = await axios.post(api + "5004/api/fund_raiser", {
          paypal_id: paypalId,

          phone: dayTimePhone,

          zip_code: zipCode,

          campus_storeId: _campus._id,
        });
        console.log(response);
        response.status == 200
          ? setTimeout(() => {
              Success(response.data.message);
              history.push(
                "/" + _campus.name + "/fundraising/startafundraiser"
              );
            }, 500)
          : Failed("Oops! Something Went Wrong");
      } catch (error) {
        console.log("error", error);
      }
    } else {
      Failed("All fields must be filled!");
    }
  };

  const onClickHandler = (e) => {
    e.persist();

    console.log("e.target.name :>> ", e.target.name, e.target.value);

    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      paypalIdError: "",
      dayTimePhoneError: "",
      zipCodeError: "",
    }));
  };

  const onChangeHandler = (e) => {
    setSelect(e.target.value);
  };

  // Error Validation

  const valid = () => {
    // PaypalId
    if (paypalId == "") {
      setState((prevState) => {
        return {
          ...prevState,
          paypalIdError: "Invalid Paypal Id",
        };
      });
    }
    // DayTimePhone
    if (dayTimePhone == "") {
      setState((prevState) => {
        return {
          ...prevState,
          dayTimePhoneError: "Invalid Phone no",
        };
      });
    }
    // ZipCode
    if (zipCode == "") {
      setState((prevState) => {
        return {
          ...prevState,
          zipCodeError: "Invalid Zip Code ",
        };
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="container-fluid" style={{ backgroundColor: "#ededed" }}>
        {/**
         * Sell Custom T-shirts. Collect Donations. Easy.
         */}
        <div className="container-fluid col-9 headerText pt-5 py-5">
          <h1
            className="display-4 text-center font-weight-bold font-size-10"
            style={{ color: "#444444" }}
          >
            Fundraiser Settings
          </h1>
          <p
            className="text-center font-weight-bold font-size-3 pt-3 mt-3 "
            style={{ lineHeight: "0.2rem", color: "#444444" }}
          >
            Give your community a reason to support your passion or cause
          </p>
        </div>
      </div>

      {/**
       * Form
       */}
      <div class="container-fluid py-5 my-5">
        <div class="row">
          <div class="offset-3"></div>
          <div class="col-6">
            <form>
              <div class="form-row bg">
                <div class="col-12">
                  {/**
                   * Fundraiser Close Date
                   */}

                  <div class="form-group col-md-6">
                    <label for="inputState">
                      Fundraiser Close Date
                      <span className="text-primary"> *</span>
                    </label>
                    <select
                      id="inputState"
                      class="form-control"
                      onChange={onChangeHandler}
                    >
                      <option selected>Select one</option>
                      <option>Saturday, Jan 23 (1 week)</option>
                      <option>Saturday, January 30, 2021</option>
                      <option>Saturday, Feb 06 (3 weeks)</option>
                      <option>Saturday, February 13, 2021</option>
                      <option>Custom</option>
                    </select>
                  </div>

                  {/**
                   * Select Date
                   */}

                  {select === "Custom" ? (
                    <div class="form-group col-md-6 pt-1">
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Select Date"
                      />
                    </div>
                  ) : null}

                  {/**
                   * Are these items needed for a scheduled event?
                   */}
                  <div class="form-group col-md-12">
                    <label for="custom-radio">
                      Are these items needed for a scheduled event?{" "}
                    </label>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        onClick={() => setCheck(!check)}
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label class="form-check-label" for="defaultCheck1">
                        Text
                      </label>
                    </div>
                  </div>

                  {/**
                   * Select Date
                   */}

                  {check === true && (
                    <div class=" col-md-6 pt-1">
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Select Date"
                      />
                    </div>
                  )}

                  <div className="mt-3">
                    <span className="col-md-12 font-size-bold">
                      Estimated Delivery Date{" "}
                      <span className="text-primary">*</span>
                    </span>
                    <p className="col-md-12">Monday, Feb 22</p>
                  </div>
                  <div className="border-bottom "></div>

                  {/**
                   * Are these items needed for a scheduled event?
                   */}
                  <div class="form-group col-md-12 pt-3">
                    <label for="custom-radio">
                      Who are you raising money for?
                    </label>
                    <div>
                      <p>
                        Syed Faraz Ali for talha
                        <span>
                          <Link
                            onClick={() =>
                              history.push("/" + _campus.name + "/story")
                            }
                            className="font-size-2 pl-2"
                          >
                            {" "}
                            Change
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                  {/**
                   * Paypal Account ID
                   */}
                  <div class="form-group col-md-6 pt-1">
                    <label for="inputState">Funds will be deposited to</label>
                    <label for="inputState">PayPal Account ID</label>
                    <span className="text-primary"> *</span>
                    <input
                      required
                      name="paypalId"
                      class="form-control "
                      id="inputEmail4"
                      onChange={onClickHandler}
                      placeholder=""
                    />
                    {paypalIdError == "" && (
                      <small id="emailHelp" class="form-text text-muted">
                        Please enter a valid Paypal Id
                      </small>
                    )}
                    {paypalIdError !== "" && paypalId == "" && (
                      <small id="emailHelp" class="form-text text-danger">
                        {paypalIdError}
                      </small>
                    )}
                  </div>

                  <div className="border-bottom "></div>

                  {/**
                   * Are these items needed for a scheduled event?
                   */}
                  <div class="form-group col-md-12 py-3 border-bottom">
                    <label for="custom-radio">
                      Would you like to accept additional donations?
                      <span className="text-primary"> *</span>
                    </label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label class="form-check-label" for="defaultCheck1">
                        Yes, I'd like to accept additional donations
                      </label>
                    </div>
                  </div>

                  {/**
                   * Delivery Options
                   */}
                  <div>
                    <p>
                      Delivery Options<span className="text-primary"> *</span>
                    </p>
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        show={showShipEverthing}
                        onClick={() => showRadio("SHIPEVERYTHING")}
                        class="custom-control-input"
                        id="customControlValidation2"
                        name="radio-stacked"
                        required
                      />
                      <label
                        class="custom-control-label"
                        for="customControlValidation2"
                      >
                        Ship everything to you
                        <p>
                          We'll ship the entire order to one location with our{" "}
                          <strong>FREE</strong> Standard Shipping
                        </p>
                      </label>
                    </div>
                    <div class="custom-control custom-radio ">
                      <input
                        type="radio"
                        onClick={() => showRadio("SHIPDIRECTLY")}
                        class="custom-control-input"
                        id="customControlValidation3"
                        name="radio-stacked"
                        required
                      />
                      <label
                        class="custom-control-label"
                        for="customControlValidation3"
                      >
                        Ship directly to supporters
                        <p>
                          Orders ship individually to group members, for a small
                          shipping fee
                        </p>
                      </label>
                      <div class="invalid-feedback"></div>
                    </div>
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        onClick={() => showRadio("LETTHEM")}
                        class="custom-control-input"
                        id="customControlValidation4"
                        name="radio-stacked"
                        required
                      />
                      <label
                        class="custom-control-label"
                        for="customControlValidation4"
                      >
                        Let them choose
                        <p>
                          Supporters can choose to ship their items to you for
                          free or pay a small fee to ship to themselves
                        </p>
                      </label>
                      <div class="invalid-feedback"></div>
                    </div>

                    {/**
                     * Shipping Everthing
                     */}
                    {showShipEverthing === true && (
                      <div>
                        <div className="container pt-5">
                          <div className="row">
                            <div className="col-6">
                              <label
                                className="text-left font-size-2"
                                style={{ float: "left" }}
                                for="coupon_code"
                              >
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                id="coupon_code"
                                placeholder=""
                                autocomplete="off"
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
                                Street Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                id="coupon_code"
                                placeholder=""
                                autocomplete="off"
                              />
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
                                <option>PAKISTAN</option>
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
                            <div class="form-group col-md-6 w-100">
                              <label for="exampleFormControlTextarea1">
                                Tell Your Story
                              </label>
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/**
                     * Shipping Directly
                     */}
                    {showShipEverthing === true && (
                      <div>
                        <div className="container pt-5">
                          <div className="row">
                            <div className="col-6">
                              <label
                                className="text-left font-size-2"
                                style={{ float: "left" }}
                                for="coupon_code"
                              >
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                id="coupon_code"
                                placeholder=""
                                autocomplete="off"
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
                                Street Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                id="coupon_code"
                                placeholder=""
                                autocomplete="off"
                              />
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
                                onChange={onClickHandler}
                                className="form-control"
                              >
                                <option selected>Select One</option>
                                <option>PAKISTAN</option>
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
                            <div class="form-group col-md-6 w-100">
                              <label for="exampleFormControlTextarea1">
                                Tell Your Story
                              </label>
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/**
                     * Let Them Choose
                     */}
                    {showLetThem === true && (
                      <div>
                        <div className="container pt-5">
                          <div className="row">
                            <div className="col-6">
                              <label
                                className="text-left font-size-2"
                                style={{ float: "left" }}
                                for="coupon_code"
                              >
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                id="coupon_code"
                                placeholder=""
                                autocomplete="off"
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
                                Street Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                id="coupon_code"
                                placeholder=""
                                autocomplete="off"
                              />
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
                                onChange={onClickHandler}
                                className="form-control"
                              >
                                <option selected>Select One</option>
                                <option>PAKISTAN</option>
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
                            <div class="form-group col-md-6 w-100">
                              <label for="exampleFormControlTextarea1">
                                Tell Your Story
                              </label>
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="border-bottom py-3"></div>
                </div>
              </div>

              {/**
               * Contact Information
               */}

              <div className="pt-3">
                {" "}
                <p>Contact Information</p>
                <div class="form-group col-md-6 ">
                  <br />
                  <label for="inputState">Daytime Phone</label>{" "}
                  <span className="text-primary"> *</span>
                  <input
                    required
                    name="dayTimePhone"
                    class="form-control"
                    id="inputEmail4"
                    onChange={onClickHandler}
                    placeholder=""
                  />
                  {dayTimePhoneError == "" && (
                    <small id="emailHelp" class="form-text text-muted">
                      e.g. 202-555-2424
                    </small>
                  )}
                  {dayTimePhoneError !== "" && dayTimePhone == "" && (
                    <small id="emailHelp" class="form-text text-danger">
                      {dayTimePhoneError}
                    </small>
                  )}
                </div>
                <div class="form-group col-md-6">
                  <label for="inputState">Zip Code</label>{" "}
                  <span className="text-primary"> *</span>
                  <input
                    name="zipCode"
                    class="form-control"
                    id="inputEmail4"
                    onChange={onClickHandler}
                    placeholder=""
                  />
                  {zipCodeError == "" && (
                    <small id="emailHelp" class="form-text text-muted">
                      e.g. 20031 or 22031-0011
                    </small>
                  )}
                  {zipCodeError !== "" && zipCode == "" && (
                    <small id="emailHelp" class="form-text text-danger">
                      {zipCodeError}
                    </small>
                  )}
                </div>
              </div>
              {/**
               * How did you hear about Custom Ink Fundraising?
               */}
              <div class="form-group col-md-7 font-size-2">
                <label for="inputState">
                  How did you hear about Custom Ink Fundraising?
                  <span className="text-primary"> *</span>
                </label>
                <select
                  id="inputState"
                  class="form-control"
                  onChange={onChangeHandler}
                >
                  <option selected>Select one</option>
                  <option>Billboard</option>
                  <option>Booster contacted me first</option>
                  <option>
                    I supported or viewed another Booster fundraiser
                  </option>
                  <option>News story about Booster</option>
                  <option>Not sure, I just know Booster</option>
                  <option>Online Ads</option>
                  <option>Received a catalog</option>
                  <option>Someone told me</option>
                  <option>TV Commercial</option>
                  <option>Used a search engine</option>
                  <option>Custom</option>
                </select>
              </div>
            </form>
            <div className="pt-2">
              <button
                type="submit"
                class="btn btn-dark ml-3 mt-4"
                onClick={() => postData()}
              >
                Launch Fundraiser
              </button>
              <button type="submit" class="btn btn-outline-dark ml-3 mt-4">
                Save
              </button>
            </div>
          </div>
          <div class="offset-3"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
