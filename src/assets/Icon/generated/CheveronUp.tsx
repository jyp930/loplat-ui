import React from 'react';
import type { IconProps } from '../index';
export const CheveronUp =
  React.memo <
  IconProps >
  (({ size = 18, fillColor = '#9DAAB7', className, style }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={style}
      className={className}
      viewBox="0 0 32 32"
    >
      <defs>
        <path
          d="M26.156 15.193a1.41 1.41 0 01-1-.414L13.786 3.4 2.413 14.778a1.414 1.414 0 11-2-2L12.785.397a1.457 1.457 0 012 0L27.157 12.78a1.414 1.414 0 01-1 2.413v.001z"
          id="cheveron_up_svg__a"
        />
      </defs>
      <g transform="translate(2 8)" fill="none" fillRule="evenodd">
        <mask id="cheveron_up_svg__b" fill="#fff">
          <use xlinkHref="#cheveron_up_svg__a" />
        </mask>
        <g mask="url(#cheveron_up_svg__b)">
          <path fill={fillColor} d="M-2-8h32v32H-2z" />
        </g>
      </g>
    </svg>
  ));
