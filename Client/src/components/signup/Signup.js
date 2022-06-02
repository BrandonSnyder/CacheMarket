import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import "./Signup.css";
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';

function Signup() {
  
  return (
    <div className="signupContainer">
      {/* <Link to="/login">← Go to Login</Link> */}

      <h2>Signup</h2>
      <form className='signupForm' onSubmit>
        <div className="input">
          <label htmlFor="firstName"><span>*</span>First Name:</label>
          <input
          className="inputBox"
            placeholder="First Name"
            name="firstName"
            type="firstName"
            id="firstName"
            // onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="lastName"><span>*</span>Last Name:</label>
          <input
          className="inputBox"
            placeholder="Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
            // onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="email"><span>*</span>Email:</label>
          <input
          className="inputBox"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            // onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="pwd"><span>*</span>Password:</label>
          <input
          className="inputBox"
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            // onChange={handleChange}
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
            // onChange={handleChange}
          />
        </div>
        <div className="input">
          <label htmlFor="state"><span>*</span>State:</label>
          <input
          className="inputBox"
            placeholder="State"
            name="state"
            type="text"
            id="state"
            // onChange={handleChange}
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
            // onChange={handleChange}
          />
        </div>
        <span>* required</span>
        <button className='submitbtn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
