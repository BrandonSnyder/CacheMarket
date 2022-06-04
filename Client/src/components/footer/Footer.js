import React from "react";
import "./Footer.css";
import logo from "../Navbar/fingerlogo2.png"
function Footer() {
    return (
      <div>
          <nav className="footer" variant="dark">
            <section className="footerContainer">
                <a href="/contact-us" className="footerContactUs">Contact Us</a>
            <div className="footerLogoName">
            <img src={logo} alt="logo" />
              <h1 className="navbarTitle" href="">
                CacheMarket
              </h1>
            </div>

            </section>
          </nav>
      </div>
    );
  }
  
  export default Footer;