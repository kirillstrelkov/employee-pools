import {useEffect} from "react";
import {connect} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {handleReceiveQuestions} from "../actions/questions";
import {handleReceiveUsers} from "../actions/users";
import Dashboard from "./Dashboard";
import ErrorPage from "./ErrorPage";
import Leaderboard from "./Leaderboard";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import NewQuestion from "./NewQuestion";
import Question from "./Question";

function App({dispatch}) {
  useEffect(() => {
    dispatch(handleReceiveUsers());
    dispatch(handleReceiveQuestions());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="new" element={<NewQuestion />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="question/:id" element={<Question />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default connect()(App);
