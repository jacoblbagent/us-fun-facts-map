import React from 'react';
import type { StateInfo } from './funFacts';

interface TooltipProps {
  x: number;
  y: number;
  stateInfo: StateInfo;
}

const Tooltip: React.FC<TooltipProps> = ({ x, y, stateInfo }) => {
  return (
    <div
      className="state-tooltip"
      style={{
        left: Math.min(x + 16, window.innerWidth - 340),
        top: Math.min(y - 10, window.innerHeight - 140),
      }}
    >
      <h3 className="tooltip-title">{stateInfo.name}</h3>
      <p className="tooltip-fact">{stateInfo.fact}</p>
    </div>
  );
};

export default Tooltip;