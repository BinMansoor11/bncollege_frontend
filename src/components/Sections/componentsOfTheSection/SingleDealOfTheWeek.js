import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";

function SingleDealOfTheWeek(props) {
  let TitleTag;
  const state = useSelector((state) => state.root);
  const { _campus } = state;
  if (props.showTitle) {
    TitleTag = (
      <WithTitle
        title={props.title}
        href={props.link}
        buttonText={props.buttonText}
        buttonBG={_campus.header_primary_color}
      />
    );
  } else {
    TitleTag = (
      <WithoutTitle
        href={props.link}
        buttonText={props.buttonText}
        buttonBG={_campus.header_primary_color}
      />
    );
  }
  return (
    <div className="col-xl-6" style={{ marginBottom: "48px" }}>
      <div className="mb-5 mb-xl-0">
        {/*   <div
          className="bg-img-hero img-fluid height-500"
          style={{
            backgroundImage: props.backgroundImage,
            backgroundSize: "contain",
          }}
        >
          <div className="px-6 space-top-3 space-bottom-3 mb-4 mb-lg-0"></div>
          <div className="pt-lg-4 pb-lg-3 space-top-5">{TitleTag}</div>
        </div> */}
        <center>
          <img
            src={props.backgroundImage}
            style={{
              height: "400px",
              width: "450px",
              objectFit: "contain",
            }}
          />
        </center>
        <div>{TitleTag}</div>
      </div>
    </div>
  );
}

function WithTitle(props) {
  return (
    <center>
      <div>
        <h3>{props.title}</h3>
        <a
          href={props.href}
          className="banner_btn rounded-0 btn btn-wide btn-primary text-white"
          style={{ backgroundColor: props.buttonBG, border: props.buttonBG }}
        >
          {props.buttonText}
        </a>
      </div>
    </center>
  );
}

function WithoutTitle(props) {
  return (
    <center>
      <h1>
        <u>
          <a
            href={props.href}
            className="rounded-0 btn btn-wide text-white"
            style={{ backgroundColor: props.buttonBG, border: props.buttonBG }}
          >
            {props.buttonText}
          </a>
        </u>
      </h1>
    </center>
  );
}

export default SingleDealOfTheWeek;
