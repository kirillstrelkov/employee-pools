import React from "react";
import {QUESTIONS, USERS} from "../utils/_TMP_DATA";

const Poll = () => {
  const userId = "sarahedo";
  const data = USERS[userId];
  const question = QUESTIONS[data.questions[0]];
  const option1 = question.optionOne.text;
  const option2 = question.optionTwo.text;
  return (
    <div>
      <div>
        <h1>Poll by {userId}</h1>
        <img src={data.avatarURL} alt={`${userId}'s avatar`} />
        <h2>Would You Rather</h2>
        <ul>
          <li>
            <div>
              <p>{option1}</p>
              <button>Click</button>
            </div>
          </li>
          <li>
            <div>
              <p>{option2}</p>
              <button>Click</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Poll;
