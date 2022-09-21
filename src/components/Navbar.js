import React from "react";
import {connect} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../actions/users";

const Navbar = ({isLoggedIn, userId, dispatch}) => {
  const navigate = useNavigate();

  if (userId === undefined) {
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
