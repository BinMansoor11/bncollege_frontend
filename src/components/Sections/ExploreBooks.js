import React, { useState } from "react";

function ExploreBooks(props) {
  const [state, setState] = useState({
    title: "Available Once a Year",
    offer: "Get 50% off on orders over $139",
    BtnLink: "#",
    BtnTxt: "Explore Books",
  });

  const { title, offer, BtnLink, BtnTxt } = state;

  return (
    <div>
      <div className="banner space-bottom-3">
        <div className="container">
          <div className="bg-secondary-gray-800 px-xl-10 px-6 py-5 rounded">
            <div className="media d-block d-lg-flex">
              <div className="media-body align-self-center mb-4 mb-lg-0">
                <p className="banner__pretitle text-uppercase text-gray-400 font-weight-bold">
                  {title}
                </p>
                <h2 className="banner__title font-size-10 font-weight-bold text-white mb-4">
                  {offer}
                </h2>
                <a
                  href={BtnLink}
                  className="banner_btn btn btn-wide btn-primary-green text-white"
                >
                  {BtnTxt}
                </a>
              </div>
              <img
                src="./assets/img/450x235/img1.png"
                className="img-fluid"
                alt="image-description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreBooks;
