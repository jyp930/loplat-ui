import React from 'react';
import type { IconProps } from '../index';
export const RemoveOutline = React.memo<IconProps>(
  ({ size = 18, fillColor = '#9DAAB7', suffixForId, className, style }) => {
    const uniqueId = suffixForId ?? String(Math.random().toString(36).slice(2, 11));
    return (
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
            d="M19.552 1.077A14.14 14.14 0 0128.28 14.14c-.008 7.806-6.333 14.13-14.139 14.14a14.14 14.14 0 115.411-27.204zm-5.41 1.752a11.312 11.312 0 1011.311 11.312C25.446 7.897 20.386 2.837 14.141 2.83zm6.702 9.9a1.414 1.414 0 110 2.827H7.431a1.414 1.414 0 010-2.828h13.413z"
            id={`remove_outline_svg__a__${uniqueId}`}
          />
        </defs>
        <g transform="translate(2 2)" fill="none" fillRule="evenodd">
          <mask id={`remove_outline_svg__b__${uniqueId}`} fill="#fff">
            <use xlinkHref={`#remove_outline_svg__a__${uniqueId}`} />
          </mask>
          <g mask={`url(#remove_outline_svg__b__${uniqueId})`}>
            <path fill={fillColor} d="M-2-2h32v32H-2z" />
          </g>
        </g>
      </svg>
    );
  },
);
