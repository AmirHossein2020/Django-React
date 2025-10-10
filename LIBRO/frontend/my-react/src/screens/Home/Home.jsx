import React from "react";
import { NavigationFooter } from "../../components/NavigationFooter";
import { Rectangle } from "../../components/Rectangle";
import "./style.css";

export const Home = () => {
  return (
    <div className="home" data-model-id="1:902">
      <div className="navigation" />

      <img
        className="vector"
        alt="Vector"
        src="https://c.animaapp.com/mgiamxfpjKP3G4/img/vector.svg"
      />

      <div className="frame" />

      <div className="div" />

      <div className="frame-2" />

      <img
        className="element-superjumbo"
        alt="Element superjumbo"
        src="https://c.animaapp.com/mgiamxfpjKP3G4/img/24manguel-superjumbo--1--1.png"
      />

      <div className="image">
        <div className="rectangle-2" />
      </div>

      <div className="rectangle-wrapper">
        <div className="rectangle-3" />
      </div>

      <Rectangle
        className="rectangle-instance"
        subtractClassName="rectangle-2-instance"
      />
      <Rectangle
        className="design-component-instance-node"
        subtractClassName="rectangle-4"
      />
      <Rectangle className="rectangle-5" />
      <div className="image-2" />

      <NavigationFooter className="navigation-footer-instance" />
    </div>
  );
};
