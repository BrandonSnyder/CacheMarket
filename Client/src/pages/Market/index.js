import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";
import "./style.css";

function Market() {
  const { loading, data } = useQuery(QUERY_ITEMS);
  const items = data?.item || [];

  return (
    <section id="marketItems">
      <h1 className="heading">MARKET</h1>
      <div className="container">
        {items.map((item) => (
          <div className="card">
            <img src={item.imgLink} alt="img" />
            <p>{item.description}</p>
            <p>{item.price}</p>
            <div className="buttonContainer">
            <button type="">Like</button>
            <button type="">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Market;
