import React, { useState, useEffect } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import axios from "axios";

// React Toastify //
import Success from "../Login/Success";
import Failed from "../Login/Failed";

// Port //
import { api } from "../../utils/Contant";

import { useDispatch, useSelector } from "react-redux";
import { getFundraiser } from "../../redux/actions/Actions";

function Story({ history, match }) {
  const [show, setShow] = useState({
    showSearch: false,
    showAllFunds: false,
    showOthers: false,
  });
  const { showSearch, showAllFunds, showOthers } = show;

  const showRadio = (key) => {
    switch (key) {
      case "SEARCH":
        setShow((prevState) => {
          return {
            ...prevState,
            showSearch: true,
            showAllFunds: false,
            showOthers: false,
          };
        });
        break;
      case "ALLFUNDS":
        setShow((prevState) => {
          return {
            ...prevState,
            showAllFunds: true,
            showSearch: false,
            showOthers: false,
          };
        });
        break;
      case "OTHERS":
        setShow((prevState) => {
          return {
            ...prevState,
            showAllFunds: false,
            showSearch: false,
            showOthers: true,
          };
        });
        break;

      default:
        return show;
    }
  };

  const dispatch = useDispatch();
  const _state = useSelector((state) => state.root);

  const { _campus, _fundraiser } = _state;

  const [state, setState] = useState({
    fundraiserTitle: "",
    fundraiserName: "",
    fundraiserHeadline: "",
    fundraiserStory: "",
    fundraiserUrl: "",
    fundraiserTitleError: "",
    fundraiserNameError: "",
    fundraiserHeadlineError: "",
    fundraiserStoryError: "",
    fundraiserUrlError: "",
  });

  const {
    fundraiserTitle,
    fundraiserName,
    fundraiserHeadline,
    fundraiserStory,
    fundraiserUrl,
    fundraiserTitleError,
    fundraiserNameError,
    fundraiserHeadlineError,
    fundraiserStoryError,
    fundraiserUrlError,
  } = state;

  /**
   * Axios POST API
   */

  const postData = async () => {
    console.log("state :>> ", state);
    valid();
    if (
      fundraiserTitle !== "" &&
      fundraiserName !== "" &&
      fundraiserHeadline !== "" &&
      fundraiserStory !== "" &&
      fundraiserUrl !== ""
    ) {
      try {
        let response = await axios.post(api + "5004/api/fund_raiser", {
          title: fundraiserTitle,

          fund_raiser_name: fundraiserName,

          headline: fundraiserHeadline,

          story: fundraiserStory,

          fund_raiser_url: fundraiserUrl,
          campus_storeId: _campus._id,
        });

        console.log(response);
        response.status == 200
          ? setTimeout(() => {
              Success("Story Updated");
              history.push("/" + _campus.name + "/settings");
            }, 500)
          : Failed("Oops! Something Went Wrong");
      } catch (error) {
        console.log("error", error);
      }
    } else {
      Failed("All fields must be filled!");
    }
  };

  const onChangeHandler = (e) => {
    e.persist();

    console.log("e.target.name :>> ", e.target.name, e.target.value);

    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      fundraiserTitleError: "",
      fundraiserNameError: "",
      fundraiserHeadlineError: "",
      fundraiserStoryError: "",
      fundraiserUrlError: "",
    }));
  };

  // Error Validation

  const valid = () => {
    // Fundraiser Title
    if (fundraiserTitle == "") {
      setState((prevState) => {
        return {
          ...prevState,
          fundraiserTitleError: "Invalid Fundraiser Title",
        };
      });
    }
    // Fundraiser Name
    if (fundraiserName == "") {
      setState((prevState) => {
        return {
          ...prevState,
          fundraiserNameError: "Invalid Fundraiser Name",
        };
      });
    }
    // Fundraiser Headline
    if (fundraiserHeadline == "") {
      setState((prevState) => {
        return {
          ...prevState,
          fundraiserHeadlineError: "Invalid Fundraiser Headline",
        };
      });
    }
    // Fundraiser Story
    if (fundraiserStory == "") {
      setState((prevState) => {
        return {
          ...prevState,
          fundraiserStoryError: "Invalid Fundraiser Story",
        };
      });
    }
    // Fundraiser Url
    if (fundraiserUrl == "") {
      setState((prevState) => {
        return {
          ...prevState,
          fundraiserUrlError: "Invalid Fundraiser Url",
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
            Tell Your Story
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
            <div class="form-row bg">
              <div class="col-12">
                {/**
                 * Fundraiser Title
                 */}
                <div class="form-group col-md-12 ">
                  <label for="inputEmail4">
                    Fundraiser Title<span className="text-primary"> *</span>
                  </label>
                  <input
                    required
                    name="fundraiserTitle"
                    class="form-control"
                    id="inputEmail4"
                    onChange={onChangeHandler}
                    placeholder="Fundraiser Title"
                  />
                  {fundraiserTitleError == "" && (
                    <small id="emailHelp" class="form-text text-muted">
                      e.g. Support Fairfax First Responders
                    </small>
                  )}
                  {fundraiserTitleError !== "" && fundraiserTitle == "" && (
                    <small id="emailHelp" class="form-text text-danger">
                      {fundraiserTitleError}
                    </small>
                  )}
                </div>

                {/**
                 * Organizer Name / Fundraiser Name
                 */}
                <div class="form-group col-md-12">
                  <label for="inputEmail4">
                    Organizer Name<span className="text-primary"> *</span>
                  </label>
                  <input
                    required
                    name="fundraiserName"
                    class="form-control"
                    id="inputEmail4"
                    onChange={onChangeHandler}
                    placeholder="Organizer Name"
                  />
                  {fundraiserNameError == "" && (
                    <small id="emailHelp" class="form-text text-muted">
                      Please enter organizer name (e.g. John Smith or Habitat
                      for Humanity)
                    </small>
                  )}
                  {fundraiserNameError !== "" && fundraiserName == "" && (
                    <small id="emailHelp" class="form-text text-danger">
                      {fundraiserNameError}
                    </small>
                  )}
                </div>

                {/**
                 * Headline / Fundraiser Headline
                 */}
                <div class="form-group col-md-12">
                  <label for="inputEmail4">
                    Headline<span className="text-primary"> *</span>
                  </label>
                  <input
                    required
                    name="fundraiserHeadline"
                    class="form-control"
                    id="inputEmail4"
                    onChange={onChangeHandler}
                    placeholder="Headline"
                  />
                  {fundraiserHeadlineError == "" && (
                    <small id="emailHelp" class="form-text text-muted">
                      e.g. Buy a shirt to help our cause today!
                    </small>
                  )}
                  {fundraiserHeadlineError !== "" && fundraiserHeadline == "" && (
                    <small id="emailHelp" class="form-text text-danger">
                      {fundraiserHeadlineError}
                    </small>
                  )}
                </div>

                {/**
                 * Who are you raising money for?
                 */}
                <div class="form-group col-md-12">
                  <label for="custom-radio">
                    Who are you raising money for?
                    <span className="text-primary"> *</span>
                  </label>
                  <div class="custom-control custom-radio">
                    <input
                      required
                      type="radio"
                      show={showSearch}
                      onClick={() => showRadio("SEARCH")}
                      class="custom-control-input"
                      id="customControlValidation1"
                      name="radio-stacked"
                      required
                    />
                    <label
                      class="custom-control-label"
                      for="customControlValidation1"
                    >
                      Charity
                    </label>
                    <span className="ml-5">
                      <input
                        required
                        type="radio"
                        show={showAllFunds}
                        onClick={() => showRadio("ALLFUNDS")}
                        class="custom-control-input"
                        id="customControlValidation2"
                        name="radio-stacked"
                        required
                      />
                      <label
                        class="custom-control-label"
                        for="customControlValidation2"
                      >
                        Me
                      </label>
                    </span>

                    <span className="ml-5">
                      <input
                        required
                        type="radio"
                        show={showOthers}
                        onClick={() => showRadio("OTHERS")}
                        class="custom-control-input"
                        id="customControlValidation3"
                        name="radio-stacked"
                        required
                      />
                      <label
                        class="custom-control-label"
                        for="customControlValidation3"
                      >
                        Others
                      </label>
                    </span>
                  </div>
                </div>
                {/**
                 * Search
                 */}

                {showSearch === true && (
                  <div className="col-12 py-2 pb-2 mb-3">
                    <form class="form-inline d-flex justify-content-start">
                      <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search and select your charity or non-profit"
                        aria-label="Search"
                      />
                      <button
                        class="btn btn-success my-2 my-sm-0"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                )}

                {/**
                 * All funds raised will go to Syed Faraz Ali (the organizer), for
                 */}

                {showAllFunds === true && (
                  <div className="col-12 py-2 pb-2 mb-3">
                    <label
                      className="text-left font-size-2 "
                      for="coupon_code"
                      style={{ float: "left" }}
                    >
                      All funds raised will go to Syed Faraz Ali (the
                      organizer), for
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      name="firstname"
                      id="coupon_code"
                      placeholder=""
                      autocomplete="off"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      e.g. 2021 band trip to Nationals
                    </small>
                  </div>
                )}

                {/**
                 * Others#1
                 */}

                {showOthers === true && (
                  <div className="col-12 py-2 pb-2 mb-3">
                    <label
                      className="text-left font-size-2 "
                      for="coupon_code"
                      style={{ float: "left" }}
                    >
                      All funds raised will be paid directly to
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      id="coupon_code"
                      placeholder=""
                      autocomplete="off"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      e.g. Skyline High School
                    </small>
                  </div>
                )}

                {/**
                 * Others#2
                 */}

                {showOthers === true && (
                  <div className="col-12 py-1 pb-2 mb-3">
                    <label
                      className="text-left font-size-2 "
                      for="coupon_code"
                      style={{ float: "left" }}
                    >
                      For
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      id="coupon_code"
                      placeholder=""
                      autocomplete="off"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      e.g. Buying team jerseys
                    </small>
                  </div>
                )}

                <div className="ml-3"> </div>
                <div class="form-group col-md-12 w-100">
                  <label for="exampleFormControlTextarea1">
                    Tell Your Story
                  </label>
                  <textarea
                    required
                    class="form-control"
                    name="fundraiserStory"
                    onChange={onChangeHandler}
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                  {fundraiserStoryError == "" && (
                    <small id="emailHelp" class="form-text text-muted">
                      Fundraiser story
                    </small>
                  )}
                  {fundraiserStoryError !== "" && fundraiserStory == "" && (
                    <small id="emailHelp" class="form-text text-danger">
                      {fundraiserStoryError}
                    </small>
                  )}
                </div>

                {/**
                 * Fundraiser URL
                 */}
                <div class="form-group col-md-6">
                  <label for="inputEmail4">
                    Fundraiser URL<span className="text-primary"> *</span>
                  </label>
                  <input
                    required
                    name="fundraiserUrl"
                    class="form-control"
                    id="inputEmail4"
                    onChange={onChangeHandler}
                    placeholder=""
                  />
                  {fundraiserUrlError == "" && (
                    <small id="emailHelp" class="form-text text-muted">
                      https://customink.com/fundraising/
                    </small>
                  )}
                  {fundraiserUrlError !== "" && fundraiserUrl == "" && (
                    <small id="emailHelp" class="form-text text-danger">
                      {fundraiserUrlError}
                    </small>
                  )}
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-dark ml-3 mt-4"
              onClick={() => {
                postData();
              }}
            >
              Save & Continue
            </button>
          </div>
          <div class="offset-3"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(Story);
