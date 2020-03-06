import * as React from 'react';
import { grey, red, blue, green } from '@material-ui/core/colors';

import ShjImg from './media/ShjSqr.png';
import GopImg from './media/GopSqr.png';

interface IShapeProps {
  x: number;
  y: number;
}

const diskRadius = 0.425;
const strokeWidth = 0.025;

export const EmptyDisk = (props: any) => {
  return (
    <circle
      key={`empty_circle${props.x},${props.y}`}
      cx={props.x + 0.5}
      cy={props.y + 0.5}
      r={diskRadius}
      strokeWidth={strokeWidth}
      stroke={grey[50]}
      onClick={props.onClick}
    />
  );
};

export const CircleRed = (props: IShapeProps) => {
  return (
    <g>
    <circle
      key={`green_circle${props.x},${props.y}`}
      cx={props.x + 0.5}
      cy={props.y + 0.5}
      r={diskRadius}
      fill={green['A200']}
      strokeWidth={strokeWidth}
      stroke={grey[50]}
    />
      <svg x={props.x + 0.15} y={props.y + 0.15} width="1" height="1" display="block">
        <image 
          href={ ShjImg }
          height="70%"/> 
      </svg>
    </g>
  );
};

export const CircleBlue = (props: IShapeProps) => {
  return (
    <g>
      <circle
        key={`blue_circle${props.x},${props.y}`}
        cx={props.x + 0.5}
        cy={props.y + 0.5}
        r={diskRadius}
        fill={blue[500]}
        strokeWidth={strokeWidth}
        stroke={grey[50]}
      />
      <svg x={props.x + 0.15} y={props.y + 0.15} width="1" height="1" display="block">
        <image 
          href={ GopImg }
          height="70%"/> 
      </svg>
    </g>
  );
};
