import React, { useState } from "react";

import "./CreatePostForm.css";
import { useMutation } from "@apollo/client";
import { ADD_ITEM } from "../../utils/mutations";

function CreatePostForm() {
  const [postState, setPostState] = useState({
    product: "",
    description: "",
    price: "",
    imgLink: "",
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
      <h1>Create Post</h1>
      <form className="signupForm" onSubmit={handlePostSubmit}>
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
          <label htmlFor="imageLink">Image link</label>
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
        <button className="submitbtn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default CreatePostForm;
