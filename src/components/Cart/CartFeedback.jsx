import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const CartFeedback = (msg) => {
  return toast.success(msg, { position: toast.POSITION.BOTTOM_LEFT });
};
export default CartFeedback;
