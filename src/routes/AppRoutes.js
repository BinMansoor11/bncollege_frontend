import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Search from "../components/Common/Search";
import TermsAndCondition from "../components/TermsAndCondition/TermsAndCondition";
import PrivacyAndSecurity from "../components/PrivacyAndSecurity/PrivacyAndSecurity";
import ContactUs from "../components/ContactUs/ContactUs";
import CAPrivacyPolicy from "../components/CAPrivacyPolicy/CAPrivacyPolicy";
import PaymentAndDelivery from "../components/PaymentAndDelivery/PaymentAndDelivery";
import Copyrights from "../components/Copyrights/Copyrights";
import Accessibility from "../components/Accessibility/Accessibility";
import Sitemap from "../components/Sitemap/Sitemap";
import Refunds from "../components/Refunds/Refunds";
import TermsOfUse from "../components/TermsOfUse/TermsOfUse";
import RentalFAQs from "../components/RentalFaqs/RentanlFAQs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import FindTextBooks from "../components/TextBooks/FindTextBooks";
import TextBookRentals from "../components/TextBooks/TextBookRentals";
import OpenEducationalResources from "../components/TextBooks/OpenEducationalResources";
import SellBackTextBooks from "../components/TextBooks/SellBackTextBooks";
import DigitalContentFAQs from "../components/TextBooks/DigitalContentFAQs";
import TShirtsAndTanks from "../components/Apparel/Mens/TshirtsAndTanks";
import ImageEditor from "../components/Fundraiser/ImageEditor";
import SweatShirts from "../components/Apparel/Mens/SweatShirts";
import PerformanceApparel from "../components/Apparel/Mens/PerformanceApparel";
import Hats from "../components/Apparel/Mens/Hats";
import Bottoms from "../components/Apparel/Mens/Bottoms";
import OuterWear from "../components/Apparel/Mens/OuterWear";
import Accessories from "../components/Apparel/Mens/Accessories";
import Fundraising from "../components/Fundraising/Fundraising";
import HowItWorks from "../components/Fundraising/HowItWorks";
import BrowseCampaigns from "../components/Fundraising/BrowseCampaigns";
import StartAFundraiser from "../components/Fundraising/StartAFundraiser";
import Story from "../components/Fundraising/Story";
import Signup from "../components/signup/Signup";
import Settings from "../components/Fundraising/Settings";
import CampusStores from "../components/CampusStores/CampusStores";
import Edit from "../components/CampusStores/Edit";
import MyAccount from "../components/MyAccount/MyAccount";
import AccountInformation from "../components/MyAccount/AccountInformation";
import ImageEditorPage from "../components/ImageEditor/ImageEditor2";
import CustomInkUi from "../components/ImageEditor/CustomInkUi";
import ShippingAndPayment from "../components/MyAccount/ShippingAndPayment";
import YourRentals from "../components/MyAccount/YourRentals";
import EmailAddresses from "../components/MyAccount/EmailAddresses";
import OrderHistoryAndStatus from "../components/MyAccount/OrderHistoryAndStatus";

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* <Route exact path="/:name" component={Home}></Route> */}
          <Route exact path="/:name" component={Home}></Route>
          <Route exact path="/:name/search" component={Search}></Route>
          <Route
            exact
            path="/terms-and-conditions"
            component={TermsAndCondition}
          ></Route>
          <Route
            exact
            path="/privacy-and-security"
            component={PrivacyAndSecurity}
          ></Route>
          <Route
            exact
            path="/ca-privacy-policy"
            component={CAPrivacyPolicy}
          ></Route>
          <Route exact path="/contact-us" component={ContactUs}></Route>

          <Route exact path="/copyrights" component={Copyrights}></Route>
          <Route exact path="/accessibility" component={Accessibility}></Route>
          <Route exact path="/sitemap" component={Sitemap}></Route>
          <Route exact path="/refunds" component={Refunds}></Route>
          <Route exact path="/rentalfaqs" component={RentalFAQs}></Route>
          <Route exact path="/terms-of-use" component={TermsOfUse}></Route>
          <Route exact path="/:name/login" component={Login}></Route>
          <Route exact path="/:name/signup" component={Signup}></Route>
          <Route exact path="/:name/edit" component={Edit}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route
            exact
            path="/forgot-password"
            component={ForgotPassword}
          ></Route>
          <Route exact path="/:name/products" component={Products}></Route>
          <Route exact path="/:name/cart" component={Cart}></Route>
          <Route exact path="/:name/checkout" component={Checkout}></Route>
          <Route
            exact
            path="/:name/product/:id"
            component={SingleProduct}
          ></Route>
          <Route exact path="/" component={CampusStores}></Route>

          {/**
           * Fundraising
           */}
          <Route
            exact
            path="/:name/fundraising"
            component={Fundraising}
          ></Route>
          <Route
            exact
            path="/:name/fundraising/howitworks"
            component={HowItWorks}
          ></Route>
          <Route
            exact
            path="/:name/fundraising/browsecampaigns"
            component={BrowseCampaigns}
          ></Route>
          <Route
            exact
            path="/:name/fundraising/startafundraiser"
            component={StartAFundraiser}
          ></Route>
          <Route exact path="/:name/story" component={Story}></Route>
          <Route exact path="/:name/settings" component={Settings}></Route>

          {/**
           * MYACCOUNT
           */}
          <Route exact path="/:name/myaccount" component={MyAccount}></Route>
          <Route
            exact
            path="/:name/myaccount/accountinformation"
            component={AccountInformation}
          ></Route>
          <Route
            exact
            path="/:name/myaccount/emailaddress"
            component={EmailAddresses}
          ></Route>
          <Route
            exact
            path="/:name/myaccount/shippingandpayment"
            component={ShippingAndPayment}
          ></Route>
          <Route
            exact
            path="/:name/myaccount/yourrentals"
            component={YourRentals}
          ></Route>
          <Route
            exact
            path="/:name/myaccount/orderhistoryandStatus"
            component={OrderHistoryAndStatus}
          ></Route>
          {/**
           * Text Books
           */}
          <Route
            exact
            path="/:name/textbooks/findbooks"
            component={FindTextBooks}
          ></Route>
          <Route
            exact
            path="/:name/textbooks/textbookrentals"
            component={TextBookRentals}
          ></Route>
          <Route
            exact
            path="/:name/textbooks/sellbacktextbooks"
            component={SellBackTextBooks}
          ></Route>
          <Route
            exact
            path="/:name/textbooks/digitalcontentfaqs"
            component={DigitalContentFAQs}
          ></Route>
          {/* <Route
            exact
            path="/textbooks/openeducationalresources"
            component={FacultyResources}
          ></Route> */}
          <Route
            exact
            path="/:name/textbooks/openeducationalresources"
            component={OpenEducationalResources}
          ></Route>
          <Route
            exact
            path="/:name/mens/tshirtsandtanks"
            component={TShirtsAndTanks}
          ></Route>
          <Route
            exact
            path="/:name/imageeditor"
            component={ImageEditor}
          ></Route>
          <Route
            exact
            path="/:name/imageeditor2"
            component={CustomInkUi}
          ></Route>
          <Route
            exact
            path="/:name/:cat/:subcat"
            component={SweatShirts}
          ></Route>
          <Route
            exact
            path="/:name/mens/performanceapparel"
            component={PerformanceApparel}
          ></Route>
          <Route exact path="/mens/hats" component={Hats}></Route>
          <Route exact path="/mens/bottoms" component={Bottoms}></Route>
          <Route exact path="/mens/outerwear" component={OuterWear}></Route>
          <Route exact path="/mens/accessories" component={Accessories}></Route>
          <Route exact path="/womens/hats" component={Hats}></Route>
          <Route exact path="/womens/bottoms" component={Bottoms}></Route>
          <Route exact path="/:name/customink" component={CustomInkUi}></Route>
          {/* <Route exact path="/youth/apparel" component={YouthApparel}></Route>
          <Route
            exact
            path="/infantsandtoddlers/apparel"
            component={InfantsAndToddlers}
          ></Route>
          <Route
            exact
            path="/professionalschools/apparel"
            component={ProfessionalSchools}
          ></Route> */}
        </Switch>
      </div>
    );
  }
}

export default AppRoutes;
