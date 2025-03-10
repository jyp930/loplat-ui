import React from 'react';
import type { IconProps } from '../index';
export const SyncAlt = React.memo<IconProps>(({ size = 18, fillColor = '#9DAAB7', suffixForId, className, style }) => {
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
          d="M7.22 16.33a1.414 1.414 0 010 2l-2.355 2.353h17.269a1.414 1.414 0 110 2.827H4.864l2.356 2.354a1.413 1.413 0 11-2 2L.619 23.265a1.413 1.413 0 01-.002-2.337l4.603-4.6a1.414 1.414 0 012 0zM18.367.413l4.767 4.766a1.414 1.414 0 01.025 1.974l-4.792 4.793a1.414 1.414 0 11-2-1.999l2.353-2.353H1.453a1.414 1.414 0 110-2.828H18.72l-2.353-2.353a1.414 1.414 0 112-2z"
          id={`sync_alt_svg__a__${uniqueId}`}
        />
      </defs>
      <g transform="translate(4 2)" fill="none" fillRule="evenodd">
        <mask id={`sync_alt_svg__b__${uniqueId}`} fill="#fff">
          <use xlinkHref={`#sync_alt_svg__a__${uniqueId}`} />
        </mask>
        <g mask={`url(#sync_alt_svg__b__${uniqueId})`}>
          <path fill={fillColor} d="M-4-2h32v32H-4z" />
        </g>
      </g>
    </svg>
  );
});
