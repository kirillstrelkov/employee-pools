import React from "react";
import {connect} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../actions/authedUser";

const Navbar = ({isLoggedIn, authedUser, dispatch}) => {
  const navigate = useNavigate();

  if (authedUser === undefined) {
    return "";
  }

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/leaderboard">Leaderboard</Link> |{" "}
        <Link to="/new">New</Link> |{" "}
        <span data-testid="nav-user-id">{authedUser || "anonymous"}</span> |
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.authedUser !== null,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(Navbar);
