import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

// import "tui-image-editor/dist/tui-image-editor.css";
// import ImageEditor from "@toast-ui/react-image-editor";
import Button from "react-bootstrap/Button";
// import { saveAs } from 'file-saver';

const icona = require("tui-image-editor/dist/svg/icon-a.svg");
const iconb = require("tui-image-editor/dist/svg/icon-b.svg");
const iconc = require("tui-image-editor/dist/svg/icon-c.svg");
const icond = require("tui-image-editor/dist/svg/icon-d.svg");

const myTheme = {
  "menu.backgroundColor": "white",
  "common.backgroundColor": "#151515",
  "downloadButton.backgroundColor": "white",
  "downloadButton.borderColor": "white",
  "downloadButton.color": "black",
  "menu.normalIcon.path": icond,
  "menu.activeIcon.path": iconb,
  "menu.disabledIcon.path": icona,
  "menu.hoverIcon.path": iconc,
};

export default function ImageEditorPage() {
  const [imageSrc, setImageSrc] = useState(
    "./assets/img/Mens_TshirtsAndTanks/SMALLIMAGE_1923581.jpg"
  );
  const imageEditor = React.createRef();

  // useEffect(() => {

  // }, []);

  // const saveImageToDisk = () => {
  //   const imageEditorInst = imageEditor.current.imageEditorInst;
  //   const data = imageEditorInst.toDataURL();
  //   if (data) {
  //     const mimeType = data.split(";")[0];
  //     const extension = data.split(";")[0].split("/")[1];
  //     //   download(data, `image.${extension}`, mimeType);
  //   }
  // };

  return (
    <div>
      <Header />
      {/* <div className="center">
        <h1>Photo Editor</h1>
        <Button className="button" onClick={saveImageToDisk}>
          Save Image to Disk
        </Button>
      </div> */}
      {/* <ImageEditor
        includeUI={{
          loadImage: {
            path: imageSrc,
            name: "image",
          },
          theme: myTheme,
          menu: [
            "crop",
            "flip",
            "rotate",
            "draw",
            // "shape",
            "icon",
            "text",
            "filter",
          ],
          initMenu: "text",
          uiSize: {
            height: `calc(100vh - 160px)`,
          },
          menuBarPosition: "left",
        }}
        cssMaxHeight={window.innerHeight}
        cssMaxWidth={window.innerWidth}
        selectionStyle={{
          cornerSize: 10,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
        ref={imageEditor}
      /> */}

      <Footer />
    </div>
  );
}
