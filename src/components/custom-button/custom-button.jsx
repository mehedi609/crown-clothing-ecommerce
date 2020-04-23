import React from "react";
import "./custom-button.css";

const CustomButton = ({ children, is_google_sign_in, ...otherProps }) => {
  return (
    <button
      className={`${is_google_sign_in ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
