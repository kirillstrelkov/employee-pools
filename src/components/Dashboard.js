import {Container, ToggleButton, ToggleButtonGroup} from "@mui/material";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {sortQuestions} from "../utils/helper";
import Loading from "./Loading";
import QuestionTiles from "./QuestionTiles";

const Dashboard = ({isLoggedIn, authedUser, users, questions}) => {
  const [alignment, setAlignment] = useState("new");
  const navigate = useNavigate();
  const {pathname} = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", {state: {previousPath: pathname}});
    }
  }, [isLoggedIn]);

  if (!isLoggedIn || !users || !questions) {
    return <Loading />;
  }

  const data = users[authedUser];
  const answeredQuestions = sortQuestions(
    Object.keys(data.answers).map((id) => questions[id])
  );
  const answeredQuestionsIds = new Set(answeredQuestions.map((q) => q.id));
  const newQuestions = sortQuestions(
    Object.keys(questions)
      .filter((id) => !answeredQuestionsIds.has(id))
      .map((id) => questions[id])
  );

  const handleAlignment = (e, newAlignment) => {
    setAlignment(newAlignment);
  };

  const filteredQuestions =
    alignment === "new" ? newQuestions : answeredQuestions;

  return (
    <Container>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        sx={{m: 1}}
        aria-label="text alignment"
      >
        <ToggleButton value="new" aria-label="left aligned">
          New questions
        </ToggleButton>
        <ToggleButton value="answered" aria-label="right aligned">
          Answered questions
        </ToggleButton>
      </ToggleButtonGroup>
      <Container>
        <QuestionTiles questions={filteredQuestions}></QuestionTiles>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.authedUser !== null,
  authedUser: state.authedUser,
  users: state.users,
  questions: state.questions,
});

export default connect(mapStateToProps)(Dashboard);
