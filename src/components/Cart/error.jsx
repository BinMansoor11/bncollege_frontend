import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const error = (msg) => {
  return toast.error(msg, { position: toast.POSITION.BOTTOM_LEFT });
};
export default error;
