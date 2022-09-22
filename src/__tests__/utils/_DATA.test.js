import {
  questions,
  users,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../../utils/_DATA";

describe("_DATA._saveQuestion", () => {
  it("to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function", async () => {
    // TODO:test('the data is peanut butter', async () => {
    const data = await _saveQuestion({
      optionOneText: "text1",
      optionTwoText: "text2",
      author: "me",
    });
    expect(data).toHaveProperty("id");
    expect(data.timestamp).toBeGreaterThan(1000000000);
    expect(data).toHaveProperty("author", "me");

    expect(data.optionOne).toHaveProperty("text", "text1");
    expect(data.optionTwo).toHaveProperty("text", "text2");
    expect(data.optionOne).toHaveProperty("votes", []);
    expect(data.optionTwo).toHaveProperty("votes", []);
  });

  it("to verify that an error is returned if incorrect data is passed to the function", async () => {
    const validObject = {
      optionOneText: "text1",
      optionTwoText: "text2",
      author: "me",
    };
    Object.keys(validObject).forEach(async (key) => {
      let obj = Object.assign({}, validObject);
      delete obj[key];
      await expect(_saveQuestion(obj)).rejects.toEqual(
        "Please provide optionOneText, optionTwoText, and author"
      );
    });
  });
});

describe("_DATA._saveQuestionAnswer", () => {
  it("Answer to verify that the saved question answer is returned and all expected fields are populated when correctly formatted data is passed to the function", async () => {
    const obj = {
      authedUser: "tylermcginnis",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };
    expect(questions[obj.qid][obj.answer].votes).not.toContain(obj.authedUser);

    const res = await _saveQuestionAnswer(obj);
    expect(res).toBeTruthy();

    // users updated
    expect(users[obj.authedUser].answers).toHaveProperty(obj.qid, obj.answer);
    // questions updated
    expect(questions[obj.qid][obj.answer].votes).toContain(obj.authedUser);
  });

  it("Answer to verify that an error is returned if incorrect data is passed to the function", async () => {
    const validObject = {
      authedUser: "tylermcginnis",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };
    Object.keys(validObject).forEach(async (key) => {
      let obj = Object.assign({}, validObject);
      delete obj[key];
      await expect(_saveQuestionAnswer(obj)).rejects.toEqual(
        "Please provide authedUser, qid, and answer"
      );
    });
  });
});
