import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { IoHammerOutline, IoChevronBack } from "react-icons/io5";
import { GiBookmark, GiSittingDog, GiFirstAidKit } from "react-icons/gi";
import { RiStethoscopeLine, RiSurgicalMaskLine } from "react-icons/ri";
import { BiRun } from "react-icons/bi";
import { ImGift } from "react-icons/im";

export default function ShirtColor(props) {
  //Choose Your Product Color
  const [showClr, setShowClr] = useState(null);
  const [clr, setClr] = useState([
    { title: "white", color: "#ffffff" },
    { title: "cream", color: "#ece7d4" },
    { title: "black", color: "#000000" },
    // "#ece7d4",
    // "#000000",
    // "#afafaf",
    // "#3b4255",
    // "#404378",
    // "#708cc4",
    // "#8faec3",
    // "#6280a2",
    // "#0f7ca3",
    // "#553775",
    // "#c3153a",
    // "#912646",
    // "#5e0531",
    // "#c24d79",
    // "#ea90c4",
    // "#f5de81",
    // "#ece19f",
    // "#cf5d1f",
    // "#2d4233",
    // "#3a9663",
    // "#3ea959",
  ]);

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
                Choose A Shirt Color
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
            <div className="row py-5">
              <div class="col-6">
                <img
                  src="./assets/img/Fundraising_Images/white.jpg"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div className="col-6 ">
                <div class="container py-2 pt-3">
                  <div class="container ">
                    <h4 className="" style={{ color: "#5a5a5a" }}>
                      Choose a shirt color
                    </h4>
                    <p className="font-size-2" style={{ color: "#707070" }}>
                      You can always change it later.
                    </p>
                  </div>
                  <div class="row">
                    <div
                      className="col-6 text-center"
                      style={{ color: "#5a5a5a" }}
                    >
                      Select A Color:{" "}
                    </div>

                    <div class="col-4 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div
                          className="border"
                          style={{
                            backgroundColor: showClr
                              ? clr[showClr].color
                              : "#fff",
                            height: 25,
                            width: 25,
                          }}
                        ></div>
                        <span className="" style={{ color: "#5a5a5a" }}>
                          {showClr ? clr[showClr].title : "White"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="py-5">
                    <div
                      className=""
                      style={{
                        width: "100%",
                        flexDirection: "row",
                        flexWrap: "wrap",
                      }}
                    >
                      {clr.map((v, i) => {
                        return (
                          <div
                            onMouseEnter={() => setShowClr(i)}
                            className="border"
                            style={{
                              backgroundColor: `${v.color}`,
                              // wordWrap: "break-word",
                              display: "inline-block",
                              height: 25,
                              width: 25,
                              marginLeft: 15,
                              marginTop: 15,
                            }}
                          >
                            <br />
                          </div>
                        );
                      })}
                    </div>
                    <div className="row d-flex justify-content-start pt-5">
                      <div class="col-8">
                        <div className="container">
                          <button
                            className="btn btn-lg w-100 font-size-2 btn-dark"
                            type="submit"
                            onClick={() =>
                              props.setModalRoute((prevState) => prevState + 1)
                            }
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}
