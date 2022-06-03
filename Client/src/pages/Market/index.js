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
      <h1 className="headings">MARKET</h1>
      <div className="container">
        {items.map((item) => (
          <div className="card">
            <img src={item.imgLink} alt="img" />
            <h3>{item.description}</h3>
            <h5>{item.price}</h5>
            <button type="">Like</button>
            <button type="">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Market;
