import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Aside from "../Common/Aside";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Checkout = (props) => {
  const dispatch = useDispatch();
  const _state = useSelector((state) => state.root);
  const { _cart } = _state;

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    countryName: "",
    streetAddress: "",
    streetAddress2: "",
    town: "",
    country: "",
    postCode: "",
    phone: "",
    emailAddress: "",
    additionalInformation: "",
    freeshipping: "",
    flaterate: "",
    localpickup: "",
  });

  const {
    firstName,
    lastName,
    companyName,
    countryName,
    streetAddress,
    streetAddress2,
    town,
    country,
    postCode,
    phone,
    emailAddress,
    additionalInformation,
    flaterate,
    freeshipping,
    localpickup,
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
    data.append("studentId", companyName);
    data.append("verifyStudentId", streetAddress);
    data.append("verifyStudentId", streetAddress2);
    data.append("choosePassword", town);
    data.append("confirmPassword", country);
    data.append("verifyStudentId", postCode);
    data.append("choosePassword", freeshipping);
    data.append("confirmPassword", flaterate);
    data.append("verifyStudentId", localpickup);
  };

  let _totals = _cart.reduce(
    (accumulatedValue, cartItem) =>
      accumulatedValue + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div>
      <Header />
      {/* <Aside /> */}

      <div
        id="content"
        className="site-content space-bottom-3"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div className="col-full container">
          <div
            id="primary"
            className="content-area"
            style={{ paddingBottom: "10%" }}
          >
            <main id="main" className="site-main">
              <article
                id="post-6"
                className="post-6 page type-page status-publish hentry"
              >
                <header className="entry-header space-top-2 space-bottom-1 mb-2">
                  <div className="container col-9 headerText  pb-3">
                    <h1 className="display-4 text-center text-uppercase font-size-10">
                      checkout
                    </h1>
                    <hr />
                  </div>
                </header>

                <div className="entry-content">
                  <div
                    className="woocommerce"
                    style={{ borderTop: "2px solid black" }}
                  >
                    <div className="woocommerce-info p-4 bg-white">
                      Have a coupon?
                      <a
                        className="showcoupon"
                        data-toggle="collapse"
                        href="#collapseExample9"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample9"
                      >
                        {" "}
                        Click here to enter your code
                      </a>
                    </div>
                    <form
                      id="collapseExample9"
                      className="collapse checkout_coupon mt-4 p-4 bg-white "
                      method="post"
                      style={{ borderTop: "2px solid black" }}
                    >
                      <div className="row d-flex">
                        <p className="col-md-4 d-inline form-row form-row-first mb-3 mb-md-0">
                          <input
                            type="text"
                            name="coupon_code1"
                            className="input-text form-control"
                            placeholder="Coupon code"
                            id="coupon_code1"
                            value=""
                          />
                        </p>
                        <p className="col-md-3 d-inline form-row form-row-last">
                          <input
                            type="submit"
                            className="button form-control border-0 height-4 btn btn-dark rounded-0"
                            name="apply_coupon"
                            value="Apply coupon"
                          />
                        </p>
                      </div>
                      <div className="clear"></div>
                    </form>

                    <form
                      name="checkout"
                      method="post"
                      // onSubmit={onClickHandler}
                      className="checkout woocommerce-checkout row mt-8"
                      action="https://themes.woocommerce.com/storefront/checkout/"
                      enctype="multipart/form-data"
                      novalidate="novalidate"
                    >
                      {/**
                       * BILLING DETAILS
                       */}
                      <div
                        className="col2-set col-md-6 col-lg-7 col-xl-8 mb-6 mb-md-0"
                        id="customer_details"
                      >
                        <div
                          className="px-4 pt-5 bg-white "
                          style={{ borderTop: "2px solid black" }}
                        >
                          <div className="woocommerce-billing-fields">
                            <h3 className="mb-4 font-size-3">
                              Billing details
                            </h3>
                            <div className="woocommerce-billing-fields__field-wrapper row">
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
                                  placeholder=""
                                  // onChange={onChangeHandler}
                                  value={firstName}
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
                                  placeholder=""
                                  // onChange={onChangeHandler}
                                  value={lastName}
                                  autocomplete="family-name"
                                />
                              </p>
                              <p
                                className="col-12 mb-4d75 form-row form-row-wide"
                                id="billing_company_field"
                                data-priority="30"
                              >
                                <label
                                  for="billing_company"
                                  className="form-label"
                                >
                                  Company name
                                </label>
                                <input
                                  type="text"
                                  className="input-text form-control"
                                  name="companyName"
                                  id="billing_company"
                                  placeholder=""
                                  // onChange={onChangeHandler}
                                  value={companyName}
                                  autocomplete="organization"
                                />
                              </p>
                              <p
                                className="col-12 mb-4d75 form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                                id="billing_country_field"
                                data-priority="40"
                              >
                                <label
                                  for="billing_country"
                                  className="form-label"
                                >
                                  Country{" "}
                                  <abbr className="required" title="required">
                                    *
                                  </abbr>
                                </label>
                                <select
                                  name="country"
                                  // onChange={onChangeHandler}
                                  value={country}
                                  id="billing_country"
                                  className="form-control country_to_state country_select  select2-hidden-accessible"
                                  autocomplete="country"
                                  tabindex="-1"
                                  aria-hidden="true"
                                >
                                  <option value="">Select a country…</option>
                                  <option value="AX">Åland Islands</option>
                                  <option value="AF">Afghanistan</option>
                                  <option value="AL">Albania</option>
                                  <option value="DZ">Algeria</option>
                                  <option value="AS">American Samoa</option>
                                  <option value="AD">Andorra</option>
                                  <option value="AO">Angola</option>
                                  <option value="AI">Anguilla</option>
                                  <option value="AQ">Antarctica</option>
                                  <option value="AG">
                                    Antigua and Barbuda
                                  </option>
                                  <option value="AR">Argentina</option>
                                  <option value="AM">Armenia</option>
                                  <option value="AW">Aruba</option>
                                  <option value="AU">Australia</option>
                                  <option value="AT">Austria</option>
                                  <option value="AZ">Azerbaijan</option>
                                  <option value="BS">Bahamas</option>
                                  <option value="BH">Bahrain</option>
                                  <option value="BD">Bangladesh</option>
                                  <option value="BB">Barbados</option>
                                  <option value="BY">Belarus</option>
                                  <option value="PW">Belau</option>
                                  <option value="BE">Belgium</option>
                                  <option value="BZ">Belize</option>
                                  <option value="BJ">Benin</option>
                                  <option value="BM">Bermuda</option>
                                  <option value="BT">Bhutan</option>
                                  <option value="BO">Bolivia</option>
                                  <option value="BQ">
                                    Bonaire, Saint Eustatius and Saba
                                  </option>
                                  <option value="BA">
                                    Bosnia and Herzegovina
                                  </option>
                                  <option value="BW">Botswana</option>
                                  <option value="BV">Bouvet Island</option>
                                  <option value="BR">Brazil</option>
                                  <option value="IO">
                                    British Indian Ocean Territory
                                  </option>
                                  <option value="VG">
                                    British Virgin Islands
                                  </option>
                                  <option value="BN">Brunei</option>
                                  <option value="BG">Bulgaria</option>
                                  <option value="BF">Burkina Faso</option>
                                  <option value="BI">Burundi</option>
                                  <option value="KH">Cambodia</option>
                                  <option value="CM">Cameroon</option>
                                  <option value="CA">Canada</option>
                                  <option value="CV">Cape Verde</option>
                                  <option value="KY">Cayman Islands</option>
                                  <option value="CF">
                                    Central African Republic
                                  </option>
                                  <option value="TD">Chad</option>
                                  <option value="CL">Chile</option>
                                  <option value="CN">China</option>
                                  <option value="CX">Christmas Island</option>
                                  <option value="CC">
                                    Cocos (Keeling) Islands
                                  </option>
                                  <option value="CO">Colombia</option>
                                  <option value="KM">Comoros</option>
                                  <option value="CG">
                                    Congo (Brazzaville)
                                  </option>
                                  <option value="CD">Congo (Kinshasa)</option>
                                  <option value="CK">Cook Islands</option>
                                  <option value="CR">Costa Rica</option>
                                  <option value="HR">Croatia</option>
                                  <option value="CU">Cuba</option>
                                  <option value="CW">Curaçao</option>
                                  <option value="CY">Cyprus</option>
                                  <option value="CZ">Czech Republic</option>
                                  <option value="DK">Denmark</option>
                                  <option value="DJ">Djibouti</option>
                                  <option value="DM">Dominica</option>
                                  <option value="DO">Dominican Republic</option>
                                  <option value="EC">Ecuador</option>
                                  <option value="EG">Egypt</option>
                                  <option value="SV">El Salvador</option>
                                  <option value="GQ">Equatorial Guinea</option>
                                  <option value="ER">Eritrea</option>
                                  <option value="EE">Estonia</option>
                                  <option value="ET">Ethiopia</option>
                                  <option value="FK">Falkland Islands</option>
                                  <option value="FO">Faroe Islands</option>
                                  <option value="FJ">Fiji</option>
                                  <option value="FI">Finland</option>
                                  <option value="FR">France</option>
                                  <option value="GF">French Guiana</option>
                                  <option value="PF">French Polynesia</option>
                                  <option value="TF">
                                    French Southern Territories
                                  </option>
                                  <option value="GA">Gabon</option>
                                  <option value="GM">Gambia</option>
                                  <option value="GE">Georgia</option>
                                  <option value="DE">Germany</option>
                                  <option value="GH">Ghana</option>
                                  <option value="GI">Gibraltar</option>
                                  <option value="GR">Greece</option>
                                  <option value="GL">Greenland</option>
                                  <option value="GD">Grenada</option>
                                  <option value="GP">Guadeloupe</option>
                                  <option value="GU">Guam</option>
                                  <option value="GT">Guatemala</option>
                                  <option value="GG">Guernsey</option>
                                  <option value="GN">Guinea</option>
                                  <option value="GW">Guinea-Bissau</option>
                                  <option value="GY">Guyana</option>
                                  <option value="HT">Haiti</option>
                                  <option value="HM">
                                    Heard Island and McDonald Islands
                                  </option>
                                  <option value="HN">Honduras</option>
                                  <option value="HK">Hong Kong</option>
                                  <option value="HU">Hungary</option>
                                  <option value="IS">Iceland</option>
                                  <option value="IN">India</option>
                                  <option value="ID">Indonesia</option>
                                  <option value="IR">Iran</option>
                                  <option value="IQ">Iraq</option>
                                  <option value="IE">Ireland</option>
                                  <option value="IM">Isle of Man</option>
                                  <option value="IL">Israel</option>
                                  <option value="IT">Italy</option>
                                  <option value="CI">Ivory Coast</option>
                                  <option value="JM">Jamaica</option>
                                  <option value="JP">Japan</option>
                                  <option value="JE">Jersey</option>
                                  <option value="JO">Jordan</option>
                                  <option value="KZ">Kazakhstan</option>
                                  <option value="KE">Kenya</option>
                                  <option value="KI">Kiribati</option>
                                  <option value="KW">Kuwait</option>
                                  <option value="KG">Kyrgyzstan</option>
                                  <option value="LA">Laos</option>
                                  <option value="LV">Latvia</option>
                                  <option value="LB">Lebanon</option>
                                  <option value="LS">Lesotho</option>
                                  <option value="LR">Liberia</option>
                                  <option value="LY">Libya</option>
                                  <option value="LI">Liechtenstein</option>
                                  <option value="LT">Lithuania</option>
                                  <option value="LU">Luxembourg</option>
                                  <option value="MO">
                                    Macao S.A.R., China
                                  </option>
                                  <option value="MK">Macedonia</option>
                                  <option value="MG">Madagascar</option>
                                  <option value="MW">Malawi</option>
                                  <option value="MY">Malaysia</option>
                                  <option value="MV">Maldives</option>
                                  <option value="ML">Mali</option>
                                  <option value="MT">Malta</option>
                                  <option value="MH">Marshall Islands</option>
                                  <option value="MQ">Martinique</option>
                                  <option value="MR">Mauritania</option>
                                  <option value="MU">Mauritius</option>
                                  <option value="YT">Mayotte</option>
                                  <option value="MX">Mexico</option>
                                  <option value="FM">Micronesia</option>
                                  <option value="MD">Moldova</option>
                                  <option value="MC">Monaco</option>
                                  <option value="MN">Mongolia</option>
                                  <option value="ME">Montenegro</option>
                                  <option value="MS">Montserrat</option>
                                  <option value="MA">Morocco</option>
                                  <option value="MZ">Mozambique</option>
                                  <option value="MM">Myanmar</option>
                                  <option value="NA">Namibia</option>
                                  <option value="NR">Nauru</option>
                                  <option value="NP">Nepal</option>
                                  <option value="NL">Netherlands</option>
                                  <option value="NC">New Caledonia</option>
                                  <option value="NZ">New Zealand</option>
                                  <option value="NI">Nicaragua</option>
                                  <option value="NE">Niger</option>
                                  <option value="NG">Nigeria</option>
                                  <option value="NU">Niue</option>
                                  <option value="NF">Norfolk Island</option>
                                  <option value="KP">North Korea</option>
                                  <option value="MP">
                                    Northern Mariana Islands
                                  </option>
                                  <option value="NO">Norway</option>
                                  <option value="OM">Oman</option>
                                  <option value="PK">Pakistan</option>
                                  <option value="PS">
                                    Palestinian Territory
                                  </option>
                                  <option value="PA">Panama</option>
                                  <option value="PG">Papua New Guinea</option>
                                  <option value="PY">Paraguay</option>
                                  <option value="PE">Peru</option>
                                  <option value="PH">Philippines</option>
                                  <option value="PN">Pitcairn</option>
                                  <option value="PL">Poland</option>
                                  <option value="PT">Portugal</option>
                                  <option value="PR">Puerto Rico</option>
                                  <option value="QA">Qatar</option>
                                  <option value="RE">Reunion</option>
                                  <option value="RO">Romania</option>
                                  <option value="RU">Russia</option>
                                  <option value="RW">Rwanda</option>
                                  <option value="ST">
                                    São Tomé and Príncipe
                                  </option>
                                  <option value="BL">Saint Barthélemy</option>
                                  <option value="SH">Saint Helena</option>
                                  <option value="KN">
                                    Saint Kitts and Nevis
                                  </option>
                                  <option value="LC">Saint Lucia</option>
                                  <option value="SX">
                                    Saint Martin (Dutch part)
                                  </option>
                                  <option value="MF">
                                    Saint Martin (French part)
                                  </option>
                                  <option value="PM">
                                    Saint Pierre and Miquelon
                                  </option>
                                  <option value="VC">
                                    Saint Vincent and the Grenadines
                                  </option>
                                  <option value="WS">Samoa</option>
                                  <option value="SM">San Marino</option>
                                  <option value="SA">Saudi Arabia</option>
                                  <option value="SN">Senegal</option>
                                  <option value="RS">Serbia</option>
                                  <option value="SC">Seychelles</option>
                                  <option value="SL">Sierra Leone</option>
                                  <option value="SG">Singapore</option>
                                  <option value="SK">Slovakia</option>
                                  <option value="SI">Slovenia</option>
                                  <option value="SB">Solomon Islands</option>
                                  <option value="SO">Somalia</option>
                                  <option value="ZA">South Africa</option>
                                  <option value="GS">
                                    South Georgia/Sandwich Islands
                                  </option>
                                  <option value="KR">South Korea</option>
                                  <option value="SS">South Sudan</option>
                                  <option value="ES">Spain</option>
                                  <option value="LK">Sri Lanka</option>
                                  <option value="SD">Sudan</option>
                                  <option value="SR">Suriname</option>
                                  <option value="SJ">
                                    Svalbard and Jan Mayen
                                  </option>
                                  <option value="SZ">Swaziland</option>
                                  <option value="SE">Sweden</option>
                                  <option value="CH">Switzerland</option>
                                  <option value="SY">Syria</option>
                                  <option value="TW">Taiwan</option>
                                  <option value="TJ">Tajikistan</option>
                                  <option value="TZ">Tanzania</option>
                                  <option value="TH">Thailand</option>
                                  <option value="TL">Timor-Leste</option>
                                  <option value="TG">Togo</option>
                                  <option value="TK">Tokelau</option>
                                  <option value="TO">Tonga</option>
                                  <option value="TT">
                                    Trinidad and Tobago
                                  </option>
                                  <option value="TN">Tunisia</option>
                                  <option value="TR">Turkey</option>
                                  <option value="TM">Turkmenistan</option>
                                  <option value="TC">
                                    Turks and Caicos Islands
                                  </option>
                                  <option value="TV">Tuvalu</option>
                                  <option value="UG">Uganda</option>
                                  <option value="UA">Ukraine</option>
                                  <option value="AE">
                                    United Arab Emirates
                                  </option>
                                  <option value="GB" selected="selected">
                                    United Kingdom (UK)
                                  </option>
                                  <option value="US">United States (US)</option>
                                  <option value="UM">
                                    United States (US) Minor Outlying Islands
                                  </option>
                                  <option value="VI">
                                    United States (US) Virgin Islands
                                  </option>
                                  <option value="UY">Uruguay</option>
                                  <option value="UZ">Uzbekistan</option>
                                  <option value="VU">Vanuatu</option>
                                  <option value="VA">Vatican</option>
                                  <option value="VE">Venezuela</option>
                                  <option value="VN">Vietnam</option>
                                  <option value="WF">Wallis and Futuna</option>
                                  <option value="EH">Western Sahara</option>
                                  <option value="YE">Yemen</option>
                                  <option value="ZM">Zambia</option>
                                  <option value="ZW">Zimbabwe</option>
                                </select>
                              </p>
                              <p
                                className="col-12 mb-3 form-row form-row-wide address-field validate-required"
                                id="billing_address_1_field"
                                data-priority="50"
                              >
                                <label
                                  for="billing_address_1"
                                  className="form-label"
                                >
                                  Street address{" "}
                                  <abbr className="required" title="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="text"
                                  className="input-text form-control"
                                  name="streetAddress"
                                  id="billing_address_1"
                                  placeholder="House number and street name"
                                  // onChange={onChangeHandler}
                                  value={streetAddress}
                                  autocomplete="address-line1"
                                />
                              </p>
                              <p
                                className="col-12 mb-4d75 form-row form-row-wide address-field"
                                id="billing_address_2_field"
                                data-priority="60"
                              >
                                <input
                                  type="text"
                                  className="input-text form-control"
                                  name="streetAddress2"
                                  id="billing_address_2"
                                  placeholder="Apartment, suite, unit etc. (optional)"
                                  // onChange={onChangeHandler}
                                  value={streetAddress2}
                                  autocomplete="address-line2"
                                />
                              </p>
                              <p
                                className="col-12 mb-4d75 form-row form-row-wide address-field validate-required"
                                id="billing_city_field"
                                data-priority="70"
                                data-o_className="form-row form-row-wide address-field validate-required"
                              >
                                <label
                                  for="billing_city"
                                  className="form-label"
                                >
                                  Town / City{" "}
                                  <abbr className="required" title="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="text"
                                  className="input-text form-control"
                                  name="town"
                                  id="billing_city"
                                  placeholder=""
                                  value={country}
                                  autocomplete="address-level2"
                                />
                              </p>
                              <p
                                className="col-12 mb-4d75 form-row form-row-wide address-field validate-state woocommerce-validated"
                                id="billing_state_field"
                                data-priority="80"
                                data-o_className="form-row form-row-wide address-field validate-state"
                              >
                                <label
                                  for="billing_state"
                                  className="form-label"
                                >
                                  Country
                                </label>
                                <input
                                  type="text"
                                  className="input-text form-control"
                                  // onChange={onChangeHandler}
                                  value={country}
                                  placeholder=""
                                  name="county"
                                  id="billing_state"
                                  autocomplete="address-level1"
                                />
                              </p>
                              <p
                                className="col-12 mb-4d75 form-row form-row-wide address-field validate-postcode validate-required"
                                id="billing_postcode_field"
                                data-priority="90"
                                data-o_className="form-row form-row-wide address-field validate-required validate-postcode"
                              >
                                <label
                                  for="billing_postcode"
                                  className="form-label"
                                >
                                  Postcode{" "}
                                  <abbr className="required" title="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="text"
                                  className="input-text form-control"
                                  name="postCode"
                                  id="billing_postcode"
                                  placeholder=""
                                  value={postCode}
                                  autocomplete="postal-code"
                                />
                              </p>
                              <p
                                className="col-12 mb-4d75 form-row form-row-first validate-required validate-phone"
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
                                  placeholder=" "
                                  // onChange={onChangeHandler}
                                  value={phone}
                                  autocomplete="tel"
                                />
                              </p>
                              <p
                                className="col-12 mb-4d75 form-row form-row-last validate-required validate-email"
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
                                  placeholder=" "
                                  // onChange={onChangeHandler}
                                  value={emailAddress}
                                  autocomplete="email"
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 pt-5 bg-white border border-top-0 mt-n-one">
                          <div className="woocommerce-additional-fields">
                            <h3 className="mb-4 font-size-3">
                              Additional information
                            </h3>
                            <div className="woocommerce-additional-fields__field-wrapper">
                              <p
                                className="col-12 mb-4d75 px-0 form-row notes"
                                id="order_comments_field"
                                data-priority=""
                              >
                                <label
                                  for="order_comments"
                                  className="form-label"
                                >
                                  Order notes (optional)
                                </label>
                                <textarea
                                  name="additionalInformation"
                                  // onChange={onChangeHandler}
                                  value={additionalInformation}
                                  className="input-text form-control"
                                  id="order_comments"
                                  placeholder="Notes about your order, e.g. special notes for delivery."
                                  rows="8"
                                  cols="5"
                                ></textarea>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/**
                       * ORDER REVIEW
                       */}

                      <h3 id="order_review_heading" className="d-none">
                        Your order
                      </h3>
                      <div
                        id="order_review"
                        className="col-md-6 col-lg-5 col-xl-4 woocommerce-checkout-review-order"
                      >
                        <div
                          id="checkoutAccordion"
                          className=" bg-white mb-5"
                          style={{ borderTop: "2px solid black" }}
                        >
                          <div className="p-4d875 border">
                            <div
                              id="checkoutHeadingOnee"
                              className="checkout-head"
                            >
                              <a
                                href="#"
                                className="text-dark d-flex align-items-center justify-content-between"
                                data-toggle="collapse"
                                data-target="#checkoutCollapseOnee"
                                aria-expanded="true"
                                aria-controls="checkoutCollapseOnee"
                              >
                                <h3 className="checkout-title mb-0 font-weight-medium font-size-3">
                                  Your order
                                </h3>
                                <svg
                                  className="mins"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="2px"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    fill="rgb(22, 22, 25)"
                                    d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                                  />
                                </svg>
                                <svg
                                  className="plus"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="15px"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    fill="rgb(22, 22, 25)"
                                    d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div
                              id="checkoutCollapseOnee"
                              className="mt-4 checkout-content collapse show"
                              aria-labelledby="checkoutHeadingOnee"
                              data-parent="#checkoutAccordion"
                            >
                              {_cart.map((v) => {
                                return (
                                  <table className="shop_table woocommerce-checkout-review-order-table">
                                    <thead className="d-none">
                                      <tr>
                                        <th className="product-name">
                                          Product
                                        </th>
                                        <th className="product-total">Total</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="cart_item">
                                        <td className="product-name">
                                          {v.name}&nbsp;{" "}
                                          <strong className="product-quantity">
                                            × {v.quantity}
                                          </strong>
                                        </td>
                                        <td className="product-total">
                                          <span className="woocommerce-Price-amount amount">
                                            <span className="woocommerce-Price-currencySymbol">
                                              £
                                            </span>
                                            {v.price}
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                );
                              })}
                              <table className="shop_table woocommerce-checkout-review-order-table">
                                <thead className="d-none">
                                  <tr>
                                    <th className="product-name">Product</th>
                                    <th className="product-total">Total</th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                                <tfoot className="d-none">
                                  <tr className="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td>
                                      <span className="woocommerce-Price-amount amount">
                                        <span className="woocommerce-Price-currencySymbol">
                                          £
                                        </span>
                                        {_totals}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr className="order-total">
                                    <th>Total</th>
                                    <td>
                                      <strong>
                                        <span className="woocommerce-Price-amount amount">
                                          <span className="woocommerce-Price-currencySymbol">
                                            £
                                          </span>
                                          {_totals}
                                        </span>
                                      </strong>{" "}
                                    </td>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                          </div>
                          <div className="p-4d875 border">
                            <div
                              id="checkoutHeadingOne"
                              className="checkout-head"
                            >
                              <a
                                href="#"
                                className="text-dark d-flex align-items-center justify-content-between"
                                data-toggle="collapse"
                                data-target="#checkoutCollapseOne"
                                aria-expanded="true"
                                aria-controls="checkoutCollapseOne"
                              >
                                <h3 className="checkout-title mb-0 font-weight-medium font-size-3">
                                  Cart Totals
                                </h3>
                                <svg
                                  className="mins"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="2px"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    fill="rgb(22, 22, 25)"
                                    d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                                  />
                                </svg>
                                <svg
                                  className="plus"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="15px"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    fill="rgb(22, 22, 25)"
                                    d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div
                              id="checkoutCollapseOne"
                              className="mt-4 checkout-content collapse show"
                              aria-labelledby="checkoutHeadingOne"
                              data-parent="#checkoutAccordion"
                            >
                              <table className="shop_table shop_table_responsive">
                                <tbody>
                                  <tr className="checkout-subtotal">
                                    <th>Subtotal</th>
                                    <td data-title="Subtotal">
                                      <span className="woocommerce-Price-amount amount">
                                        <span className="woocommerce-Price-currencySymbol">
                                          £
                                        </span>
                                        {_totals}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr className="order-shipping">
                                    <th>Shipping</th>
                                    <td data-title="Shipping">Free Shipping</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="p-4d875 border">
                            <div
                              id="checkoutHeadingTwo"
                              className="checkout-head"
                            >
                              <a
                                href="#"
                                className="text-dark d-flex align-items-center justify-content-between"
                                data-toggle="collapse"
                                data-target="#checkoutCollapseTwo"
                                aria-expanded="false"
                                aria-controls="checkoutCollapseTwo"
                              >
                                <h3 className="checkout-title mb-0 font-weight-medium font-size-3">
                                  Shipping
                                </h3>
                                <svg
                                  className="mins"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="2px"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    fill="rgb(22, 22, 25)"
                                    d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                                  />
                                </svg>
                                <svg
                                  className="plus"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="15px"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    fill="rgb(22, 22, 25)"
                                    d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div
                              id="checkoutCollapseTwo"
                              className="mt-4 checkout-content collapse"
                              aria-labelledby="checkoutHeadingTwo"
                              data-parent="#checkoutAccordion"
                            >
                              <ul id="shipping_method">
                                <li>
                                  <input
                                    type="radio"
                                    name="freeshiping"
                                    data-index="0"
                                    id="shipping_method_0_flat_rate1"
                                    onChange={onClickHandler}
                                    value={freeshipping}
                                    className="shipping_method"
                                  />
                                  <label for="shipping_method_0_flat_rate1">
                                    Free shipping
                                  </label>
                                </li>
                                <li>
                                  <input
                                    type="radio"
                                    name="flaterate"
                                    data-index="0"
                                    id="shipping_method_0_flat_rate2"
                                    onChange={onClickHandler}
                                    value={flaterate}
                                    className="shipping_method"
                                    checked="checked"
                                  />
                                  <label for="shipping_method_0_flat_rate2">
                                    Flat rate:{" "}
                                    <span className="woocommerce-Price-amount amount">
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      15
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <input
                                    type="radio"
                                    name="localpickup"
                                    data-index="0"
                                    id="shipping_method_0_flat_rate3"
                                    onChange={onClickHandler}
                                    value={localpickup}
                                    className="shipping_method"
                                    checked="checked"
                                  />
                                  <label for="shipping_method_0_flat_rate3">
                                    Local pickup::{" "}
                                    <span className="woocommerce-Price-amount amount">
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      8
                                    </span>
                                  </label>
                                </li>
                              </ul>

                              <span className="font-size-2">
                                Shipping to Turkey.
                              </span>
                              <a
                                href="#"
                                className="font-weight-medium h-primary ml-3 font-size-2"
                              >
                                Change Address
                              </a>
                            </div>
                          </div>
                          <div className="p-4d875 border">
                            <div
                              id="checkoutHeadingThree"
                              className="checkout-head"
                            >
                              <a
                                href="#"
                                className="text-dark d-flex align-items-center justify-content-between"
                                data-toggle="collapse"
                                data-target="#checkoutCollapseThree"
                                aria-expanded="true"
                                aria-controls="checkoutCollapseThree"
                              >
                                <h3 className="checkout-title mb-0 font-weight-medium font-size-3">
                                  Coupon
                                </h3>
                                <svg
                                  className="mins"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="2px"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    fill="rgb(22, 22, 25)"
                                    d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                                  />
                                </svg>
                                <svg
                                  className="plus"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="15px"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    fill="rgb(22, 22, 25)"
                                    d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div
                              id="checkoutCollapseThree"
                              className="mt-4 checkout-content collapse show"
                              aria-labelledby="checkoutHeadingThree"
                              data-parent="#checkoutAccordion"
                            >
                              <div className="coupon">
                                <label for="coupon_code">Coupon:</label>
                                <input
                                  type="text"
                                  name="coupon_code"
                                  className="input-text"
                                  id="coupon_code"
                                  value=""
                                  placeholder="Coupon code"
                                  autocomplete="off"
                                />
                                <input
                                  type="submit"
                                  className="button"
                                  name="apply_coupon"
                                  value="Apply coupon"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-4d875 border">
                            <table className="shop_table shop_table_responsive">
                              <tbody>
                                <tr className="order-total">
                                  <th>Total</th>
                                  <td data-title="Total">
                                    <strong>
                                      <span className="woocommerce-Price-amount amount">
                                        <span className="woocommerce-Price-currencySymbol">
                                          £
                                        </span>
                                        {_totals}
                                      </span>
                                    </strong>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="p-4d875 border">
                            <div
                              id="checkoutHeadingThreee"
                              className="checkout-head"
                            >
                              <a
                                href="#"
                                className="text-dark d-flex align-items-center justify-content-between"
                                data-toggle="collapse"
                                data-target="#checkoutCollapseThreee"
                                aria-expanded="true"
                                aria-controls="checkoutCollapseThreee"
                              >
                                <h3 className="checkout-title mb-0 font-weight-medium font-size-3">
                                  Payment
                                </h3>
                                <svg
                                  className="mins"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="2px"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    fill="rgb(22, 22, 25)"
                                    d="M0.000,-0.000 L15.000,-0.000 L15.000,2.000 L0.000,2.000 L0.000,-0.000 Z"
                                  />
                                </svg>
                                <svg
                                  className="plus"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  width="15px"
                                  height="15px"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    fill="rgb(22, 22, 25)"
                                    d="M15.000,8.000 L9.000,8.000 L9.000,15.000 L7.000,15.000 L7.000,8.000 L0.000,8.000 L0.000,6.000 L7.000,6.000 L7.000,-0.000 L9.000,-0.000 L9.000,6.000 L15.000,6.000 L15.000,8.000 Z"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div
                              id="checkoutCollapseThreee"
                              className="mt-4 checkout-content collapse show"
                              aria-labelledby="checkoutHeadingThreee"
                              data-parent="#checkoutAccordion"
                            >
                              <div
                                id="payment"
                                className="woocommerce-checkout-payment"
                              >
                                <ul className="wc_payment_methods payment_methods methods">
                                  <li className="wc_payment_method payment_method_bacs">
                                    <input
                                      id="payment_method_bacs"
                                      type="radio"
                                      className="input-radio"
                                      name="payment_method"
                                      value="bacs"
                                      data-order_button_text=""
                                    />
                                    <label for="payment_method_bacs">
                                      Direct bank transfer{" "}
                                    </label>
                                    <div
                                      className="payment_box payment_method_bacs"
                                      style={{ display: "block" }}
                                    >
                                      <p>
                                        Make your payment directly into our bank
                                        account. Please use your Order ID as the
                                        payment reference. Your order won’t be
                                        shipped until the funds have cleared in
                                        our account.
                                      </p>
                                    </div>
                                  </li>
                                  <li className="wc_payment_method payment_method_cheque">
                                    <input
                                      id="payment_method_cheque"
                                      type="radio"
                                      className="input-radio"
                                      name="payment_method"
                                      value="cheque"
                                      data-order_button_text=""
                                    />
                                    <label for="payment_method_cheque">
                                      Check payments{" "}
                                    </label>
                                    <div
                                      className="payment_box payment_method_cheque"
                                      style={{ display: "block" }}
                                    >
                                      <p>
                                        Please send a check to Store Name, Store
                                        Street, Store Town, Store State /
                                        County, Store Postcode.
                                      </p>
                                    </div>
                                  </li>
                                  <li className="wc_payment_method payment_method_cod">
                                    <input
                                      id="payment_method_cod"
                                      type="radio"
                                      className="input-radio"
                                      name="payment_method"
                                      value="cod"
                                      checked="checked"
                                      data-order_button_text=""
                                    />
                                    <label for="payment_method_cod">
                                      Cash on delivery{" "}
                                    </label>
                                    <div
                                      className="payment_box payment_method_cod"
                                      style={{ display: "block" }}
                                    >
                                      <p>Pay with cash upon delivery.</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-row place-order">
                          <a
                            href="order-received.html"
                            className="button alt btn btn-dark btn-block rounded-0 py-4"
                          >
                            Place order
                          </a>
                          <input
                            type="hidden"
                            id="_wpnonce"
                            name="_wpnonce"
                            value="926470d564"
                          />
                          <input
                            type="hidden"
                            name="_wp_http_referer"
                            value="/storefront/?wc-ajax=update_order_review"
                          />
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

      {/**
       * NEED HELP AND A SMARTER WAY TO BUY TEXTBOOKS
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
export default Checkout;
