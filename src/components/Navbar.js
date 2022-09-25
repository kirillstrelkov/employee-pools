import {
  Box,
  Button,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import {connect} from "react-redux";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {logout} from "../actions/authedUser";

const Navbar = ({isLoggedIn, authedUser, dispatch}) => {
  const navigate = useNavigate();
  const location = useLocation();

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
    <Container>
      <Tabs value={location.pathname} sx={{flexGrow: 1}}>
        <Tab component={Link} value="/" to="/" label="Home" />
        <Tab
          component={Link}
          value="/leaderboard"
          to="/leaderboard"
          label="Leaderboard"
        />
        <Tab component={Link} value="/new" to="/new" label="New" />
        <Toolbar sx={{flexGrow: 1}}></Toolbar>
        <Toolbar>
          <Typography variant="body1" data-testid="nav-user-id">
            {authedUser || "anonymous"}
          </Typography>
          <Box sx={{m: 1}} />
          {isLoggedIn ? (
            <Button
              color="warning"
              size="small"
              variant="contained"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
          )}
        </Toolbar>
      </Tabs>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.authedUser !== null,
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(Navbar);
