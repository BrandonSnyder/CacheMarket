import React from "react";
import { Offcanvas } from "react-bootstrap";
import "./Cart.css";

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
              <div className="Cart-items-container">
                <div className="Cart-item-card">items go here</div>
                <div className="Cart-item-card">items go here</div>
                <div className="Cart-item-card">items go here</div>
              </div>
              <div className="Button-holder">
                <div className="Checkout-button"></div>
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
