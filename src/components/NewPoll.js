import React from "react";

const NewPoll = () => {
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

export default NewPoll;
