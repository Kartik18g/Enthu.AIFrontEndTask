import React from "react";

const Square = ({ pos, value }) => {
  if (value == "sprite") {
    return (
      <div key={pos} id={pos} className="col">
        <img src="https://www.svgrepo.com/show/43568/mushroom.svg" alt="" />
      </div>
    );
  }
  if (value == "player") {
    return (
      <div key={pos} id={pos} className="col">
        <img src="https://www.svgrepo.com/show/145536/ninja.svg" alt="" />
      </div>
    );
  } else {
    return <div key={pos} id={pos} className="col"></div>;
  }
};

export default Square;
