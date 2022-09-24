import React from "react";
import QuestionTile from "./QuestionTile";

const QuestionTiles = ({questions}) => {
  if (!questions.length) {
    return (
      <div>
        <p>Nothing is here :(</p>
      </div>
    );
  }
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
