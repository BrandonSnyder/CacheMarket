import React from "react";
import "./CreatePostForm.css";
// import { useQuery } from "@apollo/client";
// import { QUERY_ITEMS } from "../utils/queries";

const CreatePostForm = () => {
  return (
    <form className="createPostContainer">
      <h1>Create Post</h1>
      <div className="inputContainer">
        <label htmlFor="Name">
          <span>*</span>Name:
        </label>
        <input
          placeholder="Name of Product"
          name="name"
          type="text"
          id="name"
          // onChange={handleChange}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="description">
          <span>*</span>Description:
        </label>
        <input
          placeholder="description"
          name="description"
          type="text"
          id="description"
          // onChange={handleChange}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="imageLink">Image link</label>
        <input
          placeholder="Image Link"
          name="imgLink"
          type="url"
          id="imgLink"
          // onChange={handleChange}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="price">
          <span>*</span>Price:
        </label>
        <input
          placeholder="Price"
          name="price"
          type="number"
          id="price"
          // onChange={handleChange}
        />
      </div>
      <span>* required</span>
    </form>
  );
};

export default CreatePostForm;
