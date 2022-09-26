import {Box, Button, Container, TextField, Typography} from "@mui/material";
import React, {useEffect, useRef} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {showAlert} from "../actions/notification";
import {handleCreateQuestion} from "../actions/shared";
import Loading from "./Loading";

const NewQuestion = ({isLoggedIn, dispatch}) => {
  const navigate = useNavigate();
  const inputOption1 = useRef("");
  const inputOption2 = useRef("");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Loading />;
  }

  const handleClick = (e) => {
    e.preventDefault();
    const option1 = inputOption1.current.value;
    const option2 = inputOption2.current.value;

    if (option1 && option2) {
      dispatch(handleCreateQuestion(option1, option2, navigate));
    } else {
      dispatch(showAlert("Please fill all input fields."));
    }
  };

  return (
    <Container>
      <Typography variant="h4">Would You Rather</Typography>
      <Typography variant="body1">Create Your Own Pool</Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {m: 1},
        }}
      >
        <TextField
          inputRef={inputOption1}
          id="option1"
          placeholder="Option One"
          type="text"
          label="First Option"
        ></TextField>
        <TextField
          inputRef={inputOption2}
          id="option2"
          placeholder="Option Two"
          type="text"
          label="Second Option"
        ></TextField>
      </Box>
      <Button variant="contained" onClick={handleClick}>
        Submit
      </Button>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.authedUser !== null,
});

export default connect(mapStateToProps)(NewQuestion);
