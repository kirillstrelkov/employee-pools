import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import Loading from "./Loading";

const Leaderboard = ({isLoggedIn, authedUser, users}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Loading />;
  }

  const sortedUsers = Object.values(users).sort((a, b) => {
    const aAnswers = Object.keys(a.answers).length;
    const bAnswers = Object.keys(a.answers).length;
    const aQuestions = b.questions.length;
    const bQuestions = b.questions.length;
    console.log(aAnswers, bAnswers, aQuestions, bQuestions);
    // return b.id.localeCompare(a.id);
    // TODO: fix order

    if (aQuestions === bQuestions) {
      return aAnswers - bAnswers;
    } else {
      return aQuestions - bQuestions;
    }
  });
  console.log(
    sortedUsers.map((u) => [
      u.id,
      Object.keys(u.answers).length,
      u.questions.length,
    ])
  );
  console.log(sortedUsers);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr
              key={user.id}
              className={user.id === authedUser ? "highlight" : ""}
            >
              <td>
                <div>
                  <img
                    className="avatar"
                    src={user.avatarURL}
                    alt={`${user.id} avatar`}
                  />
                  <div>{user.name}</div>
                  <div>{user.id}</div>
                </div>
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.authedUser !== null,
  authedUser: state.authedUser,
  users: state.users,
});

export default connect(mapStateToProps)(Leaderboard);
