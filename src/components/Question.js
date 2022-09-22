import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {formatFloat} from "../utils/helper";
import {QUESTIONS, USERS} from "../utils/_TMP_DATA";
import Loading from "./Loading";

const Question = ({isLoggedIn, userId}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [questioneer, setQuestionner] = useState(null);
  const [chosenOption, setChosenOption] = useState(0);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setQuestion(QUESTIONS[id]);
      if (question) {
        setQuestionner(USERS[question.author]);
        const currentUser = USERS[userId];
        if (currentUser.answers[id]) {
          setChosenOption(
            {optionOne: 1, optionTwo: 2}[currentUser.answers[id]]
          );
        }
      }
    }
  }, [isLoggedIn, question, questioneer, chosenOption]);

  if (!isLoggedIn || !question || !questioneer) {
    return <Loading />;
  }

  const handleClick = (e) => {
    console.log("not implemented");
    // TODO
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
    <div>
      <div className="question">
        <h1>Poll by {questioneer.id}</h1>
        <img
          className="avatar"
          src={questioneer.avatarURL}
          alt={`${questioneer.id}'s avatar`}
        />
        <h2>Would You Rather</h2>
        <ul>
          <li>
            <div className={chosenOption === 1 ? "option-selected" : ""}>
              <p>{question.optionOne.text}</p>
              <button onClick={handleClick} disabled={chosenOption}>
                Click
              </button>
              {chosenOption ? (
                <span>
                  {option1Voted} ({option1VotedPercent}%)
                </span>
              ) : (
                ""
              )}
            </div>
          </li>
          <li>
            <div className={chosenOption === 2 ? "option-selected" : ""}>
              <p>{question.optionTwo.text}</p>
              <button onClick={handleClick} disabled={chosenOption}>
                Click
              </button>
              {chosenOption ? (
                <span>
                  {option2Voted} ({option2VotedPercent}%)
                </span>
              ) : (
                ""
              )}{" "}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.usedId !== null,
  userId: state.usedId,
});

export default connect(mapStateToProps)(Question);
