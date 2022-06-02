import React from "react";
import "./LikedItems.css";
// import { useQuery } from "@apollo/client";
// import { QUERY_ITEMS } from "../utils/queries";

const LikedItems = () => {
  return (
    <section className="likedItemsContainer">
        <h1>Liked Items</h1>
        <div className="cardsContainer">
            <div className="likedCard">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FCarhartt-Mens-Relaxed-Rugged-Khaki%2Fdp%2FB0085TF7DS&psig=AOvVaw2Vtbh33I3GOx1Kch3GyWHT&ust=1654107183321000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDv0cqrivgCFQAAAAAdAAAAABAF" alt="pants" width="100px" height=""></img>
                <h3>name</h3>
            </div>
            <div className="likedCard">
                <h1>Image</h1>
                <h3>name</h3>
            </div>
            <div className="likedCard">
                <h1>Image</h1>
                <h3>name</h3>
            </div> 
            <div className="likedCard">
                <h1>Image</h1>
                <h3>name</h3>
            </div>   
        </div>
    </section>
  );
};

export default LikedItems;
