import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/serialize';

const STANDARD = 4;
/**
 * input/output 예시
 * 1. spacing(1) === 4px
 * 2. spacing(2.5) === 10px
 * 3. spacing(1.75) === 8px (4 * 1.75 = 7이지만 홀수 픽셀을 허용하지 않고 가장 가까운 짝수로 반올림)
 * 4. spacing(1.45) === 6px (4 * 1.45 = 5.8이지만 홀수 픽셀을 허용하지 않고 가장 가까운 짝수로 반올림)
 */
export const spacing = (operand: number): number => {
  if (Number.isInteger(operand * 2)) {
    // 0.5의 배수일 때
    return STANDARD * operand;
  } else {
    // 0.5의 배수가 아닌 소수일 때
    const integerPart = Math.floor(operand);
    const fractionalPart = operand - integerPart;
    const operandRoundedByOneHalf =
      fractionalPart < 0.75 && fractionalPart > 0.25 ? integerPart + 0.5 : Math.round(operand);
    return STANDARD * operandRoundedByOneHalf;
  }
};

// Margin
const marginSpacingOptions = ['mt', 'mb', 'ml', 'mr', 'my', 'mx'] as const;
export type MarginSpacing = {
  [key in typeof marginSpacingOptions[number]]?: number;
};
export const marginSpacingProps = (props: MarginSpacing): MarginSpacing =>
  marginSpacingOptions.reduce(
    (prev, curr) => ({
      ...prev,
      [curr]: props[curr],
    }),
    {},
  );
export const marginSpacingStyle = (props: MarginSpacing): SerializedStyles => {
  const marginStyleObject = {
    'margin-top': props.mt ?? props.my,
    'margin-bottom': props.mb ?? props.my,
    'margin-left': props.ml ?? props.mx,
    'margin-right': props.mr ?? props.mx,
  };
  return css`
    ${Object.entries(marginStyleObject).reduce((prev, [key, value]) => {
      return prev + (value !== undefined ? `${key}: ${spacing(value)}px;` : '');
    }, '')}
  `;
};

// Padding
const paddingSpacingOptions = ['pt', 'pb', 'pl', 'pr', 'py', 'px'] as const;
export type PaddingSpacing = {
  [key in typeof paddingSpacingOptions[number]]?: number;
};
export const paddingSpacingProps = (props: PaddingSpacing): PaddingSpacing =>
  paddingSpacingOptions.reduce(
    (prev, curr) => ({
      ...prev,
      [curr]: props[curr],
    }),
    {},
  );
export const paddingSpacingStyle = (props: PaddingSpacing): SerializedStyles => {
  const paddingStyleObject = {
    'padding-top': props.pt ?? props.py,
    'padding-bottom': props.pb ?? props.py,
    'padding-left': props.pl ?? props.px,
    'padding-right': props.pr ?? props.px,
  };
  return css`
    ${Object.entries(paddingStyleObject).reduce((prev, [key, value]) => {
      return prev + (value !== undefined ? `${key}: ${spacing(value)}px;` : '');
    }, '')}
  `;
};

// Box(Margin + Padding)
export type BoxSpacing = MarginSpacing & PaddingSpacing;
export const boxSpacingProps = (props: BoxSpacing): BoxSpacing => ({
  ...marginSpacingProps(props),
  ...paddingSpacingProps(props),
});
export const boxSpacingStyle = (props: BoxSpacing): SerializedStyles => css`
  ${marginSpacingStyle(props)};
  ${paddingSpacingStyle(props)};
`;
