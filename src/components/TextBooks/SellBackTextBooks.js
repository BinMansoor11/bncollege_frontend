import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const SellBackTextBooks = () => {
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

  /**
   * Rentals
   */
  const Rentals = [
    { rentals: "Rental FAQs", rentals_route: "/rentalfaqs" },
    { rentals: "Payment & Delivery", rentals_route: "/paymentanddelivery" },
    { rentals: "Refunds", rentals_route: "/returnsandrefunds" },
  ];
  const { rentals, rentals_route } = Rentals;

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <Header />
      <div className="container col-9 headerText pt-2 mt-5">
        <h1 className="display-4 text-center text-uppercase font-size-10">
          Sell Back TextBooks
        </h1>
        <hr />
      </div>
      <div className="row mt-5 py-3 mb-5 mr-auto">
        <div class="offset-md-2"></div>
        <div
          className="col-8 p-4 my-3 text-center h-100"
          style={{ backgroundColor: "white", borderTop: "2px solid black" }}
        >
          <h1 className="font-weight-normal mt-5 font-size-9">
            HOW TO SELL BACK YOUR TEXTBOOKS
          </h1>
          <p className="text-muted mt-5">
            Bring your textbooks back to the bookstore at the end of the term to
            get up to 50% cash back. Finals week is the best time to get the
            most cash back, so sell early!
          </p>
          <p className="text-muted mt-5">
            Books must include all original materials (CDs, workbooks, etc.) and
            a valid school ID is required at the time of buyback. Buyback is
            limited to one copy of a title per customer. Please check with the
            bookstore for more details.
          </p>
          <p className="text-muted mt-5">
            Did you rent your book? <Link to="/rentalfaqs">Click</Link> here for
            Rental FAQs
          </p>
          {/**
           * Rentals
           */}
          <div className="row mt-5 py-4 ">
            {Rentals.map((v, i) => {
              return (
                <Link
                  to={v.rentals_route}
                  className="col-4 text-center font-size-2 link-black-100"
                >
                  {v.rentals}
                </Link>
              );
            })}
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

export default SellBackTextBooks;
