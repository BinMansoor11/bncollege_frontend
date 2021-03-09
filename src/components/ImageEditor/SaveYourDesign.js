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

export default function SaveYourDesign(props) {
  return (
    <Modal
      {...props}
      size="lg"
      dialogClassName="modal-100w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div
        style={{
          height: "100%",
          width: "100%",
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
                Save And Continue
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
              <div className="col-6">
                <div className="container py-2 pt-3">
                  <div className="container ">
                    <h5
                      className="display-4 font-size-10"
                      style={{ color: "#5a5a5a" }}
                    >
                      Looking good!
                    </h5>
                    <p className="font-size-2" style={{ color: "#707070" }}>
                      Save here and enter the Fundraising Design Lab.
                    </p>
                  </div>
                  {/**
                   * Input
                   */}
                  <div class="form-group col-md-12 pt-4">
                    <input
                      type="Name"
                      class="form-control"
                      placeholder="Name"
                    />
                    <small class="form-text text-muted fon-size-1">
                      10 characters max, no spaces or symbols.
                    </small>
                  </div>
                  <div class="form-group col-md-12 pt-2">
                    <input
                      type="Email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                    <small
                      id="emailHelp"
                      class="form-text text-muted fon-size-1"
                    >
                      Your email is safe with us. Read our Privacy Policy.
                    </small>
                  </div>
                  {/**
                   * Button
                   */}
                  <div className="row d-flex justify-content-start pt-4">
                    <div class="col-12">
                      <div className="container">
                        <button
                          className="btn btn-lg w-100 font-size-2 btn-dark"
                          type="submit"
                          onClick={props.onHide}
                          // onClick={() =>
                          //   props.setModalRoute((prevState) => prevState + 1)
                          // }
                        >
                          Save And Continue
                        </button>
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
