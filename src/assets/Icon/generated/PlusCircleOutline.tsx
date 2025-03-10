import React from 'react';
import type { IconProps } from '../index';
export const PlusCircleOutline = React.memo<IconProps>(
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
            d="M19.552 1.077a14.14 14.14 0 018.728 13.064c-.008 7.806-6.334 14.131-14.14 14.14a14.14 14.14 0 115.412-27.204zM14.14 2.829c-6.247 0-11.312 5.065-11.312 11.312 0 6.248 5.065 11.312 11.312 11.312 6.248 0 11.312-5.064 11.312-11.312C25.445 7.897 20.385 2.837 14.14 2.83zm0 3.186c.781 0 1.414.633 1.414 1.414v5.299h5.291a1.414 1.414 0 010 2.828h-5.291v5.286a1.414 1.414 0 01-2.828 0v-5.286H7.433a1.414 1.414 0 010-2.828h5.293V7.429c0-.78.633-1.414 1.414-1.414z"
            id={`plus_circle_outline_svg__a__${uniqueId}`}
          />
        </defs>
        <g transform="translate(2 2)" fill="none" fillRule="evenodd">
          <mask id={`plus_circle_outline_svg__b__${uniqueId}`} fill="#fff">
            <use xlinkHref={`#plus_circle_outline_svg__a__${uniqueId}`} />
          </mask>
          <g mask={`url(#plus_circle_outline_svg__b__${uniqueId})`}>
            <path fill={fillColor} d="M-2-2h32v32H-2z" />
          </g>
        </g>
      </svg>
    );
  },
);
