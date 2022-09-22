import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {QUESTIONS, USERS} from "../utils/_TMP_DATA";
import Loading from "./Loading";
import QuestionTiles from "./QuestionTiles";

const Dashboard = ({isLoggedIn, userId}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Loading />;
  }

  const data = USERS[userId];
  const done = Object.keys(data.answers).map((id) => QUESTIONS[id]);
  const newQuestions = Object.keys(QUESTIONS)
    .filter((id) => !done.includes(id))
    .map((id) => QUESTIONS[id]);

  return (
    <div>
      <div>
        <h3>New Questions</h3>
        <QuestionTiles questions={newQuestions}></QuestionTiles>
      </div>
      <div>
        <h3>Done</h3>
        <QuestionTiles questions={done}></QuestionTiles>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.usedId !== null,
  userId: state.usedId,
});

export default connect(mapStateToProps)(Dashboard);
