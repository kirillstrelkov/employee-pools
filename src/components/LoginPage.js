import React, {useRef, useState} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {handleLogin} from "../actions/authedUser";

const Login = ({authedUser, dispatch}) => {
  const navigate = useNavigate();
  const inputUser = useRef(null);
  const inputPassword = useRef(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitDisabled(false);

    const authedUser = inputUser.current.value;
    const password = inputPassword.current.value;
    dispatch(
      handleLogin(
        authedUser,
        password,
        () => {
          navigate("/");
          setSubmitDisabled(true);
        },
        () => {
          alert("Wrong username or password!");
          setSubmitDisabled(true);
        }
      )
    );
  };

  const handleChange = (e) => {
    setSubmitDisabled(!e.target.value);
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
            onChange={handleChange}
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
        <button onClick={handleSubmit} disabled={submitDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(Login);
