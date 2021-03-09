import React, { useState, useCallback, useEffect } from "react";
import Draggable from "react-draggable";
import "./image.style.css";
import { FiMaximize2, FiX } from "react-icons/fi";

const DragText = (props) => {
  const {
    text,
    zIndex,
    setZIndex,
    rotate,
    rotateIndex,
    textSize,
    textSizeIndex,
    setTextSizeIndex,
    fontFamily,
    setToggleFrame,
    setDraggableCircle,
    draggableCircle,
    removeText,
    selectText,
    selectImage,
    i,
    clr,
    showFontClr,
    showStrokeClr,
    alignText,
    selectTextForCustomization,
    textIndexForCustomization,
    v,
    textArray,
  } = props;

  const [size, setSize] = useState(10);
  const newtext = props.text.length;
  // console.log(newtext);
  const [fontSizes, setFontSizes] = useState({
    initial: 50,
    limiter: 9,
    smallest: 10,
  });
  const [show, setShow] = useState(false);
  const [isVisible, setVisibility] = useState(false);

  const { initial, limiter, smallest } = fontSizes;

  const RightClick = (e) => {
    if (e.type === "click") {
      console.log("Left click");
    } else if (e.type === "contextmenu") {
      // console.log("Right click", zIndex);
      e.preventDefault();
      handleShow();
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("v", v, i, textArray[i], textArray[i].size, textArray[i].text);

    if (isVisible) window.addEventListener("mousemove", onMouseMove);
    else window.removeEventListener("mousemove", onMouseMove);
  }, [isVisible, textIndexForCustomization, textSizeIndex]);

  const onMouseMove = useCallback((event) => {
    // console.log(
    //   "event.movementX , event.movementY",
    //   event.movementX,
    //   event.movementY
    // );
    event.movementX > 0 || event.movementY > 0
      ? setTextSizeIndex((prevSize) => (prevSize < 4 ? prevSize + 1 : 4))
      : setTextSizeIndex((prevSize) => (prevSize > 0 ? prevSize - 1 : 0));
  }, []);

  return (
    <div
      style={{}}
      onClick={() => (selectText(i), selectTextForCustomization(i))}
    >
      <div
        style={{
          // yhan main singlr text ka size check krwa raha hun, ab us basis pr fontsize change krraingay.
          fontSize:
            textArray[i].size === 50
              ? newtext > 20 || textSizeIndex == 0
                ? textArray[i].size == 50
                  ? 14
                  : textArray[i].size
                : newtext > 15 || textSizeIndex == 1
                ? textArray[i].size == 50
                  ? 20
                  : textArray[i].size
                : newtext >= 10 || textSizeIndex == 2
                ? textArray[i].size == 50
                  ? 30
                  : textArray[i].size
                : newtext > 7 || textSizeIndex == 3
                ? textArray[i].size == 50
                  ? 40
                  : textArray[i].size
                : textArray[i].size == 50
                ? 50
                : textArray[i].size
              : textArray[i].size == 50
              ? 50
              : textArray[i].size,
          position: "absolute",
          top: 80,
          zIndex: zIndex === false ? 0 : 1,

          color: showFontClr !== null ? clr[showFontClr].color : clr[2].color, //changing font color
          WebkitTextStrokeColor:
            showStrokeClr !== null ? clr[showStrokeClr].color : "transparent", // text stroke
          WebkitTextStrokeWidth: showStrokeClr !== null ? 1 : 0, // text stroke
          // height: 200,
          // backgroundColor: "red",
        }}
      >
        {/* {console.log(text.toString().length} */}
        <Draggable
          defaultPosition={{ x: 140, y: 0 }}
          onStart={() => setToggleFrame(true)}
          onStop={() => setToggleFrame(false)}
          bounds={{
            // for 90, -90
            left: 140,
            // rotateIndex === 1 || rotateIndex === 5
            //   ? newtext < 7
            //     ? newtext < 10
            //       ? newtext < 15
            //         ? 50 //15
            //         : 50 //10
            //       : 50 //7
            //     : 50
            //   : //for 45, -45
            //   rotateIndex === 2 || rotateIndex === 4
            //   ? newtext < 7
            //     ? newtext < 10
            //       ? newtext < 15
            //         ? 50 //15
            //         : 50 //10
            //       : 50 //7
            //     : 50
            //   : //for 0, 180 , -180
            //   rotateIndex === 3 || rotateIndex === 0 || rotateIndex === 6
            //   ? newtext < 5
            //     ? newtext < 10
            //       ? newtext < 15
            //         ? 50 //15
            //         : 50 //10
            //       : 50 //5
            //     : 50
            //   : 0,
            top:
              //for 0 180 -180
              rotateIndex === 3 || rotateIndex === 0 || rotateIndex === 6
                ? newtext > 5
                  ? newtext > 7
                    ? newtext > 9
                      ? newtext > 15
                        ? newtext > 20
                          ? 5 // 19
                          : 5 //15
                        : 5 //9
                      : 5 //7
                    : 5 //5
                  : 5 //5
                : //for 45 -45
                rotateIndex === 2 || rotateIndex === 4
                ? newtext > 5
                  ? newtext > 10
                    ? newtext > 15
                      ? newtext > 20
                        ? 5 //20
                        : 5 //15
                      : 5 //10
                    : 5 //5
                  : 5 //5
                : // for 90 -90
                rotateIndex === 1 || rotateIndex === 5
                ? newtext > 5
                  ? newtext > 8
                    ? newtext > 9
                      ? newtext > 10
                        ? newtext > 15
                          ? newtext > 20
                            ? 5 //20
                            : 5 //15
                          : 5 //10
                        : 5 //9
                      : 5 //8
                    : 5 //5
                  : 5 //5
                : "100%",

            bottom:
              //----------------Faraz Code----------------//
              // for 0, 180, -180
              rotateIndex == 3 || rotateIndex == 0 || rotateIndex == 6
                ? newtext > 5
                  ? newtext > 7
                    ? newtext > 9
                      ? newtext > 15
                        ? newtext > 20
                          ? textSizeIndex !== 4 //20 >
                            ? textSizeIndex === 3
                              ? 40
                              : textSizeIndex === 2
                              ? 40
                              : textSizeIndex === 1
                              ? 40
                              : textSizeIndex === 0 && 40
                            : 430 //20
                          : textSizeIndex !== 4 //20
                          ? textSizeIndex === 3
                            ? 419
                            : textSizeIndex === 2
                            ? 419
                            : textSizeIndex === 1
                            ? 419
                            : textSizeIndex === 0 && 430
                          : 419 //15
                        : textSizeIndex !== 4 //5
                        ? textSizeIndex === 3
                          ? 140
                          : textSizeIndex === 2
                          ? 140
                          : textSizeIndex === 1
                          ? 420
                          : textSizeIndex === 0 && 430
                        : 403 //9
                      : textSizeIndex !== 4 //9
                      ? textSizeIndex === 3
                        ? 387
                        : textSizeIndex === 2
                        ? 401
                        : textSizeIndex === 1
                        ? 421
                        : textSizeIndex === 0 && 430
                      : 386 //7
                    : textSizeIndex !== 4 //7
                    ? textSizeIndex === 3
                      ? 390
                      : textSizeIndex === 2
                      ? 405
                      : textSizeIndex === 1
                      ? 420
                      : textSizeIndex === 0 && 430
                    : 375 //5
                  : textSizeIndex !== 4 //5
                  ? textSizeIndex === 3
                    ? 390
                    : textSizeIndex === 2
                    ? 405
                    : textSizeIndex === 1
                    ? 421
                    : textSizeIndex === 0 && 430
                  : 375 //5
                : // for 90
                rotateIndex == 1
                ? newtext > 5
                  ? newtext > 7
                    ? newtext > 9
                      ? newtext > 15
                        ? newtext > 20
                          ? textSizeIndex !== 4 //20 >
                            ? textSizeIndex === 3
                              ? 200
                              : textSizeIndex === 2
                              ? 200
                              : textSizeIndex === 1
                              ? 200
                              : textSizeIndex === 0 && 200
                            : 200 //20
                          : textSizeIndex !== 4 //20
                          ? textSizeIndex === 3
                            ? 215
                            : textSizeIndex === 2
                            ? 215
                            : textSizeIndex === 1
                            ? 215
                            : textSizeIndex === 0 && 285
                          : 215 //15
                        : textSizeIndex !== 4 //15
                        ? textSizeIndex === 3
                          ? 155
                          : textSizeIndex === 2
                          ? 155
                          : textSizeIndex === 1
                          ? 260
                          : textSizeIndex === 0 && 320
                        : 155 //9
                      : textSizeIndex !== 4 //9
                      ? textSizeIndex === 3
                        ? 205
                        : textSizeIndex === 2
                        ? 265
                        : textSizeIndex === 1
                        ? 325
                        : textSizeIndex === 0 && 365
                      : 205 //7
                    : textSizeIndex !== 4 //7
                    ? textSizeIndex === 3
                      ? 235
                      : textSizeIndex === 2
                      ? 300
                      : textSizeIndex === 1
                      ? 355
                      : textSizeIndex === 0 && 380
                    : 205 //5
                  : textSizeIndex !== 4 //5
                  ? textSizeIndex === 3
                    ? 305
                    : textSizeIndex === 2
                    ? 335
                    : textSizeIndex === 1
                    ? 380
                    : textSizeIndex === 0 && 405
                  : 265 //5
                : // for -90
                rotateIndex == 5
                ? newtext > 5
                  ? newtext > 7
                    ? newtext > 9
                      ? newtext > 15
                        ? newtext > 20
                          ? textSizeIndex !== 4 //20 >
                            ? textSizeIndex === 3
                              ? 214
                              : textSizeIndex === 2
                              ? 214
                              : textSizeIndex === 1
                              ? 214
                              : textSizeIndex === 0 && 214
                            : 214 //20
                          : textSizeIndex !== 4 //20
                          ? textSizeIndex === 3
                            ? 229
                            : textSizeIndex === 2
                            ? 229
                            : textSizeIndex === 1
                            ? 229
                            : textSizeIndex === 0 && 295
                          : 229 //15
                        : textSizeIndex !== 4 //15
                        ? textSizeIndex === 3
                          ? 195
                          : textSizeIndex === 2
                          ? 195
                          : textSizeIndex === 1
                          ? 277
                          : textSizeIndex === 0 && 330
                        : 195 //9
                      : textSizeIndex !== 4 //9
                      ? textSizeIndex === 3
                        ? 215
                        : textSizeIndex === 2
                        ? 280
                        : textSizeIndex === 1
                        ? 335
                        : textSizeIndex === 0 && 368
                      : 215 //7
                    : textSizeIndex !== 4 //7
                    ? textSizeIndex === 3
                      ? 255
                      : textSizeIndex === 2
                      ? 315
                      : textSizeIndex === 1
                      ? 355
                      : textSizeIndex === 0 && 385
                    : 205 //5
                  : textSizeIndex !== 4 //5
                  ? textSizeIndex === 3
                    ? 305
                    : textSizeIndex === 2
                    ? 335
                    : textSizeIndex === 1
                    ? 375
                    : textSizeIndex === 0 && 395
                  : 275 //5
                : // for 45, -45
                rotateIndex == 2 || rotateIndex == 4
                ? newtext > 5
                  ? newtext > 7
                    ? newtext > 9
                      ? newtext > 15
                        ? newtext > 20
                          ? textSizeIndex !== 4 //20 >
                            ? textSizeIndex === 3
                              ? 230
                              : textSizeIndex === 2
                              ? 230
                              : textSizeIndex === 1
                              ? 230
                              : textSizeIndex === 0 && 230
                            : 230 //20
                          : textSizeIndex !== 4 //20
                          ? textSizeIndex === 3
                            ? 241
                            : textSizeIndex === 2
                            ? 241
                            : textSizeIndex === 1
                            ? 241
                            : textSizeIndex === 0 && 295
                          : 241 //15
                        : textSizeIndex !== 4 //15
                        ? textSizeIndex === 3
                          ? 205
                          : textSizeIndex === 2
                          ? 205
                          : textSizeIndex === 1
                          ? 295
                          : textSizeIndex === 0 && 340
                        : 205 //9
                      : textSizeIndex !== 4 //9
                      ? textSizeIndex === 3
                        ? 240
                        : textSizeIndex === 2
                        ? 285
                        : textSizeIndex === 1
                        ? 335
                        : textSizeIndex === 0 && 365
                      : 235 //7
                    : textSizeIndex !== 4 //7
                    ? textSizeIndex === 3
                      ? 285
                      : textSizeIndex === 2
                      ? 335
                      : textSizeIndex === 1
                      ? 375
                      : textSizeIndex === 0 && 395
                    : 255 //5
                  : textSizeIndex !== 4 //5
                  ? textSizeIndex === 3
                    ? 335
                    : textSizeIndex === 2
                    ? 355
                    : textSizeIndex === 1
                    ? 380
                    : textSizeIndex === 0 && 390
                  : 305 //5
                : 320,
            // newtext > 20
            //   ? rotateIndex == 3 || rotateIndex == 0 || rotateIndex == 6
            //     ? 430
            //     : rotateIndex === 2 || rotateIndex === 4
            //     ? 345
            //     : (rotateIndex === 1 || rotateIndex === 5) && 315
            //   : newtext > 15
            //   ? rotateIndex == 3 || rotateIndex == 0 || rotateIndex == 6
            //     ? 420
            //     : rotateIndex === 2 || rotateIndex === 4
            //     ? 337
            //     : (rotateIndex === 1 || rotateIndex === 5) && 310
            //   : newtext > 10
            //   ? rotateIndex == 3 || rotateIndex == 0 || rotateIndex == 6
            //     ? 400
            //     : rotateIndex === 2 || rotateIndex === 4
            //     ? 325
            //     : (rotateIndex === 1 || rotateIndex === 5) && 308
            //   : newtext > 7
            //   ? rotateIndex == 3 || rotateIndex == 0 || rotateIndex == 6
            //     ? 390
            //     : rotateIndex === 2 || rotateIndex === 4
            //     ? 335
            //     : (rotateIndex === 1 || rotateIndex === 5) && 332
            //   : rotateIndex == 3 || rotateIndex == 0 || rotateIndex == 6
            //   ? 375
            //   : rotateIndex === 2 || rotateIndex === 4
            //   ? 325
            //   : (rotateIndex === 1 || rotateIndex === 5) && 320,

            // right: 2.9 * 100 - newtext > 50 ? 2 * 100 - newtext : 10,
            // right: 0,

            // right: newtext < 10 ? 210 : 0,
            right:
              // for 90
              rotateIndex === 1
                ? newtext > 5
                  ? newtext > 7
                    ? newtext > 9
                      ? newtext > 15
                        ? newtext > 20
                          ? textSizeIndex !== 4 //20 >
                            ? textSizeIndex === 3
                              ? 350
                              : textSizeIndex === 2
                              ? 350
                              : textSizeIndex === 1
                              ? 350
                              : textSizeIndex === 0 && 350
                            : 350 //20
                          : textSizeIndex !== 4 //20
                          ? textSizeIndex === 3
                            ? 350
                            : textSizeIndex === 2
                            ? 350
                            : textSizeIndex === 1
                            ? 350
                            : textSizeIndex === 0 && 350
                          : 350 //15
                        : textSizeIndex !== 4 //15
                        ? textSizeIndex === 3
                          ? 340
                          : textSizeIndex === 2
                          ? 340
                          : textSizeIndex === 1
                          ? 350
                          : textSizeIndex === 0 && 350
                        : 340 //9
                      : textSizeIndex !== 4 //9
                      ? textSizeIndex === 3
                        ? 340
                        : textSizeIndex === 2
                        ? 340
                        : textSizeIndex === 1
                        ? 350
                        : textSizeIndex === 0 && 350
                      : 340 //7
                    : textSizeIndex !== 4 //7
                    ? textSizeIndex === 3
                      ? 340
                      : textSizeIndex === 2
                      ? 340
                      : textSizeIndex === 1
                      ? 350
                      : textSizeIndex === 0 && 350
                    : 340 //5
                  : textSizeIndex !== 4 //5
                  ? textSizeIndex === 3
                    ? 340
                    : textSizeIndex === 2
                    ? 340
                    : textSizeIndex === 1
                    ? 350
                    : textSizeIndex === 0 && 350
                  : 340 //5
                : // for -90
                rotateIndex === 5
                ? newtext > 5
                  ? newtext > 7
                    ? newtext > 9
                      ? newtext > 15
                        ? newtext > 20
                          ? textSizeIndex !== 4 //20 >
                            ? textSizeIndex === 3
                              ? 350
                              : textSizeIndex === 2
                              ? 350
                              : textSizeIndex === 1
                              ? 350
                              : textSizeIndex === 0 && 350
                            : 350 //20
                          : textSizeIndex !== 4 //20
                          ? textSizeIndex === 3
                            ? 350
                            : textSizeIndex === 2
                            ? 350
                            : textSizeIndex === 1
                            ? 350
                            : textSizeIndex === 0 && 350
                          : 350 //15
                        : textSizeIndex !== 4 //15
                        ? textSizeIndex === 3
                          ? 340
                          : textSizeIndex === 2
                          ? 340
                          : textSizeIndex === 1
                          ? 350
                          : textSizeIndex === 0 && 350
                        : 340 //9
                      : textSizeIndex !== 4 //9
                      ? textSizeIndex === 3
                        ? 340
                        : textSizeIndex === 2
                        ? 340
                        : textSizeIndex === 1
                        ? 350
                        : textSizeIndex === 0 && 350
                      : 340 //7
                    : textSizeIndex !== 4 //7
                    ? textSizeIndex === 3
                      ? 340
                      : textSizeIndex === 2
                      ? 340
                      : textSizeIndex === 1
                      ? 350
                      : textSizeIndex === 0 && 350
                    : 340 //5
                  : textSizeIndex !== 4 //5
                  ? textSizeIndex === 3
                    ? 340
                    : textSizeIndex === 2
                    ? 340
                    : textSizeIndex === 1
                    ? 350
                    : textSizeIndex === 0 && 350
                  : 340 //5
                : //for 45, -45
                rotateIndex === 2 || rotateIndex === 4
                ? newtext > 5
                  ? newtext > 7
                    ? newtext > 9
                      ? newtext > 15
                        ? newtext > 20
                          ? textSizeIndex !== 4 //20 >
                            ? textSizeIndex === 3
                              ? 165
                              : textSizeIndex === 2
                              ? 165
                              : textSizeIndex === 1
                              ? 165
                              : textSizeIndex === 0 && 165
                            : 165 //20
                          : textSizeIndex !== 4 //20
                          ? textSizeIndex === 3
                            ? 175
                            : textSizeIndex === 2
                            ? 175
                            : textSizeIndex === 1
                            ? 175
                            : textSizeIndex === 0 && 230
                          : 175 //15
                        : textSizeIndex !== 4 //15
                        ? textSizeIndex === 3
                          ? 100
                          : textSizeIndex === 2
                          ? 100
                          : textSizeIndex === 1
                          ? 230
                          : textSizeIndex === 0 && 275
                        : 100 //9
                      : textSizeIndex !== 4 //9
                      ? textSizeIndex === 3
                        ? 175
                        : textSizeIndex === 2
                        ? 220
                        : textSizeIndex === 1
                        ? 270
                        : textSizeIndex === 0 && 300
                      : 170 //7
                    : textSizeIndex !== 4 //7
                    ? textSizeIndex === 3
                      ? 220
                      : textSizeIndex === 2
                      ? 270
                      : textSizeIndex === 1
                      ? 310
                      : textSizeIndex === 0 && 330
                    : 190 //5
                  : textSizeIndex !== 4 //5
                  ? textSizeIndex === 3
                    ? 270
                    : textSizeIndex === 2
                    ? 285
                    : textSizeIndex === 1
                    ? 310
                    : textSizeIndex === 0 && 320
                  : 241 //5
                : // for 0, 180, -180
                rotateIndex === 3 || rotateIndex === 0 || rotateIndex === 6
                ? newtext > 5
                  ? newtext > 7
                    ? newtext > 9
                      ? newtext > 15
                        ? newtext > 20
                          ? textSizeIndex !== 4 //20 >
                            ? textSizeIndex === 3
                              ? 100
                              : textSizeIndex === 2
                              ? 100
                              : textSizeIndex === 1
                              ? 100
                              : textSizeIndex === 0 && 100
                            : 100 //20
                          : textSizeIndex !== 4 //20
                          ? textSizeIndex === 3
                            ? 140
                            : textSizeIndex === 2
                            ? 140
                            : textSizeIndex === 1
                            ? 140
                            : textSizeIndex === 0 && 40
                          : 140 //15
                        : textSizeIndex !== 4 //15
                        ? textSizeIndex === 3
                          ? 140
                          : textSizeIndex === 2
                          ? 140
                          : textSizeIndex === 1
                          ? 218
                          : textSizeIndex === 0 && 240
                        : 140 //9
                      : textSizeIndex !== 4 //9
                      ? textSizeIndex === 3
                        ? 170
                        : textSizeIndex === 2
                        ? 225
                        : textSizeIndex === 1
                        ? 270
                        : textSizeIndex === 0 && 310
                      : 160 //7
                    : textSizeIndex !== 4 //7
                    ? textSizeIndex === 3
                      ? 215
                      : textSizeIndex === 2
                      ? 240
                      : textSizeIndex === 1
                      ? 300
                      : textSizeIndex === 0 && 325
                    : 170 //5
                  : textSizeIndex !== 4 //5
                  ? textSizeIndex === 3
                    ? 240
                    : textSizeIndex === 2
                    ? 240
                    : textSizeIndex === 1
                    ? 321
                    : textSizeIndex === 0 && 341
                  : 210 //5
                : 300,

            // : //for 0, 180 , -180
            // rotateIndex === 3 || rotateIndex === 0 || rotateIndex === 6
            // ? newtext < 5
            //   ? newtext < 10
            //     ? newtext < 15
            //       ? 240 //5
            //       : 200 //10
            //     : 100 //15
            //   : 300
            // : 0,
            // rotateIndex === 1 || rotateIndex === 5
            //   ? newtext < 10
            //     ? 300 //10
            //     : 0
            //   : 0,
          }}
          style={
            {
              // overflow: "hidden",
            }
          }
        >
          {/**
           * Border
           */}
          <div
            style={{
              //   height: rotateIndex == 3 ? "100%" : 251,
              //   width: rotateIndex == 3 ? "100%" : 50,
              borderColor: "gray",
              borderStyle: "solid",
              borderWidth: draggableCircle == true ? 2 : 0,

              width:
                // for 90
                rotateIndex === 1
                  ? newtext > 5
                    ? newtext > 7
                      ? newtext > 9
                        ? newtext > 15
                          ? newtext > 20
                            ? textSizeIndex !== 4 //20 >
                              ? textSizeIndex === 3
                                ? 40
                                : textSizeIndex === 2
                                ? 40
                                : textSizeIndex === 1
                                ? 40
                                : textSizeIndex === 0 && 40
                              : 40 //20
                            : textSizeIndex !== 4 //20
                            ? textSizeIndex === 3
                              ? 40
                              : textSizeIndex === 2
                              ? 40
                              : textSizeIndex === 1
                              ? 40
                              : textSizeIndex === 0 && 40
                            : 40 //15
                          : textSizeIndex !== 4 //15
                          ? textSizeIndex === 3
                            ? 50
                            : textSizeIndex === 2
                            ? 50
                            : textSizeIndex === 1
                            ? 40
                            : textSizeIndex === 0 && 40
                          : 50 //9
                        : textSizeIndex !== 4 //9
                        ? textSizeIndex === 3
                          ? 50
                          : textSizeIndex === 2
                          ? 50
                          : textSizeIndex === 1
                          ? 40
                          : textSizeIndex === 0 && 40
                        : 50 //7
                      : textSizeIndex !== 4 //7
                      ? textSizeIndex === 3
                        ? 50
                        : textSizeIndex === 2
                        ? 50
                        : textSizeIndex === 1
                        ? 40
                        : textSizeIndex === 0 && 40
                      : 50 //5
                    : textSizeIndex !== 4 //5
                    ? textSizeIndex === 3
                      ? 50
                      : textSizeIndex === 2
                      ? 50
                      : textSizeIndex === 1
                      ? 40
                      : textSizeIndex === 0 && 40
                    : 50 //5
                  : // for -90
                  rotateIndex === 5
                  ? newtext > 5
                    ? newtext > 7
                      ? newtext > 9
                        ? newtext > 15
                          ? newtext > 20
                            ? textSizeIndex !== 4 //20 >
                              ? textSizeIndex === 3
                                ? 40
                                : textSizeIndex === 2
                                ? 40
                                : textSizeIndex === 1
                                ? 40
                                : textSizeIndex === 0 && 40
                              : 40 //20
                            : textSizeIndex !== 4 //20
                            ? textSizeIndex === 3
                              ? 40
                              : textSizeIndex === 2
                              ? 40
                              : textSizeIndex === 1
                              ? 40
                              : textSizeIndex === 0 && 40
                            : 40 //15
                          : textSizeIndex !== 4 //15
                          ? textSizeIndex === 3
                            ? 50
                            : textSizeIndex === 2
                            ? 50
                            : textSizeIndex === 1
                            ? 40
                            : textSizeIndex === 0 && 40
                          : 50 //9
                        : textSizeIndex !== 4 //9
                        ? textSizeIndex === 3
                          ? 50
                          : textSizeIndex === 2
                          ? 50
                          : textSizeIndex === 1
                          ? 40
                          : textSizeIndex === 0 && 40
                        : 50 //7
                      : textSizeIndex !== 4 //7
                      ? textSizeIndex === 3
                        ? 50
                        : textSizeIndex === 2
                        ? 50
                        : textSizeIndex === 1
                        ? 40
                        : textSizeIndex === 0 && 40
                      : 50 //5
                    : textSizeIndex !== 4 //5
                    ? textSizeIndex === 3
                      ? 50
                      : textSizeIndex === 2
                      ? 50
                      : textSizeIndex === 1
                      ? 40
                      : textSizeIndex === 0 && 40
                    : 50 //5
                  : // for 45, -45
                  rotateIndex === 2 || rotateIndex === 4
                  ? newtext > 5
                    ? newtext > 7
                      ? newtext > 9
                        ? newtext > 15
                          ? newtext > 20
                            ? textSizeIndex !== 4 //20 >
                              ? textSizeIndex === 3
                                ? 225
                                : textSizeIndex === 2
                                ? 225
                                : textSizeIndex === 1
                                ? 225
                                : textSizeIndex === 0 && 225
                              : 225 //20 >
                            : textSizeIndex !== 4 //20
                            ? textSizeIndex === 3
                              ? 215
                              : textSizeIndex === 2
                              ? 215
                              : textSizeIndex === 1
                              ? 215
                              : textSizeIndex === 0 && 160
                            : 215 //15
                          : textSizeIndex !== 4 //15
                          ? textSizeIndex === 3
                            ? 250
                            : textSizeIndex === 2
                            ? 250
                            : textSizeIndex === 1
                            ? 160
                            : textSizeIndex === 0 && 115
                          : 250 //9
                        : textSizeIndex !== 4 //9
                        ? textSizeIndex === 3
                          ? 215
                          : textSizeIndex === 2
                          ? 170
                          : textSizeIndex === 1
                          ? 120
                          : textSizeIndex === 0 && 90
                        : 220 //7
                      : textSizeIndex !== 4 //7
                      ? textSizeIndex === 3
                        ? 170
                        : textSizeIndex === 2
                        ? 120
                        : textSizeIndex === 1
                        ? 80
                        : textSizeIndex === 0 && 60
                      : 200 //5
                    : textSizeIndex !== 4 //5
                    ? textSizeIndex === 3
                      ? 120
                      : textSizeIndex === 2
                      ? 105
                      : textSizeIndex === 1
                      ? 80
                      : textSizeIndex === 0 && 70
                    : 150 //5
                  : // for 0, 180, -180
                  rotateIndex === 3 || rotateIndex === 0 || rotateIndex === 6
                  ? newtext > 5
                    ? newtext > 7
                      ? newtext > 9
                        ? newtext > 15
                          ? newtext > 18
                            ? 250 //18
                            : 200 //15
                          : textSizeIndex !== 4 //15
                          ? textSizeIndex === 3
                            ? 250
                            : textSizeIndex === 2
                            ? 250
                            : textSizeIndex === 1
                            ? 172
                            : textSizeIndex === 0 && 150
                          : 250 //9
                        : textSizeIndex !== 4 //9
                        ? textSizeIndex === 3
                          ? 220
                          : textSizeIndex === 2
                          ? 164
                          : textSizeIndex === 1
                          ? 120
                          : textSizeIndex === 0 && 80
                        : 230 //7
                      : textSizeIndex !== 4 //7
                      ? textSizeIndex === 3
                        ? 175
                        : textSizeIndex === 2
                        ? 150
                        : textSizeIndex === 1
                        ? 90
                        : textSizeIndex === 0 && 65
                      : 220 //5
                    : textSizeIndex !== 4 //5
                    ? textSizeIndex === 3
                      ? 150
                      : textSizeIndex === 2
                      ? 150
                      : textSizeIndex === 1
                      ? 68
                      : textSizeIndex === 0 && 48
                    : 180 //5
                  : 300,

              // height: rotateIndex === 1 || rotateIndex === 5 ? 100 : "100%",

              height:
                // for 90,
                rotateIndex === 1
                  ? newtext > 5
                    ? newtext > 7
                      ? newtext > 9
                        ? newtext > 15
                          ? newtext > 20
                            ? textSizeIndex !== 4 //20 >
                              ? textSizeIndex === 3
                                ? 255
                                : textSizeIndex === 2
                                ? 255
                                : textSizeIndex === 1
                                ? 255
                                : textSizeIndex === 0 && 255
                              : 255 //20
                            : textSizeIndex !== 4 //20
                            ? textSizeIndex === 3
                              ? 240
                              : textSizeIndex === 2
                              ? 240
                              : textSizeIndex === 1
                              ? 240
                              : textSizeIndex === 0 && 170
                            : 240 //15
                          : textSizeIndex !== 4 //15
                          ? textSizeIndex === 3
                            ? 300
                            : textSizeIndex === 2
                            ? 300
                            : textSizeIndex === 1
                            ? 195
                            : textSizeIndex === 0 && 135
                          : 300 //9
                        : textSizeIndex !== 4 //9
                        ? textSizeIndex === 3
                          ? 250
                          : textSizeIndex === 2
                          ? 190
                          : textSizeIndex === 1
                          ? 130
                          : textSizeIndex === 0 && 90
                        : 250 //7
                      : textSizeIndex !== 4 //7
                      ? textSizeIndex === 3
                        ? 220
                        : textSizeIndex === 2
                        ? 155
                        : textSizeIndex === 1
                        ? 100
                        : textSizeIndex === 0 && 75
                      : 250 //5
                    : textSizeIndex !== 4 //5
                    ? textSizeIndex === 3
                      ? 150
                      : textSizeIndex === 2
                      ? 120
                      : textSizeIndex === 1
                      ? 75
                      : textSizeIndex === 0 && 50
                    : 190 //5
                  : //for -90
                  rotateIndex === 5
                  ? newtext > 5
                    ? newtext > 7
                      ? newtext > 9
                        ? newtext > 15
                          ? newtext > 20
                            ? textSizeIndex !== 4 //20 >
                              ? textSizeIndex === 3
                                ? 242
                                : textSizeIndex === 2
                                ? 242
                                : textSizeIndex === 1
                                ? 242
                                : textSizeIndex === 0 && 242
                              : 242 //20
                            : textSizeIndex !== 4 //20
                            ? textSizeIndex === 3
                              ? 227
                              : textSizeIndex === 2
                              ? 227
                              : textSizeIndex === 1
                              ? 227
                              : textSizeIndex === 0 && 161
                            : 227 //15
                          : textSizeIndex !== 4 //15
                          ? textSizeIndex === 3
                            ? 260
                            : textSizeIndex === 2
                            ? 260
                            : textSizeIndex === 1
                            ? 178
                            : textSizeIndex === 0 && 125
                          : 260 //9
                        : textSizeIndex !== 4 //9
                        ? textSizeIndex === 3
                          ? 240
                          : textSizeIndex === 2
                          ? 175
                          : textSizeIndex === 1
                          ? 120
                          : textSizeIndex === 0 && 87
                        : 240 //7
                      : textSizeIndex !== 4 //7
                      ? textSizeIndex === 3
                        ? 200
                        : textSizeIndex === 2
                        ? 140
                        : textSizeIndex === 1
                        ? 100
                        : textSizeIndex === 0 && 70
                      : 250 //5
                    : textSizeIndex !== 4 //5
                    ? textSizeIndex === 3
                      ? 150
                      : textSizeIndex === 2
                      ? 120
                      : textSizeIndex === 1
                      ? 80
                      : textSizeIndex === 0 && 60
                    : 180 //5
                  : // for 45, -45
                  rotateIndex === 2 || rotateIndex === 4
                  ? newtext > 5
                    ? newtext > 7
                      ? newtext > 9
                        ? newtext > 15
                          ? newtext > 20
                            ? textSizeIndex !== 4 //20 >
                              ? textSizeIndex === 3
                                ? 225
                                : textSizeIndex === 2
                                ? 225
                                : textSizeIndex === 1
                                ? 225
                                : textSizeIndex === 0 && 225
                              : 225 //20 >
                            : textSizeIndex !== 4 //20
                            ? textSizeIndex === 3
                              ? 215
                              : textSizeIndex === 2
                              ? 215
                              : textSizeIndex === 1
                              ? 215
                              : textSizeIndex === 0 && 160
                            : 215 //15
                          : textSizeIndex !== 4 //15
                          ? textSizeIndex === 3
                            ? 250
                            : textSizeIndex === 2
                            ? 250
                            : textSizeIndex === 1
                            ? 160
                            : textSizeIndex === 0 && 115
                          : 250 //9
                        : textSizeIndex !== 4 //9
                        ? textSizeIndex === 3
                          ? 215
                          : textSizeIndex === 2
                          ? 170
                          : textSizeIndex === 1
                          ? 120
                          : textSizeIndex === 0 && 90
                        : 220 //7
                      : textSizeIndex !== 4 //7
                      ? textSizeIndex === 3
                        ? 170
                        : textSizeIndex === 2
                        ? 120
                        : textSizeIndex === 1
                        ? 80
                        : textSizeIndex === 0 && 60
                      : 200 //5
                    : textSizeIndex !== 4 //5
                    ? textSizeIndex === 3
                      ? 120
                      : textSizeIndex === 2
                      ? 100
                      : textSizeIndex === 1
                      ? 75
                      : textSizeIndex === 0 && 65
                    : 150 //5
                  : // for 0, 180, -180
                  rotateIndex === 3 || rotateIndex === 0 || rotateIndex === 6
                  ? newtext > 5
                    ? newtext > 7
                      ? newtext > 9
                        ? newtext > 15
                          ? newtext > 20
                            ? 25 // 20
                            : textSizeIndex !== 4 //20
                            ? textSizeIndex === 3
                              ? 36
                              : textSizeIndex === 2
                              ? 36
                              : textSizeIndex === 1
                              ? 36
                              : textSizeIndex === 0 && 25
                            : 36 //15
                          : textSizeIndex !== 4 //15
                          ? textSizeIndex === 3
                            ? 52
                            : textSizeIndex === 2
                            ? 52
                            : textSizeIndex === 1
                            ? 35
                            : textSizeIndex === 0 && 25
                          : 52 //9
                        : textSizeIndex !== 4 //9
                        ? textSizeIndex === 3
                          ? 68
                          : textSizeIndex === 2
                          ? 53
                          : textSizeIndex === 1
                          ? 35
                          : textSizeIndex === 0 && 25
                        : 68 //7
                      : textSizeIndex !== 4 //7
                      ? textSizeIndex === 3
                        ? 65
                        : textSizeIndex === 2
                        ? 50
                        : textSizeIndex === 1
                        ? 35
                        : textSizeIndex === 0 && 25
                      : 80 //5
                    : textSizeIndex !== 4 //5
                    ? textSizeIndex === 3
                      ? 65
                      : textSizeIndex === 2
                      ? 50
                      : textSizeIndex === 1
                      ? 33
                      : textSizeIndex === 0 && 24
                    : 80 //5
                  : "100%",

              // ? newtext > 5
              //   ? newtext > 10
              //     ? newtext > 15
              //       ? newtext > 20
              //         ? 250 //else (default)
              //         : 250 //20
              //       : 250 //15
              //     : 220 //10
              //   : 130 //5
              // : "100%",
              // backgroundColor: "red",
            }}
          >
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
                    right: -18 - size,
                    bottom: -15 - size,
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
              // className="imge"
              onContextMenu={RightClick}
              style={{
                //target for rotation
                // width:
                //   // for 90, -90
                //   rotateIndex === 1 || rotateIndex === 5
                //     ? newtext < 7
                //       ? newtext < 10
                //         ? newtext < 15
                //           ? 100 //15
                //           : 100 //10
                //         : 100 //7
                //       : 100
                //     : // for 45, -45
                //     rotateIndex === 2 || rotateIndex === 4
                //     ? newtext > 5
                //       ? newtext > 10
                //         ? newtext > 15
                //           ? newtext > 20
                //             ? 250 //else (default)
                //             : 250 //20
                //           : 250 //15
                //         : 220 //10
                //       : 130 //5
                //     : // for 0, 180, -180
                //     rotateIndex === 3 || rotateIndex === 0 || rotateIndex === 6
                //     ? newtext > 5
                //       ? newtext > 10
                //         ? newtext > 15
                //           ? newtext > 20
                //             ? 250 //else (default)
                //             : 250 //20
                //           : 250 //15
                //         : 220 //10
                //       : 130 //5
                //     : 300,
                //90
                // rotateIndex === 1 || rotateIndex === 5
                //   ? newtext < 10
                //     ? 100 //10
                //     : 250
                //   : 250,

                // width: newtext < 7 ? "100%" : 250,
                // width:
                //   newtext < 7
                //     ? newtext < 10
                //       ? newtext < 15
                //         ? 50 //15
                //         : 100 //10
                //       : "100%" //7
                //     : 100,
                // width: "100%",

                // width:
                //   newtext < 10
                //     ? newtext > 15
                //       ? 85 //15
                //       : 180 //10
                //     : 250,
                // paddingVertical:0,
                height: "100%",
                // whiteSpace: "pre-wrap",
                // overflowWrap: "break-word",
                // overflow: "hidden",
              }}
            >
              <p
                style={{
                  // backgroundColor: "red",
                  textAlign: alignText,
                  // marginTop: rotateIndex === 2 || rotateIndex === 4 ? "20%" : 0,

                  marginTop:
                    // for 90
                    rotateIndex === 1
                      ? newtext > 5
                        ? newtext > 7
                          ? newtext > 9
                            ? newtext > 15
                              ? newtext > 20
                                ? textSizeIndex !== 4 //20 >
                                  ? textSizeIndex === 3
                                    ? "38%"
                                    : textSizeIndex === 2
                                    ? "38%"
                                    : textSizeIndex === 1
                                    ? "38%"
                                    : textSizeIndex === 0 && "38%"
                                  : "38%" //20
                                : textSizeIndex !== 4 //20
                                ? textSizeIndex === 3
                                  ? "23%"
                                  : textSizeIndex === 2
                                  ? "23%"
                                  : textSizeIndex === 1
                                  ? "23%"
                                  : textSizeIndex === 0 && "35%"
                                : "23%" //15
                              : textSizeIndex !== 4 //15
                              ? textSizeIndex === 3
                                ? "30%"
                                : textSizeIndex === 2
                                ? "30%"
                                : textSizeIndex === 1
                                ? "35%"
                                : textSizeIndex === 0 && "40%"
                              : "30%" //9
                            : textSizeIndex !== 4 //9
                            ? textSizeIndex === 3
                              ? "20%"
                              : textSizeIndex === 2
                              ? "28%"
                              : textSizeIndex === 1
                              ? "35%"
                              : textSizeIndex === 0 && "40%"
                            : "20%" //7
                          : textSizeIndex !== 4 //7
                          ? textSizeIndex === 3
                            ? "30%"
                            : textSizeIndex === 2
                            ? "28%"
                            : textSizeIndex === 1
                            ? "25%"
                            : textSizeIndex === 0 && "36%"
                          : "5%" //5
                        : textSizeIndex !== 4 //5
                        ? textSizeIndex === 3
                          ? "10%"
                          : textSizeIndex === 2
                          ? "28%"
                          : textSizeIndex === 1
                          ? "24%"
                          : textSizeIndex === 0 && "25%"
                        : "0%" //5
                      : // for -90
                      rotateIndex === 5
                      ? newtext > 5
                        ? newtext > 7
                          ? newtext > 9
                            ? newtext > 15
                              ? newtext > 20
                                ? textSizeIndex !== 4 //20 >
                                  ? textSizeIndex === 3
                                    ? "575%"
                                    : textSizeIndex === 2
                                    ? "575%"
                                    : textSizeIndex === 1
                                    ? "575%"
                                    : textSizeIndex === 0 && "575%"
                                  : "575%" //20
                                : textSizeIndex !== 4 //20
                                ? textSizeIndex === 3
                                  ? "520%"
                                  : textSizeIndex === 2
                                  ? "520%"
                                  : textSizeIndex === 1
                                  ? "520%"
                                  : textSizeIndex === 0 && "350%"
                                : "520%" //15
                              : textSizeIndex !== 4 //15
                              ? textSizeIndex === 3
                                ? "450%"
                                : textSizeIndex === 2
                                ? "450%"
                                : textSizeIndex === 1
                                ? "380%"
                                : textSizeIndex === 0 && "250%"
                              : "450%" //9
                            : textSizeIndex !== 4 //9
                            ? textSizeIndex === 3
                              ? "370%"
                              : textSizeIndex === 2
                              ? "260%"
                              : textSizeIndex === 1
                              ? "220%"
                              : textSizeIndex === 0 && "140%"
                            : "370%" //7
                          : textSizeIndex !== 4 //7
                          ? textSizeIndex === 3
                            ? "280%"
                            : textSizeIndex === 2
                            ? "190%"
                            : textSizeIndex === 1
                            ? "160%"
                            : textSizeIndex === 0 && "95%"
                          : "370%" //5
                        : textSizeIndex !== 4 //5
                        ? textSizeIndex === 3
                          ? "180%"
                          : textSizeIndex === 2
                          ? "135%"
                          : textSizeIndex === 1
                          ? "100%"
                          : textSizeIndex === 0 && "60%"
                        : "235%" //5
                      : // rotateIndex === 5
                      // ? newtext > 5
                      //   ? newtext > 7
                      //     ? newtext >= 9
                      //       ? newtext > 15
                      //         ? newtext > 20
                      //           ? "200%" //20
                      //           : "200%" //15
                      //         : "190%" //9
                      //       : "170%" //7
                      //     : "12%" //5
                      //   : "90%" //5
                      // for 45, -45
                      rotateIndex === 2 || rotateIndex === 4
                      ? newtext > 5
                        ? newtext > 7
                          ? newtext > 9
                            ? newtext > 15
                              ? newtext > 20
                                ? textSizeIndex !== 4 //20 >
                                  ? textSizeIndex === 3
                                    ? "45%"
                                    : textSizeIndex === 2
                                    ? "45%"
                                    : textSizeIndex === 1
                                    ? "45%"
                                    : textSizeIndex === 0 && "45%"
                                  : "45%" //20 >
                                : textSizeIndex !== 4 //20
                                ? textSizeIndex === 3
                                  ? "42%"
                                  : textSizeIndex === 2
                                  ? "42%"
                                  : textSizeIndex === 1
                                  ? "42%"
                                  : textSizeIndex === 0 && "44%"
                                : "42%" //15
                              : textSizeIndex !== 4 //15
                              ? textSizeIndex === 3
                                ? "39%"
                                : textSizeIndex === 2
                                ? "39%"
                                : textSizeIndex === 1
                                ? "39%"
                                : textSizeIndex === 0 && "39%"
                              : "39%" //9
                            : textSizeIndex !== 4 //9
                            ? textSizeIndex === 3
                              ? "35%"
                              : textSizeIndex === 2
                              ? "35%"
                              : textSizeIndex === 1
                              ? "35%"
                              : textSizeIndex === 0 && "35%"
                            : "35%" //7
                          : textSizeIndex !== 4 //7
                          ? textSizeIndex === 3
                            ? "30%"
                            : textSizeIndex === 2
                            ? "29%"
                            : textSizeIndex === 1
                            ? "28%"
                            : textSizeIndex === 0 && "28%"
                          : "29%" //5
                        : textSizeIndex !== 4 //5
                        ? textSizeIndex === 3
                          ? "20%"
                          : textSizeIndex === 2
                          ? "20%"
                          : textSizeIndex === 1
                          ? "23%"
                          : textSizeIndex === 0 && "28%"
                        : "20%" // 5
                      : 0,
                  // paddingVertical: "1%",
                  fontFamily: fontFamily,
                  paddingBottom: -10,
                  transform: `rotate(${rotate[rotateIndex]}deg)`,
                  //target for rotation
                  // height: rotateIndex == 3 ? "100%" : 251,
                  // height: "100%",
                  // width: "100%",
                  // backgroundColor: "red",

                  // paddingLeft: "5%",
                  // paddingRight: "10%",
                  // borderColor: "gray",
                  // borderStyle: "solid",
                  // borderWidth: draggableCircle == true ? 2 : 0,
                }}
              >
                {props.text}
              </p>
            </div>
            {draggableCircle && (
              <Draggable
                position={{ x: 0, y: 0 }}
                // onDrag={() => setSize(size + 0.5)}
                // onDrag={() => setVisibility(true)}
                // onStop={() => (setVisibility(false), console.log("event", size))}
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
                    onClick={() => removeText(i)}
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
      </div>

      {show && (
        <div
          className="bg-info shadow-lg  bg-white rounded"
          style={{ position: "absolute", right: 20, top: 200, zIndex: 9999 }}
        >
          <button
            type="button"
            class="btn btn-light btn-block"
            onClick={() => (setZIndex(true), handleClose())}
          >
            Bring to front
          </button>
          <button
            type="button"
            class="btn btn-light btn-block"
            onClick={() => (setZIndex(false), handleClose())}
          >
            Send to back
          </button>
        </div>
      )}
    </div>
  );
};

export default DragText;
