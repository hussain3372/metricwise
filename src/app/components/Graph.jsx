'use client'
import React, { useEffect, useRef } from 'react';
import {ForceGraph3D} from 'react-force-graph';
import * as d3 from 'd3-force-3d';

const ForceGraph = () => {
  const fgRef = useRef();

  const graphData = {
    nodes: Array.from({ length: 200 }, (_, i) => ({
      id: i,
      group: Math.floor(Math.random() * 10),
    })),
    links: Array.from({ length: 300 }, () => ({
      source: Math.floor(Math.random() * 200),
      target: Math.floor(Math.random() * 200),
    })),
  };

  useEffect(() => {
    const fg = fgRef.current;

    fg.d3Force('link').distance(link => {
      return 30;
    });

    fg.d3Force('charge', d3.forceManyBody().strength(-30));
    fg.d3Force('center', d3.forceCenter());
    fg.d3Force('collision', d3.forceCollide(5));

   }, []);

  return (
    <div style={{ width: '10vw', height: '10vh' }}>
      <ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        nodeAutoColorBy="group"
        linkDirectionalParticles={4}
        linkDirectionalParticleSpeed={d => Math.random() * 0.01 + 0.01}
      />
    </div>
  );
};

export default ForceGraph;
