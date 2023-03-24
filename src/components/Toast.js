import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  useEffect(() => {
    toast("Sorry, but that guess is not in the word list");
  }, []);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        closeButton={false}
        theme="dark"
        limit={1}
      ></ToastContainer>
    </>
  );
};

export default Toast;
