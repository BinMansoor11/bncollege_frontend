import React, { useEffect, useState } from "react";
import Aside from "../Common/Aside";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import BestSeller from "../Sections/BestSeller";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaRegFlag } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { BsSlash } from "react-icons/bs";
import { Link, useParams, withRouter } from "react-router-dom";
import axios from "axios";
import CartFeedback from "../Cart/CartFeedback";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteCartItems,
  getCartItems,
  getProduct,
  removeItem,
} from "../../redux/actions/Actions";

function SingleProduct({ history }) {
  const dispatch = useDispatch();
  const _state = useSelector((state) => state.root);
  const { _cart, _product, _campus } = _state;
  console.log("_cart :>> ", _cart);
  const jsonObj = {
    productTitle: "CHAMPION POWERBLEND HOOD",
    ProductImg: "./../assets/img/300x452/img2.jpg",
    AddToCart: "Add to cart",
  };

  const [ProductState, setProductState] = useState({
    Product: jsonObj,
  });

  const [product, setProduct] = useState();

  const [Value, setValue] = useState(1);

  let totals = _cart.reduce(
    (accumulatedValue, cartItem) =>
      accumulatedValue + cartItem.quantity * cartItem.price,
    0
  );

  // const IncrementValue = () => {
  //   setValue(Value + 1);
  // };

  // const DecrementValue = () => {
  //   if (Value == 1) {
  //     setValue(Value);
  //   } else {
  //     setValue(Value - 1);
  //   }
  // };

  const { id } = useParams();
  const [productDetail, setProductDetails] = useState(null);

  const { Product } = ProductState;

  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    let response = await axios.get(
      "http://192.140.145.144:5007/api/product/" + id
    );
    console.log("response.data :>> ", response.data);
    const { prods } = response.data;
    setProduct(prods[0]);
  };
  console.log("useparams :>> ", product);

  return (
    <div>
      <Header />

      <div className="page-header ">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center py-4">
            <nav className="woocommerce-breadcrumb font-size-2">
              <Link
                href="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/html-demo/home/index.html"
                className="h-primary"
              >
                Home
              </Link>
              <span className="breadcrumb-separator font-size-3">
                <BsSlash />
              </span>
              <Link href="v2.html" className="h-primary">
                Shop
              </Link>
              <span className="breadcrumb-separator font-size-3">
                <BsSlash />
              </span>
              Shop Single
            </nav>
          </div>
        </div>
      </div>
      <div id="primary" className="content-area">
        <main id="main" className="site-main ">
          <div className="product">
            <div className="container mb-6">
              <div className="row">
                <div className="col-md-4 col-lg-3 woocommerce-product-gallery woocommerce-product-gallery--with-images images">
                  <figure className="woocommerce-product-gallery__wrapper pt-8 mb-0">
                    <div
                      className="js-slick-carousel u-slick"
                      data-pagi-classes="text-center u-slick__pagination my-4"
                    >
                      {" "}
                      <div className="">
                        <img
                          className="img-fluid"
                          src={
                            product !== undefined ? (
                              product.images[0]
                            ) : (
                              <p>please wait</p>
                            )
                          }
                        />
                      </div>
                    </div>
                  </figure>
                </div>
                <div className="col-md-8 col-lg-5 pl-0 summary entry-summary">
                  <div className="space-top-2 pl-4 pl-wd-6 px-wd-7 pb-5">
                    <h1 className="product_title entry-title font-size-7 mb-3">
                      {product !== undefined ? (
                        product.name
                      ) : (
                        <p>please wait</p>
                      )}
                      {/* Product Title */}
                    </h1>
                    <div>
                      <h4 font-size-7 mb-3>
                        <span className="">
                          $
                          {product !== undefined ? (
                            product.price
                          ) : (
                            <p>please wait</p>
                          )}
                        </span>
                      </h4>
                    </div>

                    <div className="woocommerce-product-details__short-description font-size-2 mb-5">
                      <p className="mb-0 pt-5">
                        Screen printed hooded sweatshirt with draw cord and
                        front pouch pocket. 50% cotton, 50% polyester. Imported.
                      </p>
                    </div>
                    <div>
                      <p className="text-uppercase font-size-2">Select Size</p>
                      <div className="container">
                        <div class="row">
                          <button className="btn btn-dark btn-sm text-white text-uppdercase font-size-2 ">
                            Small
                          </button>
                          <button className="btn btn-dark btn-sm text-white text-uppdercase font-size-2 ml-2">
                            Medium
                          </button>
                          <button className="btn btn-dark btn-sm text-white text-uppdercase font-size-2 ml-2">
                            Large
                          </button>
                          <button className="btn btn-dark btn-sm text-white text-uppdercase font-size-2 ml-2">
                            XLarge
                          </button>
                          <button className="btn btn-dark btn-sm text-white text-uppdercase font-size-2 ml-2">
                            2XLarge
                          </button>
                          <button className="btn btn-dark btn-sm text-white text-uppdercase font-size-2 ml-2">
                            3XLarge
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="border mt-md-8">
                    <div className="bg-white-100 py-4 px-5">
                      <p className="price font-size-22 font-weight-medium mb-0">
                        <span className="woocommerce-Price-amount amount">
                          ${" "}
                          {product !== undefined ? (
                            product.price
                          ) : (
                            <p>please wait</p>
                          )}
                        </span>
                      </p>
                    </div>
                    <div className="pt-5 px-5">
                      <form
                        className="cart mb-4"
                        onClick={(e) => e.preventDefault()}
                      >
                        {/* <label className="form-label font-size-2 font-weight-medium">
                          Quantity
                        </label>
                        <div className="quantity mb-4 d-flex align-items-center">
                          <div className="border px-3 w-100 bg-light">
                            <div className="js-quantity">
                              <div className="d-flex align-items-center ">
                                <label className="screen-reader-text sr-only">
                                  Quantity
                                </label>
                                <span
                                  className="woocommerce-Price-currencySymbol"
                                  style={{
                                    padding: 20,
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    dispatch(removeItem(product));
                                    CartFeedback("ITEM REMOVED");
                                  }}
                                >
                                  -
                                </span>
                                <span>
                                  {product !== undefined ? product.qty : null}
                                </span>
                                <span
                                  className="woocommerce-Price-currencySymbol"
                                  style={{
                                    padding: 20,
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    dispatch(addItem());
                                    CartFeedback("ITEM ADDED TO CART");
                                  }}
                                >
                                  +
                                </span>
                           
                              </div>
                            
                            </div>
                          </div>
                        </div>
                        */}
                        <button
                          onClick={() => {
                            dispatch(addItem(product));
                            CartFeedback("ITEM ADDED TO THE CART");
                          }}
                          className="btn btn-block btn-dark border-0 rounded-0 p-3 single_add_to_cart_button button alt"
                        >
                          {Product.AddToCart}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="row mt-5 py-3 mb-5 mr-auto ">
        <div class="offset-md-2"></div>

        {/**
         * PRODUCTS SECTION
         */}
        <div className="col-8 p-4 my-3 text-center h-100 ">
          <div className="container d-flex justify-content-center py-5">
            <h1 className="display-4 my-5 font-size-5">
              MORE FROM THE FLEECE, OUTERWEAR, & COLD WEATHERCOLLECTION
            </h1>
          </div>

          <div class="row  my-5">
            {_product !== undefined ? (
              _product.prods.map((v, i) => {
                if (i < 4) {
                  return (
                    <div className="col-3 px-5 container">
                      <Link
                        to={`/${_campus.name}/product/${v._id}`}
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                        }}
                      >
                        <img className="image img-fluid" src={v.images[0]} />
                        <div className="middle">
                          <div className="text">View Product</div>
                        </div>
                      </Link>

                      <div className="container mt-4">
                        <p className="font-size-1">{v.name}</p>
                        <p className="font-weight-bold font-size-1">
                          {" "}
                          ${v.price}
                        </p>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })
            ) : (
              <p>Please Wait</p>
            )}
            {/* {Products.map((v, i) => {
              return (
                <div className="col-4 px-5 container">
                  <button
                    onClick={() => {
                      setCartFeedback(true);

                      setTimeout(setCartFeedback(false), 2000);
                      dispatch(getCartItems(v));
                    }}
                    style={{ border: "none", backgroundColor: "transparent" }}
                  >
                    <img className="image img-fluid" src={v.product_img} />
                    <div className="middle">
                      <div className="text">Add to cart</div>
                    </div>
                  </button>

                  <div className="container mt-4">
                    <p className="font-size-1">{v.product_name}</p>
                    <p className="font-weight-bold font-size-1">
                      {v.product_price}
                    </p>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
        <div className="offset-md-2"></div>
      </div>

      {/**
       * EVERYTHING YOU NEED TO SUCCEED
       */}
      <div className="container d-flex justify-content-center py-5 border-top border-dark">
        <h1 className="display-4 my-5 font-size-5">
          EVERYTHING YOU NEED TO SUCCEED
        </h1>
      </div>

      <Footer />
    </div>
  );
}
export default withRouter(SingleProduct);
