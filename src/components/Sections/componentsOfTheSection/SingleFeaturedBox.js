import React, { Component } from "react";

function SingleFeaturedBox(props) {
  return (
    <li className="flex-shrink-0 flex-xl-shrink-1 list-feature py-md-3">
      <div className="media text-md-center">
        <div className="feature__icon font-size-14 text-primary-green text-lh-xs">
          <i className={props.icon}></i>
        </div>
        <div className="media-body ml-4 ml-md-4 ">
          <h4 className="feature__title font-size-3">{props.name}</h4>
          <p className="feature__subtitle m-0">{props.desc}</p>
        </div>
      </div>
    </li>
  );
}

export default SingleFeaturedBox;
