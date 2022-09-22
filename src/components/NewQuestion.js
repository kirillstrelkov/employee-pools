import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import Loading from "./Loading";

const NewQuestion = ({isLoggedIn}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Would You Rather</h1>
      <p>Create Your Own Pool</p>
      <form>
        <div>
          <label for="option1">First Option</label>
          <input id="option1" placeholder="Option One" type="text"></input>
        </div>
        <div>
          <label for="option2">Second Option</label>
          <input id="option2" placeholder="Option Two" type="text"></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.usedId !== null,
  userId: state.usedId,
});

export default connect(mapStateToProps)(NewQuestion);
