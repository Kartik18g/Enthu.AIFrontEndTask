import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import MovesBoard from "./Moves";
import Square from "./Square";

const Board = ({ squares, sprites, center }) => {
  // using usrState hook to interate n X n times
  const [iter, setIter] = useState([Array(squares).fill(null)]);
  // Keeping a count of moves so that they can be passed on to the moves board component
  const [moves, setmoves] = useState(0);
  // calculating board width for styling purposes
  const boardWidth = squares * 50;

  // track of current position
  const [PlayerPosition, setPlayerPosition] = useState(center);
  // Win Alert if all sprites have been removed
  if (sprites.length == 0) {
    window.alert(
      `Yay🎉 you finished in ${moves} moves ... Refresh to play again`
    );
  }
  // function to check for sprites and remove them
  const checkForSprite = (PlayerPosition) => {
    if (sprites.indexOf(PlayerPosition) !== -1) {
      sprites.splice(sprites.indexOf(PlayerPosition), 1);
    }
  };
  // function to map each click
  const handleKeyPress = (key) => {
    setmoves(moves + 1);

    switch (key) {
      case "right":
        checkForSprite(PlayerPosition + 1);
        setPlayerPosition(PlayerPosition + 1);
        break;
      case "left":
        checkForSprite(PlayerPosition - 1);
        setPlayerPosition(PlayerPosition - 1);

        break;
      case "up":
        checkForSprite(PlayerPosition - squares);
        setPlayerPosition(PlayerPosition - squares);
        break;
      case "down":
        checkForSprite(PlayerPosition + squares);
        setPlayerPosition(PlayerPosition + squares);

        break;
    }
  };

  return (
    <div>
      <MovesBoard moves={moves} />
      <div style={{ width: boardWidth }} className="container">
        {iter[0].map((val, Y) => {
          return (
            <div key={Y} className="row">
              {iter[0].map((iteration, X) => {
                const pos = X + Y * squares;
                if (sprites.indexOf(pos) !== -1) {
                  return <Square key={pos} value={"sprite"} pos={pos} />;
                }
                if (pos == PlayerPosition) {
                  return <Square key={pos} value={"player"} pos={pos} />;
                }
                return <Square key={pos} pos={pos} />;
              })}
            </div>
          );
        })}
      </div>
      <Controls handleKeyPress={handleKeyPress} />
    </div>
  );
};

export default Board;
