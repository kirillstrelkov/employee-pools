import {
  Avatar,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
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
    const bAnswers = Object.keys(b.answers).length;
    const aQuestions = a.questions.length;
    const bQuestions = b.questions.length;
    if (aQuestions === bQuestions) {
      return bAnswers - aAnswers;
    } else {
      return bQuestions - aQuestions;
    }
  });

  return (
    <TableContainer component={Paper} data-testid="leaderboard-id">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">Answered</TableCell>
            <TableCell align="right">Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow
              key={user.id}
              className={user.id === authedUser ? "highlight" : ""}
            >
              <TableCell>
                <Stack direction="row" spacing={2}>
                  <Avatar src={user.avatarURL} alt={`${user.id} avatar`} />
                  <Stack direction="column">
                    <b>{user.name}</b>
                    <span>{user.id}</span>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell align="right">
                {Object.keys(user.answers).length}
              </TableCell>
              <TableCell align="right">{user.questions.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.authedUser !== null,
  authedUser: state.authedUser,
  users: state.users,
});

export default connect(mapStateToProps)(Leaderboard);
