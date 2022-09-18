import React from "react";
import {USERS} from "../utils/_TMP_DATA";

const Leaderboard = () => {
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

export default Leaderboard;
