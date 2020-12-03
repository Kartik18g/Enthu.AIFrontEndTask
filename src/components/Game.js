import React, { useState } from "react";
import Board from "./Board";
import "../App.css";
const Game = () => {
  // prompt to ask user number of rows he/she wants , here default value is 10 if no input is received.
  const userRes = window.prompt(
    "How many rows do you want? Default value is 10 and minimum value is 5"
  );

  // convert user response to integer
  const squares = userRes && parseInt(userRes) > 4 ? parseInt(userRes) : 10;
  // calculating the position of player
  const center = Math.ceil(squares / 2 - 1) * squares + Math.ceil(squares / 2);
  var sprites = [];
  // Function to generate random values of positions and them storing them in an array
  function randomInteger(squares) {
    const max = squares * squares - 1;
    const randomValue = Math.floor(Math.random() * (max - 1 + 1)) + 1;
    if (sprites.indexOf(randomValue !== -1 || center !== -1)) {
      return randomValue - 1;
    }
    return randomValue;
  }
  for (var i = 0; i < squares; i++) {
    sprites.push(randomInteger(squares));
  }
  // passing the array of sprites to board
  return (
    <div className="">
      <Board sprites={sprites} center={center} squares={squares} />
    </div>
  );
};

export default Game;
