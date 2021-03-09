import React, { useState } from "react";
import SingleFeaturedBox from "./componentsOfTheSection/SingleFeaturedBox";

function FeaturedBox(props) {
  const jsonObject = [
    {
      icon: "glyph-icon flaticon-delivery",
      name: "Free Delivery",
      desc: "Orders over $100",
    },
    {
      icon: "glyph-icon flaticon-credit",
      name: "Secure Payment",
      desc: "100% Secure Payment",
    },
    {
      icon: "glyph-icon flaticon-warranty",
      name: "Money Back Guarantee",
      desc: "Within 30 Days",
    },
    {
      icon: "glyph-icon flaticon-help",
      name: "24/7 Support",
      desc: "Within 1 Business Day",
    },
  ];
  const [state, setState] = useState({
    FeatureBox: jsonObject,
  });

  const { FeatureBox } = state;

  const SingleFeaturedBoxArray = FeatureBox.map((Features) => (
    <SingleFeaturedBox
      name={Features.name}
      icon={Features.icon}
      desc={Features.desc}
    />
  ));
  return (
    <div className="site-features border-top space-1d625">
      <div className="container-fluid ">
        <ul className="list-unstyled my-0 list-features d-lg-flex align-items-center justify-content-lg-between overflow-xl-visible">
          {SingleFeaturedBoxArray}
        </ul>
      </div>
    </div>
  );
}

export default FeaturedBox;
