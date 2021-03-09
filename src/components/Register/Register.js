import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function Register(props) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    emailAddress: "",
    studentId: "",
    verifyStudentId: "",
    ChoosePassword: "",
    confirmPassword: "",
    Student: "",
    Alumni: "",
    Faculty: "",
    parent: "",
    Athletic: "",
    Others: "",
    Male: "",
    Female: "",
    RatherNotSay: "",
  });

  const {
    firstName,
    lastName,
    phone,
    emailAddress,
    studentId,
    verifyStudentId,
    ChoosePassword,
    confirmPassword,
    Student,
    Alumni,
    Faculty,
    parent,
    Athletic,
    Others,
    Male,
    Female,
    RatherNotSay,
  } = state;

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
    data.append("firstName", firstName);
    data.append("lastName", lastName);
    data.append(" phone ", phone);
    data.append("emailAddress", emailAddress);
    data.append("studentId", studentId);
    data.append("verifyStudentId", verifyStudentId);
    data.append("choosePassword", ChoosePassword);
    data.append("confirmPassword", confirmPassword);

    data.append('student" ', Student);
    data.append("Alumni", Alumni);

    data.append("parent", parent);
    data.append("Athletic", Athletic);
    data.append("Others", Others);
    data.append("Male", Male);
    data.append("Female", Female);
    data.append("RatherNotSay", RatherNotSay);
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
                    Connect To Store
                  </h4>
                </header>
                <div
                  className="entry-content"
                  style={{ width: "800px", margin: "0 auto" }}
                >
                  <div className="woocommerce">
                    <form
                      name="checkout"
                      method="post"
                      className="checkout woocommerce-checkout row mt-8"
                      action="https://themes.woocommerce.com/storefront/checkout/"
                      enctype="multipart/form-data"
                      novalidate="novalidate"
                      onSubmit={onClickHandler}
                    >
                      <div
                        className="col2-set col-md-12 col-lg-12 col-xl-12 mb-12 mb-md-0"
                        id="customer_details"
                      >
                        <div className="px-4 pt-5 bg-white border">
                          <div className="woocommerce-billing-fields">
                            <center>
                              <h4 className="mb-4">Signup</h4>
                            </center>
                            <div className="row" style={{ padding: "0 20px" }}>
                              <div className="woocommerce-billing-fields__field-wrapper row">
                                <p
                                  className="col-6 mb-4d75 form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                                  id="billing_country_field"
                                  data-priority="40"
                                >
                                  <label
                                    for="billing_country"
                                    className="form-label"
                                  >
                                    I AM A{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <select
                                    name="billing_country"
                                    id="billing_country"
                                    className="form-control country_to_state country_select  select2-hidden-accessible"
                                    autocomplete="country"
                                    tabindex="-1"
                                    aria-hidden="true"
                                  >
                                    <option value="">
                                      Please choose from list
                                    </option>
                                    <option
                                      value={Student}
                                      onChange={onChangeHandler}
                                    >{`Student$.Student} `}</option>
                                    <option
                                      value={Alumni}
                                      onChange={onChangeHandler}
                                    >{`Alumni${Alumni} `}</option>
                                    <option
                                      value={Faculty}
                                      onChange={onChangeHandler}
                                    >{`Faculty${Faculty} `}</option>
                                    <option
                                      value={parent}
                                      onChange={onChangeHandler}
                                    >{`Parent or Family Member${parent}`}</option>
                                    <option
                                      value={Athletic}
                                      onChange={onChangeHandler}
                                    >{`Athletic Fan${Athletic}`}</option>
                                    <option
                                      value={Others}
                                      onChange={onChangeHandler}
                                    >
                                      {`Other${Others}`}Other
                                    </option>
                                  </select>
                                </p>
                                <p
                                  className="col-6 mb-4d75 form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                                  id="billing_country_field"
                                  data-priority="40"
                                >
                                  <label
                                    for="billing_country"
                                    className="form-label"
                                  >
                                    I AM A{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <select
                                    name="billing_country"
                                    id="billing_country"
                                    className="form-control country_to_state country_select  select2-hidden-accessible"
                                    autocomplete="country"
                                    tabindex="-1"
                                    aria-hidden="true"
                                  >
                                    <option value="">
                                      Please choose from list
                                    </option>
                                    <option
                                      value={Male}
                                      onChange={onChangeHandler}
                                    >{`Male${Male}`}</option>
                                    <option
                                      value={Female}
                                      onChange={onChangeHandler}
                                    >{`Female${Female}`}</option>
                                    <option
                                      value={RatherNotSay}
                                      onChange={onChangeHandler}
                                    >
                                      {`${RatherNotSay}`}Rather Not Say
                                    </option>
                                  </select>
                                </p>
                                <p
                                  className="col-lg-6 mb-4d75 form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field"
                                  id="billing_first_name_field"
                                  data-priority="10"
                                >
                                  <label
                                    for="billing_first_name"
                                    className="form-label"
                                  >
                                    First name{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <input
                                    type="text"
                                    className="input-text form-control"
                                    name="firstName"
                                    id="billing_first_name"
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={onChangeHandler}
                                    autocomplete="given-name"
                                    autofocus="autofocus"
                                  />
                                </p>
                                <p
                                  className="col-lg-6 mb-4d75 form-row form-row-last validate-required"
                                  id="billing_last_name_field"
                                  data-priority="20"
                                >
                                  <label
                                    for="billing_last_name"
                                    className="form-label"
                                  >
                                    Last name{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <input
                                    type="text"
                                    className="input-text form-control"
                                    name="lastName"
                                    id="billing_last_name"
                                    placeholder="Last name "
                                    value={lastName}
                                    onChange={onChangeHandler}
                                    autocomplete="family-name"
                                  />
                                </p>
                                <p
                                  className="col-6 mb-4d75 form-row form-row-first validate-required validate-phone"
                                  id="billing_phone_field"
                                  data-priority="100"
                                >
                                  <label
                                    for="billing_phone"
                                    className="form-label"
                                  >
                                    Phone{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <input
                                    type="tel"
                                    className="input-text form-control"
                                    name="phone"
                                    id="billing_phone"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={onChangeHandler}
                                    autocomplete="tel"
                                  />
                                </p>
                                <p
                                  className="col-6 mb-4d75 form-row form-row-last validate-required validate-email"
                                  id="billing_email_field"
                                  data-priority="110"
                                >
                                  <label
                                    for="billing_email"
                                    className="form-label"
                                  >
                                    Email address{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <input
                                    type="email"
                                    className="input-text form-control"
                                    name="emailAddress"
                                    id="billing_email"
                                    placeholder="Email address"
                                    value={emailAddress}
                                    onChange={onChangeHandler}
                                    autocomplete="email"
                                  />
                                </p>
                                <p
                                  className="col-6 mb-4d75 form-row form-row-last validate-required validate-email"
                                  id="billing_email_field"
                                  data-priority="110"
                                >
                                  <label
                                    for="billing_email"
                                    className="form-label"
                                  >
                                    Student ID{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <input
                                    type="email"
                                    className="input-text form-control"
                                    name="studentId"
                                    id="billing_email"
                                    placeholder="Student ID"
                                    value={studentId}
                                    onChange={onChangeHandler}
                                    autocomplete="email"
                                  />
                                </p>
                                <p
                                  className="col-6 mb-4d75 form-row form-row-last validate-required validate-email"
                                  id="billing_email_field"
                                  data-priority="110"
                                >
                                  <label
                                    for="billing_email"
                                    className="form-label"
                                  >
                                    Verify Student ID{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <input
                                    type="email"
                                    className="input-text form-control"
                                    name="verifyStudentId"
                                    id="billing_email"
                                    placeholder="Verify Student ID"
                                    value={verifyStudentId}
                                    onChange={onChangeHandler}
                                    autocomplete="email"
                                  />
                                </p>
                                <small className="col-12">
                                  (Password must be a minimum of 7 characters,
                                  must contain at least 1 upper case letter, 1
                                  lower case letter and 1 special character).
                                </small>
                                <p
                                  className="col-6 mb-4d75 form-row form-row-last validate-required validate-email"
                                  id="billing_email_field"
                                  data-priority="110"
                                >
                                  <label
                                    for="billing_email"
                                    className="form-label"
                                  >
                                    Choose Password{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <input
                                    type="email"
                                    className="input-text form-control"
                                    name="ChoosePassword"
                                    id="billing_email"
                                    placeholder="Choose Password"
                                    value={ChoosePassword}
                                    onChange={onChangeHandler}
                                    autocomplete="email"
                                  />
                                </p>
                                <p
                                  className="col-6 mb-4d75 form-row form-row-last validate-required validate-email"
                                  id="billing_email_field"
                                  data-priority="110"
                                >
                                  <label
                                    for="billing_email"
                                    className="form-label"
                                  >
                                    Confirm Password{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <input
                                    type="email"
                                    className="input-text form-control"
                                    name="confirmPassword"
                                    id="billing_email"
                                    placeholder="Confirm Password "
                                    value={confirmPassword}
                                    onChange={onChangeHandler}
                                    autocomplete="email"
                                  />
                                </p>
                                <p className="col-12" tabindex="0">
                                  {" "}
                                  By signing up you acknowledge you have read
                                  and agree to our
                                  <a
                                    href="#"
                                    style={{ color: "blue" }}
                                    onclick="window.open('https://www.bned.com/terms-of-use/', '_blank', 'location=yes,height=570,width=620,scrollbars=yes,status=yes')"
                                  >
                                    Terms of Use
                                  </a>{" "}
                                  and
                                  <a
                                    href="#"
                                    style={{ color: "blue" }}
                                    onclick="window.open('https://www.bned.com/privacy-policy/', '_blank', 'location=yes,height=570,width=620,scrollbars=yes,status=yes')"
                                  >
                                    Privacy Policy
                                  </a>
                                </p>
                                <div
                                  className="col-4 ml-3 mb-5 mt-3 button alt btn btn-dark btn-block rounded"
                                  onClick={onClickHandler}
                                >
                                  Signup
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default Register;
