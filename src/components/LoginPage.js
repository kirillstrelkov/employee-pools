import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Employee Pools</h1>
      <h2>Log In</h2>
      <form>
        <div>
          <label for="user">User</label>
          <input id="user" placeholder="User" type="text"></input>
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" placeholder="Password" type="password"></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
