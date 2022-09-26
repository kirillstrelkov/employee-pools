import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {handleAnswerQuestion} from "../actions/shared";

import {formatFloat} from "../utils/helper";
import Loading from "./Loading";

const Question = ({isLoggedIn, authedUser, users, questions, dispatch}) => {
  const id = useParams().question_id;
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [questioneer, setQuestionner] = useState(null);
  const [chosenOption, setChosenOption] = useState(0);
  const optionMappings = {optionOne: 1, optionTwo: 2};

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (!questions[id]) {
      navigate("/error");
    } else {
      setQuestion(questions[id]);
      if (question) {
        setQuestionner(users[question.author]);
        const currentUser = users[authedUser];
        if (currentUser.answers[id]) {
          setChosenOption(optionMappings[currentUser.answers[id]]);
        }
      }
    }
  }, [isLoggedIn, question, questioneer, chosenOption, users]);

  if (!isLoggedIn || !question || !questioneer) {
    return <Loading />;
  }

  const handleClick = (e, option) => {
    e.preventDefault();
    setQuestion(null);
    setChosenOption(optionMappings[option]);

    dispatch(
      handleAnswerQuestion(id, option, () => {
        setQuestion(questions[id]);
      })
    );
  };

  const option1Voted = question.optionOne.votes.length;
  const option2Voted = question.optionTwo.votes.length;
  const option1VotedPercent = formatFloat(
    (option1Voted / (option1Voted + option2Voted)) * 100
  );
  const option2VotedPercent = formatFloat(
    (option2Voted / (option1Voted + option2Voted)) * 100
  );

  return (
    <Container className="question">
      <Typography variant="h4">Poll by {questioneer.id}</Typography>
      <img
        className="avatar"
        src={questioneer.avatarURL}
        alt={`${questioneer.id}'s avatar`}
      />
      <Typography variant="h5">Would You Rather</Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Stack direction="row" spacing={2}>
          <Card className={chosenOption === 1 ? "option-selected" : ""}>
            <CardContent>
              <Typography variant="body1">{question.optionOne.text}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                onClick={(e) => {
                  handleClick(e, "optionOne");
                }}
                disabled={!!chosenOption}
              >
                Click
              </Button>
              {chosenOption ? (
                <span>
                  {option1Voted} ({option1VotedPercent}%)
                </span>
              ) : (
                ""
              )}
            </CardActions>
          </Card>
          <Card className={chosenOption === 2 ? "option-selected" : ""}>
            <CardContent>
              <Typography variant="body1">{question.optionTwo.text}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                onClick={(e) => {
                  handleClick(e, "optionTwo");
                }}
                disabled={!!chosenOption}
              >
                Click
              </Button>
              {chosenOption ? (
                <span>
                  {option2Voted} ({option2VotedPercent}%)
                </span>
              ) : (
                ""
              )}{" "}
            </CardActions>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.authedUser !== null,
  authedUser: state.authedUser,
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(Question);
