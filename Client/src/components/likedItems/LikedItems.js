import React from "react";
import "./LikedItems.css";
import { BsHeart, BsTrash, BsHeartFill, BsCartPlus, BsCartDash } from "react-icons/bs"
// import { useQuery } from "@apollo/client";
// import { QUERY_ITEMS } from "../utils/queries";

const LikedItems = () => {
  return (
    <section className="likedItemsContainer">
        <h1 className="likedItemTitle">Liked Items</h1>
        <div className="likedItemcardsContainer">
        <div className="likedItemCard">
            <h1>Title</h1>
            <img src="https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img" />
            
            <p>$20.00</p>
            <div className="buttonContainer">
            <button type=""><BsHeartFill/></button>
            <button type=""><BsTrash/></button>
            <button type="">Add to Cart</button>
            </div>
          </div>
        </div>   
    </section>
  );
};

export default LikedItems;
