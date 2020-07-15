import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  onClick,
  ...otherProps
}) => (
  <button onClick={onClick}
    className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
      inverted ? "inverted" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
