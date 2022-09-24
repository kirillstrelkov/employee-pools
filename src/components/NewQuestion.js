import React, {useEffect, useRef} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {handleCreateQuestion} from "../actions/shared";
import Loading from "./Loading";

const NewQuestion = ({isLoggedIn, dispatch}) => {
  const navigate = useNavigate();
  const inputOption1 = useRef("");
  const inputOption2 = useRef("");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Loading />;
  }

  const handleClick = (e) => {
    e.preventDefault();
    const option1 = inputOption1.current.value;
    const option2 = inputOption2.current.value;

    if (option1 && option2) {
      dispatch(handleCreateQuestion(option1, option2, navigate));
    } else {
      alert("Please fill all input fields.");
    }
  };

  return (
    <div>
      <h1>Would You Rather</h1>
      <p>Create Your Own Pool</p>
      <form>
        <div>
          <label htmlFor="option1">First Option</label>
          <input
            ref={inputOption1}
            id="option1"
            placeholder="Option One"
            type="text"
          ></input>
        </div>
        <div>
          <label htmlFor="option2">Second Option</label>
          <input
            ref={inputOption2}
            id="option2"
            placeholder="Option Two"
            type="text"
          ></input>
        </div>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.authedUser !== null,
});

export default connect(mapStateToProps)(NewQuestion);
