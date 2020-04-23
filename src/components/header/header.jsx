import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./header.css";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/fire-utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
        {currentUser ? (
          <div onClick={() => auth.signOut()} className="option">
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default withRouter(Header);
