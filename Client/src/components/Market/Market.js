import React from "react";
import { useQuery, useMutation, useState} from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";
import { REMOVE_ITEM } from "../../utils/mutations";
import "./Market.css"; 
import {BsHeart, BsTrash} from "react-icons/bs";
import Auth from '../../utils/auth';
import LikedItems from "../likedItems/LikedItems";


function Market() {
  const { loading, data } = useQuery(QUERY_ITEMS);
  const [removeItem, { error }] = useMutation(REMOVE_ITEM);
  const items = data?.item || [];

  const handleDeleteItem = async (itemId) => {
    try {
      const { data } = await removeItem({
        variables:  {itemId} ,
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (

    <div>
      <section id="marketItems">
      <h1 className="heading">MARKET</h1>
      <div className="container">
        {items.map((item) => (
          <div className="card">
            <h1>{item.product}</h1>
            <img src={item.imgLink} alt="img" />
            <p>{item.description}</p>
            <p>${item.price}</p>
            <div className="buttonContainer">
            <button type=""><BsHeart/></button>
            <button type="" onClick={() => handleDeleteItem(item._id)}><BsTrash/></button>
            <button type="">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      
    </section>
    {Auth.loggedIn()?(
            <div>
              <LikedItems />
            </div> ): (<div></div>)
            }
    </div>
  );
}

export default Market;
