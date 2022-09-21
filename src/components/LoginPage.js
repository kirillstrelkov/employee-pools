import React, {useRef} from "react";
import {connect} from "react-redux";
import {login} from "../actions/users";

const Login = ({userId, dispatch}) => {
  const inputUser = useRef(null);
  const inputPassword = useRef(null);

  if (userId === null) {
    // TODO: redirect to /
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = inputUser.current.value;
    if (userId) {
      dispatch(login(userId));
    } else {
      console.log(`wrong user id ${userId}`);
    }
    // TODO: deal with password
  };

  return (
    <div>
      <h1>Employee Pools</h1>
      <h2>Log In</h2>
      <form>
        <div>
          <label htmlFor="user">User</label>
          <input
            ref={inputUser}
            id="user"
            placeholder="User"
            type="text"
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            ref={inputPassword}
            id="password"
            placeholder="Password"
            type="password"
          ></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.usedId,
});

export default connect(mapStateToProps)(Login);
