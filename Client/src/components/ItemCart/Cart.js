import React from "react";
import { Offcanvas } from "react-bootstrap";
import "./Cart.css";

function Cart() {
  return (
    <div className="Cart-container">
      <div className="Cart-parent">
        <div>
          <button
            class="btn btn-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Cart
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">Cart</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
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
