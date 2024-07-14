// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ButtonGroup.css";

const ButtonGroup = ({ buttons, isSelectade, setIsSelectade }) => {
  return (
    <div className="flex">
      <div className="buttonContainer">
        {buttons.map((tex, index) => {
          return (
            <button
              className={isSelectade == index ? "selectade" : "buttons "}
              onClick={() => setIsSelectade(index)}
            >
              {tex}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonGroup;
