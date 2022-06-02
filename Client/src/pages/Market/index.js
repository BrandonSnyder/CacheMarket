import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";
import "./style.css";
function Market() {
  return (

    
    <section id ="marketItems">

      <h1 class="headings">MARKET</h1>

    <div className = "container">
       
       
        <div className="card"><h3>Item 1</h3><p>CacheMarket<br></br>Price:$$$</p></div>
        
        <div className="card"><h3>Item 2</h3><p>CacheMarket<br></br>Price:$$$</p></div>
        
        <div className="card"><h3>Item 3</h3><p>CacheMarket<br></br>Price:$$$</p></div>
        
        <div className="card"><h3>Item 4</h3><p>CacheMarket<br></br>Price:$$$</p></div>
        
        <div className="card"><h3>Item 5</h3><p>CacheMarket<br></br>Price:$$$</p></div>
        
        <div className="card"><h3>Item 6</h3><p>CacheMarket<br></br>Price:$$$</p></div>
        
        <div className="card"><h3>Item 7</h3><p>CacheMarket<br></br>Price:$$$</p></div>
        
        <div className="card"><h3>Item 8</h3><p>CacheMarket<br></br>Price:$$$</p></div>
        
        <div className="card"><h3>Item 9</h3><p>CacheMarket<br></br>Price:$$$</p></div>
        
        <div className="card"><h3>Item 10</h3><p>CacheMarket<br></br>Price:$$$</p></div>
        
        <div className="card"><h3>Item 11</h3><p>CacheMarket<br></br>Price:$$$</p></div>
        
        <div className="card"><h3>Item 12</h3><p>CacheMarket<br></br>Price:$$$</p></div>

        <div className="card"><h3>Item 13</h3><p>CacheMarket<br></br>Price:$$$</p></div>

        <div className="card"><h3>Item 14</h3><p>CacheMarket<br></br>Price:$$$</p></div>

        <div className="card"><h3>Item 15</h3><p>CacheMarket<br></br>Price:$$$</p></div>

        <div className="card"><h3>Item 16</h3><p>CacheMarket<br></br>Price:$$$</p></div>

    </div>
    </section>

  );
}

export default Market;
