import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setHoveredState } from './mapSlice';
import { STATE_FACTS } from './funFacts';
import { STATE_PATHS } from './statePaths';
import Tooltip from './Tooltip';

const USMap: React.FC = () => {
  const dispatch = useAppDispatch();
  const { hoveredState, tooltipPos } = useAppSelector((s) => s.map);

  const handleMouseEnter = useCallback(
    (abbr: string, e: React.MouseEvent) => {
      const rect = (e.currentTarget as SVGGElement).ownerSVGElement?.getBoundingClientRect();
      const x = e.clientX - (rect?.left ?? 0);
      const y = e.clientY - (rect?.top ?? 0);
      dispatch(setHoveredState({ stateAbbr: abbr, x, y }));
    },
    [dispatch]
  );

  const handleMouseLeave = useCallback(() => {
    dispatch(setHoveredState(null));
  }, [dispatch]);

  const fact = hoveredState ? STATE_FACTS[hoveredState] : null;

  return (
    <div className="map-wrapper">
      <svg
        viewBox="0 0 960 600"
        className="us-map"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background water */}
        <rect x="0" y="0" width="960" height="600" fill="#dce9f5" rx="4" />

        {STATE_ABBRS.map((abbr) => {
          const info = STATE_FACTS[abbr];
          const isHovered = hoveredState === abbr;
          return (
            <g
              key={abbr}
              onMouseEnter={(e) => handleMouseEnter(abbr, e)}
              onMouseLeave={handleMouseLeave}
              className={`state-group ${isHovered ? 'hovered' : ''}`}
            >
              <title>{info.name}</title>
              <path
                d={STATE_PATHS[abbr]}
                className={`state-path ${isHovered ? 'state-path-hovered' : ''}`}
              />
            </g>
          );
        })}
      </svg>

      {fact && tooltipPos && (
        <Tooltip x={tooltipPos.x} y={tooltipPos.y} stateInfo={fact} />
      )}
    </div>
  );
};

const STATE_ABBRS = Object.keys(STATE_PATHS).filter((k) => k !== 'DC');

export default USMap;