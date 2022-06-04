import React from "react";
import { Offcanvas } from "react-bootstrap";
import "./Cart.css";
import {BsHeart} from "react-icons/bs"

function Cart() {
  return (
    <div className="Cart-container">
      <div className="Cart-parent">
        <div>
          <button
            className="btn btn-dark"
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
  );
}

export default Cart;
