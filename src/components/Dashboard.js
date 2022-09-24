import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import Loading from "./Loading";
import QuestionTiles from "./QuestionTiles";

const Dashboard = ({isLoggedIn, authedUser, users, questions}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  if (!isLoggedIn || !users || !questions) {
    return <Loading />;
  }

  const data = users[authedUser];
  const done = Object.keys(data.answers).map((id) => questions[id]);
  const doneIds = new Set(done.map((q) => q.id));
  const newQuestions = Object.keys(questions)
    .filter((id) => !doneIds.has(id))
    .map((id) => questions[id]);

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
  isLoggedIn: state.authedUser !== null,
  authedUser: state.authedUser,
  users: state.users,
  questions: state.questions,
});

export default connect(mapStateToProps)(Dashboard);
