import React,{ useState }  from "react";

import "./CreatePostForm.css";
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../../utils/mutations';


const CreatePostForm = () => {
  const [formState, setFormState] = useState({
    name:"",
    description:"",
    imgLink:"",
    price:""
  });

  const [addItem, { error }] = useMutation(ADD_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = addItem({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
    } else if (name !== 'name') {
      setFormState({ ...formState, [name]: value });
    }
    if (name === 'description' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
    } else if (name !== 'description') {
      setFormState({ ...formState, [name]: value });
    }
    if (name === 'imgLink' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
    } else if (name !== 'imgLink') {
      setFormState({ ...formState, [name]: value });
    }
    if (name === 'price' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
    } else if (name !== 'price') {
      setFormState({ ...formState, [name]: value });
    }
  };






  return (
    <section className="createPostContainer">
      <h1>Create Post</h1>
      <form className="signupForm" onSubmit={handleFormSubmit}>
        
        <div className="input">
          <label htmlFor="Name">
            <span>*</span>Name:
          </label>
          <input
            placeholder="Name of Product"
            name="name"
            type="text"
            id="name"
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="imageLink">Image link</label>
          <input
            placeholder="Image Link"
            name="imgLink"
            type="url"
            id="imgLink"
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="price">
            <span>*</span>Price:
          </label>
          <input
            placeholder="Price"
            name="price"
            type="number"
            id="price"
            onChange={handleChange}
          />
        </div>
        <span>* required</span>
        <button className='submitbtn' type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreatePostForm;
