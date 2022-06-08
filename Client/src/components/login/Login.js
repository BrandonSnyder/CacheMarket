import React, { useState } from "react";
import Auth from '../../utils/auth';
import "./Login.css";
import { LOGIN } from "../../utils/mutations"; // verify create login
import { useMutation } from "@apollo/client";

function LoginForm() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",    
  });
  const [login, { error }] = useMutation(LOGIN);
  
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
      const  variable  = login({
        variables: { 
          email: formState.email,
        password: formState.password,
         },
      });     
      const token = variable;
      Auth.login(token);
      window.location.assign = ("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    
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
  };



  return (
    <section className="loginContainer">
      <h1>Login</h1>
      <form className="loginForm" onSubmit={handleFormSubmit}>
        <div className="loginInput">
          <label htmlFor="email">
            Email:
          </label>
          <input
            placeholder="Email"
            name="email"
            type="text"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="loginInput">
          <label htmlFor="password">
            Password:
          </label>
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <button className="submitbtn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
export default LoginForm;