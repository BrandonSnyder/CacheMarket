import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";
import "./style.css";


function Market() {

  const { loading, data } = useQuery(QUERY_ITEMS);
  const items = data?.item || [];
console.log("these are the items ", items)
  return (
    <section id="marketItems">
      <h1 class="headings">MARKET</h1>
      <div className="container">
        {items.map((item)=> (
          <div className="card">
          <img src="{item.imgLink}" alt="img"/>
          <h1>{item.name}</h1>
          <h3>{item.description}</h3>
          <h5>{item.price}</h5>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Market;
