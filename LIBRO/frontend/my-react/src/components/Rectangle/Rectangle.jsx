import React from "react";
import "./style.css";

export const Rectangle = ({ className, subtractClassName }) => {
  return (
    <div className={`rectangle ${className}`}>
      <img className="img-2" alt="Rectangle" />

      <img className={`subtract-3 ${subtractClassName}`} alt="Subtract" />
    </div>
  );
};
