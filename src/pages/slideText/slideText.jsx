import React from "react";
import "./slide.css";

export default function slideText() {
  return (
    <div className="navbar">
      <div className="content">
        <div className="slider-wrapper">
          I can write
          <div className="slider">
            <div className="slider-text-1">React</div>
            <div className="slider-text-2">HTML</div>
            <div className="slider-text-3">CSS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
