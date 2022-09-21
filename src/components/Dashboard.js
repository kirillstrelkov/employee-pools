import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {QUESTIONS, USERS} from "../utils/_TMP_DATA";
import QuestionTiles from "./QuestionTiles";

const Dashboard = ({isLoggedIn, userId}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    const data = USERS[userId];
    const newQuestions = data.questions.map((id) => QUESTIONS[id]);
    const done = Object.keys(data.answers).map((id) => QUESTIONS[id]);

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
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.usedId !== null,
  userId: state.usedId,
});

export default connect(mapStateToProps)(Dashboard);
