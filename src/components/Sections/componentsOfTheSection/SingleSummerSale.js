import React, { Component } from "react";

function SingleSummerSale(props) {
  let BackgroundTag;
  if (props.containsImage) {
    BackgroundTag = (
      <WithBGImage
        title1={props.title1}
        title2={props.title2}
        link={props.link}
        buttonText={props.buttonText}
        backgroundImage={props.backgroundImage}
      />
    );
  } else {
    BackgroundTag = (
      <WithBGColor
        title1={props.title1}
        title2={props.title2}
        link={props.link}
        buttonText={props.buttonText}
      />
    );
  }
  return <div className={props.width}>{BackgroundTag}</div>;
}

function WithBGImage(props) {
  return (
    <div
      className="bg-img-hero img-fluid height-300 mb-5 mb-lg-0"
      style={{ backgroundImage: props.backgroundImage }}
    >
      <div className="p-5 px-lg-9 space-top-1 space-top-lg-3">
        <h2 className="font-size-7 mb-2 pb-1 text-lh-1dot4">
          <span className="hero__title-line-1 font-weight-bold d-block">
            {props.title1}
          </span>
          <span className="hero__title-line-2 font-weight-normal d-block">
            {props.title2}
          </span>
        </h2>
        <a
          href={props.link}
          className="text-uppercase link-black-100 text-dark font-weight-medium"
        >
          <span className="product__add-to-cart d-inline-block">
            {props.buttonText}
          </span>
        </a>
      </div>
    </div>
  );
}

function WithBGColor(props) {
  return (
    <div className="bg-gray-780 p-3 height-300">
      <div class="h-100">
        <div class="h-100 border__1">
          <div class="p-5 pb-8 pb-md-12 pl-lg-5 pt-lg-5 pb-lg-8 pl-xl-7 pt-xl-8 pb-xl-5">
            <div class="">
              <h6 class="font-weight-bold text-white font-size-7 mb-0">
                {props.title1}
              </h6>
              <span class="font-weight-bold font-size-15 text-gray-260 text-lh-sm">
                {props.title2}
              </span>
              <div class="">
                <a
                  href={props.link}
                  className="text-uppercase link-black-100 text-dark font-weight-medium"
                >
                  <span className="product__add-to-cart d-inline-block">
                    {props.buttonText}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleSummerSale;
