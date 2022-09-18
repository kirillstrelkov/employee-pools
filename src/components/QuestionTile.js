import React from "react";
import {formatDate} from "../utils/helper";

const QuestionTile = ({author, timestamp}) => {
  return (
    <div>
      <div>{author}</div>
      <div>{formatDate(timestamp)}</div>
      <button>Show</button>
    </div>
  );
};

export default QuestionTile;
