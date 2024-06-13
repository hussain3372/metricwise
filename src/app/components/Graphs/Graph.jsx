import React, { useEffect } from 'react';
import initCanvas from './g';
import './g.css';

const Graph = () => {
  useEffect(() => {
    initCanvas();
  }, []);

  return (
    <div>
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default Graph;
