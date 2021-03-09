import React, { useState } from "react";
// import SingleBestSeller from "./componentsOfTheSection/SingleBestSeller";
import SlickSlider from "../ReactSlider/SlickSlider";

function BestSeller(props) {
  const jsonObject = [
    {
      name: "Kelly Harms",
      img: "./assets/img/120x180/img3.jpg",
      edition: "Paperback",
      tag: "The Overdue Life Of Amy Balyer",
    },
    {
      name: "Blindside (Michael Bennett)",
      img: "./assets/img/120x180/img4.jpg",
      edition: "Paperback",
      tag: "The Overdue Life Of Amy Balyer",
    },
    {
      name: "Jesus: The God Who Knows Your Name",
      img: "./assets/img/120x180/img5.jpg",
      edition: "Paperback",
      tag: "The Overdue Life Of Amy Balyer",
    },
    {
      name: "Scot Under the Covers: The Wild Wicked...",
      img: "./assets/img/120x180/img6.jpg",
      edition: "Paperback",
      tag: "The Overdue Life Of Amy Balyer",
    },
    {
      name: "Camino Winds",
      img: "./assets/img/120x180/img7.jpg",
      edition: "Paperback",
      tag: "The Overdue Life Of Amy Balyer",
    },
    {
      name: "Broken Faith: Inside the Word of Faith... Winds",
      img: "./assets/img/120x180/img8.jpg",
      edition: "Paperback",
      tag: "The Overdue Life Of Amy Balyer",
    },
  ];

  const [state, setState] = useState({
    title: "BEST SELLER",
    ProductDetails: jsonObject,
  });

  const { title, ProductDetails } = state;

  // const SingleProductArray = ProductDetails.map((product) => (
  //   <SingleBestSeller
  //     name={product.name}
  //     img={product.img}
  //     edition={product.edition}
  //     tag={product.tag}
  //   />
  // ));

  return (
    <div>
      <section className="space-bottom-2 mt-4">
        <div className="container">
          <header className="border-bottom mb-8d75 pb-4d75 d-md-flex justify-content-between align-items-center">
            <h2 className="font-size-7 mb-3 mb-md-0">{title}</h2>
          </header>
          <SlickSlider />

          {/* <div
            className="js-slick-carousel products list-unstyled no-gutters my-0"
            data-pagi-classes="d-md-none text-center u-slick__pagination u-slick__pagination mt-5 mb-0"
            data-arrows-classes="d-none d-md-block u-slick__arrow u-slick__arrow-centered--y rounded-circle"
            data-arrow-left-classes="fas fa-chevron-left u-slick__arrow-inner u-slick__arrow-inner--left ml-xl-n8"
            data-arrow-right-classes="fas fa-chevron-right u-slick__arrow-inner u-slick__arrow-inner--right mr-xl-n8"
            data-slides-show="5"
            data-responsive='[{
                              "breakpoint": 1500,
                              "settings": {
                              "slidesToShow": 4
                           }
                           }, {
                              "breakpoint": 992,
                              "settings": {
                              "slidesToShow": 3
                           }
                           }, {
                              "breakpoint": 554,
                              "settings": {
                              "slidesToShow": 2
                           }
                        }]'
          >
            {SingleProductArray}
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default BestSeller;
