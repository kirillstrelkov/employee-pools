import React from "react";

const Navbar = () => {
  const user = "mtsamis";
  if (user === undefined) {
    return "";
  }
  return (
    <div>
      <nav>
        <a href="/">Home</a> | <a href="/leaderboard">Leaderboard</a> |{" "}
        <a href="/new">New</a> | <span>{user}</span> | <button>Logout</button>
      </nav>
    </div>
  );
};

export default Navbar;
