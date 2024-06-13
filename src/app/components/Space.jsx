// components/Space.js
import React, { useEffect } from 'react';
import "./s.css";
import  {init3DPretty} from "./s.js";

const Space = () => {
  useEffect(() => {
    init3DPretty();
  }, []);

  return (
    <div className='spaces'>
      <div id="space" className="space"></div>
    </div>
  );
}

export default Space;
