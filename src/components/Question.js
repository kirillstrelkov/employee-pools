import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {handleAnswerQuestion} from "../actions/shared";

import {formatFloat} from "../utils/helper";
import Loading from "./Loading";

const Question = ({isLoggedIn, authedUser, users, questions, dispatch}) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [questioneer, setQuestionner] = useState(null);
  const [chosenOption, setChosenOption] = useState(0);
  const optionMappings = {optionOne: 1, optionTwo: 2};

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setQuestion(questions[id]);
      if (question) {
        setQuestionner(users[question.author]);
        const currentUser = users[authedUser];
        if (currentUser.answers[id]) {
          setChosenOption(optionMappings[currentUser.answers[id]]);
        }
      }
    }
  }, [isLoggedIn, question, questioneer, chosenOption, users]);

  if (!isLoggedIn || !question || !questioneer) {
    return <Loading />;
  }

  const handleClick = (e, option) => {
    e.preventDefault();
    setQuestion(null);
    setChosenOption(optionMappings[option]);

    dispatch(
      handleAnswerQuestion(id, option, () => {
        setQuestion(questions[id]);
      })
    );
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
              <button
                onClick={(e) => {
                  handleClick(e, "optionOne");
                }}
                disabled={chosenOption}
              >
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
              <button
                onClick={(e) => {
                  handleClick(e, "optionTwo");
                }}
                disabled={chosenOption}
              >
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
  isLoggedIn: state.authedUser !== null,
  authedUser: state.authedUser,
  questions: state.questions,
  users: state.users,
});

export default connect(mapStateToProps)(Question);
