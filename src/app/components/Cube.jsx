import React from "react";
import "./ps.css";

const Cube = () => {
  return (
    <div>
      <div class="container">
        <div class="cube">
          <div class="face front">
            <img src="/estate.png" alt="" />
          </div>
          <div class="face back">
            <img src="/finance.png" alt="" />
          </div>
          <div class="face left">
            <img src="/insurance.png" alt="" />
          </div>
          <div class="face right">
            <img src="/commerce.png" alt="" />
          </div>
          <div class="face top">
            <img src="/social.png" alt="" />
          </div>
          <div class="face bottom">
            <img src="/vehicle.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
