import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import ErrorPage from "./ErrorPage";
import Leaderboard from "./Leaderboard";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import NewPoll from "./NewPoll";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="new" element={<NewPoll />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
