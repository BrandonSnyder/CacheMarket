import React from "react";
import Auth from "../../utils/auth";
import "./Navbar.css";
import logo from "./fingerlogo2.png";

function CacheNav() {
  if (Auth.loggedIn()) {
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
                <a className="navbarLink" href="/">
                  Home
                </a>
                
                <a className="navbarLink" href="/contact-us">
                  Contact Us
                </a>
                <a className="navbarLink" href="/create-post">
                  New Post
                </a>
                <a className="navbarLink" onClick={() => Auth.logout()}  href="/">
                  logout
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
                <a className="navbarLink" href="/">
                  Home
                </a>
                <a className="navbarLink" href="/login">
                  Login
                </a>
                <a className="navbarLink" href="/signup">
                  Sign Up
                </a>
                <a className="navbarLink" href="/contact-us">
                  Contact Us
                </a>
                <a className="navbarLink" href="/create-post">
                  New Post
                </a>
                
              </nav>
            </section>
          </nav>
        </>
      </div>
    );
  }
}

export default CacheNav;
