import React, { useState, useEffect } from "react";
import SingleDealOfTheWeek from "./componentsOfTheSection/SingleDealOfTheWeek";
import axios from "axios";
// Port //
import { api } from "../../utils/Contant";

import { useDispatch, useSelector } from "react-redux";

function DealOfTheWeek(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.root);
  const { _campus } = state;
  const [dealsObjectArray, setDealsObjectArray] = useState([]);

  // Specifying which properties to display in this component
  const dealsToDisplay = [
    "deal_offers",
    "homework_help",
    "work_from_home",
    "school_spirit",
  ];

  useEffect(() => {
    fetch();
  }, []);

  //Getting required properties from the _campus object and creating an array
  useEffect(() => {
    if (Object.keys(_campus).length > 0) {
      setDealsObjectArray(
        Object.keys(_campus).filter((campusProperty) =>
          dealsToDisplay.includes(campusProperty)
        )
      );
    }
  }, [_campus]);
  const fetch = async () => {
    let response = await axios.get(api + "5007/api/campus_store");
  };

  const jsonObject = [
    {
      title: "WE PRICE MATCH TEXTBOOKS",
      backgroundImage: "url(assets/img/685x500/img1.jpg)",
      buttonText: "SHOP NOW",
      link: "#",
      showTitle: true,
    },
    {
      title: "LIMITED TIME OFFER",
      backgroundImage: "url(assets/img/685x500/img2.jpg)",
      buttonText: "SHOP NOW",
      link: "#",
      showTitle: true,
    },
    {
      title: "FOR THE FAMILY",
      backgroundImage: "url(assets/img/685x500/img3.jpg)",
      buttonText: "SHOP NOW",
      link: "#",
      showTitle: true,
    },
    {
      backgroundImage: "url(assets/img/685x500/img4.jpg)",
      buttonText: "CLICK FOR DETAILS",
      link: "#",
      showTitle: false,
    },
  ];

  const [state1, setState] = useState({
    title: "Deals of the week",
    DealDetails: dealsObjectArray,
  });

  const { title, DealDetails } = state1;

  const SingleDealArray = dealsObjectArray.map((deal) => (
    <SingleDealOfTheWeek
      showTitle={_campus[deal][0].showTitle || true}
      title={_campus[deal][0].heading || "heading"}
      backgroundImage={_campus[deal][0].img}
      buttonText={_campus[deal][0].buttonText || "Shop Now"}
      link={_campus[deal][0].link}
    />
  ));
  return (
    <div>
      <section className="spac-bottom-2 space-bottom-lg-3">
        <div className="container">
          <header className="border-bottom mb-8d75 pb-4">
            <h2 className="font-size-7 mb-0">{title}</h2>
          </header>
          <div className="row">{SingleDealArray}</div>
        </div>
      </section>
    </div>
  );
}

export default DealOfTheWeek;
