import React from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { IoHammerOutline, IoChevronBack } from "react-icons/io5";
import { GiBookmark, GiSittingDog, GiFirstAidKit } from "react-icons/gi";
import { RiStethoscopeLine, RiSurgicalMaskLine } from "react-icons/ri";
import { BiRun } from "react-icons/bi";
import { ImGift } from "react-icons/im";

export default function GetStarted(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#ececec",
          borderRadius: "0.3rem",
        }}
      >
        <div
          class="container-fluid bg-light"
          style={{ borderRadius: "0.3rem" }}
        >
          <div class="row ">
            <div className="col-12 d-flex justify-content-between">
              <span>
                <Link
                  onMouseEnter={(e) => (e.target.style.color = "black")}
                  onMouseLeave={(e) => (e.target.style.color = "#535353")}
                  onClick={() =>
                    props.setModalRoute((prevState) => prevState - 1)
                  }
                >
                  <IoChevronBack size={20} style={{ color: "#535353" }} />
                </Link>
              </span>
              <span
                className="text-uppercase font-size-2"
                style={{ paddingTop: "0.2rem", paddingBottom: "0.2rem" }}
              >
                Get Started
              </span>
              <span className="">
                <Link
                  onClick={props.onHide}
                  onMouseEnter={(e) => (e.target.style.color = "black")}
                  onMouseLeave={(e) => (e.target.style.color = "#535353")}
                >
                  <CgClose size={20} style={{ color: "#535353" }} />
                </Link>
              </span>
            </div>
          </div>
        </div>
        <Modal.Body>
          <div className="container-fluid h-100 ">
            <div className="container">
              <h4 className="text-center">I’m fundraising for…</h4>
              <p className="text-center font-size-2">Select the best option</p>
            </div>

            <div className="row py-5">
              <div className="offset-1"></div>

              <div className="col-10 d-flex justify-content-center">
                {/**
                 * Icons
                 */}
                <div
                  className=""
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="container-fluid d-flex justify-content-center ">
                    <div
                      className="grow bg-light shadow-sm  bg-white rounded p-3 pb-2 "
                      style={{ height: "100%", width: "auto" }}
                    >
                      <div className="d-flex justify-content-center ">
                        <IoHammerOutline size={40} />
                      </div>
                      <div className=" d-flex align-items-end ">
                        <p className="text-center font-size-1">
                          Small Business
                        </p>
                      </div>
                    </div>

                    <div
                      className="grow bg-light shadow-sm  bg-white rounded p-3 pb-2 mx-3"
                      style={{ height: "100%", width: "auto" }}
                    >
                      <div className="d-flex justify-content-center">
                        <GiBookmark size={40} />
                      </div>
                      <div className=" d-flex align-items-end">
                        <p className="text-center font-size-1">
                          Small Business
                        </p>
                      </div>
                    </div>

                    <div
                      className="grow bg-light shadow-sm  bg-white rounded p-3 pb-2"
                      style={{ height: "100%", width: "auto" }}
                    >
                      <div className="d-flex justify-content-center">
                        <RiStethoscopeLine size={40} />
                      </div>
                      <div className=" d-flex align-items-end">
                        <p className="text-center font-size-1">
                          Small Business
                        </p>
                      </div>
                    </div>
                    <div
                      className="grow bg-light shadow-sm  bg-white rounded p-3 pb-2 mx-3"
                      style={{ height: "100%", width: "auto" }}
                    >
                      <div className="d-flex justify-content-center">
                        <RiSurgicalMaskLine size={40} />
                      </div>
                      <div className=" d-flex align-items-end">
                        <p className="text-center font-size-1">
                          Small Business
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="container-fluid d-flex justify-content-center pt-3">
                    <div
                      className="grow bg-light shadow-sm  bg-white rounded p-3 pb-2 "
                      style={{ height: "100%", width: "auto" }}
                    >
                      <div className="d-flex justify-content-center ">
                        <GiSittingDog size={40} />
                      </div>
                      <div className=" d-flex align-items-end ">
                        <p className="text-center font-size-1">
                          Small Business
                        </p>
                      </div>
                    </div>

                    <div
                      className="grow bg-light shadow-sm  bg-white rounded p-3 pb-2 mx-3"
                      style={{ height: "100%", width: "auto" }}
                    >
                      <div className="d-flex justify-content-center">
                        <BiRun size={40} />
                      </div>
                      <div className=" d-flex align-items-end">
                        <p className="text-center font-size-1">
                          Small Business
                        </p>
                      </div>
                    </div>

                    <div
                      className="grow bg-light shadow-sm  bg-white rounded p-3 pb-2"
                      style={{ height: "100%", width: "auto" }}
                    >
                      <div className="d-flex justify-content-center">
                        <ImGift size={40} />
                      </div>
                      <div className=" d-flex align-items-end">
                        <p className="text-center font-size-1">
                          Small Business
                        </p>
                      </div>
                    </div>
                    <div
                      className="grow bg-light shadow-sm  bg-white rounded p-3 pb-2 mx-3"
                      style={{ height: "100%", width: "auto" }}
                    >
                      <div className="d-flex justify-content-center">
                        <GiFirstAidKit size={40} />
                      </div>
                      <div className=" d-flex align-items-end">
                        <p className="text-center font-size-1">
                          Small Business
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offset-1"></div>
            </div>
            <div className="row d-flex justify-content-center ">
              <div className="col-6">
                <input
                  class="form-control"
                  placeholder="Other: Baseball team, Band, etc."
                  type="text"
                  aria-label="text"
                />
                <div className="text-center ">
                  <button
                    className="btn btn-md w-100 font-size-2 btn-dark"
                    type="submit"
                    onClick={() =>
                      props.setModalRoute((prevState) => prevState + 1)
                    }
                  >
                    Next
                  </button>
                </div>
                <p className="pt-3 text-center font-sie-2">
                  <Link
                    onClick={() =>
                      props.setModalRoute((prevState) => prevState + 1)
                    }
                    className="font-size-2 pt-3 "
                    onMouseEnter={(e) => (e.target.style.color = "#5b75b9")}
                    onMouseLeave={(e) => (e.target.style.color = "#1f51ce")}
                    style={{ color: "#1f51ce" }}
                  >
                    Skip this step.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}
