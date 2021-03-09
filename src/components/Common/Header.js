import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Aside from "./Aside";
import { NavDropdown } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import axios from "axios";
// Port //
import { api } from "../../utils/Contant";

import Failed from "../Login/Failed";

import { useDispatch, useSelector } from "react-redux";
import { getCategories, getUser } from "../../redux/actions/Actions";

const Header = ({ history, match }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.root);
  const { _campus, _user, _cart } = state;
  const { _categories } = state;
  const setforType = new Set();
  _categories !== undefined &&
    _categories !== null &&
    _categories.map((value) => {
      setforType.add(value.categoryType);
    });

  let arrayOfTypes = [...setforType];

  const Menu = [
    {
      key: "Offer",
      link: "/offer",
    },
    {
      key: "Collections",
      submenu: [
        {
          key: "Champions",
          link: "/champions",
        },
        {
          key: "Under Armour Shop",
          link: "/under-armour-shop",
        },
        {
          key: "Champion",
          link: "/champion",
        },
        {
          key: "Nike Shop",
          link: "/nike-shop",
        },
      ],
    },
    {
      key: "Textbooks",
      submenu: [
        {
          key: "Find Textbooks",
          link: "/find-textbooks",
        },
        {
          key: "Textbooks Rental",
          link: "/textbooks-rental",
        },
      ],
    },
    {
      key: "Apparel",
      link: "/apparel",
      submenu: [
        {
          key: "Men's",
          link: "/mens",
          submenu: [
            {
              key: "T-Shirt & Tanks",
              link: "/t-shirt-and-tanks",
            },
            {
              key: "Hats",
              link: "/hats",
            },
          ],
        },
        {
          key: "Women's",
          link: "/womens",
          submenu: [
            {
              key: "T-Shirt & Tanks",
              link: "/t-shirt-and-tanks",
            },
            {
              key: "Hats",
              link: "/hats",
            },
          ],
        },
      ],
    },
    {
      key: "Gifts & Accessories",
      link: "/gifts-and-accessories",
      submenu: [
        {
          key: "Men's",
          link: "/mens",
          submenu: [
            {
              key: "T-Shirt & Tanks",
              link: "/t-shirt-and-tanks",
            },
            {
              key: "Hats",
              link: "/hats",
            },
          ],
        },
        {
          key: "Women's",
          link: "/womens",
          submenu: [
            {
              key: "T-Shirt & Tanks",
              link: "/t-shirt-and-tanks",
            },
            {
              key: "Hats",
              link: "/hats",
            },
          ],
        },
      ],
    },
    {
      key: "Supplies & Electronics",
      link: "/supplies-and-electronics",
      submenu: [
        {
          key: "Men's",
          link: "/mens",
          submenu: [
            {
              key: "T-Shirt & Tanks",
              link: "/t-shirt-and-tanks",
            },
            {
              key: "Hats",
              link: "/hats",
            },
          ],
        },
        {
          key: "Women's",
          link: "/womens",
          submenu: [
            {
              key: "T-Shirt & Tanks",
              link: "/t-shirt-and-tanks",
            },
            {
              key: "Hats",
              link: "/hats",
            },
          ],
        },
      ],
    },
  ];

  const CartPrice = {
    cart_price: 40.93,
  };
  const { cart_price } = CartPrice;

  /**
   * TextBooks
   */
  const TextBooks = [
    { book: "Find Textbooks", book_route: "/:name/textbooks/findbooks" },
    {
      book: "Textbook Rentals",
      book_route: "/:name/textbooks/textbookrentals",
    },
    {
      book: "Sell Back Textbook",
      book_route: "/:name/textbooks/sellbacktextbooks",
    },
    {
      book: "Digital Content Faqs",
      book_route: "/:name/textbooks/digitalcontentfaqs",
    },
    {
      book: "Faculty Resources",
      route: "/:name/textbooks/facultyresources",
    },
    {
      book: "Open Educational Resources",
      book_route: "/:name/textbooks/openeducationalresources",
    },
  ];
  const { book, book_route } = TextBooks;
  /**
   * Collections
   */
  const Collections = [
    {
      collections: "Gifts Under $25",
      collections_route: "/:name/collections/giftsunder25",
    },
    {
      collections: "Gifts Under $50",
      collections_route: "/:name/collections/giftsunder50",
    },
    {
      collections: "Gifts Under $100",
      collections_route: "/:name/collections/giftsunder100",
    },
    {
      collections: "Under Armour Shop",
      collections_route: "/:name/collections/underarmourshop",
    },
    {
      collections: "Gifts For The Grades",
      collections_route: "/:name/collections/giftsforgrades",
    },
    {
      collections: "Championship",
      collections_route: "/:name/collections/championship",
    },
    {
      collections: "Non-Logoed New Arrivals",
      collections_route: "/:name/collections/newarrivals",
    },
    {
      collections: "Gifts For The Alumni",
      collections_route: "/collections/giftsforalumni",
    },
    { collections: "Champion", collections_route: "/collections/champion" },
    { collections: "Nike Shop", collections_route: "/collections/nike shop" },
    {
      collections: "Premium Merchandise",
      collections_route: "/collections/premiummerchandise",
    },
    { collections: "Moleskine", collections_route: "/collections/moleskine" },
    {
      collections: "Grad Apparel",
      collections_route: "/collections/gradapparel",
    },
    {
      collections: "Grad Drinkwear",
      collections_route: "/collections/graddrinkware",
    },
    {
      collections: "Protective Gear",
      collections_route: "/collections/protectivegear",
    },
    { collections: "Create", collections_route: "/collections/create" },
    {
      collections: "Vantage Womens",
      collections_route: "/collections/vantagewomens",
    },
    {
      collections: "Clearance Sale",
      collections_route: "/collections/clearancesale",
    },
    { collections: "Soccer", collections_route: "/collections/scoccer" },
    { collections: "Tennis", collections_route: "/collections/tennis" },
    { collections: "Sports", collections_route: "/collections/sports" },
    { collections: "School Of", collections_route: "/collections/schoolof" },
    { collections: "Family", collections_route: "/collections/family" },
    {
      collections: "Champion & Drinkware",
      collections_route: "/collections/championandrinkware",
    },
    {
      collections: "Stocking Stuffers",
      collections_route: "/collections/stockingstuffers",
    },
    {
      collections: "Wireless Headphones",
      collections_route: "/collections/wirelessheadphones",
    },
  ];
  const { collections, collections_route } = Collections;

  /**
   * Men's
   */
  const Mens = [
    { mens: "T-Shirts & Tanks", mens_route: "/:name/mens/tshirtsandtanks" },
    { mens: "Sweat Shirts", mens_route: "/:name/mens/sweatshirts" },
    {
      mens: "Performance Apparel",
      mens_route: "/:name/mens/performanceapparel",
    },
    { mens: "Hats", mens_route: "/mens/hats" },
    { mens: "Bottoms", mens_route: "/mens/bottoms" },
    { mens: "Outer Wear", mens_route: "/mens/outerwear" },
    { mens: "Accessories", mens_route: "/mens/accessories" },
  ];
  const { mens, mens_route } = Mens;

  /**
   * Women's
   */
  const Womens = [
    { womens: "T-Shirts & Tanks", womens_route: "/womens/tshirtsandtanks" },
    { womens: "Hats", womens_route: "/womens/hats" },
    { womens: "Accessories", womens_route: "/womens/accessories" },
  ];
  const { womens, womens_route } = Womens;

  /**
   * Youth
   */
  const Youth = [{ youth: "Apparel", youth_route: "/youth/apparel" }];
  const { youth, youth_route } = Youth;

  /**
   * Infants And Toddlers
   */
  const InfantsAndToddlers = [
    {
      infantsandtoddlers: "Apparel",
      infantsandtoddlers_route: "/infantsandtoddlers/apparel",
    },
  ];
  const { infantsandtoddlers, infantsandtoddlers_route } = InfantsAndToddlers;

  /**
   * Professional Schools
   */
  const ProfessionalSchools = [
    {
      professionalschools: "Apparel",
      professionalschools_route: "/professionalschools/apparel",
    },
  ];
  const {
    professionalschools,
    professionalschools_route,
  } = ProfessionalSchools;

  /**
   * Specialty Apparel
   */
  const SpecialtyApparel = [
    {
      specialityapparel: "Fans",
      specialityapparel_route: "/specialityapparel/fans",
    },
    {
      specialityapparel: "Sports",
      specialityapparel_route: "/specialityapparel/sports",
    },
    {
      specialityapparel: "Professional Schools",
      specialityapparel_route: "/specialityapparel/professionalschools",
    },
    {
      specialityapparel: "Greek",
      specialityapparel_route: "/specialityapparel/greek",
    },
    {
      specialityapparel: "Youth",
      specialityapparel_route: "/specialityapparel/youth",
    },
  ];
  const { specialityapparel, specialityapparel_route } = SpecialtyApparel;

  /**
   * Diploma Frames
   */
  const DiplomaFrames = [
    { diplomaframes: "Diploma Frames", diplomaframes_route: "/diplomaframes" },
  ];
  const { diplomaframes, diplomaframes_route } = DiplomaFrames;

  /**
   * Bags
   */
  const Bags = [
    {
      bags: "Laptop Sleeves and Bags",
      bags_route: "/bags/laptopandsleevesandbags",
    },
    { bags: "Backpacks", bags_route: "/bags/laptopandsleevesandbags" },
  ];
  const { bags, bags_route } = Bags;

  /**
   * Drinkware
   */
  const Drinkware = [
    { drinkware: "Glasswear", drinkware_route: "/drinkware/glasswear" },
    { drinkware: "Travel", drinkware_route: "/drinkware/travel" },
    { drinkware: "Water Bottles", drinkware_route: "/drinkware/waterbottles" },
    { drinkware: "Mugs", drinkware_route: "/drinkware/mugs" },
  ];
  const { drinkware, drinkware_route } = Drinkware;

  /**
   * Home And Recreation
   */
  const HomeAndRecreation = [
    {
      homeandrecreation: "Gourmet Gifts",
      homeandrecreation_route: "/homeandrecreation/gourmetgifts",
    },
  ];
  const { homeandrecreation, homeandrecreation_route } = HomeAndRecreation;

  /**
   * Personal Accessories
   */
  const PersonalAccessories = [
    {
      personalaccessories: "Keychains Lanyards & ID Holders",
      personalaccessories_route: "/personalaccessories/keychains",
    },
    {
      personalaccessories: "Scarves & Bandanas",
      personalaccessories_route: "/personalaccessories/scarves",
    },
    {
      personalaccessories: "Gloves & Mittens",
      personalaccessories_route: "/personalaccessories/gloves",
    },
  ];
  const {
    personalaccessories,
    personalaccessories_route,
  } = PersonalAccessories;

  /**
   *School Spirit Accessories
   */
  const SchoolSpiritAccessories = [
    {
      schoolspiritaccessories: "Desk Accessories",
      schoolspiritaccessories_route: "/schoolspiritaccessories/Desk",
    },
    {
      schoolspiritaccessories: "Food Gifts",
      schoolspiritaccessories_route: "/schoolspiritaccessories/food",
    },
    {
      schoolspiritaccessories: "Flags Banners and Pennants",
      schoolspiritaccessories_route: "/schoolspiritaccessories/flags",
    },
    {
      schoolspiritaccessories: "Animals and Mascots",
      schoolspiritaccessories_route: "/schoolspiritaccessories/animals",
    },
    {
      schoolspiritaccessories: "Game Day Accessories",
      schoolspiritaccessories_route: "/schoolspiritaccessories/game",
    },
    {
      schoolspiritaccessories: "Auto Accessories",
      schoolspiritaccessories_route: "/schoolspiritaccessories/auto",
    },
  ];
  const {
    schoolspiritaccessories,
    schoolspiritaccessories_route,
  } = SchoolSpiritAccessories;

  /**
   *Computer And Electronics
   */
  const ComputerAndElectronics = [
    {
      computerandelcetronics: "Desktops, Laptops & Tablets",
      computerandelcetronics_route:
        "/computerandelcetronics/desktoplaptopsandtablets",
    },
    {
      computerandelcetronics: "Phone Accessories",
      computerandelcetronics_route: "/computerandelcetronics/phoneaccessories",
    },
    {
      computerandelcetronics: "Cables & Surge Protectors",
      computerandelcetronics_route: "/computerandelcetronics/cables",
    },
    {
      computerandelcetronics: "Computers Accessories",
      computerandelcetronics_route:
        "/computerandelcetronics/computeraccessories",
    },
    {
      computerandelcetronics: "Audio",
      computerandelcetronics_route: "/computerandelcetronics/audio",
    },
    {
      computerandelcetronics: "Keyboard & Mice",
      computerandelcetronics_route: "/computerandelcetronics/keyboardandmice",
    },
    {
      computerandelcetronics: "Ink & Printers Supplies",
      computerandelcetronics_route: "/computerandelcetronics/inkandprinters",
    },
    {
      computerandelcetronics: "Drives & Storage Media",
      computerandelcetronics_route: "/computerandelcetronics/drivesandstorage",
    },
    {
      computerandelcetronics: "Batteries & Battery Packs",
      computerandelcetronics_route: "/computerandelcetronics/batteries",
    },
    {
      computerandelcetronics: "Laptop Sleeves & Bags",
      computerandelcetronics_route:
        "/computerandelcetronics/laptopandsleevesandbags",
    },
    {
      computerandelcetronics: "Software",
      computerandelcetronics_route: "/computerandelcetronics/drivesandstorage",
    },
    {
      computerandelcetronics: "Smart Pens & Accessories",
      computerandelcetronics_route: "/computerandelcetronics/smartpens",
    },
    {
      computerandelcetronics: "Cameras",
      computerandelcetronics_route: "/computerandelcetronics/cameras",
    },
  ];
  const {
    computerandelcetronics,
    computerandelcetronics_route,
  } = ComputerAndElectronics;

  /**
   *Drom And Essentials
   */
  const DormEssentials = [
    {
      dromessentials: "Bedding & Bath",
      dromessentials_route: "/dromessentials/beddingandbath",
    },
    {
      dromessentials: "Appliances",
      dromessentials_route: "/dromessentials/appliances",
    },
  ];
  const { dromessentials, dromessentials_route } = DormEssentials;

  /**
   *School Supplies
   */
  const SchoolSupplies = [
    {
      schoolsupplies: "Writing Tools",
      schoolsupplies_route: "/schoolsupplies/writingtools",
    },
    {
      schoolsupplies: "Calculators",
      schoolsupplies_route: "/schoolsupplies/calculators",
    },
    {
      schoolsupplies: "Desk Supplies",
      schoolsupplies_route: "/schoolsupplies/desksupplies",
    },
    {
      schoolsupplies: "Notebook, Binders & Folders",
      schoolsupplies_route: "/schoolsupplies/notebookandbinders",
    },
    {
      schoolsupplies: "Notepads Paper & Cards",
      schoolsupplies_route: "/schoolsupplies/notepadspaper",
    },
    {
      schoolsupplies: "Planners",
      schoolsupplies_route: "/schoolsupplies/planners",
    },
    {
      schoolsupplies: "School Logo Supplies",
      schoolsupplies_route: "/schoolsupplies/schoollogosupples",
    },
  ];
  const { schoolsupplies, schoolsupplies_route } = SchoolSupplies;

  /**
   *Speciality Supplies
   */
  const SpecialitySupplies = [
    {
      specialitysupplies: "Health & Science Supplies",
      specialitysupplies_route: "/specialitysupplies/healtyandscience",
    },
    {
      specialitysupplies: "Art Supplies",
      specialitysupplies_route: "/specialitysupplies/artsupplies",
    },
  ];
  const { specialitysupplies, specialitysupplies_route } = SpecialitySupplies;

  const [siteLogo, setSiteLogo] = useState({
    site_logo: "./assets/img/logo.png",
    menu: Menu,
  });
  const { site_logo } = siteLogo;

  const [show, setShow] = useState({
    showTextBooks: false,
    showCollection: false,
    showApparel: false,
    showGifts: false,
    showSupplies: false,
    showFundraising: false,
    showMyAccount: false,
  });

  const {
    showTextBooks,
    showCollection,
    showApparel,
    showGifts,
    showSupplies,
    showFundraising,
    showMyAccount,
  } = show;

  const showDropdown = (key) => {
    switch (key) {
      case "TEXTBOOKS":
        setShow((prevState) => {
          return {
            ...prevState,
            showTextBooks: true,
          };
        });
        break;
      case "COLLECTION":
        setShow((prevState) => {
          return {
            ...prevState,
            showCollection: true,
          };
        });
        break;

      case "APPAREL":
        setShow((prevState) => {
          return {
            ...prevState,
            showApparel: true,
          };
        });
        break;
      case "GIFTS":
        setShow((prevState) => {
          return {
            ...prevState,
            showGifts: true,
          };
        });
        break;
      case "SUPPLIES":
        setShow((prevState) => {
          return {
            ...prevState,
            showSupplies: true,
          };
        });
        break;
      case "FUNDRAISING":
        setShow((prevState) => {
          return {
            ...prevState,
            showFundraising: true,
          };
        });
        break;
      case "MYACCOUNT":
        setShow((prevState) => {
          return {
            ...prevState,
            showMyAccount: true,
          };
        });
        break;
      default:
        return show;
    }
  };

  const hideDropdown = (key) => {
    switch (key) {
      case "TEXTBOOKS":
        setShow((prevState) => {
          return {
            ...prevState,
            showTextBooks: false,
          };
        });
        break;
      case "COLLECTION":
        setShow((prevState) => {
          return {
            ...prevState,
            showCollection: false,
          };
        });
        break;
      case "APPAREL":
        setShow((prevState) => {
          return {
            ...prevState,
            showApparel: false,
          };
        });
        break;
      case "GIFTS":
        setShow((prevState) => {
          return {
            ...prevState,
            showGifts: false,
          };
        });
        break;
      case "SUPPLIES":
        setShow((prevState) => {
          return {
            ...prevState,
            showSupplies: false,
          };
        });
        break;
      case "FUNDRAISING":
        setShow((prevState) => {
          return {
            ...prevState,
            showFundraising: false,
          };
        });
        break;
      case "MYACCOUNT":
        setShow((prevState) => {
          return {
            ...prevState,
            showMyAccount: false,
          };
        });
        break;
      default:
        return show;
    }
  };
  /**
   * Axios GET API
   */
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get(api + "5007/api/categories");
      const { cat } = response.data;
      dispatch(getCategories(cat));
    } catch (error) {
      console.log("error", error);
    }
  };
  const totalCartQuantity = _cart.reduce(
    (accumulatedValue, cartItem) => accumulatedValue + cartItem.quantity,
    0
  );
  let totals = _cart.reduce(
    (accumulatedValue, cartItem) =>
      accumulatedValue + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div>
      <header
        id="site-header"
        className="site-header__v2 site-header__white-text"
      >
        <div className="masthead">
          <div style={{ backgroundColor: _campus.header_primary_color }}>
            <div className="container pt-3 pt-md-4 pb-3 pb-md-5">
              <div className="d-flex align-items-center position-relative flex-wrap">
                <div className="offcanvas-toggler mr-4">
                  <a
                    id="sidebarNavToggler2"
                    href="javascript:;"
                    role="button"
                    className="cat-menu"
                    aria-controls="sidebarContent2"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-unfold-event="click"
                    data-unfold-hide-on-scroll="false"
                    data-unfold-target="#sidebarContent2"
                    data-unfold-type="css-animation"
                    data-unfold-overlay='{
                                 "className": "u-sidebar-bg-overlay",
                                 "background": "rgba(0, 0, 0, .7)",
                                 "animationSpeed": 100
                                 }'
                    data-unfold-animation-in="fadeInLeft"
                    data-unfold-animation-out="fadeOutLeft"
                    data-unfold-duration="100"
                  >
                    {/* <svg width="20px" height="18px">
                      <path
                        fillRule="evenodd"
                        fill="rgb(255, 255, 255)"
                        d="M-0.000,-0.000 L20.000,-0.000 L20.000,2.000 L-0.000,2.000 L-0.000,-0.000 Z"
                      />
                      <path
                        fillRule="evenodd"
                        fill="rgb(255, 255, 255)"
                        d="M-0.000,8.000 L15.000,8.000 L15.000,10.000 L-0.000,10.000 L-0.000,8.000 Z"
                      />
                      <path
                        fillRule="evenodd"
                        fill="rgb(255, 255, 255)"
                        d="M-0.000,16.000 L20.000,16.000 L20.000,18.000 L-0.000,18.000 L-0.000,16.000 Z"
                      />
                    </svg> */}
                  </a>
                </div>
                <div className="site-branding">
                  <Link to={`/` + _campus.name}>
                    <img
                      src={_campus.logo}
                      style={{
                        width: "140px",
                        height: "90px",
                        objectFit: "contain",
                      }}
                    />
                  </Link>
                </div>
                <div className="site-search ml-xl-0 ml-md-auto w-r-100 flex-grow-1 mr-md-5 mt-2 mt-md-0 order-1 order-md-0">
                  {/* <form className="form-inline my-2 my-xl-0">
                    <div className="input-group input-group-borderless w-100">
                      <div className="input-group-prepend mr-0 d-none d-xl-block">
                        <select
                          className="custom-select pr-7 pl-4 rounded-right-0 dow-none border-0 text-dark"
                          id="inputGroupSelect01"
                          style={{ borderRadius: 0 }}
                        >
                          <option value>All Categories</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <input
                        type="text"
                        className="form-control border-left rounded-left-1 rounded-left-xl-0 px-3"
                        placeholder="Search for books by keyword"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary-green px-3 py-2"
                          type="submit"
                        >
                          <BsSearch />
                        </button>
                      </div>
                    </div>
                  </form>
                */}
                </div>

                <div className="d-flex align-items-center">
                  {_user !== null ? (
                    <NavDropdown
                      title={`Hello, ${_user.user.first_name}`}
                      className="nav-item nav-link link-black-100 font-size-2 font-weight-medium d-flex align-items-center"
                      show={showMyAccount}
                      onMouseEnter={() => showDropdown("MYACCOUNT")}
                      onMouseLeave={() => hideDropdown("MYACCOUNT")}
                    >
                      {showMyAccount && (
                        <ul className="font-size-2 rounded-0 p-0 m-0 border-gray-900 list-unstyled">
                          <Link
                            to={"/" + _campus.name + "/myaccount"}
                            className="dropdown-item link-black-100"
                          >
                            My Account
                          </Link>
                          <Link
                            onClick={() => {
                              history.push(
                                "/" +
                                  _campus.name +
                                  "/myaccount/accountinformation"
                              );
                            }}
                            className="dropdown-item link-black-100"
                          >
                            Profile information
                          </Link>
                          <Link
                            onClick={() => {
                              history.push(
                                "/" +
                                  _campus.name +
                                  "/myaccount/orderhistoryandStatus"
                              );
                            }}
                            className="dropdown-item link-black-100"
                          >
                            Order Histroy and Status
                          </Link>
                          <Link
                            onClick={() => {
                              history.push(
                                "/" +
                                  _campus.name +
                                  "/myaccount/shippingandpayment"
                              );
                            }}
                            className="dropdown-item link-black-100"
                          >
                            Shipping and Payment
                          </Link>
                          <Link
                            onClick={() => {
                              history.push(
                                "/" + _campus.name + "/myaccount/emailaddress"
                              );
                            }}
                            className="dropdown-item link-black-100"
                          >
                            Email Addresses
                          </Link>
                          <Link
                            onClick={() => {
                              history.push(
                                "/" + _campus.name + "/myaccount/yourrentals"
                              );
                            }}
                            className="dropdown-item link-black-100"
                          >
                            Your Rental
                          </Link>
                          <Link
                            className="dropdown-item link-black-100"
                            onClick={() => {
                              dispatch(getUser(null));
                              Failed("You have successfully sign out");
                            }}
                          >
                            Sign Out
                          </Link>
                        </ul>
                      )}
                    </NavDropdown>
                  ) : (
                    <Link
                      id="sidebarNavToggler"
                      to={`/${_campus.name}/login`}
                      // onClick={() => {
                      //   history.push("/" + _campus.name + "/login");
                      // }}

                      // aria-controls="sidebarContent"
                      // aria-haspopup="true"
                      // aria-expanded="false"
                      // data-unfold-event="click"
                      // data-unfold-hide-on-scroll="false"
                      // data-unfold-target="#sidebarContent"
                      // data-unfold-type="css-animation"
                      // data-unfold-overlay='{
                      //              "className": "u-sidebar-bg-overlay",
                      //              "background": "rgba(0, 0, 0, .7)",
                      //              "animationSpeed": 500
                      //              }'
                      // data-unfold-animation-in="fadeInRight"
                      // data-unfold-animation-out="fadeOutRight"
                      // data-unfold-duration="500"
                    >
                      <div className="d-flex align-items-center text-white font-size-2 text-lh-sm">
                        <span className=" font-size-7">
                          <BsPerson />
                        </span>
                        <div className="ml-2 d-none d-lg-block">
                          <span
                            className="font-size-1"
                            style={{ color: _campus.header_font_primary_color }}
                          >
                            Sign In
                          </span>
                          <div
                            className=""
                            style={{
                              color: _campus.header_font_secondary_color,
                            }}
                          >
                            My Account
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                  <Link
                    id="sidebarNavToggler1"
                    to={"/" + _campus.name + "/cart"}
                    role="button"
                    className="ml-4 d-none d-lg-block"
                    // aria-controls="sidebarContent1"
                    // aria-haspopup="true"
                    // aria-expanded="false"
                    // data-unfold-event="click"
                    // data-unfold-hide-on-scroll="false"
                    // data-unfold-target="#sidebarContent1"
                    // data-unfold-type="css-animation"
                    // data-unfold-overlay='{
                    //              "className": "u-sidebar-bg-overlay",
                    //              "background": "rgba(0, 0, 0, .7)",
                    //              "animationSpeed": 500
                    //              }'
                    // data-unfold-animation-in="fadeInRight"
                    // data-unfold-animation-out="fadeOutRight"
                    // data-unfold-duration="500"
                  >
                    <div className="d-flex align-items-center text-white font-size-2 text-lh-sm position-relative">
                      <span className="position-absolute bg-white width-16 height-16 rounded-circle d-flex align-items-center justify-content-center text-dark font-size-n9 left-0 top-0 ml-n2 mt-n1">
                        {totalCartQuantity}
                      </span>
                      <span className=" font-size-7">
                        <HiOutlineShoppingBag />
                      </span>
                      {/* <i className="flaticon-icon-126515 font-size-5"></i> */}
                      <div className="ml-2">
                        <span
                          className="font-size-1"
                          style={{ color: _campus.header_font_primary_color }}
                        >
                          My Cart
                        </span>
                        <div
                          className=""
                          style={{ color: _campus.header_font_secondary_color }}
                        >
                          ${totals}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" d-none d-md-block"
            style={{ backgroundColor: _campus.header_secondary_color }}
          >
            <div className="container">
              <div className="d-flex align-items-center justify-content-center position-relative">
                <div className="site-navigation mx-auto d-none d-xl-block">
                  <ul className="nav">
                    <li className="nav-item dropdown">
                      <Link
                        id="homeDropdownInvoker"
                        // onClick={() => history.push(`/${match.params.name}/`)}
                        onClick={() => history.push("/" + _campus.name)}
                        className="nav-link link-black-100 mx-3 px-0 py-3 font-size-2 font-weight-medium d-flex align-items-center"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-unfold-event="hover"
                        data-unfold-target="#homeDropdownMenu"
                        data-unfold-type="css-animation"
                        data-unfold-duration="200"
                        data-unfold-delay="50"
                        data-unfold-hide-on-scroll="true"
                        data-unfold-animation-in="slideInUp"
                        data-unfold-animation-out="fadeOut"
                        style={{ color: _campus.header_font_secondary_color }}
                      >
                        Home
                      </Link>
                    </li>
                    {arrayOfTypes.length < 1 ? (
                      <p>Nothing to show</p>
                    ) : (
                      arrayOfTypes.map((value) => (
                        <NavDropdown
                          title={value}
                          id={value}
                          className="nav-item nav-link link-black-100 font-size-2 font-weight-medium d-flex align-items-center"
                        >
                          {_categories !== undefined ? (
                            _categories
                              .filter((v) => v.categoryType === value)
                              .map((v) => (
                                <div className="col-2">
                                  <ul className="menu list-unstyled">
                                    <li>
                                      <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                        {v.category_name}
                                      </span>
                                    </li>

                                    {v.sub_categories.map((v) => (
                                      <li>
                                        <Link
                                          to={"/" + _campus.name + v.link}
                                          className="d-block link-black-100 py-1"
                                        >
                                          {v.subname}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))
                          ) : (
                            <p>Please Wait</p>
                          )}
                        </NavDropdown>
                      ))
                    )}

                    {/* <NavDropdown
                      title="Textbooks"
                      id="Textbooks"
                      className="nav-item nav-link link-black-100 font-size-2 font-weight-medium d-flex align-items-center"
                      show={showTextBooks}
                      onMouseEnter={() => showDropdown("TEXTBOOKS")}
                      onMouseLeave={() => hideDropdown("TEXTBOOKS")}
                    >
                      {showTextBooks == true && (
                        <ul
                          // id="shopDropdownMenu"
                          className="font-size-2 rounded-0 p-0 m-0 border-gray-900"
                          style={{
                            // position: "absolute",
                            // zIndex: 2222,
                            listStyle: "none",
                          }}
                          // aria-labelledby="shopDropdownInvoker"
                        >
                          {TextBooks.map((v, i) => {
                            return (
                              <li>
                                <Link
                                  to={v.book_route}
                                  className="dropdown-item link-black-100"
                                >
                                  {v.book}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </NavDropdown> */}

                    <NavDropdown
                      title={
                        <span
                          style={{ color: _campus.header_font_secondary_color }}
                        >
                          Collections
                        </span>
                      }
                      id="Collections"
                      className="nav-item nav-link link-black-100  font-size-2 font-weight-medium d-flex align-items-center"
                      show={showCollection}
                      onMouseEnter={() => showDropdown("COLLECTION")}
                      onMouseLeave={() => hideDropdown("COLLECTION")}
                    >
                      {showCollection == true && (
                        <ul
                          // id="shopDropdownMenu"
                          className="font-size-2 rounded-0 p-0 m-0 border-gray-900"
                          style={{
                            // position: "absolute",
                            // zIndex: 2222,
                            listStyle: "none",
                          }}
                          // aria-labelledby="shopDropdownInvoker"
                        >
                          {Collections.map((v, i) => {
                            return (
                              <li>
                                <Link
                                  to={v.collections_route}
                                  className="dropdown-item link-black-100"
                                >
                                  {v.collections}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </NavDropdown>

                    <NavDropdown
                      title={
                        <span
                          style={{ color: _campus.header_font_secondary_color }}
                        >
                          Nice
                        </span>
                      }
                      id="Apparel"
                      className="nav-item nav-link link-black-100 font-size-2 font-weight-medium d-flex align-items-center"
                      show={showApparel}
                      onMouseEnter={() => showDropdown("APPAREL")}
                      onMouseLeave={() => hideDropdown("APPAREL")}
                    >
                      {showApparel == true && (
                        <div
                          className="p-0  font-size-2 rounded-0 border-gray-900"
                          style={{ width: "1100px" }}
                        >
                          <div className="row no-gutters">
                            <div className="col-12 px-1">
                              <div className="px-5 py-2 pb-5">
                                <div className="row">
                                  {/* <div className="col-2">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          Men's
                                        </span>
                                      </li> */}
                                  {_categories !== undefined ? (
                                    _categories.map((v) => (
                                      <div className="col-2">
                                        <ul className="menu list-unstyled">
                                          <li>
                                            <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                              {v.category_name}
                                            </span>
                                          </li>

                                          {v.sub_categories.map((v) => (
                                            <li>
                                              <Link
                                                to={"/abcde" + v.link}
                                                className="d-block link-black-100 py-1"
                                              >
                                                {v.subname}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))
                                  ) : (
                                    <p>Please Wait</p>
                                  )}

                                  <div className="col-2">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          Youth
                                        </span>
                                      </li>
                                      {Youth.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={v.youth_route}
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.youth}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                  <div className="col-2">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          Infants & Toddlers
                                        </span>
                                      </li>
                                      {InfantsAndToddlers.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={v.infantsandtoddlers_route}
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.infantsandtoddlers}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                  <div className="col-2">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          Professional Schools
                                        </span>
                                      </li>
                                      {ProfessionalSchools.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={v.professionalschools_route}
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.professionalschools}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                  <div className="col-2">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          Specialty Apparel
                                        </span>
                                      </li>
                                      {SpecialtyApparel.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={v.specialityapparel_route}
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.specialityapparel}
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
                        </div>
                      )}
                    </NavDropdown>

                    <NavDropdown
                      title={
                        <span
                          style={{ color: _campus.header_font_secondary_color }}
                        >
                          Gifts & Accessories
                        </span>
                      }
                      id="Gifts&Accessories"
                      className="nav-item nav-link link-black-100  font-size-2 font-weight-medium d-flex align-items-center"
                      show={showGifts}
                      onMouseEnter={() => showDropdown("GIFTS")}
                      onMouseLeave={() => hideDropdown("GIFTS")}
                    >
                      {showGifts == true && (
                        <div
                          className="p-0  font-size-2 rounded-0 border-gray-900"
                          style={{ width: "1100px" }}
                        >
                          <div className="row no-gutters">
                            <div className="col-12 px-1">
                              <div className="px-5 py-2 pb-5">
                                <div className="row">
                                  <div className="col-2">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          Diploma Frames
                                        </span>
                                      </li>
                                      {DiplomaFrames.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={v.diplomaframes_route}
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.diplomaframes}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                  <div className="col-2">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          Bags
                                        </span>
                                      </li>
                                      {Bags.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={v.bags_route}
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.bags}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                  <div className="col-2">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          Drinkware
                                        </span>
                                      </li>
                                      {Drinkware.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={v.drinkware_route}
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.drinkware}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                  <div className="col-2">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          Home & Recreation
                                        </span>
                                      </li>
                                      {HomeAndRecreation.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={v.homeandrecreation_route}
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.homeandrecreation}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                  <div className="col-2">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          Personal Accessories
                                        </span>
                                      </li>
                                      {PersonalAccessories.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={v.personalaccessories_route}
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.personalaccessories}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                  <div className="col-2">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          School Spirit Accessories
                                        </span>
                                      </li>
                                      {SchoolSpiritAccessories.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={
                                                v.schoolspiritaccessories_route
                                              }
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.schoolspiritaccessories}
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
                        </div>
                      )}
                    </NavDropdown>

                    <NavDropdown
                      title={
                        <span
                          style={{ color: _campus.header_font_secondary_color }}
                        >
                          Fundraising
                        </span>
                      }
                      // id="Supplies&Electronics"
                      className="nav-item nav-link link-black-100  font-size-2 font-weight-medium d-flex align-items-center"
                      show={showFundraising}
                      onMouseEnter={() => showDropdown("FUNDRAISING")}
                      onMouseLeave={() => hideDropdown("FUNDRAISING")}
                    >
                      {showFundraising == true && (
                        <div
                          className="p-0  font-size-2 rounded-0 border-gray-900"
                          style={{ width: "1100px" }}
                        >
                          <div className="row no-gutters">
                            <div className="col-12 px-1">
                              <div className="px-5 py-2 pb-5">
                                <div className="row ">
                                  <div className="col-6 d-flex justify-contnet-center align-items-center">
                                    <div className="tshirt-fundraiser align-middle">
                                      <h1 className="display-4 font-weight-bold text-justify font-size-10 py-1">
                                        T-shirt fundraisers
                                      </h1>
                                      <p className="text-justify font-size-2  py-1">
                                        Raise money and awareness for anything
                                        you care about.
                                      </p>
                                      <div class="row d-flex justify-content-center mt-5">
                                        <Link
                                          to={`/${_campus.name}/fundraising`}
                                          className="btn btn-dark  font-size-2 mx-2"
                                          style={{
                                            backgroundColor:
                                              _campus.header_primary_color,
                                          }}
                                        >
                                          How it Works
                                        </Link>

                                        <Link
                                          to={
                                            "/" +
                                            _campus.name +
                                            "/fundraising/startafundraiser"
                                          }
                                          className="btn btn-outline-dark font-size-2 mx-2"
                                          style={{
                                            border: `1px solid ${_campus.header_primary_color}`,
                                          }}
                                        >
                                          Start a Fundraiser
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6 d-flex justify-content-end">
                                    <div>
                                      <img
                                        className=" ml-5"
                                        src="./assets/img/Fundraising_Images/Fundraising_Navbar.jpg"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </NavDropdown>

                    <NavDropdown
                      title={
                        <span
                          style={{ color: _campus.header_font_secondary_color }}
                        >
                          Supplies & Electronicss
                        </span>
                      }
                      // id="Supplies&Electronics"
                      className="nav-item nav-link link-black-100  font-size-2 font-weight-medium d-flex align-items-center"
                      show={showSupplies}
                      onMouseEnter={() => showDropdown("SUPPLIES")}
                      onMouseLeave={() => hideDropdown("SUPPLIES")}
                    >
                      {showSupplies == true && (
                        <div
                          className="p-0  font-size-2 rounded-0 border-gray-900"
                          style={{ width: "1100px" }}
                        >
                          <div className="row no-gutters">
                            <div className="col-12 px-1">
                              <div className="px-5 py-2 pb-5">
                                <div className="row">
                                  <div className="col-3">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          Computer & Electronics
                                        </span>
                                      </li>
                                      {ComputerAndElectronics.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={
                                                v.computerandelcetronics_route
                                              }
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.computerandelcetronics}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                  <div className="col-3">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          Dorm Essentials
                                        </span>
                                      </li>
                                      {DormEssentials.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={v.dromessentials_route}
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.dromessentials}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                  <div className="col-3">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          School Supplies
                                        </span>
                                      </li>
                                      {SchoolSupplies.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={v.schoolsupplies_route}
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.schoolsupplies}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                  <div className="col-3">
                                    <ul className="menu list-unstyled">
                                      <li>
                                        <span className=" d-block link-black-100 py-3 font-size-3 font-weight-medium">
                                          Speciality Supplies
                                        </span>
                                      </li>
                                      {SpecialitySupplies.map((v, i) => {
                                        return (
                                          <li>
                                            <Link
                                              to={v.specialitysupplies_route}
                                              className="d-block link-black-100 py-1"
                                            >
                                              {v.specialitysupplies}
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
                        </div>
                      )}
                    </NavDropdown>

                    <li className="nav-item dropdown">
                      <Link
                        id="offersDropdownInvoker"
                        to="/"
                        className="nav-link link-black-100 mx-3 px-0 py-3 font-size-2 font-weight-medium d-flex align-items-center"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-unfold-event="hover"
                        data-unfold-target="#homeDropdownMenu"
                        data-unfold-type="css-animation"
                        data-unfold-duration="200"
                        data-unfold-delay="50"
                        data-unfold-hide-on-scroll="true"
                        data-unfold-animation-in="slideInUp"
                        data-unfold-animation-out="fadeOut"
                        style={{ color: _campus.header_font_secondary_color }}
                      >
                        Offers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <Aside /> */}
    </div>
  );
};

export default withRouter(Header);
