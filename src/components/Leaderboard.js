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
          {Object.values(users).map((user) => (
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
