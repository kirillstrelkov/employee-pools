import {Box, Button, Container, TextField, Typography} from "@mui/material";
import React, {useRef, useState} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {handleLogin} from "../actions/authedUser";
import {showAlert} from "../actions/notification";

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
          dispatch(showAlert("Wrong username or password!"));
          setSubmitDisabled(true);
        }
      )
    );
  };

  const handleChange = (e) => {
    setSubmitDisabled(!e.target.value);
  };

  return (
    <Container>
      <Typography variant="h4">Employee Pools</Typography>
      <Typography variant="body1">Log In</Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {m: 1},
        }}
      >
        <TextField
          inputRef={inputUser}
          id="user"
          placeholder="User"
          type="text"
          onChange={handleChange}
          label="User"
        ></TextField>
        <TextField
          inputRef={inputPassword}
          id="password"
          placeholder="Password"
          type="password"
          label="Password"
        ></TextField>
      </Box>
      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={submitDisabled}
      >
        Submit
      </Button>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(Login);
