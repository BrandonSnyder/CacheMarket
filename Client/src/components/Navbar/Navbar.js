import React from "react";
import Auth from "../../utils/auth";
import "./Navbar.css";
import logo from "./fingerlogo2.png";
import { Link } from "react-router-dom";

function CacheNav() {
  if (Auth.loggedIn()) {
    return (
      <div>
        <>
          <nav className="navbar" variant="dark">
            <section className="navbarContainer">
              <div className="logoName">
                <img className="navbarLogo" src={logo} alt="logo" />
                <h1 className="navbarTitle" href="">
                  CacheMarket
                </h1>
              </div>
              <nav className=" navBarLinkContainer">
                <Link className="navbarLink" to="/">
                  Home
                </Link>
                
                <Link className="navbarLink" to="/contact-us">
                  Contact Us
                </Link>
                <Link className="navbarLink" to="/create-post">
                  New Post
                </Link>
                <div className="Cart-container">
      <div className="Cart-parent">
        <div>
          <button
            className="navCart"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Cart
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Cart</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="Cart-items-container cartCardContainer">
                <div className="cartCard">
                  <h1>Product Name</h1>
                  <img src="https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                  <h5>$4.00</h5>
                  <div className="btnContainer">
                    <button type="">Remove</button>
                  </div>
                </div>
              </div>
              <div className="Button-holder">
                <button> Checkout </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                <a className="navbarLink" onClick={() => Auth.logout()}  href="/">
                  Logout
                </a>
              </nav>
            </section>
          </nav>
        </>
      </div>
    );
  } else {
    return (
      <div>
        <>
          <nav className="navbar" variant="dark">
            <section className="navbarContainer">
              <div className="logoName">
                <img src={logo} alt="logo" />
                <h1 className="navbarTitle" href="">
                  CacheMarket
                </h1>
              </div>
              <nav className=" navBarLinkContainer">
                <Link className="navbarLink" to="/">
                  Home
                </Link>
                <Link className="navbarLink" to="/login">
                  Login
                </Link>
                <Link className="navbarLink" to="/signup">
                  Sign Up
                </Link>
                <Link className="navbarLink" to="/contact-us">
                  Contact Us
                </Link>
                <Link className="navbarLink" to="/create-post">
                  New Post
                </Link>
                
              </nav>
            </section>
          </nav>
        </>
      </div>
    );
  }
}

export default CacheNav;
