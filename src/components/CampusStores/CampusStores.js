import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import {
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
// Port //
import { api } from "../../utils/Contant";

import { useDispatch, useSelector } from "react-redux";
import {
  getCampus,
  getCampusStores,
  getData,
} from "../../redux/actions/Actions";

export default function CampusStores() {
  const [Campuses, setCampuses] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.root);
  const { _campus_stores, _data } = state;

  /**
   * Scoial Icons
   */
  const Icons = [
    { icon: <FaInstagram />, icon_route: "#" },
    { icon: <FaFacebookF />, icon_route: "#" },
    { icon: <FaTwitter />, icon_route: "#" },
  ];
  const { icon, icon_route } = Icons;

  /**
   * Copyrights
   */
  const Copyrights = [
    { copyrights: "Copyrights", copyrights_route: "/copyrights" },
    {
      copyrights: "Privacy & Security",
      copyrights_route: "/privacy-and-security",
    },
    { copyrights: "CA Privacy Policy", copyrights_route: "/ca-privacy-policy" },
    { copyrights: "Terms of use", copyrights_route: "/terms-and-conditions" },
    { copyrights: "Sitemap", copyrights_route: "/sitemap" },
  ];
  const { copyrights, copyrights_route } = Copyrights;

  /**
   * Axios GET API
   */
  useEffect(() => {
    fetchCampusStores();
    console.log("NEW RENDER");
  }, []);

  const fetchCampusStores = async () => {
    try {
      let response = await axios.get(api + "5008/api/campus_stores");
      console.log("response.data :>> ", response.data);
      const { data } = response.data;
      console.log("campuses", data);
      dispatch(getCampusStores(data));
    } catch (error) {
      console.log("error", error);
    }
  };

  return _campus_stores < 1 ? (
    <p>Nothing To Show...</p>
  ) : (
    <div className="bg-light">
      {/* <Header /> */}
      <div class="cntainer-fluid">
        <Navbar bg="dark" variant="dark">
          <div className="text-center">
            <Navbar.Brand
              to="/"
              className="text-center font-size-7 py-2 text-uppercase"
              style={{ lineHeight: "0.5rem" }}
            >
              {/* <img
                alt="BN College"
                src="./assets/img/BNCollege/bncollege.png"
                width="60"
                height="60"
                className="d-inline-block align-top"
              />{" "} */}
              <p className="font-size-3 text-capitalize">Barnes & Nobel</p>
              College
            </Navbar.Brand>
          </div>
        </Navbar>
      </div>
      <div class="container-fluid py-5 pt-5 mb-5 ">
        <div class="row">
          <div class="offset-1"></div>
          <div class="col-10">
            <div class="row pt-5">
              {_campus_stores !== undefined ? (
                _campus_stores.map((v, i) => {
                  return (
                    <div class="col-sm-4 mt-5">
                      <div class="shadow-lg p-3 mb-5 rounded card text-white bg-dark mb-3 py-3">
                        {/* <div class="card text-white bg-dark mb-3 py-3"> */}
                        <div class="card-body    pb-3">
                          <h5 class="card-title font-size-3">{v.name}</h5>
                          {/* <p>{v.bn_collage}</p> */}
                          <p className=" border-bottom"></p>
                          <Link
                            to={"/" + v.name}
                            class="btn btn-outline-light mt-4  "
                            onClick={() => {
                              let campus = v;
                              dispatch(getCampus(campus));
                            }}
                          >
                            View Online Store
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No Campus Store</p>
              )}
            </div>
          </div>
          <div class="offset-1"></div>
        </div>
      </div>
      {/**
       * FOOTER
       */}
      <div className="pt-5">
        <footer className="site-footer_v2">
          <div
            className="space-top-3 text-lg-left text-center "
            style={{
              backgroundColor: _data.footer_color,
              color: _data.footer_font_primary_color,
            }}
          >
            <div className="">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 mb-6 mb-lg-0">
                    <div className="">
                      <h5 className="font-size-2 font-weight-medium   text-white">
                        CONTACT US
                      </h5>
                      <address className="font-size-2 ">
                        <span className=" font-weight-normal text-gray-450  font-size-1">
                          {_data.address}
                        </span>
                      </address>
                      <div className="mb-4 h-white">
                        <Link
                          href="mailto:sale@bookworm.com"
                          className="font-size-2 d-block text-gray-450 mb-1  font-size-1"
                        >
                          <span className="mb-2 font-weight-normal text-gray-450  font-size-1">
                            sale@bookworm.com
                          </span>
                        </Link>
                        <Link
                          href="tel:+1246-345-0695"
                          className="font-size-2 d-block text-gray-450  font-size-1"
                        >
                          <span className="mb-2 font-weight-normal text-gray-450  font-size-1">
                            +1 246-345-0695
                          </span>
                        </Link>
                      </div>
                      <ul className="list-unstyled mb-0 d-flex  justify-content-center justify-content-lg-start  ">
                        {Icons.map((v, i) => {
                          return (
                            <li className="h-white btn pl-0">
                              <Link to={v.icon_route} className="text-gray-450">
                                {v.icon}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-1 border-top border-gray-750">
              <div className="container">
                <div className="d-lg-flex align-items-center text-lg-center justify-content-lg-between">
                  <p className="mb-4 mb-lg-0 font-size-1 text-gray-450">
                    Â©2020 Book Worm. All rights reserved
                  </p>
                  <div className="ml-auto d-lg-flex">
                    <ul className="list-unstyled mb-0 d-flex justify-content-center">
                      {Copyrights.map((v, i) => {
                        return (
                          <li className="btn pl-0 font-size-1">
                            <Link
                              to={v.copyrights_route}
                              className="text-gray-450"
                            >
                              {v.copyrights}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
