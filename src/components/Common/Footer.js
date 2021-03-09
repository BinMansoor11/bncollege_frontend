import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { UPDATE_CAMPUS_STORE } from "../../redux/actions/types";
import { useSelector } from "react-redux";

const Footer = (props) => {
  const state = useSelector((state) => state.root);
  const { _campus } = state;
  const {
    footer_color,
    footer_font_primary_color,
    footer_font_secondary_color,
  } = _campus;
  /**
   * TextBooks
   */
  const TextBooks = [
    { book: "Find Textbooks", book_route: "/textbooks/findbooks" },
    { book: "Textbook Rentals", book_route: "/textbooks/textbookrentals" },
    { book: "Sell Back Textbook", book_route: "/textbooks/sellbacktextbooks" },
    {
      book: "Digital Content Faqs",
      book_route: "/textbooks/digitalcontentfaqs",
    },
    {
      book: "Faculty Resources",
      route: "/textbooks/openeducationalresources",
    },
    { book: "Open Educational Resources", book_route: "/tshirtsandtanks" },
  ];
  const { book, book_route } = TextBooks;

  /**
   * Gifts And Accessories
   */
  const GiftsAndAccessories = [
    { gifts: "Diploma Frames", gifts_route: "/diplomaframes" },
    { gifts: "Bags", gifts_route: "/bags" },
    {
      gifts: "Drinkware",
      gifts_route: "/drinkware",
    },
    {
      gifts: "Home & Recreation",
      gifts_route: "/homeandrecretion",
    },
    {
      gifts: "Personal Accessories",
      route: "/personalaccessories",
    },
    {
      gifts: "School Spirit Accessories",
      gifts_route: "/schoolspiritaccessories",
    },
  ];
  const { gifts, gifts_route } = GiftsAndAccessories;

  /**
   * Apparel
   */
  const Appareal = [
    { apparel: "Men's", apparel_route: "/mens" },
    { apparel: "Women's", apparel_route: "/womens" },
    {
      apparel: "Youth",
      apparel_route: "/youth",
    },
    {
      apparel: "Infants & Toddlers",
      apparel_route: "/infantsandtoddlers",
    },
    {
      apparel: "Professional Schools",
      route: "/professionalschools",
    },
    {
      apparel: "Specialty Apparel",
      apparel_route: "/specialityapparel",
    },
  ];
  const { apparel, apparel_route } = Appareal;

  /**
   * Supplies And Electronics
   */
  const SuppliesAndElectronics = [
    {
      supplies: "Computer & Electronics",
      supplies_route: "/computerandelectronics",
    },
    { supplies: "Dorm Essentials", supplies_route: "/dormessentials" },
    {
      supplies: "School Supplies",
      supplies_route: "/schoolsupplies",
    },
    {
      supplies: "Speciality Supplies",
      supplies_route: "/specialitysupplies",
    },
  ];
  const { supplies, supplies_route } = SuppliesAndElectronics;

  /**
   * Special Offers
   */
  const SpecialOffers = [
    {
      specialoffers: "Offers",
      specialoffers_route: "/offers",
    },
    {
      specialoffers: "Dorm Essentials",
      specialoffers_route: "/dormessentials",
    },
    {
      specialoffers: "School Supplies",
      specialoffers_route: "/schoolsupplies",
    },
    {
      specialoffers: "Speciality Supplies",
      specialoffers_route: "/specialitysupplies",
    },
  ];
  const { specialoffers, specialoffers_route } = SpecialOffers;

  /**
   * Homework Solutions
   */
  const HomeworkSolutions = [
    {
      homeworksolutions: "Textbook Solutions",
      homeworksolutions_route: "/textbooksolutions",
    },
    {
      homeworksolutions: "Homework Help",
      homeworksolutions_route: "/homeworkhelp",
    },
    {
      homeworksolutions: "Writing Help",
      homeworksolutions_route: "/writinghelp",
    },
  ];
  const { homeworksolutions, homeworksolutions_route } = HomeworkSolutions;

  /**
   * Scoial Icons
   */
  const Icons = [
    { icon: <FaInstagram />, icon_route: "#" },
    { icon: <FaFacebookF />, icon_route: "#" },
    { icon: <FaTwitter />, icon_route: "#" },
    { icon: <FaYoutube />, icon_route: "#" },
    { icon: <FaPinterest />, icon_route: "#" },
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

  return (
    <div>
      <footer className="site-footer_v2">
        <div
          className="space-top-3 text-lg-left text-center "
          style={{ backgroundColor: footer_color }}
        >
          <div className="pb-5 space-bottom-lg-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 mb-6 mb-lg-0">
                  <h5
                    className="font-size-2 font-weight-medium mb-2 mb-xl-5 pb-xl-1"
                    style={{ color: footer_font_primary_color }}
                  >
                    TEXTBOOKS
                  </h5>
                  <ul className="list-unstyled mb-0">
                    {TextBooks.map((v, i) => {
                      return (
                        <li className="h-white pb-2 font-size-1">
                          <Link
                            className="widgets-hover transition-3d-hover font-size-2"
                            style={{ color: footer_font_secondary_color }}
                            to={v.book_route}
                          >
                            {v.book}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-lg-2 mb-6 mb-lg-0">
                  <h5
                    className="font-size-2 font-weight-medium mb-2 mb-xl-5 pb-xl-1"
                    style={{ color: footer_font_primary_color }}
                  >
                    APPAREL
                  </h5>
                  <ul className="list-unstyled mb-0">
                    {Appareal.map((v, i) => {
                      return (
                        <li className="h-white pb-2 font-size-1">
                          <Link
                            className="font-size-2 widgets-hover transition-3d-hover"
                            style={{ color: footer_font_secondary_color }}
                            to={v.apparel_route}
                          >
                            {v.apparel}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-lg-2 mb-6 mb-lg-0">
                  <h5
                    className="font-size-2 font-weight-medium mb-2 mb-xl-5 pb-xl-1"
                    style={{ color: footer_font_primary_color }}
                  >
                    GIFTS & ACCESSORIES
                  </h5>
                  <ul className="list-unstyled mb-0">
                    {GiftsAndAccessories.map((v, i) => {
                      return (
                        <li className="h-white pb-2 font-size-1">
                          <Link
                            className="font-size-2 widgets-hover transition-3d-hover"
                            style={{ color: footer_font_secondary_color }}
                            to={v.gifts_route}
                          >
                            {v.gifts}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-lg-2 mb-6 mb-lg-0">
                  <h5
                    className="font-size-2 font-weight-medium mb-2 mb-xl-5 pb-xl-1"
                    style={{ color: footer_font_primary_color }}
                  >
                    SUPPLIES & ELECTRONICS
                  </h5>
                  <ul className="list-unstyled mb-0">
                    {SuppliesAndElectronics.map((v, i) => {
                      return (
                        <li className="h-white pb-2 font-size-1">
                          <Link
                            className="font-size-2 widgets-hover transition-3d-hover"
                            style={{ color: footer_font_secondary_color }}
                            to={v.supplies_route}
                          >
                            {v.supplies}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-lg-2 mb-6 mb-lg-0">
                  <h5
                    className="font-size-2 font-weight-medium mb-2 mb-xl-5 pb-xl-1"
                    style={{ color: footer_font_primary_color }}
                  >
                    SPECIAL OFFERS
                  </h5>
                  <ul className="list-unstyled mb-0">
                    {SpecialOffers.map((v, i) => {
                      return (
                        <li className="h-white pb-2 font-size-1">
                          <Link
                            className="font-size-2 widgets-hover transition-3d-hover"
                            style={{ color: footer_font_secondary_color }}
                            to={v.specialoffers_route}
                          >
                            {v.specialoffers}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-lg-2 mb-6 mb-lg-0">
                  <h5
                    className="font-size-2 font-weight-medium mb-2 mb-xl-5 pb-xl-1"
                    style={{ color: footer_font_primary_color }}
                  >
                    HOMEWORK SOLUTIONS
                  </h5>
                  <ul className="list-unstyled mb-0">
                    {HomeworkSolutions.map((v, i) => {
                      return (
                        <li className="h-white pb-2 font-size-1">
                          <Link
                            className="font-size-2 widgets-hover transition-3d-hover"
                            style={{ color: footer_font_secondary_color }}
                            to={v.homeworksolutions_route}
                          >
                            {v.homeworksolutions}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-lg-2 mb-6 mb-lg-0">
                  <div className="pb-lg-6 pt-5">
                    <h5
                      className="font-size-2 font-weight-medium mb-2 mb-xl-5 pb-xl-1"
                      style={{ color: footer_font_primary_color }}
                    >
                      CONTACT US
                    </h5>
                    <address className="font-size-2 mb-5">
                      <span className="mb-2 font-weight-normal font-size-1"
                      style={{color: footer_font_secondary_color }}
                      >
                        {_campus.address}
                        {/* <br /> United States */}
                      </span>
                    </address>
                    <div className="mb-4 h-white">
                      <Link
                        href="mailto:sale@bookworm.com"
                        className="font-size-2 d-block mb-1  font-size-1"
                        style={{ color: footer_font_secondary_color }}
                      >
                        <span className="mb-2 font-weight-normal  font-size-1">
                          sale@bookworm.com
                        </span>
                      </Link>
                      <Link
                        href="tel:+1246-345-0695"
                        className="font-size-2 d-block  font-size-1"
                        style={{ color: footer_font_secondary_color }}
                      >
                        <span className="mb-2 font-weight-normal  font-size-1">
                          +1 246-345-0695
                        </span>
                      </Link>
                    </div>
                    <ul className="list-unstyled mb-0 d-flex  justify-content-center justify-content-lg-start  ">
                      {Icons.map((v, i) => {
                        return (
                          <li className="h-white btn pl-0">
                            <Link
                              to={v.icon_route}
                              style={{ color: footer_font_secondary_color }}
                            >
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
                  ©2020 Book Worm. All rights reserved
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
  );
};

export default Footer;
