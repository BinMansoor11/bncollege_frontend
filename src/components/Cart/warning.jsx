import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const warning = (msg) => {
  return toast.warn(msg, { position: toast.POSITION.BOTTOM_LEFT });
};
export default warning;
