import React, { useState, createRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./scroll.css";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Tab, Nav, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { BiText, BiCheck, BiHorizontalCenter } from "react-icons/bi";
import {
  BsImage,
  BsCloudUpload,
  BsDropletFill,
  BsLayersHalf,
  BsLayersFill,
  BsTextCenter,
  BsTextRight,
  BsTextLeft,
} from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTshirt } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { CgClose } from "react-icons/cg";

import Dropzone from "react-dropzone";
import { useDropzone } from "react-dropzone";

import { useScreenshot } from "use-react-screenshot";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";
import DragItem from "./DragItem.js";
import DragText from "./DragText";
import GetStarted from "./GetStarted";
import ShirtColor from "./ShirtColor";
import InkColor from "./InkColor";
import SaveYourDesign from "./SaveYourDesign";
import AddText from "./AddText";
import DesignLayout from "./DesignLayout";
const smileyImage = "./assets/img/Fundraising_Images/darkrose.png";
const itemImage = "./assets/img/Fundraising_Images/item.png";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

export default function CustomInkUi() {
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(ref.current);

  const [imageSrc, setImageSrc] = useState(
    "./assets/img/Fundraising_Images/white.jpg"
  );
  const [imgStroke, setImageStroke] = useState(false);
  const [imgSize, setImageSize] = useState(70);
  const [txtSize, setTextSize] = useState(10);
  const [textIndexForCustomization, setTextIndexForCustomization] = useState(
    null
  );
  const [toggle, setToggle] = useState(false);
  const [toggleFrame, setToggleFrame] = useState(false);
  const [zIndex, setZIndex] = useState(false);
  let [DragItems, setDragItems] = useState([]);
  const [files, setFiles] = useState([]);

  {
    /**
     * FontFamily And Icons
     */
  }
  const [fonts, setFonts] = useState([
    "arial",
    "san-serif",
    "Potta One",
    "Verdana",
    "Helvetica",
    "Times New Roman",
    "Georgia",
  ]);

  const [fontIndex, setFontIndex] = useState(0);
  // const [fontIndex, setFontIndex] = useState(0);
  //Rotate Text //
  const [rotate, setRotate] = useState([180, 90, 45, 0, -45, -90, -180]);
  const [rotateIndex, setRotateIndex] = useState(3);
  // Rotate Image //
  const [rotateImage, setRotateImage] = useState([
    180,
    90,
    45,
    0,
    -45,
    -90,
    -180,
  ]);
  const [rotateImageIndex, setRotateImageIndex] = useState(3);

  // Text Size //
  const [textSize] = useState(["20%", "40%", "60%", "80%", "100%"]);
  const [textSizeIndex, setTextSizeIndex] = useState(4);
  const [textFlag, setTextFlag] = useState(false);

  const [text, setText] = useState([]);
  const [selectedText, setSelectedText] = useState({
    select: "",
    index: null,
    size: null,
  });
  const [textToAdded, setTextToAdded] = useState("");

  const [show, setShow] = useState(false);
  const [changeClr, setChange] = useState(null);
  const [showImage, setShowImage] = useState(null);
  const [showFontFamily, setShowFontFamily] = useState(null);
  const [showArtPanel, setShowArtPanel] = useState("cat");
  const [modalRoute, setModalRoute] = useState(0);
  const [menuRoute, setMenuRoute] = useState(0);
  const [draggableCircle, setDraggableCircle] = useState(true);
  const [hex, setHex] = useState("#3851a3");
  const randomColor = () => {
    const randomClr = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomClr);
  };

  const [navLink, setNavLink] = useState([
    {
      title: "Add Text",
      eventKey: "first",
    },
    {
      title: "Add Art",
      eventKey: "second",
    },
    {
      title: " Upload",
      eventKey: "third",
    },
    {
      title: " Product Colors",
      eventKey: "fourth",
    },
  ]);
  const [key, setKey] = useState(navLink[0].eventKey);

  const onChangeHandler = (e) => {
    setSelectedText((prevState) => {
      return {
        ...prevState,
        select: setSelectedText.select,
      };
    });
    setTextToAdded(
      textToAdded.length <= 30 ? e.target.value : textToAdded.slice(0, 30)
    );
  };

  const handleText = (e) => {
    // setText(text.length < 35 ? e.target.value : text);

    if (selectedText.index !== null) {
      let markers = [...text];
      markers[selectedText.index] = {
        ...text[selectedText.index],
        text: textToAdded.slice(0, 30),
      };
      setText(markers);
    } else {
      setText([...text, { text: textToAdded.slice(0, 30), size: 50 }]);
    }
  };

  const selectText = (i) => {
    const filter = text.filter((val, ind) => ind == i);

    // text.length > 0 ?
    setSelectedText({ select: filter[0].text, index: i, size: filter[0].size });
    // : setSelectedText({ select: "", index: null });
    console.log("selected text", filter, i);
    setKey("first");
    setChange(0);
  };

  const selectTextForCustomization = (i) => {
    console.log(
      "i =========> textIndexForCustomization",
      i,
      textIndexForCustomization
    );
    setTextIndexForCustomization(i);
    // i !== textIndexForCustomization && setTextSizeIndex(4);
  };

  //Add Art
  const mostPopular = [
    {
      title: "Most Popular",
      image: "./assets/img/Fundraising_Images/redrose.png",
    },
    {
      title: "Shapes & Symbols",
      image: "./assets/img/Fundraising_Images/glasses.png",
    },
    { title: "Animals", image: "./assets/img/Fundraising_Images/heart.png" },
    {
      title: "Quotes & Phrases",
      image: "./assets/img/Fundraising_Images/quote1.png",
    },
    { title: "People ", image: "./assets/img/Fundraising_Images/tree.png" },
    {
      title: "Letters & Numbers",
      image: "./assets/img/Fundraising_Images/wild.png",
    },
    { title: "America", image: "./assets/img/Fundraising_Images/hands.png" },
    { title: "Food", image: "./assets/img/Fundraising_Images/water.png" },
    { title: "Food", image: "./assets/img/Fundraising_Images/water.png" },
    { title: "Food", image: "./assets/img/Fundraising_Images/water.png" },
    { title: "Food", image: "./assets/img/Fundraising_Images/water.png" },
  ];

  //Modal
  const [modalShow, setModalShow] = useState(true);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  useEffect(() => {
    onSizeClick();
    // console.log("text", text);
    // console.log("textSizeIndex", textSizeIndex);
    files.forEach((file) => URL.revokeObjectURL(file.preview));
    console.log("files", files);
  }, [
    toggle,
    changeClr,
    draggableCircle,
    key,
    files,
    selectedText,
    showImage,
    textSizeIndex,
  ]);

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  //Choose Your Product Color
  const [showClr, setShowClr] = useState(null);

  const [showStrokeClr, setShowStrokeClr] = useState(null);
  const [showFontClr, setShowFontClr] = useState(null);
  const [alignText, setAlignText] = useState("center");
  const [clr, setClr] = useState([
    { title: "White", color: "#ffffff" },
    { title: "Natural", color: "#ece7d4" },
    { title: "Black", color: "#000000" },
    { title: "Light Steel", color: "#afafaf" },
    { title: "Navy", color: "#3b4255" },
    { title: "Deep Royal", color: "#404378" },
    { title: "Carolina Blue", color: "#708cc4" },
    { title: "Stonewashed Blue", color: "#8faec3" },
    { title: "Denim Blue", color: "#6280a2" },
    { title: "Sapphire", color: "#0f7ca3" },
    { title: "Purple", color: "#553775" },
    { title: "Deep Red", color: "#c3153a" },
    { title: "Cardinal", color: "#912646" },
    { title: "Maroon", color: "#5e0531" },
    { title: "Wow Pink", color: "#c24d79" },
    { title: "Pink", color: "#ea90c4" },
    { title: "Yellow", color: "#f5de81" },
    { title: "Daffodil Yellow", color: "#ece19f" },
    { title: "Orange", color: "#cf5d1f" },
    { title: "Deep Forest", color: "#2d4233" },
    { title: "Kelly Green", color: "#3a9663" },
    { title: "Shamrock Green", color: "#3ea959" },
  ]);

  const [showCheck, setShowCheck] = useState(null);
  const [showStrokeCheck, setShowStrokeCheck] = useState(null);

  const selectImage = (i) => {
    console.log("i", i);
    setShowImage(i);
    setKey("second");
    setChange(1);
  };

  const layerUp = (i) => {
    let FILTER = DragItems.filter((v, index) => index !== i);
    let FILTER2 = DragItems.filter((v, index) => index === i);
    FILTER = [...FILTER, FILTER2[0]];
    console.log("FILTER", FILTER, DragItems);
    // let markers = [...DragItems];
    // markers[i] = {
    //   ...DragItems[i],
    //   zValue: DragItems[i].zValue < 2 ? DragItems[i].zValue + 1 : 2,
    // };
    setDragItems(FILTER);
    zIndex === true && setZIndex(false);
  };

  const layerDown = (i) => {
    let FILTER = DragItems.filter((v, index) => index !== i);
    let FILTER2 = DragItems.filter((v, index) => index === i);
    FILTER.unshift(FILTER2[0]);
    setDragItems(FILTER);
  };

  const removeItem = (i) => {
    let FILTER = DragItems.filter((v, index) => index !== i);
    setDragItems(FILTER);
    setShowArtPanel(showArtPanel);
  };

  const removeText = (i) => {
    let FILTER = text.filter((v, index) => index !== i);
    setText(FILTER);
    // console.log("FILTER", FILTER);
  };

  function ScreenShot() {
    return (
      <div className="container  d-flex justify-content-start ml-3">
        <div class="row">
          <p>{DragItems[0].imgSize}</p>
          <img width="50%" src={image} alt={"Screenshot"} />
          <div>
            <button style={{ marginBottom: "10px" }} onClick={getImage}>
              Take screenshot
            </button>
          </div>
        </div>

        {/* <div ref={ref}>
          <h1>use-react-screenshot</h1>
          <p>
            <strong>hook by @vre2h which allows to create screenshots</strong>
          </p>
        </div> */}
      </div>
    );
  }

  // const setCircle = (setterFunc, val) => {
  //   val ? setterFunc(val) : setterFunc(val);
  //   console.log("setterFunc", setterFunc);
  // };

  // const myPromise = (i) =>
  //   new Promise(function (myResolve, myReject) {
  //     setTimeout(() => {
  //       myResolve(i);
  //     }, 500);
  //   });

  const onSizeClick = () => {
    // myPromise(i).then((res) => {
    console.log(
      "textSizeIndex in func",
      textSizeIndex,
      textIndexForCustomization,
      textFlag
    );
    // });
    if (textFlag == true) {
      setTextFlag((prevState) => prevState === true && false);
      switch (textSizeIndex) {
        case 4:
          var markers = [...text];

          markers[textIndexForCustomization] = {
            ...text[textIndexForCustomization],
            size: 50,
          };
          setText(markers);
          break;
        case 3:
          var markers = [...text];

          markers[textIndexForCustomization] = {
            ...text[textIndexForCustomization],
            size: 40,
          };
          setText(markers);
          break;
        case 2:
          var markers = [...text];
          markers[textIndexForCustomization] = {
            ...text[textIndexForCustomization],
            size: 30,
          };
          setText(markers);
          break;
        case 1:
          var markers = [...text];
          markers[textIndexForCustomization] = {
            ...text[textIndexForCustomization],
            size: 20,
          };
          setText(markers);
          break;
        case 0:
          var markers = [...text];
          markers[textIndexForCustomization] = {
            ...text[textIndexForCustomization],
            size: 14,
          };
          setText(markers);
          break;

        default:
          console.log("textIndexForCustomization", textIndexForCustomization);
          break;
      }
    }
  };

  return (
    <div>
      {/* <Files /> */}
      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}

      {modalRoute == 0 ? (
        <MyVerticallyCenteredModal
          setModalRoute={setModalRoute}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : modalRoute == 1 ? (
        <GetStarted
          setModalRoute={setModalRoute}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : modalRoute == 2 ? (
        <ShirtColor
          setModalRoute={setModalRoute}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : modalRoute == 3 ? (
        <InkColor
          setModalRoute={setModalRoute}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : modalRoute == 4 ? (
        <AddText
          setModalRoute={setModalRoute}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : modalRoute == 5 ? (
        <DesignLayout
          setModalRoute={setModalRoute}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : (
        <SaveYourDesign
          setModalRoute={setModalRoute}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
      {/* <div>
        {acceptedFiles.map((file) => (
          <li key={file.path}>
            {file.path} - {file.size} bytes
          </li>
        ))}
      </div> */}
      <Header />

      <div class="container-fluid ">
        <div class="row ml-2 ">
          <div class="col-4 bg-light ">
            <Tab.Container id="left-tabs-example" activeKey={key}>
              <Row className="h-100">
                <Col sm={3} className="bg-dark py-3">
                  <Nav variant="pills" className="flex-column">
                    {navLink.map((v, i) => {
                      return (
                        <Nav.Item
                          className="py-1"
                          onClick={() => (
                            setChange(i), setKey(navLink[i].eventKey)
                          )}
                          style={{
                            backgroundColor:
                              changeClr == i ? "#fff" : "#161618",
                            borderRadius: 5,
                          }}
                        >
                          <Nav.Link
                            eventKey={v.eventKey}
                            className="bgColor font-size-2 bg-transparent text-center text-light"
                            onClick={() => setChange(i)}
                            className="font-size-2 bg-transparent text-center"
                            style={{
                              color: changeClr == i ? "black" : "white",
                            }}
                          >
                            <div
                              className="d-flex justify-content-center "
                              onClick={() => setChange(i)}
                              style={{
                                color: changeClr == i ? "black" : "white",
                              }}
                            >
                              {i == 0 ? (
                                <BiText
                                  size={25}
                                  style={{
                                    color: changeClr == i ? "black" : "white",
                                  }}
                                />
                              ) : i == 1 ? (
                                <BsImage
                                  size={25}
                                  style={{
                                    color: changeClr == i ? "black" : "white",
                                  }}
                                />
                              ) : i == 2 ? (
                                <BsCloudUpload
                                  size={25}
                                  style={{
                                    color: changeClr == i ? "black" : "white",
                                  }}
                                />
                              ) : (
                                <BsDropletFill
                                  size={25}
                                  style={{
                                    color: changeClr == i ? "black" : "white",
                                  }}
                                />
                              )}
                              <br />
                            </div>
                            {v.title}
                          </Nav.Link>
                        </Nav.Item>
                      );
                    })}
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    {/**
                     * Main Content
                     */}

                    {changeClr == null && (
                      <div
                        className="bg-light"
                        style={{
                          position: "absolute",
                          height: "100%",
                          zIndex: 11,
                          left: 0,
                        }}
                      >
                        <div className="row  d-flex justify-content-center py-5">
                          <div className="col-10 ">
                            <div className="container">
                              <h4
                                className="display-4 font-size-5"
                                style={{ color: "#222" }}
                              >
                                Create a Design for Your Fundraiser!
                              </h4>
                            </div>
                          </div>
                        </div>
                        {/**
                         * Button
                         */}
                        <div className="">
                          <div className="row py-3">
                            <div class="col-12">
                              <div class="container d-flex justify-content-center">
                                <div className="col-6">
                                  <Link
                                    onClick={() => (
                                      setChange(0), setKey(navLink[0].eventKey)
                                    )}
                                    onMouseEnter={(e) =>
                                      (e.target.style.color = "black")
                                    }
                                    onMouseLeave={(e) =>
                                      (e.target.style.color = "#535353")
                                    }
                                    style={{ color: "#535353" }}
                                  >
                                    <div className="text-center">
                                      <BiText
                                        size={30}
                                        style={{ color: "#535353" }}
                                      />
                                    </div>
                                    <p className="text-center">Add Text</p>
                                  </Link>
                                </div>
                                <div className="col-6">
                                  <Link
                                    onClick={() => (
                                      setChange(1), setKey(navLink[1].eventKey)
                                    )}
                                    onMouseEnter={(e) =>
                                      (e.target.style.color = "black")
                                    }
                                    onMouseLeave={(e) =>
                                      (e.target.style.color = "#535353")
                                    }
                                    style={{ color: "#535353" }}
                                  >
                                    <div className="text-center">
                                      <BsImage
                                        size={30}
                                        style={{ color: "#535353" }}
                                      />
                                    </div>
                                    <p className="text-center">Add Art</p>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row pt-3">
                            <div class="col-12">
                              <div class="container d-flex justify-content-center">
                                <div className="col-6">
                                  <Link
                                    onClick={() => (
                                      setChange(2), setKey(navLink[2].eventKey)
                                    )}
                                    onMouseEnter={(e) =>
                                      (e.target.style.color = "black")
                                    }
                                    onMouseLeave={(e) =>
                                      (e.target.style.color = "#535353")
                                    }
                                    style={{ color: "#535353" }}
                                  >
                                    <div className="text-center">
                                      <BsCloudUpload
                                        size={30}
                                        style={{ color: "#535353" }}
                                      />
                                    </div>
                                    <p className="text-center">Upload</p>
                                  </Link>
                                </div>
                                <div className="col-6">
                                  <Link
                                    onMouseEnter={(e) =>
                                      (e.target.style.color = "black")
                                    }
                                    onMouseLeave={(e) =>
                                      (e.target.style.color = "#535353")
                                    }
                                    style={{ color: "#535353" }}
                                  >
                                    {" "}
                                    <div className="text-center">
                                      <FaTshirt
                                        size={30}
                                        style={{ color: "#535353" }}
                                      />
                                    </div>
                                    <p className="text-center font-size-2">
                                      Change Products
                                    </p>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/**
                           * Start Over
                           */}
                          <div class="row d-flex justify-content-center pt-5">
                            <span>
                              or{" "}
                              <Link
                                className="font-size-2"
                                onMouseEnter={(e) =>
                                  (e.target.style.color = "#5b75b9")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.color = "#1f51ce")
                                }
                                style={{ color: "#1f51ce" }}
                                onClick={() => setModalShow(true)}
                              >
                                start over
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    <Tab.Pane eventKey="first">
                      {/**
                       * Font Family List
                       */}
                      {showFontFamily !== null && (
                        <div
                          className="bg-light"
                          style={{
                            position: "absolute",
                            height: "100%",
                            zIndex: 11,
                            left: 0,
                            right: 6,
                          }}
                        >
                          <div
                            className="col-12 d-flex justify-content-between"
                            style={{ backgroundColor: "#ececec" }}
                          >
                            <span>
                              <Link
                                onClick={() => setShowFontFamily(null)}
                                onMouseEnter={(e) =>
                                  (e.target.style.color = "black")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.color = "#535353")
                                }
                              >
                                <IoChevronBack
                                  size={20}
                                  style={{ color: "#535353" }}
                                />
                              </Link>
                            </span>
                            <span
                              className="text-capitalize font-size-2"
                              style={{
                                paddingTop: "0.2rem",
                                paddingBottom: "0.2rem",
                              }}
                            >
                              Popular Fonts
                            </span>
                            <span className="">
                              <Link
                                onMouseEnter={(e) =>
                                  (e.target.style.color = "black")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.color = "#535353")
                                }
                              >
                                <CgClose
                                  onClick={() => (
                                    setChange(null), setShowFontFamily(null)
                                  )}
                                  size={20}
                                  style={{ color: "#535353" }}
                                />
                              </Link>
                            </span>
                          </div>

                          <div
                            className="scroll"
                            onMouseOver={(e) =>
                              (e.target.style.color = "#1f51ce")
                            }
                            onMouseOut={(e) => (e.target.style.color = "#222")}
                            style={{
                              color: "#222",
                            }}
                          >
                            {fonts.map((v, i) => {
                              return (
                                <Dropdown.Item
                                  style={{ fontFamily: v }}
                                  onClick={() => {
                                    setFontIndex(i);
                                  }}
                                >
                                  {show ? (
                                    <>
                                      <p className="text-center font-size-7 ">
                                        {text.length > 0 &&
                                          text[text.length - 1].text.slice(
                                            0,
                                            15
                                          )}
                                      </p>
                                      <p className="text-center text-capitalize text-muted font-size-3">
                                        {v}
                                      </p>
                                    </>
                                  ) : (
                                    <p className="text-center text-capitalize text-muted font-size-3">
                                      {v}
                                    </p>
                                  )}
                                </Dropdown.Item>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      <div class="row ">
                        <div
                          className="col-12 d-flex justify-content-between"
                          style={{ backgroundColor: "#ececec" }}
                        >
                          <span>
                            {/* <Link
                              onMouseEnter={(e) =>
                                (e.target.style.color = "black")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.color = "#535353")
                              }
                            >
                              <IoChevronBack
                                size={20}
                                style={{ color: "#535353" }}
                              />
                            </Link> */}
                          </span>
                          <span
                            className="text-capitalize font-size-2"
                            style={{
                              paddingTop: "0.2rem",
                              paddingBottom: "0.2rem",
                            }}
                          >
                            Add Text
                          </span>
                          <span className="">
                            <Link
                              onMouseEnter={(e) =>
                                (e.target.style.color = "black")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.color = "#535353")
                              }
                            >
                              <CgClose
                                onClick={() => setChange(null)}
                                size={20}
                                style={{ color: "#535353" }}
                              />
                            </Link>
                          </span>
                        </div>
                      </div>

                      <div className=" py-5 ">
                        <div className="row">
                          <div class="container-fluid">
                            <input
                              class="form-control "
                              placeholder="Enter text here"
                              type="text"
                              onChange={onChangeHandler}
                              aria-label="text"
                              value={selectedText.select}
                            />
                          </div>
                        </div>
                        <div className="row pt-3">
                          {/**
                           * Font
                           */}
                          <div class="border border-right-0 border-left-0  container  d-flex justify-content-between py-3">
                            <div className=" d-flex align-items-center">
                              Font
                            </div>
                            {/**
                             * FontFamily Dropdown
                             */}
                            <div>
                              <Link
                                className="link-black-100"
                                onClick={() => setShowFontFamily()}
                              >
                                {fonts[fontIndex].charAt(0).toUpperCase() +
                                  fonts[fontIndex].slice(1)}
                              </Link>
                              <MdKeyboardArrowRight
                                size={24}
                                style={{ color: "gray" }}
                              />
                            </div>
                            {/* <div>
                              <DropdownButton
                                // onMouseOver={(e) => (
                                //   (e.target.style.backgroundColor = "#fff"),
                                //   (e.target.style.color = "#222"),
                                //   (e.target.style.borderColor = "#ccc")
                                // )}
                                // onMouseOut={(e) => (
                                //   (e.target.style.backgroundColor = "#f8f9fb"),
                                //   (e.target.style.borderColor = "#d0d0d0")
                                // )}
                                id="dropdown-item-button"
                                title={
                                  fonts[fontIndex].charAt(0).toUpperCase() +
                                  fonts[fontIndex].slice(1)
                                }
                                size="sm"
                                // variant="outline-dark"
                                // style={{
                                //   borderWidth: 2,
                                //   borderColor: "#ccc",
                                //   borderStyle: "solid",
                                // }}
                              >
                                <div
                                  className="scroll"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#1f51ce")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "#222")
                                  }
                                  style={{
                                    color: "#222",
                                  }}
                                >
                                  {fonts.map((v, i) => {
                                    return (
                                      <Dropdown.Item
                                        style={{ fontFamily: v }}
                                        onClick={() => {
                                          setFontIndex(i);
                                        }}
                                      >
                                        {show ? (
                                          <>
                                            <p className="text-center font-size-7 ">
                                              {text.length > 0 &&
                                                text[
                                                  text.length - 1
                                                ].text.slice(0, 15)}
                                            </p>
                                            <p className="text-center text-capitalize text-muted font-size-3">
                                              {v}
                                            </p>
                                          </>
                                        ) : (
                                          <p className="text-center text-capitalize text-muted font-size-3">
                                            {v}
                                          </p>
                                        )}
                                      </Dropdown.Item>
                                    );
                                  })}
                                </div>
                              </DropdownButton>

                              <div>
                                {fonts.map((v, i) => {
                                  return (
                                    <p
                                      style={{ fontFamily: v }}
                                      onClick={() => {
                                        setFontIndex(i);
                                      }}
                                    >
                                      {show ? text : v}
                                    </p>
                                  );
                                })}
                              </div>
                            </div>
                       */}
                          </div>
                          {/**
                           * Text Color
                           */}
                          <div class="container align-items-center d-flex justify-content-between py-3">
                            <div>Text Color</div>
                            <div>
                              <DropdownButton
                                menuAlign="right"
                                title="Select a color"
                                // id="dropdown-menu-align-right"
                                id="dropdown-item-button"
                                size="sm"
                                variant="outline-secondary"
                              >
                                <div class="row">
                                  <div class="container py-2 pt-3">
                                    <div class="row">
                                      <div class="col-12">
                                        <div className="text-center">
                                          Select A Color:{" "}
                                        </div>
                                        <div
                                          className="pt-2"
                                          style={{
                                            display: "flex",
                                            justifyContent: "center",
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
                                          <div className="ml-1">
                                            <span className="font-size-2  ">
                                              {showClr
                                                ? clr[showClr].title
                                                : "White"}
                                            </span>
                                          </div>
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
                                              onClick={() => (
                                                setShowCheck(i),
                                                setShowFontClr(i)
                                              )}
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
                                              {showFontClr && showCheck == i ? (
                                                <BiCheck
                                                  size={24}
                                                  style={{
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color:
                                                      v.color == "#ffffff"
                                                        ? "#8a8a8a"
                                                        : "#ffffff",
                                                    paddingBottom: 5,
                                                  }}
                                                />
                                              ) : null}

                                              <br />
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </DropdownButton>
                            </div>
                          </div>
                          {/**
                           * Rotation
                           */}
                          <div className="border border-right-0 border-left-0  container d-flex justify-content-between py-3">
                            <div className=" d-flex align-items-center">
                              Rotation
                            </div>
                            <div className="">
                              <DropdownButton
                                id="dropdown-item-button"
                                title={rotate[rotateIndex]}
                                size="sm"
                                variant="outline-secondary"
                              >
                                <div
                                  className="scroll"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#1f51ce")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "#222")
                                  }
                                  style={{
                                    color: "#222",
                                  }}
                                >
                                  {rotate.map((v, i) => {
                                    return (
                                      <Dropdown.Item
                                        // style={{ fontFamily: v }}
                                        onClick={() => {
                                          setRotateIndex(i);
                                        }}
                                      >
                                        <p className="text-center text-capitalize text-muted font-size-3">
                                          {v}
                                        </p>
                                      </Dropdown.Item>
                                    );
                                  })}
                                </div>
                              </DropdownButton>
                            </div>
                          </div>
                          {/**
                           * Outline
                           */}
                          <div className="border border-right-0 border-left-0  border-top-0 container  d-flex justify-content-between py-3">
                            <div>Outline</div>
                            <div>
                              <DropdownButton
                                menuAlign="right"
                                title="Select a color"
                                // id="dropdown-menu-align-right"
                                id="dropdown-item-button"
                                size="sm"
                                variant="outline-secondary"
                              >
                                <div class="row">
                                  <div class="container py-2 pt-3">
                                    <div class="row">
                                      <div class="col-12">
                                        <div className="text-center">
                                          Select A Color:{" "}
                                        </div>
                                        <div
                                          className="pt-2"
                                          style={{
                                            display: "flex",
                                            justifyContent: "center",
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
                                          <div className="ml-1">
                                            <span className="font-size-2  ">
                                              {showClr
                                                ? clr[showClr].title
                                                : "White"}
                                            </span>
                                          </div>
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
                                              onClick={() => (
                                                setShowStrokeCheck(i),
                                                setShowStrokeClr(i)
                                              )}
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
                                              {showStrokeCheck &&
                                              showStrokeCheck == i ? (
                                                <BiCheck
                                                  size={24}
                                                  style={{
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color:
                                                      v.color == "#ffffff"
                                                        ? "#8a8a8a"
                                                        : "#ffffff",
                                                    paddingBottom: 5,
                                                  }}
                                                />
                                              ) : null}

                                              <br />
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </DropdownButton>
                            </div>
                          </div>
                          {/**
                           * Text Shape
                           */}
                          {/* <div className="border border-right-0 border-left-0  border-top-0 container  d-flex justify-content-between py-3">
                            <div>Text Shape</div>
                            <div>Black</div>
                          </div>
                         */}
                          {/**
                           * Text Size
                           */}
                          <div className="border border-right-0 border-left-0  container d-flex justify-content-between py-3">
                            <div className=" d-flex align-items-center">
                              Text Size
                            </div>
                            <div className="">
                              <DropdownButton
                                id="dropdown-item-button"
                                // title={textSize[textSizeIndex]}
                                title={
                                  selectedText.size !== null
                                    ? selectedText.size === 14
                                      ? "20%"
                                      : selectedText.size === 20
                                      ? "40%"
                                      : selectedText.size === 30
                                      ? "60%"
                                      : selectedText.size === 40
                                      ? "80%"
                                      : selectedText.size === 50 && "100%"
                                    : textSize[textSizeIndex]
                                }
                                onClick={() => setTextFlag(true)}
                                size="sm"
                                variant="outline-secondary"
                              >
                                <div
                                  className="scroll"
                                  onMouseOver={(e) =>
                                    (e.target.style.color = "#1f51ce")
                                  }
                                  onMouseOut={(e) =>
                                    (e.target.style.color = "#222")
                                  }
                                  style={{
                                    color: "#222",
                                  }}
                                >
                                  {textSize.map((v, i) => {
                                    return (
                                      <Dropdown.Item
                                        // style={{ fontFamily: v }}
                                        onClick={() => {
                                          // onSizeClick(i);
                                          setTextSizeIndex(i);
                                        }}
                                      >
                                        <p className="text-center text-capitalize text-muted font-size-3">
                                          {v}
                                        </p>
                                      </Dropdown.Item>
                                    );
                                  })}
                                </div>
                              </DropdownButton>
                            </div>
                          </div>

                          {/* <div className="border border-right-0 border-left-0  border-top-0 container  d-flex justify-content-between py-3">
                            <div className=" d-flex align-items-center ">
                              Text Size
                            </div>
                            <div className="col-4">
                              <input
                                id="dropdown-item-button"
                                className="form-control form-control-sm text-center"
                                // placeholder="2.5"
                                type="text"
                                onChange={onChangeHandler}
                              />
                            </div>
                          </div> */}

                          {/**
                           * Button
                           */}
                          <div className="container ">
                            <div className="text-right py-2">
                              <button
                                className="btn btn-md btn-dark"
                                type="submit"
                                onClick={() => (
                                  textToAdded !== "" && handleText(),
                                  setShow(true),
                                  setSelectedText({
                                    select: "",
                                    index: null,
                                    size: null,
                                  }),
                                  setTextToAdded("")
                                )}
                              >
                                Add to Design
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3 d-flex justify-content-center">
                          {/* <div>
                            <button className="btn btn-sm btn-outline-dark d-flex-justify-content-center">
                              <BiHorizontalCenter size={24} />
                            </button>
                            <p className="text-center font-size-1">center</p>
                          </div> */}
                          <div>
                            <div className="btn-group pl-3" role="group">
                              <button
                                id="dropdown-item-button"
                                className="btn-sm btn-outline-dark d-flex-justify-content-center"
                              >
                                <BsLayersHalf size={24} />
                              </button>
                              <button
                                id="dropdown-item-button"
                                className="btn-sm btn-outline-dark d-flex-justify-content-center"
                              >
                                <BsLayersFill size={24} />
                              </button>
                            </div>
                            <p className="text-center font-size-1 ml-3">
                              Layering
                            </p>
                          </div>
                          <div>
                            <div className="btn-group pl-3" role="group">
                              <button
                                id="dropdown-item-button"
                                onClick={() => setAlignText("left")}
                                className={`btn-sm btn-outline-dark d-flex-justify-content-center ${
                                  alignText !== "left" ? "" : "active"
                                }  `}
                              >
                                <BsTextLeft size={22} />
                              </button>
                              <button
                                id="dropdown-item-button"
                                onClick={() => setAlignText("center")}
                                className={`btn-sm btn-outline-dark d-flex-justify-content-center ${
                                  alignText !== "center" ? "" : "active"
                                }  `}
                              >
                                <BsTextCenter size={22} />
                              </button>
                              <button
                                id="dropdown-item-button"
                                onClick={() => setAlignText("right")}
                                className={`btn-sm btn-outline-dark d-flex-justify-content-center ${
                                  alignText !== "right" ? "" : "active"
                                }  `}
                              >
                                <BsTextRight size={22} />
                              </button>
                            </div>
                            <p className="text-center font-size-1 ml-3">
                              Text Alignment
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {/**
                       * Edit Art
                       */}
                      {showImage !== null && (
                        <div
                          className="bg-light"
                          style={{
                            position: "absolute",
                            height: "100%",
                            zIndex: 11,
                            left: 0,
                            right: 6,
                          }}
                        >
                          <div
                            className="col-12 d-flex justify-content-between"
                            style={{ backgroundColor: "#ececec" }}
                          >
                            <span>
                              {/* <Link
                              onMouseEnter={(e) =>
                                (e.target.style.color = "black")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.color = "#535353")
                              }
                            >
                              <IoChevronBack
                                size={20}
                                style={{ color: "#535353" }}
                              />
                            </Link> */}
                            </span>
                            <span
                              className="text-capitalize font-size-2"
                              style={{
                                paddingTop: "0.2rem",
                                paddingBottom: "0.2rem",
                              }}
                            >
                              Edit Art
                            </span>
                            <span className="">
                              <Link
                                onMouseEnter={(e) =>
                                  (e.target.style.color = "black")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.color = "#535353")
                                }
                              >
                                <CgClose
                                  onClick={() => (
                                    setChange(null),
                                    setShowImage(null),
                                    setShowArtPanel("cat")
                                  )}
                                  size={20}
                                  style={{ color: "#535353" }}
                                />
                              </Link>
                            </span>
                          </div>

                          <div className="pt-2">
                            <div class="container-fluid bg-light">
                              <div className="row pt-2 d-flex justify-content-center">
                                {/* <div>
                                  <button className="btn btn-sm btn-outline-dark d-flex-justify-content-center">
                                    <BiHorizontalCenter size={24} />
                                  </button>
                                  <p className="text-center font-size-1">
                                    center
                                  </p>
                                </div> */}
                                <div>
                                  <div className="btn-group pl-3" role="group">
                                    <button
                                      id="dropdown-item-button"
                                      className="btn-sm btn-outline-dark d-flex-justify-content-center"
                                    >
                                      <BsLayersHalf size={24} />
                                    </button>
                                    <button
                                      id="dropdown-item-button"
                                      className="btn-sm btn-outline-dark d-flex-justify-content-center"
                                    >
                                      <BsLayersFill size={24} />
                                    </button>
                                  </div>
                                  <p className="text-center font-size-1 ml-3">
                                    Layering
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="row ">
                              <div className="col-12">
                                {/**
                                 * Rotation
                                 */}
                                <div className="border border-right-0 border-left-0  container d-flex justify-content-between py-3">
                                  <div className=" d-flex align-items-center">
                                    Rotation
                                  </div>
                                  <div className="">
                                    <DropdownButton
                                      id="dropdown-item-button"
                                      title={rotateImage[rotateImageIndex]}
                                      size="sm"
                                      variant="outline-secondary"
                                    >
                                      <div
                                        className="scroll"
                                        onMouseOver={(e) =>
                                          (e.target.style.color = "#1f51ce")
                                        }
                                        onMouseOut={(e) =>
                                          (e.target.style.color = "#222")
                                        }
                                        style={{
                                          color: "#222",
                                        }}
                                      >
                                        {rotateImage.map((v, i) => {
                                          return (
                                            <Dropdown.Item
                                              // style={{ fontFamily: v }}
                                              onClick={() => {
                                                setRotateImageIndex(i);
                                              }}
                                            >
                                              <p className="text-center text-capitalize text-muted font-size-3">
                                                {v}
                                              </p>
                                            </Dropdown.Item>
                                          );
                                        })}
                                      </div>
                                    </DropdownButton>
                                  </div>
                                </div>

                                {/**
                                 * Change Art
                                 */}
                                <div className="border border-right-0 border-left-0  border-top-0 container  d-flex justify-content-between py-3">
                                  <div>Change Art</div>
                                  <div>
                                    <Link className="link-black-100">
                                      Change
                                    </Link>
                                    <MdKeyboardArrowRight
                                      size={24}
                                      style={{ color: "gray" }}
                                    />
                                  </div>
                                </div>

                                <div className="container ">
                                  <div className="text-right py-2">
                                    <button
                                      className="btn btn-outline-dark"
                                      type="submit"
                                      // onClick={() => (
                                      //   handleText(), setShow(true)
                                      // )}
                                    >
                                      Save Design
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/**
                       * Artwork Categories
                       */}
                      {changeClr !== null &&
                        showImage === null &&
                        showArtPanel === "cat" && (
                          <div
                            className=""
                            style={{
                              position: "absolute",
                              height: "100%",
                              zIndex: 11,
                              left: 0,
                              right: 6,
                            }}
                          >
                            <div
                              className="col-12 d-flex justify-content-between"
                              style={{ backgroundColor: "#ececec" }}
                            >
                              <span>
                                {/* <Link
                              onMouseEnter={(e) =>
                                (e.target.style.color = "black")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.color = "#535353")
                              }
                            >
                              <IoChevronBack
                                size={20}
                                style={{ color: "#535353" }}
                              />
                            </Link> */}
                              </span>
                              <span
                                className="text-capitalize font-size-2"
                                style={{
                                  paddingTop: "0.2rem",
                                  paddingBottom: "0.2rem",
                                }}
                              >
                                Artwork Categories
                              </span>
                              <span className="">
                                <Link
                                  onMouseEnter={(e) =>
                                    (e.target.style.color = "black")
                                  }
                                  onMouseLeave={(e) =>
                                    (e.target.style.color = "#535353")
                                  }
                                >
                                  <CgClose
                                    onClick={() => (
                                      setChange(null), setShowFontFamily(null)
                                    )}
                                    size={20}
                                    style={{ color: "#535353" }}
                                  />
                                </Link>
                              </span>
                            </div>

                            <div className="scroll">
                              <div className="row d-flex justify-content-center">
                                <div className="col-12 pt-3">
                                  <div class="container-fluid">
                                    <input
                                      class="form-control "
                                      placeholder="Search For Artwork"
                                      type="text"
                                      onChange={onChangeHandler}
                                      aria-label="text"
                                      value={selectedText.select}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="container"
                                // onMouseOver={(e) =>
                                //   (e.target.style.color = "#1f51ce")
                                // }
                                // onMouseOut={(e) => (e.target.style.color = "#222")}
                                // style={{
                                //   color: "red",
                                // }}
                              >
                                {mostPopular.map((v) => {
                                  return (
                                    <div
                                      className="col-12"
                                      style={{
                                        display: "initial",
                                      }}
                                    >
                                      <div
                                        className=""
                                        style={
                                          {
                                            // backgroundColor: "red",
                                          }
                                        }
                                      >
                                        <Dropdown.Item
                                          onClick={() => setShowArtPanel("sub")}
                                          style={{
                                            // backgroundColor: "#3851a3",

                                            // backgroundColor: `${hex}`,
                                            backgroundColor:
                                              "#" +
                                              Math.floor(
                                                Math.random() * 16777215
                                              ).toString(16),
                                            color: "#ffffff",
                                            borderRadius: 5,
                                          }}
                                          // onMouseEnter={(e) =>
                                          //   (e.target.style.color = "#ffffff")
                                          // }
                                          // onMouseLeave={(e) =>
                                          //   (e.target.style.color = "#ffffff")
                                          // }
                                          // onMouseEnter={(e) =>
                                          //   (e.target.style.backgroundColor =
                                          //     "#161618")
                                          // }
                                          // onMouseLeave={(e) =>
                                          //   (e.target.style.backgroundColor =
                                          //     "#3851a3")
                                          // }
                                          className="py-5 text-center text-capitalize font-size-3"
                                        >
                                          {v.title}
                                        </Dropdown.Item>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        )}

                      {/**
                       * Sub Categories
                       */}
                      {changeClr !== null && showArtPanel === "sub" && (
                        <div
                          className=""
                          style={{
                            position: "absolute",
                            height: "100%",
                            zIndex: 11,
                            left: 0,
                            right: 6,
                          }}
                        >
                          <div
                            className="col-12 d-flex justify-content-between"
                            style={{ backgroundColor: "#ececec" }}
                          >
                            <span>
                              <Link
                                onClick={() => setShowArtPanel("cat")}
                                onMouseEnter={(e) =>
                                  (e.target.style.color = "black")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.color = "#535353")
                                }
                              >
                                <IoChevronBack
                                  size={20}
                                  style={{ color: "#535353" }}
                                />
                              </Link>
                            </span>
                            <span
                              className="text-capitalize font-size-2"
                              style={{
                                paddingTop: "0.2rem",
                                paddingBottom: "0.2rem",
                              }}
                            >
                              Sub Categories
                            </span>
                            <span className="">
                              <Link
                                onMouseEnter={(e) =>
                                  (e.target.style.color = "black")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.color = "#535353")
                                }
                              >
                                <CgClose
                                  onClick={() => (
                                    setChange(null), setShowFontFamily(null)
                                  )}
                                  size={20}
                                  style={{ color: "#535353" }}
                                />
                              </Link>
                            </span>
                          </div>

                          <div className="scroll">
                            {/**
                             *  Search Sub Categories
                             */}
                            {/* <div className="row d-flex justify-content-center">
                              <div className="col-12 pt-3">
                                <div class="container-fluid">
                                  <input
                                    class="form-control "
                                    placeholder="Search For Artwork"
                                    type="text"
                                    onChange={onChangeHandler}
                                    aria-label="text"
                                    value={selectedText.select}
                                  />
                                </div>
                              </div>
                            </div> */}
                            <div
                              className="container"
                              // onMouseOver={(e) =>
                              //   (e.target.style.color = "#1f51ce")
                              // }
                              // onMouseOut={(e) => (e.target.style.color = "#222")}
                              // style={{
                              //   color: "red",
                              // }}
                            >
                              {mostPopular.map((v) => {
                                return (
                                  <div
                                    className="col-12"
                                    style={{
                                      display: "initial",
                                    }}
                                  >
                                    <div
                                      className=""
                                      style={
                                        {
                                          // backgroundColor: "red",
                                        }
                                      }
                                    >
                                      <Dropdown.Item
                                        onClick={() => setShowArtPanel("art")}
                                        style={{
                                          backgroundColor: "#3851a3",

                                          // backgroundColor: `${hex}`,
                                          // backgroundColor:
                                          //   "#" +
                                          //   Math.floor(
                                          //     Math.random() * 16777215
                                          //   ).toString(16),
                                          color: "#ffffff",
                                          borderRadius: 5,
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.color = "#ffffff")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.color = "#ffffff")
                                        }
                                        onMouseEnter={(e) =>
                                          (e.target.style.backgroundColor =
                                            "#161618")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.backgroundColor =
                                            "#3851a3")
                                        }
                                        className="py-2 text-center text-capitalize font-size-3"
                                      >
                                        {v.title}
                                      </Dropdown.Item>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {/**
                       * Art
                       */}
                      {showArtPanel === "art" && (
                        <>
                          <div class="row ">
                            <div
                              className="col-12 d-flex justify-content-between"
                              style={{ backgroundColor: "#ececec" }}
                            >
                              <span>
                                <Link
                                  onClick={() => setShowArtPanel("sub")}
                                  onMouseEnter={(e) =>
                                    (e.target.style.color = "black")
                                  }
                                  onMouseLeave={(e) =>
                                    (e.target.style.color = "#535353")
                                  }
                                >
                                  <IoChevronBack
                                    size={20}
                                    style={{ color: "#535353" }}
                                  />
                                </Link>
                              </span>
                              <span
                                className="text-capitalize font-size-2"
                                style={{
                                  paddingTop: "0.2rem",
                                  paddingBottom: "0.2rem",
                                }}
                              >
                                Art
                              </span>
                              <span className="">
                                <Link
                                  onMouseEnter={(e) =>
                                    (e.target.style.color = "black")
                                  }
                                  onMouseLeave={(e) =>
                                    (e.target.style.color = "#535353")
                                  }
                                >
                                  <CgClose
                                    onClick={() => (
                                      setChange(null), setShowArtPanel("cat")
                                    )}
                                    size={20}
                                    style={{ color: "#535353" }}
                                  />
                                </Link>
                              </span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="container-fluid my-3">
                              <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search For Artwork"
                                aria-label="Search"
                              />
                            </div>
                          </div>
                          <div
                            className="row"
                            style={{
                              flexDirection: "row",
                              flexWrap: "wrap",
                              display: "inline",
                              width: "100%",
                            }}
                          >
                            <div>
                              {mostPopular.map((v) => {
                                return (
                                  <div
                                    className="container"
                                    style={{ display: "inline" }}
                                  >
                                    <img
                                      className="img-fluid text-center px-1 py-2 "
                                      src={v.image}
                                      height={70}
                                      width={70}
                                      onClick={() => {
                                        setDragItems((prev) => [
                                          ...prev,
                                          {
                                            imgLink: v.image,
                                            imgSize: imgSize,
                                            zValue: 1,
                                            setImageSize: setImageSize,
                                          },
                                        ]);
                                      }}
                                    />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div class="row ">
                        <div
                          className="col-12 d-flex justify-content-between"
                          style={{ backgroundColor: "#ececec" }}
                        >
                          <span>
                            {/* <Link
                              onMouseEnter={(e) =>
                                (e.target.style.color = "black")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.color = "#535353")
                              }
                            >
                              <IoChevronBack
                                size={20}
                                style={{ color: "#535353" }}
                              />
                            </Link> */}
                          </span>
                          <span
                            className="text-capitalize font-size-2"
                            style={{
                              paddingTop: "0.2rem",
                              paddingBottom: "0.2rem",
                            }}
                          >
                            Upload
                          </span>
                          <span className="">
                            <Link
                              onMouseEnter={(e) =>
                                (e.target.style.color = "black")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.color = "#535353")
                              }
                            >
                              <CgClose
                                onClick={() => setChange(null)}
                                size={20}
                                style={{ color: "#535353" }}
                              />
                            </Link>
                          </span>
                        </div>
                      </div>

                      <div class="container py-2 pt-3">
                        <p>Choose a file to upload</p>

                        <div
                          className=" py-5"
                          style={{
                            borderStyle: "dashed",
                            borderWidth: 2,
                            borderColor: "black",
                          }}
                        >
                          <Dropzone
                            // onDrop={(acceptedFiles) => (
                            //   console.log(acceptedFiles),
                            //   setDragItems((prev) => [
                            //     ...prev,
                            //     {
                            //       imgLink: acceptedFiles,
                            //       imgSize: imgSize,
                            //       zValue: 1,
                            //       setImageSize: setImageSize,
                            //     },
                            //   ])
                            // )}
                            onDrop={(acceptedFiles) => {
                              acceptedFiles.map((file) =>
                                setDragItems((prev) => [
                                  ...prev,
                                  {
                                    imgLink: URL.createObjectURL(file),
                                    imgSize: imgSize,
                                    zValue: 1,
                                    setImageSize: setImageSize,
                                  },
                                ])
                              );
                            }}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <section className="container">
                                <div
                                  {...getRootProps({ className: "dropzone" })}
                                >
                                  <input {...getInputProps()} />
                                  <div className="d-flex justify-content-center py-2">
                                    <BsCloudUpload size={30} />
                                  </div>
                                  <p className="text-center">
                                    Drag & Drop or <br />
                                    Browse Your Computer
                                  </p>
                                </div>
                              </section>
                            )}
                          </Dropzone>
                        </div>
                        <p className="pt-3 font-size-1 ">
                          Accepted File Types (Max size: 5 MB)
                        </p>
                        <div className="border d-flex justify-content-between">
                          <span className="font-size-1 border-right">.JPG</span>
                          <span className="font-size-1 border-right">
                            .JPEG
                          </span>
                          <span className="font-size-1 border-right">.PNG</span>
                          <span className="font-size-1 border-right">.GIF</span>
                          <span className="font-size-1 border-right">.BMP</span>
                          <span className="font-size-1 border-right">.PDF</span>
                          <span className="font-size-1 border-right">.AI</span>
                          <span className="font-size-1 border-right">.PSD</span>
                          <span className="font-size-1 ">.EPS</span>
                        </div>
                        <div class="d-flex justify-content-center">
                          <p className="font-size-1 pt-3">
                            Have a different type of file? Email it to us and
                            weʼll have it ready for you to use within a few
                            hours!
                          </p>
                        </div>
                        <span>{thumbs}</span>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <div class="row ">
                        <div
                          className="col-12 d-flex justify-content-between"
                          style={{ backgroundColor: "#ececec" }}
                        >
                          <span>
                            {/* <Link
                              onMouseEnter={(e) =>
                                (e.target.style.color = "black")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.color = "#535353")
                              }
                            >
                              <IoChevronBack
                                size={20}
                                style={{ color: "#535353" }}
                              />
                            </Link> */}
                          </span>
                          <span
                            className="text-capitalize font-size-2"
                            style={{
                              paddingTop: "0.2rem",
                              paddingBottom: "0.2rem",
                            }}
                          >
                            Choose Your Product Colors
                          </span>
                          <span className="">
                            <Link
                              onMouseEnter={(e) =>
                                (e.target.style.color = "black")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.color = "#535353")
                              }
                            >
                              <CgClose
                                onClick={() => setChange(null)}
                                size={20}
                                style={{ color: "#535353" }}
                              />
                            </Link>
                          </span>
                        </div>
                      </div>

                      <div class="row">
                        <div class="container py-2 pt-3">
                          <div class="row">
                            <div class="col-12">
                              <div className="text-center">
                                Select A Color:{" "}
                              </div>
                              <div
                                className="pt-2"
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
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
                                <div className="ml-1">
                                  <span className="font-size-2  ">
                                    {showClr ? clr[showClr].title : "White"}
                                  </span>
                                </div>
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
                                    onClick={() => (
                                      setShowStrokeCheck(i), setShowStrokeClr(i)
                                    )}
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
                                    {/* {showClr == i && showCheck == true ? ( */}
                                    {showStrokeClr && showStrokeCheck == i ? (
                                      <BiCheck
                                        size={24}
                                        style={{
                                          alignItems: "center",
                                          justifyContent: "center",
                                          color:
                                            v.color == "#ffffff"
                                              ? "#8a8a8a"
                                              : "#ffffff",
                                          paddingBottom: 5,
                                        }}
                                      />
                                    ) : null}

                                    <br />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
          <div class="col-8">
            <div
              className="container-fluid d-flex justify-content-start  col-6 py-3"
              style={{
                height: "600px",
              }}
              ref={ref}
              alt={"Screenshot"}
              onClick={() => setDraggableCircle(true)}
              // style={{ background: "transparent" }}
              // style={{
              //   backgroundImage: `url(${imageSrc})`,
              //   backgroundRepeat: "no-repeat",
              // }}
            >
              <div

              // alt={"Screenshot"}
              // style={{
              //   width: "100%",
              //   height: "100%",
              //   backgroundImage: `url(${imageSrc})`,
              //   backgroundRepeat: "no-repeat",
              // }}
              >
                <div style={{}} ref={ref}>
                  {show && (
                    <>
                      {text.length > 0 &&
                        text.map((v, i) => {
                          return (
                            <DragText
                              text={v.text}
                              textArray={text}
                              rotate={rotate}
                              rotateIndex={rotateIndex}
                              textSize={textSize}
                              textSizeIndex={textSizeIndex}
                              setTextSizeIndex={setTextSizeIndex}
                              zIndex={zIndex}
                              setZIndex={setZIndex}
                              fontFamily={fonts[fontIndex]}
                              setToggleFrame={setToggleFrame}
                              // setDragItems={setDragItems}
                              draggableCircle={draggableCircle}
                              setDraggableCircle={setDraggableCircle}
                              removeText={removeText}
                              selectText={selectText}
                              clr={clr}
                              showFontClr={showFontClr}
                              showStrokeClr={showStrokeClr}
                              alignText={alignText}
                              selectTextForCustomization={
                                selectTextForCustomization
                              }
                              textIndexForCustomization={
                                textIndexForCustomization
                              }
                              i={i}
                              v={v}
                            />
                          );
                        })}
                    </>
                  )}

                  <img
                    style={{
                      zIndex: -1,
                      position: "absolute",
                    }}
                    src={imageSrc}
                    height="100%"
                    alt="nice"
                  ></img>

                  {/* border FRAMES HERE */}

                  {toggleFrame == true && (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: 450,
                        width: 250,
                        position: "absolute",
                        // right: "-15%",
                        left: 155,
                        top: 85,
                        zIndex: -1,
                        borderColor: "#999",
                        borderStyle: "solid",
                        borderWidth: 1,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 2,
                          color: "gray",
                          fontSize: 13,
                        }}
                      >
                        Adult
                      </span>
                      <div
                        className="d-flex justify-content-end"
                        style={{
                          height: "90%",
                          width: "90%",
                          borderColor: "#999",
                          borderStyle: "solid",
                          borderWidth: 1,
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            top: 22,
                            left: 16,
                            color: "gray",
                            fontSize: 13,
                          }}
                        >
                          Youth
                        </span>

                        <div
                          style={{
                            height: "30%",
                            width: "50%",
                            borderColor: "#999",
                            borderStyle: "solid",
                            borderWidth: 1,
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              top: 22,
                              right: 85,
                              color: "gray",
                              fontSize: 13,
                            }}
                          >
                            Chest
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {DragItems.length > 0 &&
                    DragItems.map((value, i) => {
                      return (
                        <DragItem
                          {...value}
                          imgSize={imgSize}
                          layerUp={layerUp}
                          layerDown={layerDown}
                          rotateImage={rotateImage}
                          rotateImageIndex={rotateImageIndex}
                          removeItem={removeItem}
                          setToggleFrame={setToggleFrame}
                          i={i}
                          draggableCircle={draggableCircle}
                          setDraggableCircle={setDraggableCircle}
                          selectImage={selectImage}
                        ></DragItem>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row py-3 bg-light">
          <div class="col-6">
            <div className="d-flex justify-content-start">
              <button className="btn btn-md btn-dark" type="submit">
                Add Products
              </button>
              {/* <Button
                className="btn btn-md btn-dark ml-3"
                onClick={() => setModalShow(true)}
              >
                Modal
              </Button> */}
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex justify-content-end">
              <button
                className="btn btn-md btn-dark mr-3"
                type="submit"
                onClick={() => setDraggableCircle(false)}
              >
                Preview
              </button>
              <button className="btn btn-md btn-dark" type="submit">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
