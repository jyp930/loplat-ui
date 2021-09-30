import React from 'react';
import type { IconProps } from '../index';
export const RemoveFill =
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
          d="M19.552 1.077A14.14 14.14 0 0128.28 14.14c-.008 7.806-6.333 14.13-14.139 14.14a14.14 14.14 0 115.411-27.204zm1.292 11.651H7.431a1.414 1.414 0 100 2.828h13.413a1.414 1.414 0 000-2.828z"
          id="remove_fill_svg__a"
        />
      </defs>
      <g transform="translate(2 2)" fill="none" fillRule="evenodd">
        <mask id="remove_fill_svg__b" fill="#fff">
          <use xlinkHref="#remove_fill_svg__a" />
        </mask>
        <g mask="url(#remove_fill_svg__b)">
          <path fill={fillColor} d="M-2-2h32v32H-2z" />
        </g>
      </g>
    </svg>
  ));
