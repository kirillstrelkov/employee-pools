import React from "react";
import {connect} from "react-redux";
import {logout} from "../actions/users";

const Navbar = ({isLoggedIn, userId, dispatch}) => {
  if (userId === undefined) {
    return "";
  }

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO:redirect to login page
  };
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      <nav>
        <a href="/">Home</a> | <a href="/leaderboard">Leaderboard</a> |{" "}
        <a href="/new">New</a> |{" "}
        <span data-testid="nav-user-id">{userId || "anonymous"}</span> |
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
  isLoggedIn: state.usedId !== null,
  userId: state.usedId,
});

export default connect(mapStateToProps)(Navbar);
