import React from 'react';
import { white } from '../../core/colors';
import { primary, danger, warning, success, primaryLight } from '../../core/styles/palette';
import { css } from '@emotion/css';

type BadgeType = 'pill' | 'round' | 'new';
type Color = 'primary' | 'danger' | 'success' | 'light' | 'warning';
type variant = 'filled' | 'outlined';
type Size = 'normal' | 'small';

export interface BadgeProps {
  type?: BadgeType;
  color?: Color;
  text: string;
  variant?: variant;
  size?: Size;
  className?: string;
}

const ColorSet = {
  primary,
  light: primaryLight,
  danger,
  success,
  warning,
} as const;

export const Badge = ({
  type = 'pill',
  color = 'primary',
  text,
  variant = 'filled',
  size = 'normal',
  className = '',
}: BadgeProps): React.ReactElement => {
  const [padding, fontSize] =
    type === 'new' ? [0, '0.5rem'] : size === 'small' ? ['1px 5px', '0.5rem'] : ['3px 11px', '0.75rem'];
  const [fontColor, backgroundColor] = variant === 'filled' ? [white, ColorSet[color]] : [ColorSet[color], white];
  return (
    <div
      className={`${css`
        display: flex;
        align-items: center;
        justify-content: center;
        ${type === 'new' ? `width: 16px; height: 16px;` : `width: fit-content;`};
        padding: ${padding};
        font-size: ${fontSize};
        box-sizing: border-box;
        border-radius: ${type === 'new' ? '100%' : type === 'pill' ? '12px' : '4px'};
        border: 1px solid ${ColorSet[color]};
        color: ${fontColor};
        background-color: ${backgroundColor};
      `} ${className}`}
    >
      {type === 'new' ? text.charAt(0) : text}
    </div>
  );
};
