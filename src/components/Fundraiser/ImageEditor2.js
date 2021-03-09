import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

export default function ImageEditorPage() {
  const [imageSrc, setImageSrc] = useState(
    "./assets/img/Mens_TshirtsAndTanks/SMALLIMAGE_1923581.jpg"
  );

  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}
