import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const DigitalContentFAQs = () => {
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
    const filteredCourses = form.filter((v, i) => i !== index);

    console.log("filteredCourses", filteredCourses);

    setState((prevState) => {
      return {
        ...prevState,
        form: filteredCourses,
      };
    });
  };

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <Header />

      <div className="container col-9 headerText pt-2 mt-5">
        <h1 className="display-4 text-center text-uppercase font-size-10">
          Digital Content FAQs
        </h1>
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
              className="d-block text-justify link-black-100  link-black-100 font-size-1 "
            >
              RENTAL FAQS
            </Link>
            <Link
              to="/textbookrentals"
              className="d-block text-justify pt-2 link-black-100  link-black-100 font-size-1 "
            >
              TEXTBOOK RENTALS
            </Link>
            <Link
              to="/sellbacktextbooks"
              className="d-block text-justify pt-2 link-black-100  link-black-100 font-size-1 "
            >
              SELL BACK TEXTBOOKS
            </Link>
            <Link
              to="/digitalcontentfaqs"
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              DIGITAL CONTENT FAQS
            </Link>
            <Link
              to="/paymentanddelivery"
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              PAYMENT & DELIVERY
            </Link>
            <Link
              to="/returnsandrefunds"
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              RETURNS & REFUNDS
            </Link>
            <Link
              to="/privacyandsecurity"
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              PRIVACY & SECURITY
            </Link>
            <Link
              to="/caprivacypolicy"
              className="d-block text-justify pt-2 link-black-100 font-size-1 "
            >
              CA PRIVACY POLICY
            </Link>
            <Link
              to="/termsofuse"
              className="d-block text-justify pt-2 link-black-100 font-size-1"
            >
              TERMS OF USE
            </Link>
            <Link
              to="/storeevents"
              className="d-block text-justify pt-2 link-black-100 font-size-1"
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

            <h6 className="font-weight-normal text-justify mt-5 font-size-2">
              <a href="mailto: abc@example.com">SEND US AN EMAIL</a>
            </h6>
          </div>
        </div>
        <div
          className="col-6 p-4 my-3 text-center h-100"
          style={{ backgroundColor: "white", borderTop: "2px solid black" }}
        >
          <h5 className="font-weight-normal mt-2 text-justify font-size-3">
            HOW DO I PURCHASE DIGITAL CONTENT?
          </h5>
          <p className="text-muted text-justify mt-2 font-size-1">
            Buying digital material is just as easy as buying a printed textbook
            or bundle. Just go to your campus bookstore or{" "}
            <Link to="/findbooks">click here</Link> to purchase digital
            material. 'Digital' will appear as a textbook option whenever a
            digital option is available. Whether you buy in-store or online,
            once your material is available you will receive an email
            confirmation with instructions on how to access your digital
            material.
          </p>
          <h5 className="font-weight-normal mt-2 text-justify font-size-3">
            HOW DO I ACCESS MY DIGITAL MATERIAL?
          </h5>
          <p className="text-muted text-justify mt-2 font-size-1">
            Once your payment is processed, you will receive an email from
            <strong> bookstorecustomercare@bncollege.com</strong> and can begin
            to access your content immediately from the My Digital Content link
            on the bookstore website. Log in using the same email address and
            password you used when purchasing your digital material. If you
            purchased in-store, use the email address you provided when checking
            out and the temporary password in your Welcome email. If you do not
            know your password, select Forgot Password.
          </p>

          <h5 className="font-weight-normal mt-2 text-justify font-size-3">
            WHAT IF I DID NOT RECEIVE MY CONFIRMATION EMAIL?
          </h5>
          <p className="text-muted text-justify mt-2 font-size-1">
            If you did not receive your digital material delivery email, please
            ensure you are checking the same email account used when purchasing
            your digital materials online. Check your junk and spam folders for
            your Digital Learning email from
            <strong> bookstorecustomercare@bncollege.com.</strong>
          </p>
          <p className="text-muted text-justify mt-2 font-size-1">
            If you purchased your digital material using Financial Aid or Campus
            Debit, your material will not be available until the order has been
            processed. Order processing can be delayed until the aid is
            available. For questions about your financial aid order, please
            contact your bookstore.
          </p>
          <p className="text-muted text-justify mt-2 font-size-1">
            If you still need further assistance, or think you misspelled your
            email address, please visit{" "}
            <Link to="#">customercare.bncollege.com</Link> to submit a ticket to
            Customer Care.
          </p>
          <h5 className="font-weight-normal mt-2 text-justify font-size-3">
            I HAVE A QUESTION NOT ANSWERED HERE. WHAT DO I DO?
          </h5>
          <p className="text-muted text-justify mt-2 font-size-1">
            Visit <Link to="#">customercare.bncollege.com</Link> for more FAQs
            or to submit a request to Customer Care.
          </p>
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

const styles = {
  btn: {
    backgroundColor: "#232f3f",
    color: "#fff",
    borderRadius: 0,
  },
};

export default DigitalContentFAQs;
