import React, { useState } from "react";
import { useSelector } from "react-redux";

function TopSection(props) {
  const state = useSelector((state) => state.root);
  const { _campus } = state;
  console.log(_campus.top_section[1].text);
  return (
    <div>
      <div className="container bg-dark text-light">
        <span>
          <center className="py-4">
            {_campus.topsection < 1 ? null : _campus.top_section[1].text}
          </center>
        </span>
      </div>
      <div className="container my-4 position-relative">
        <img
          src={_campus.topsection < 1 ? null : _campus.top_section[0].image}
          className="img-fluid"
          width="100%"
        />
        <button
          className="position-absolute btn btn-light"
          style={{
            left: "18%",
            bottom: "0%",
            borderRadius: "80px",
            minWidth: "25%",
            padding: 10,
            backgroundColor: _campus.header_primary_color,
            fontStyle: "italic",
            color: "#fff",
            border: "2px solid black",
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default TopSection;
