import React, { useState, createRef, useEffect } from "react";

import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Draggable from "react-draggable";

import { useScreenshot } from "use-react-screenshot";
import DragItem from "./DragItem.js";
import DragText from "./DragText";
const smileyImage = "./assets/img/Fundraising_Images/darkrose.png";
const itemImage = "./assets/img/Fundraising_Images/item.png";
// import item from "./assets/img/Fundraising_Images/item.png";

const arr = [smileyImage, itemImage];
export default function ImageEditorPage() {
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(ref.current);

  const [imageSrc, setImageSrc] = useState(
    "./assets/img/Fundraising_Images/white.jpg"
  );
  const [imgStroke, setImageStroke] = useState(false);
  const [imgSize, setImageSize] = useState(70);
  const [txtSize, setTextSize] = useState(10);
  const [toggle, setToggle] = useState(false);
  let [DragItems, setDragItems] = useState([
    {
      imgLink: smileyImage,
      imgSize: imgSize,
      zValue: 2,
      setImageSize: setImageSize,
    },
    {
      imgLink: itemImage,
      imgSize: imgSize,
      zValue: 1,
      setImageSize: setImageSize,
    },
  ]);

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
  const [text, setText] = useState(null);
  const [show, setShow] = useState(false);

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    // console.log("imgSize", imgSize, DragItems);
  }, [toggle]);

  function ScreenShot() {
    return (
      <div className="container  d-flex justify-content-start ml-3">
        <div class="row">
          <p>{imgSize}</p>
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

  return (
    <div>
      <Header />
      <div className="row ">
        <div class="col-6">
          <ScreenShot />
          <div className="">
            <div class="row">
              <div class="col-6  py-3">
                <button
                  type="button"
                  class="btn btn-info btn-sm ml-3"
                  onClick={(e) => {
                    setImageSize(imgSize + 5);
                  }}
                >
                  Increase Image Size
                </button>
                <button
                  type="button"
                  class="btn btn-danger btn-sm ml-3"
                  onClick={() => setImageSize(imgSize - 5)}
                >
                  Decrease Image Size
                </button>
              </div>

              <div class="col-6 py-3">
                <button
                  type="button"
                  class="btn btn-info btn-sm ml-3"
                  onClick={() => {
                    setDragItems((prev) => [
                      ...prev,
                      {
                        imgLink: smileyImage,
                        imgSize: imgSize,
                        zValue: 1,
                        setImageSize: setImageSize,
                      },
                    ]);
                  }}
                >
                  Add flower
                </button>
                <button
                  type="button"
                  class="btn btn-danger btn-sm ml-3"
                  onClick={() => {
                    setDragItems((prev) => {
                      const newarr = [...prev];
                      console.log(newarr.pop());
                      return newarr;
                    });
                  }}
                >
                  Remove Item
                </button>
              </div>
            </div>
          </div>
          <div className="container py-5 ml-3">
            <div class="row">
              <input name="subject" type="text" onChange={onChangeHandler} />
              <input type="submit" onClick={() => setShow(true)} />
            </div>

            <div className="">
              {fonts.map((v, i) => {
                return (
                  <h1
                    style={{ fontFamily: v }}
                    onClick={() => {
                      setFontIndex(i);
                    }}
                  >
                    {show ? text : v}
                  </h1>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="container-fluid d-flex justify-content-center col-6 py-3"
          style={{
            height: "450px",
          }}
          ref={ref}
          alt={"Screenshot"}
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
            <div ref={ref}>
              {show && (
                <p className="fonts" style={{ fontFamily: fonts[fontIndex] }}>
                  <DragText text={text} />
                </p>
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
              {DragItems.map((value, i) => {
                return <DragItem {...value} imgSize={imgSize}></DragItem>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container  py-5">
        <div class="row">
          <div class="col-2">
            <input name="subject" type="text" onChange={onChangeHandler} />
            <input type="submit" onClick={() => setShow(true)} />
          </div>

          <div className="col-2">
            {fonts.map((v, i) => {
              return (
                <h1
                  style={{ fontFamily: v }}
                  onClick={() => {
                    setFontIndex(i);
                  }}
                >
                  {show ? text : v}
                </h1>
              );
            })}
          </div>

          <div class="col-2"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
