import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const FindTextBooks = (props) => {
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

  useEffect(() => {
    // console.log("props.location", props.history);
    // props.history.push(props.location.pathname);
    // props.location.pathname
  }, []);

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

  return (
    <div>
      <Header />

      <section className="mainContent mb-5 pt-2 pb-5 " role="region">
        <div className="findCourseHeader mt-5 mb-3">
          <h1
            className="display-4 container font-weight-normal text-center font-size-10"
            id="skipNavigationToThisElement"
            tabIndex={0}
          >
            FIND COURSE MATERIALS
          </h1>
          <p className="text-center font-size-2">
            Add your courses to find everything you need for class.
          </p>
        </div>

        <form
          name="FindCourse"
          className="FindCourse"
          id="FindCourse"
          role="form"
        >
          <div className="courseSelectContainer">
            <div className="campusSection multicampusSection">
              <div className="campusContainer">
                <div className="columnTitles">
                  <div class="d-none d-md-block  pt-2">
                    <ul className="columnLabelLayout nav container justify-content-center text-center text-uppercase font-weight-bold  ">
                      <li className="termColumn col-md-3 mx-2 font-size-2 ">
                        Term
                      </li>
                      <li className="deptColumn col-md-2  mx-2  font-size-2">
                        Department
                      </li>
                      <li className="courseColumn col-md-2  mx-2 font-size-2">
                        Course
                      </li>
                      <li className="sectionColumn col-md-2  mx-2 font-size-2 ">
                        Section
                      </li>
                    </ul>
                  </div>
                  {/**
                   *  FORM
                   */}
                  {form.length == 0 ? (
                    <div className="text-center pt-5">
                      <p className="text-danger font-size-3">
                        <b>No course materials to show!</b>
                      </p>
                    </div>
                  ) : (
                    form.map((v, i) => {
                      return (
                        <ul className="columnLabelLayout nav container justify-content-center text-center my-3">
                          <li className="termColumn col-md-3 mx-2 d-block d-md-none font-weight-bold text-uppercase ">
                            Term
                          </li>
                          <select
                            class="form-control col-md-3 form-control-sm mx-2 "
                            id="inputGroupSelect01"
                          >
                            {v.term.map((v, i) => {
                              return (
                                <option value={i + 1} className=" col-sm-3 ">
                                  {v.item}
                                </option>
                              );
                            })}
                          </select>

                          <li className="termColumn col-md-3 mx-2 d-block d-md-none font-weight-bold text-uppercase ">
                            Department
                          </li>

                          <select
                            class="form-control col-md-2 form-control-sm  mx-2 "
                            id="inputGroupSelect01"
                          >
                            {v.department.map((v, i) => {
                              return <option value={i + 1}>{v.item}</option>;
                            })}
                          </select>

                          <li className="termColumn col-md-3 mx-2 d-block d-md-none font-weight-bold text-uppercase">
                            Course
                          </li>

                          <select
                            class="form-control col-md-2 form-control-sm  mx-2"
                            id="inputGroupSelect01"
                          >
                            {v.course.map((v, i) => {
                              return <option value={i + 1}>{v.item}</option>;
                            })}
                          </select>

                          <li className="termColumn col-md-3 mx-2 d-block d-md-none font-weight-bold text-uppercase">
                            Section
                          </li>

                          <select
                            class="form-control form-control-sm col-md-2  mx-2"
                            id="inputGroupSelect01"
                            disabled={false}
                          >
                            {v.section.map((v, i) => {
                              return <option value={i + 1}>{v.item}</option>;
                            })}
                          </select>

                          <button
                            type="button"
                            class="btn btn-danger btn-sm"
                            onClick={() => deleteCourse(i)}
                          >
                            <span className="font-weight-bold">
                              <span aria-hidden="true">&times;</span>
                            </span>
                          </button>
                        </ul>
                      );
                    })
                  )}

                  <div className="container text-center mt-4 ">
                    <button
                      type="button"
                      class=" btn btn-info btn-sm "
                      onClick={() => addMoreCourses()}
                    >
                      Add More Courses
                      {/* <span
                        className="bg-success px-1 ml-1 text-dark"
                        style={{ borderRadius: 4 }}
                      >
                        +
                      </span> */}
                    </button>
                  </div>

                  <div className="container text-center justify-content-center d-flex  mt-4">
                    <button
                      type="button"
                      className="btn btn-lg my-3  btn-block col-md-3 text-uppercase font-size-2"
                      style={styles.btn}
                    >
                      Find Materials
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      {/**
       * EVERYTHING YOU NEED TO SUCCEED
       */}
      <div className="container d-flex justify-content-center">
        <h1 className="display-4 my-5 font-size-5">
          EVERYTHING YOU NEED TO SUCCEED
        </h1>
      </div>
      <div class="container col-9 pt-5">
        <hr />
      </div>
      {/**
       * NEED HELP
       */}
      <div class="container-fluid mb-3 d-flex justify-content-center ">
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
            className="d-inline text-center font-weight-normal mx-1 font-size-1 "
          >
            Payment & Delivery
          </Link>
          <span class="border-right border-secondary mx-1"></span>

          <Link
            to="/returnsandrefunds"
            className="d-inline text-center font-weight-normal px-2 font-size-1 "
          >
            Refunds
          </Link>
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
    height: 50,
  },
};

export default FindTextBooks;
