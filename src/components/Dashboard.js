import React from "react";
import {CURRENT_USER, QUESTIONS, USERS} from "../utils/_TMP_DATA";
import QuestionTiles from "./QuestionTiles";
const Dashboard = () => {
  const data = USERS[CURRENT_USER];

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
};

export default Dashboard;
