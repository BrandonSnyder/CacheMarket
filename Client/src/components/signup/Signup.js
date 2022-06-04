import React, { useState } from "react";

import "./Signup.css";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

function Signup() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    state: "",
    phone: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = addUser({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    if (name === "firstName" && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
    } else if (name !== "firstName") {
      setFormState({ ...formState, [name]: value });
    }
    if (name === "lastName" && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
    } else if (name !== "lastName") {
      setFormState({ ...formState, [name]: value });
    }
    if (name === "email" && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
    } else if (name !== "email") {
      setFormState({ ...formState, [name]: value });
    }
    if (name === "password" && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
    } else if (name !== "password") {
      setFormState({ ...formState, [name]: value });
    }
    if (name === "city" && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
    } else if (name !== "city") {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div className="signupContainer">
      {/* <Link to="/login">← Go to Login</Link> */}
      <h1>Signup</h1>
      <form className="signupForm" onSubmit={handleFormSubmit}>
        <div className="input">
          <label htmlFor="firstName">
            <span>*</span>First Name:
          </label>
          <input
            className="inputBox"
            placeholder="First Name"
            name="firstName"
            type="text"
            id="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="lastName">
            <span>*</span>Last Name:
          </label>
          <input
            className="inputBox"
            placeholder="Last Name"
            name="lastName"
            type="text"
            id="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="email">
            <span>*</span>Email:
          </label>
          <input
            className="inputBox"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="password">
            <span>*</span>Password:
          </label>
          <input
            className="inputBox"
            placeholder="Password"
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="city">City:</label>
          <input
            className="inputBox"
            placeholder="City"
            name="city"
            type="text"
            id="city"
            value={formState.city}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="state">
            <span>*</span>State:
          </label>
          <input
            className="inputBox"
            placeholder="State"
            name="state"
            type="text"
            id="state"
            value={formState.state}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="phone">Phone Number:</label>
          <input
            className="inputBox"
            placeholder="1231231234"
            name="phone"
            type="text"
            id="phone"
            value={formState.phone}
            onChange={handleChange}
          />
        </div>
        <span>* required</span>
        <button className="submitbtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Signup;
