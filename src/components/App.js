import {Container} from "@mui/material";
import {useEffect} from "react";
import {connect} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {handleInitData} from "../actions/shared";
import Dashboard from "./Dashboard";
import ErrorPage from "./ErrorPage";
import Leaderboard from "./Leaderboard";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import NewQuestion from "./NewQuestion";
import Notification from "./Notification";
import Question from "./Question";

function App({dispatch}) {
  useEffect(() => {
    dispatch(handleInitData());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Notification />
      <Container>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="add" element={<NewQuestion />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="questions/:question_id" element={<Question />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default connect()(App);
