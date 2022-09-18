import React from "react";
import QuestionTile from "./QuestionTile";

const QuestionTiles = ({questions}) => {
  return (
    <ul>
      {questions.map(({id, author, timestamp}) => (
        <li key={id}>
          <QuestionTile id={id} author={author} timestamp={timestamp} />
        </li>
      ))}
    </ul>
  );
};

export default QuestionTiles;
