import React, { useState } from "react";

import "./Login.css";

function LoginForm() {
  return (
    <section className="loginContainer">
      <h1>Login</h1>
      <form className="loginForm">
        <div className="loginInput">
          <label htmlFor="email">
            Email:
          </label>
          <input
            placeholder="Email"
            name="email"
            type="text"
            id="email"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="password">
            Password:
          </label>
          <input
            placeholder="Password"
            name="password"
            type="text"
            id="password"
          />
        </div>
        <button className="submitbtn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
export default LoginForm;