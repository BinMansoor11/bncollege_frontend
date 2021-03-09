import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const FindTextBooks = () => {
  const [state, setState] = useState({
    form: [
      {
        term: [{ item: "SPRING 2021" }],
        department: [
          { item: "Select Department" },
          { item: "ACC" },
          { item: "ART" },
          { item: "IT" },
        ],
        course: [
          { item: "Select Course" },
          { item: "201" },
          { item: "203" },
          { item: "205" },
        ],
        section: [
          { item: "Select Section" },
          { item: "A" },
          { item: "B" },
          { item: "C" },
        ],
      },
      {
        term: [{ item: "SPRING 2020" }],
        department: [
          { item: "Select Department" },
          { item: "ACC" },
          { item: "ART" },
          { item: "IT" },
        ],
        course: [
          { item: "Select Course" },
          { item: "201" },
          { item: "203" },
          { item: "205" },
        ],
        section: [
          { item: "Select Section" },
          { item: "A" },
          { item: "B" },
          { item: "C" },
        ],
      },
      {
        term: [{ item: "SPRING 2020" }],
        department: [
          { item: "Select Department" },
          { item: "ACC" },
          { item: "ART" },
          { item: "IT" },
        ],
        course: [
          { item: "Select Course" },
          { item: "201" },
          { item: "203" },
          { item: "205" },
        ],
        section: [
          { item: "Select Section" },
          { item: "A" },
          { item: "B" },
          { item: "C" },
        ],
      },
      {
        term: [{ item: "SPRING 2020" }],
        department: [
          { item: "Select Department" },
          { item: "ACC" },
          { item: "ART" },
          { item: "IT" },
        ],
        course: [
          { item: "Select Course" },
          { item: "201" },
          { item: "203" },
          { item: "205" },
        ],
        section: [
          { item: "Select Section" },
          { item: "A" },
          { item: "B" },
          { item: "C" },
        ],
      },
    ],
  });

  const { form } = state;

  const addMoreCourses = () => {
    setState((prevState) => {
      return {
        ...prevState,
        form: [
          ...state.form,
          {
            term: [{ item: "SPRING 2020" }],
            department: [
              { item: "Select Department" },
              { item: "ACC" },
              { item: "ART" },
              { item: "IT" },
            ],
            course: [
              { item: "Select Course" },
              { item: "201" },
              { item: "203" },
              { item: "205" },
            ],
            section: [
              { item: "Select Section" },
              { item: "A" },
              { item: "B" },
              { item: "C" },
            ],
          },
        ],
      };
    });
  };

  const deleteCourse = (index) => {
    const filteredCourses = form.filter((v, i) => i != index);

    console.log("filteredCourses", filteredCourses);

    setState((prevState) => {
      return {
        ...prevState,
        form: filteredCourses,
      };
    });
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

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <Header />
      <div className="container col-9 headerText pt-2 mt-5">
        <h1 className="display-4 text-center font-size-10">TEXTBOOK RENTALS</h1>
        <hr />
      </div>
      <div className="row mt-5 py-3 mb-5 mr-auto">
        <div class="offset-md-2"></div>
        <div
          className="col-2 p-3 mr-5 my-3 text-center h-100 "
          style={{ backgroundColor: "white", borderTop: "2px solid black" }}
        >
          <h4 className="font-weight-normal mt-2 text-justify font-size-3">
            HELP TOPICS
          </h4>
          <div className="mt-3">
            <Link
              to="/rentalfaqs"
              className="d-block text-justify font-size-1 link-black-100  font-size-1"
            >
              RENTAL FAQS
            </Link>
            <Link
              to="/textbookrentals"
              className="d-block text-justify pt-2 font-size-1 link-black-100  font-size-1"
            >
              TEXTBOOK RENTALS
            </Link>
            <Link
              to="/sellbacktextbooks"
              className="d-block text-justify pt-2 font-size-1 link-black-100  font-size-1"
            >
              SELL BACK TEXTBOOKS
            </Link>
            <Link
              to="/digitalcontentfaqs"
              className="d-block text-justify pt-2 font-size-1 link-black-100  font-size-1"
            >
              DIGITAL CONTENT FAQS
            </Link>
            <Link
              to="/paymentanddelivery"
              className="d-block text-justify pt-2 font-size-1 link-black-100  font-size-1"
            >
              PAYMENT & DELIVERY
            </Link>
            <Link
              to="/returnsandrefunds"
              className="d-block text-justify pt-2 font-size-1 link-black-100  font-size-1"
            >
              RETURNS & REFUNDS
            </Link>
            <Link
              to="/privacyandsecurity"
              className="d-block text-justify pt-2 font-size-1 link-black-100 "
            >
              PRIVACY & SECURITY
            </Link>
            <Link
              to="/caprivacypolicy"
              className="d-block text-justify pt-2 font-size-1 link-black-100 "
            >
              CA PRIVACY POLICY
            </Link>
            <Link
              to="/termsofuse"
              className="d-block text-justify pt-2 font-size-1 link-black-100 "
            >
              TERMS OF USE
            </Link>
            <Link
              to="/storeevents"
              className="d-block text-justify pt-2 font-size-1 link-black-100"
            >
              STORE EVENTS
            </Link>
            <h4 className="font-weight-normal mt-5 text-justify font-size-3">
              STORE INFO
            </h4>
            <p className="d-block text-left text-muted pt-2 font-size-1">
              Your store manager isCHELSEA SKRZYPEK
            </p>
            <p className="d-block text-left text-muted pt-2 font-size-1">
              West Liberty University Bookstore 208 University Drive, West
              Liberty, WV 26074
            </p>

            <h6 className="font-weight-normal text-justify mt-5 font-size-2 link-black-100 ">
              <a href="mailto: abc@example.com">SEND US AN EMAIL</a>
            </h6>
          </div>
        </div>
        <div
          className="col-6 p-4 my-3 text-center h-100"
          style={{ backgroundColor: "white", borderTop: "2px solid black" }}
        >
          <h1 className="font-weight-normal mt-5 font-size-7">
            RENTING IS EASY...
          </h1>
          <p className="text-muted mt-5">
            When shopping for textbooks in-store, the course information tag
            will display a "Rental" option.
          </p>
          <p className="text-muted mt-5">
            If you're shopping online, its even easier. Many books display a
            RENTAL option, along with NEW and USED options. Just pick one that's
            right for you!
          </p>
          <h1 className="font-weight-normal mt-5 font-size-7">
            WE'LL KEEP YOU ON TRACK
          </h1>
          <p className="text-muted mt-5">
            Register your email address with us and we'll send you reminder
            notices as your rental due date approaches.
          </p>

          <button type="button" className="btn btn-dark mt-5 font-size-2">
            SHOP NOW
          </button>
          <div className="row mt-5 py-3">
            <Link
              to="/rentalagreement"
              className="col-4 text-right link-black-100 font-size-2"
            >
              RENTAL AGREEMENT
            </Link>
            <Link to="/rentalfaqs" className="col-4 link-black-100 font-size-2">
              RENTAL FAQS
            </Link>
            <Link
              to="/rentalreturn"
              className="col-4 text-left link-black-100 font-size-2"
            >
              RENTAL RETURN
            </Link>
          </div>
        </div>
        <div class="offset-md-2"></div>
      </div>
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
  );
};

const styles = {
  btn: {
    backgroundColor: "#232f3f",
    color: "#fff",
    borderRadius: 0,
  },
};

export default FindTextBooks;
