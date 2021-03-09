import React from "react";
import "../../.././product.css";
import { Link } from "react-router-dom";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";

export default function TShirtsAndTanks() {
  return (
    <div>
      <Header />
      <div className="container col-9 headerText pt-2 mt-5">
        <h1 className="display-4 text-center">T-SHIRTS & TANKS</h1>
        <hr />
        <div className="container-fluid ">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item active " aria-current="page">
                <Link to="/sweatshirts">Sweat Shirts</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="row mt-5 py-3 mb-5 mr-auto">
        <div class="container-fluid">
          <div className="col-10 font-weight-normal text-right mt-3">
            DISPLAYING 9 OF 40
            <span class="border-right border-secondary mx-2"></span>
            VIEW ALL
          </div>
        </div>
        <div class="offset-md-2"></div>
        <div
          className="col-2 p-3 mr-5 mb-3 text-center h-100 border border-dark rounded"
          style={{
            backgroundColor: "white",
            borderWidth: "2px",
            borderTopColor: "black",
          }}
        >
          <h4 className="font-weight-normal mt-2 text-justify ">SHOP FOR</h4>
          <div className="mt-3">
            <Link to="/sweatshirts" className="d-block text-justify ">
              SWEATSHIRTS
            </Link>
            <Link
              to="/performanceapparel"
              className="d-block text-justify pt-2"
            >
              PERFORMANCE APPAREL
            </Link>
            <Link to="/hats" className="d-block text-justify pt-2">
              HATS
            </Link>
            <Link to="/bottoms" className="d-block text-justify pt-2">
              BOTTOMS
            </Link>
            <Link to="/outerwear" className="d-block text-justify pt-2">
              OUTERWEAR
            </Link>
            <Link to="/accessories" className="d-block text-justify pt-2">
              ACCESSORIES
            </Link>
          </div>
        </div>

        <div className="col-6 p-4 mb-3 text-center h-100  border-top ">
          <div class="row  my-5">
            <div className="col-4 px-5 container">
              <Link to="#">
                <img
                  className="image img-fluid"
                  src="./assets/img/Mens_TshirtsAndTanks/SMALLIMAGE_1923581.jpg"
                />
                <div className="middle">
                  <div className="text">QUICKVIEW</div>
                </div>
              </Link>

              <div className="container mt-4">
                <p>Nike Dri Fit Cotton Long Sleeve T Shirt</p>
                <p className="font-weight-bold">$39.98</p>
              </div>
            </div>
            <div className="col-4 px-5 container">
              <Link to="#">
                <img
                  className="image img-fluid"
                  src="./assets/img/Mens_TshirtsAndTanks/SMALLIMAGE_2139288.jpg"
                />
                <div className="middle">
                  <div className="text">QUICKVIEW</div>
                </div>
              </Link>

              <div className="container mt-4">
                <p> Champion Triblend T Shirt</p>
                <p className="font-weight-bold">$39.98</p>
              </div>
            </div>
            <div className="col-4 px-5 container">
              <Link to="#">
                <img
                  className="image img-fluid"
                  src="./assets/img/Mens_TshirtsAndTanks/SMALLIMAGE_2139289.jpg"
                />
                <div className="middle">
                  <p className="text">QUICKVIEW</p>
                </div>
              </Link>

              <div className="container mt-4">
                <p>Champion Triblend T Shirt</p>
                <p className="font-weight-bold">$39.98</p>
              </div>
            </div>
          </div>

          <div class="row  my-5">
            <div className="col-4 px-5 container">
              <Link to="#">
                <img
                  className="image img-fluid"
                  src="./assets/img/Mens_TshirtsAndTanks/SMALLIMAGE_1923581.jpg"
                />
                <div className="middle">
                  <div className="text">QUICKVIEW</div>
                </div>
              </Link>

              <div className="container mt-4">
                <p>Nike Dri Fit Cotton Long Sleeve T Shirt</p>
                <p className="font-weight-bold">$39.98</p>
              </div>
            </div>
            <div className="col-4 px-5 container">
              <Link to="#">
                <img
                  className="image img-fluid"
                  src="./assets/img/Mens_TshirtsAndTanks/SMALLIMAGE_2139288.jpg"
                />
                <div className="middle">
                  <div className="text">QUICKVIEW</div>
                </div>
              </Link>

              <div className="container mt-4">
                <p> Champion Triblend T Shirt</p>
                <p className="font-weight-bold">$39.98</p>
              </div>
            </div>
            <div className="col-4 px-5 container">
              <Link to="#">
                <img
                  className="image img-fluid"
                  src="./assets/img/Mens_TshirtsAndTanks/SMALLIMAGE_2139289.jpg"
                />
                <div className="middle">
                  <p className="text">QUICKVIEW</p>
                </div>
              </Link>

              <div className="container mt-4">
                <p>Champion Triblend T Shirt</p>
                <p className="font-weight-bold">$39.98</p>
              </div>
            </div>
          </div>

          <div class="row  my-5">
            <div className="col-4 px-5 container">
              <Link to="#">
                <img
                  className="image img-fluid"
                  src="./assets/img/Mens_TshirtsAndTanks/SMALLIMAGE_1923581.jpg"
                />
                <div className="middle">
                  <div className="text">QUICKVIEW</div>
                </div>
              </Link>

              <div className="container mt-4">
                <p>Nike Dri Fit Cotton Long Sleeve T Shirt</p>
                <p className="font-weight-bold">$39.98</p>
              </div>
            </div>
            <div className="col-4 px-5 container">
              <Link to="#">
                <img
                  className="image img-fluid"
                  src="./assets/img/Mens_TshirtsAndTanks/SMALLIMAGE_2139288.jpg"
                />
                <div className="middle">
                  <div className="text">QUICKVIEW</div>
                </div>
              </Link>

              <div className="container mt-4">
                <p> Champion Triblend T Shirt</p>
                <p className="font-weight-bold">$39.98</p>
              </div>
            </div>
            <div className="col-4 px-5 container">
              <Link to="#">
                <img
                  className="image img-fluid"
                  src="./assets/img/Mens_TshirtsAndTanks/SMALLIMAGE_2139289.jpg"
                />
                <div className="middle">
                  <p className="text">QUICKVIEW</p>
                </div>
              </Link>

              <div className="container mt-4">
                <p>Champion Triblend T Shirt</p>
                <p className="font-weight-bold">$39.98</p>
              </div>
            </div>
          </div>
          <div class="container-fluid d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="offset-md-2"></div>
      </div>

      <div className="container d-flex justify-content-center">
        <h3 className="font-weight-normal my-5">
          EVERYTHING YOU NEED TO SUCCEED
        </h3>
      </div>

      <div class="container col-9 pt-5">
        <hr />
      </div>
      <div class="container-fluid mb-3 d-flex justify-content-center">
        <div class="col-6  text-center">
          <p className="d-inline text-center font-weight-normal">NEED HELP?</p>
          <Link
            to="/rentalfaqs"
            className="d-inline text-center font-weight-normal px-2"
          >
            Rental FAQs
          </Link>
          <span class="border-right border-secondary mx-1"></span>

          <Link
            to="/paymentanddelivery"
            className="d-inline text-center font-weight-normal mx-1"
          >
            Payment & Delivery
          </Link>
          <span class="border-right border-secondary mx-1"></span>

          <Link
            to="/returnsandrefunds"
            className="d-inline text-center font-weight-normal px-2"
          >
            Refunds
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
