import React from "react";

const Controls = ({ handleKeyPress }) => {
  // controls component
  return (
    <div className="controls ">
      <div class="keys">
        <div
          onClick={() => {
            handleKeyPress("up");
          }}
          class="up arr"
        >
          <i class="fa fa-arrow-up"></i>
        </div>
        <br />
        <div
          onClick={() => {
            handleKeyPress("left");
          }}
          class="left arr"
        >
          <i class="fa fa-arrow-left"></i>
        </div>
        <div
          onClick={() => {
            handleKeyPress("down");
          }}
          class="down arr"
        >
          <i class="fa fa-arrow-down"></i>
        </div>
        <div
          onClick={() => {
            handleKeyPress("right");
          }}
          class="right arr"
        >
          <i class="fa fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Controls;
