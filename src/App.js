import React from "react";
import Game from "./components/Game";
import Navbar from "./components/Navbar";

function App(props) {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <Game />
    </div>
  );
}

export default App;
