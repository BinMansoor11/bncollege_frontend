import React, { useEffect, useState, useCallback } from "react";
import Draggable from "react-draggable";
import "./image.style.css";
import { FiMaximize2, FiX } from "react-icons/fi";

// const DragItem = ({
//   imgSize,
//   imgLink,
//   zValue,
//   setImageSize,
//   handleClick,
//   layerUp,
//   layerDown,
//   i,
//   zIndex,
//   text,
//   removeItem,
//   setToggleFrame,
//   setDraggableCircle,
//   draggableCircle,
//   selectImage,
// }) => {
const DragItem = (props) => {
  const {
    imgSize,
    imgLink,
    zValue,
    setImageSize,
    handleClick,
    rotateImage,
    rotateImageIndex,
    layerUp,
    layerDown,
    i,
    zIndex,
    text,
    removeItem,
    setToggleFrame,
    setDraggableCircle,
    draggableCircle,
    selectImage,
  } = props;
  // const [toggle, setToggle] = useState(false);
  const [size, setSize] = useState(70);
  const [show, setShow] = useState(false);
  const [axis, setAxis] = useState({ x: 0, y: 0 });
  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    // changeState();
    // console.log("Dragg imgSize", toggle, imgSize);

    if (isVisible) window.addEventListener("mousemove", onMouseMove);
    else window.removeEventListener("mousemove", onMouseMove);
  }, [zValue, isVisible]);
  // const changeState = () => {
  //   // setToggle(!toggle);
  //   setImageSize((prevState) => prevState + 5);
  // };

  const onMouseMove = useCallback((event) => {
    event.movementX > 0 || event.movementY > 0
      ? setSize((prevSize) => (prevSize < 250 ? prevSize + 2 : 250))
      : setSize((prevSize) => prevSize - 2);
  }, []);

  const RightClick = (e) => {
    if (e.type === "contextmenu") {
      e.preventDefault();
      handleShow();
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ zIndex: 1 }} onClick={() => selectImage(i)}>
      <div
        style={{
          position: "absolute",
          left: -10,
          right: 0,
        }}
      ></div>

      <Draggable
        // positionOffset={{ x: 1 + size, y: 1 + size }}

        onStart={() => setToggleFrame(true)}
        onStop={() => setToggleFrame(false)}
        defaultPosition={{ x: 140, y: 100 }}
        bounds={{
          // left:
          //   rotateImageIndex === 2 || rotateImageIndex === 4
          //     ? size > 70
          //       ? 200 //>70
          //       : 153 //70
          //     : 140,

          left: 140,
          top: 69,
          bottom: 5.19 * 100 - size,
          right: 3.9 * 100 - size,
        }}
        // scale={2}
      >
        <div
          style={
            {
              // zIndex: zValue,
              // transform: `rotate(${rotateImage[rotateImageIndex]}deg)`,
            }
          }
        >
          {/**
           * Resizer Icon
           */}
          {draggableCircle && (
            <Draggable
              position={{ x: 0, y: 0 }}
              // onDrag={() => setSize(size + 0.5)}
              onDrag={() => setVisibility(true)}
              onStop={() => setVisibility(false)}
              bounds={{
                left: 0,
                top: 0,
                // bottom: 4 * 100 - size,
                // right: 2.9 * 100 - size,
                bottom: 0,
                right: 0,
              }}
            >
              <div
                // onAbort={() => setDraggableCircle(false)}
                className="shadow-lg bg-white p-1 rounded-circle"
                style={{
                  // zIndex: 1000,
                  width: 30,
                  height: 30,
                  position: "absolute",
                  right: -25 - size,
                  bottom: -25 - size,
                  // right: -25,
                  // bottom: -25,
                }}
              >
                <FiMaximize2
                  className="rotate"
                  color="#1F51CE"
                  size={20}
                  style={{
                    position: "absolute",
                    cursor: "nw-resize",
                    top: 5,
                    left: 4,
                  }}
                />
              </div>
            </Draggable>
          )}
          <div
            style={
              {
                // borderColor: "gray",
                // borderStyle: "solid",
                // borderWidth: draggableCircle == true ? 2 : 0,
              }
            }
          >
            <div
              style={{
                // transform: `rotate(${rotateImage[rotateImageIndex]}deg)`,
                borderColor: "gray",
                borderStyle: "solid",
                borderWidth: draggableCircle == true ? 2 : 0,
                height: size + 5,
                // width: rotateImageIndex == 2 ? size + 20 : size + 5,
                width: size + 5,
                position: "absolute",
                // padding: 5,
              }}
            >
              <img
                src={imgLink}
                onClick={() => {
                  setDraggableCircle(true);
                }}
                onFocus={() => {
                  console.log();
                }}
                // onMouseLeave={() => {
                //   setDraggableCircle(false);
                // }}
                // className="imge"
                onContextMenu={RightClick}
                style={{
                  //Rotation
                  // transform: `rotate(${rotateImage == [3] ? size : size}deg)`,
                  transform: `rotate(${rotateImage[rotateImageIndex]}deg)`,

                  position: "absolute",
                  // overflow: "hidden",
                  // zIndex: zValue,
                  backgroundColor: "transparent",
                  // borderColor: "gray",
                  // borderStyle: "solid",
                  // borderWidth: draggableCircle == true ? 2 : 0,
                }}
                // onClick={() => {
                //   setSize(size + 5);
                // }}
                width={rotateImageIndex === 3 ? size : size - 15}
                height={size}
              />
            </div>
          </div>
          {/**
           * Image
           */}
          {/* 
          <img
            onClick={() => {
              setDraggableCircle(true);
            }}
            onFocus={() => {
              console.log();
            }}
            // onMouseLeave={() => {
            //   setDraggableCircle(false);
            // }}
            // className="imge"
            onContextMenu={RightClick}
            // onClick={() => {
            //   setSize(size + 5);
            // }}
            src={imgLink}
            style={{
              //Rotation
              // transform: `rotate(${rotateImage == [3] ? size : size}deg)`,
              transform: `rotate(${rotateImage[rotateImageIndex]}deg)`,

              position: "absolute",
              overflow: "hidden",
              // zIndex: zValue,
              backgroundColor: "transparent",
              borderColor: "gray",
              borderStyle: "solid",
              borderWidth: draggableCircle == true ? 2 : 0,
            }}
            width={size}
            height={size}
            alt="nice"
          /> */}

          {/**
           * Close Icon
           */}
          {draggableCircle && (
            <Draggable
              position={{ x: 0, y: 0 }}
              // onClick={() => selectImage(null)}
              // onDrag={() => setSize(size + 0.5)}
              onDrag={() => setVisibility(true)}
              onStop={() => (setVisibility(false), console.log("event", size))}
              bounds={{
                left: 0,
                top: 0,
                // bottom: 4 * 100 - size,
                // right: 2.9 * 100 - size,
                bottom: 0,
                right: 0,
              }}
            >
              <div
                // onAbort={() => setDraggableCircle(false)}
                className="shadow-lg bg-white p-1 rounded-circle"
                style={{
                  // zIndex: 1000,
                  width: 30,
                  height: 30,
                  position: "absolute",
                  left: -25,
                  top: -25,
                }}
              >
                <FiX
                  onClick={() => removeItem(i)}
                  className="rotate text-danger"
                  // color="red"
                  size={20}
                  style={{
                    position: "absolute",
                    top: 5,
                    left: 4,

                    // right: 20,
                    // bottom: 20,
                  }}
                />
              </div>
            </Draggable>
          )}
        </div>
      </Draggable>

      {show && (
        <div
          className="bg-info shadow-lg  bg-white rounded"
          style={{ position: "absolute", right: 10, top: 150, zIndex: 9999 }}
        >
          <button
            type="button"
            class="btn btn-light btn-block"
            onClick={() => (layerUp(i), handleClose())}
          >
            Bring to front
          </button>
          <button
            type="button"
            class="btn btn-light btn-block"
            onClick={() => (layerDown(i), handleClose())}
          >
            Send to back
          </button>
        </div>
      )}
    </div>
  );
};
export default DragItem;
