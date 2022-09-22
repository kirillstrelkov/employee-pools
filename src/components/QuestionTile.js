import React from "react";
import {useNavigate} from "react-router-dom";
import {formatDate} from "../utils/helper";

const QuestionTile = ({author, timestamp, id}) => {
  const navigate = useNavigate();

  const handleShow = (e) => {
    e.preventDefault();
    navigate(`/question/${id}`);
  };

  return (
    <div>
      <div>{author}</div>
      <div>{formatDate(timestamp)}</div>
      <button onClick={handleShow}>Show</button>
    </div>
  );
};

export default QuestionTile;
