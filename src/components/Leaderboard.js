import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {USERS} from "../utils/_TMP_DATA";
import Loading from "./Loading";

const Leaderboard = ({isLoggedIn}) => {
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
          {Object.values(USERS).map((user) => (
            <tr key={user.id}>
              <td className="user">
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
  isLoggedIn: state.usedId !== null,
  userId: state.usedId,
});

export default connect(mapStateToProps)(Leaderboard);
