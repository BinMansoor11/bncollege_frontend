import React, { Component } from "react";
import "./SlickSlider.css";
import { FaChevronLeft } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
// Port //
import { api } from "../../utils/Contant";

class PauseOnHover extends Component {
  constructor() {
    super();

    this.state = {
      jsonObject: [
        {
          name: "Kelly Harms",
          img: "./assets/img/120x180/img3.jpg",
          edition: "Paperback",
          tag: "The Overdue Life Of Amy Balyer",
        },
        {
          name: "Blindside (Michael Bennett)",
          img: "./assets/img/120x180/img7.jpg",
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
      ],
    };
    const { jsonObject } = this.state;
  }

  componentDidMount() {
    console.log(
      "_products :>> ",
      this.props.best_seller.best_seller && this.props.best_seller.best_seller
    );
  }

  render() {
    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: true,
      className: "slides",
    };
    return (
      <div className="pb-5">
        <Slider {...settings}>
          {/* <div className=""> */}
          {this.props.best_seller?.best_seller.map((v, i) => {
            return (
              <div
                className="row px-5 ml-1"
                // style={{
                //   display: "inline-block",
                //   backgroundColor: "red",
                // }}
              >
                <div className="d-flex justify-content-center">
                  <Link to="#">
                    <img src={v.image} style={{ width: 200, height: 250 }} />
                  </Link>
                </div>
                <div className="ml-2 mb-3">
                  {/*<span className="font-size-2">{v.edition}</span>
                  <br />
                  <br />
                  */}
                  <div className="text-center font-weight-bold text-capitalize text-truncate small mb-1 mt-2">
                    {v.name}
                  </div>
                  {/*<br />*/}
                  <div className="text-center font-weight-bold small">
                    ${v.price}
                  </div>
                </div>
              </div>
            );
          })}
          {/* </div> */}
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div> */}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // ... computed data from state and optionally ownProps
  best_seller: state.root._campus,
});

const mapDispatchToProps = {
  // ... normally is an object full of action creators
};

// We normally do both in one step, like this:
export default connect(mapStateToProps)(PauseOnHover);
