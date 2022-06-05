import React, { useState } from "react";

import "./CreatePostForm.css";
import { useMutation } from "@apollo/client";
import { ADD_ITEM } from "../../utils/mutations";
import { BsHeart, BsTrash, BsHeartFill, BsCartPlus, BsCartDash } from "react-icons/bs"

function CreatePostForm() {
  const [postState, setPostState] = useState({
    product: "Title",
    description: "Description",
    price: "Price",
    imgLink: "https://images.unsplash.com/photo-1638913658179-18c9a9c943f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  });

  const [addItem, { error }] = useMutation(ADD_ITEM);

  const handlePostSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = addItem({
        variables: { ...postState },
      });
      window.location.reload();
    } catch (err) {
      console.error("not submitting");
    }
  };

  const handlePostChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    if (name === "product" && value.length <= 280) {
      setPostState({ ...postState, [name]: value });
    } else if (name !== "product") {
      setPostState({ ...postState, [name]: value });
    }
    if (name === "description" && value.length <= 280) {
      setPostState({ ...postState, [name]: value });
    } else if (name !== "description") {
      setPostState({ ...postState, [name]: value });
    }
    if (name === "imgLink" && value.length <= 280) {
      setPostState({ ...postState, [name]: value });
    } else if (name !== "imgLink") {
      setPostState({ ...postState, [name]: value });
    }
    if (name === "price" && value.length <= 280) {
      setPostState({ ...postState, [name]: value });
    } else if (name !== "price") {
      setPostState({ ...postState, [name]: value });
    }
    console.log(postState)
  };

  return (
    <section className="createPostContainer">
      <div className="leftContainer">
      <h1>Create Post</h1>
      <form className="createPostForm" onSubmit={handlePostSubmit}>
        <div className="input">
          <label htmlFor="Product">
            <span>*</span>Product Name:
          </label>
          <input
            placeholder="Product Name"
            name="product"
            type="text"
            id="product"
            value={postState.product}
            onChange={handlePostChange}
          />
        </div>
        <div className="input">
          <label htmlFor="description">
            <span>*</span>Description:
          </label>
          <input
            placeholder="description"
            name="description"
            type="text"
            id="description"
            value={postState.description}
            onChange={handlePostChange}
          />
        </div>
        <div className="input">
          <label htmlFor="imageLink"><span>*</span>Image link:</label>
          <input
            placeholder="Image Link"
            name="imgLink"
            type="url"
            id="imgLink"
            value={postState.imgLink}
            onChange={handlePostChange}
          />
        </div>
        <div className="input">
          <label htmlFor="price">
            <span>*</span>Price:
          </label>
          <input
            placeholder="Price"
            name="price"
            type="text"
            id="price"
            value={postState.price}
            onChange={handlePostChange}
          />
        </div>
        <span>* required</span>
        <button className="createPostSubmitbtn" type="submit">
          Submit
        </button>
      </form>
      </div>
      <div className="rightContainer">
      <h1>Your Post</h1>
      <div className="createCardContainer">
          <div className="createCard">
            <h1>{postState.product}</h1>
            <img src={postState.imgLink} alt={postState.imgLink}/>
            <h5>{postState.description}</h5>
            <h5>${postState.price}</h5>
            <div className="btnContainer">
            <button type=""><BsHeart/></button>
            <button type=""><BsTrash/></button>
            <button type="">Add to Cart</button>
            </div>
          </div>
      </div>
      </div>
    </section>
  );
}

export default CreatePostForm;
