import React, { useState } from "react";
import "./design.css";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { IoHammerOutline, IoChevronBack } from "react-icons/io5";
import { GiBookmark, GiSittingDog } from "react-icons/gi";
import { RiStethoscopeLine } from "react-icons/ri";
import { BiRun } from "react-icons/bi";
import { ImGift } from "react-icons/im";

export default function DesignLayout(props) {
  //Choose Your Product Color
  const [showClr, setShowClr] = useState(null);
  const [clr, setClr] = useState([
    { title: "white", color: "#ffffff" },
    { title: "cream", color: "#ece7d4" },
    { title: "black", color: "#000000" },
  ]);

  //Cards
  // const [cards, setCards] = useState([
  //   { title: "Small Business", icon: <IoHammerOutline size={40} /> },
  //   { title: "Education", icon: <GiBookmark size={40} /> },
  //   { title: "Animal", icon: <GiSittingDog size={40} /> },
  // ]);

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
                Choose a design layout
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
            <div className="row">
              <h4
                className="display-4  font-size-7"
                style={{ color: "#5a5a5a" }}
              >
                Choose your design
              </h4>
              <p className="font-size-2" style={{ color: "#707070" }}>
                Pick one of our magically created layouts or swap out your art
                using our library
              </p>
            </div>
            <div className="row py-5">
              <div className="col-5 bg-light">
                <div class="container-fluid col-12 my-3">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search our full library"
                    aria-label="Search"
                  />
                  <small className="form-text text-muted font-size-1">
                    Our most favorite art for <strong> Charity </strong>
                    fundraisers
                  </small>
                </div>
              </div>
              <div className="col-7 ">
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
                  {/* <div className="container-fluid d-flex justify-content-center ">
                    {cards.map((v, i) => {
                      return (
                        <div
                          className="grow bg-light shadow-sm  bg-white rounded p-3 pb-2 mx-2"
                          style={{ height: "100%", width: "auto" }}
                          onClick={() =>
                            props.setModalRoute((prevState) => prevState + 1)
                          }
                        >
                          <div className="d-flex justify-content-center">
                            {v.icon}
                          </div>
                          <div className=" d-flex align-items-end ">
                            <p className="text-center font-size-1">{v.title}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div> */}

                  <div class="container-fluid d-flex justify-content-center pt-3">
                    <div
                      className="grow bg-light shadow-sm  bg-white rounded p-3 pb-2 "
                      style={{ height: "100%", width: "auto" }}
                      onClick={() =>
                        props.setModalRoute((prevState) => prevState + 1)
                      }
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
                      onClick={() =>
                        props.setModalRoute((prevState) => prevState + 1)
                      }
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
                      onClick={() =>
                        props.setModalRoute((prevState) => prevState + 1)
                      }
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
