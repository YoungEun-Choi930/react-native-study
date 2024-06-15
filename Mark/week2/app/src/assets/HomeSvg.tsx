import Svg, { Path } from "react-native-svg";

export const HomeSvg = ({width, height, fill}: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none">
      <Path
        d="M5.83337 22.1667V12.026C5.83337 11.7273 5.90026 11.4446 6.03404 11.1778C6.16704 10.911 6.35137 10.6909 6.58704 10.5175L12.8695 5.76099C13.1978 5.50977 13.5734 5.38416 13.9965 5.38416C14.4189 5.38416 14.7969 5.50977 15.1305 5.76099L21.413 10.5175C21.6487 10.6909 21.833 10.911 21.966 11.1778C22.0998 11.4446 22.1667 11.7273 22.1667 12.026V22.1667C22.1667 22.4793 22.0504 22.7519 21.8179 22.9845C21.5845 23.217 21.3119 23.3333 21 23.3333H17.0509C16.7841 23.3333 16.5605 23.2431 16.38 23.0627C16.1996 22.8822 16.1094 22.6582 16.1094 22.3907V16.8268C16.1094 16.56 16.0188 16.3364 15.8375 16.156C15.6571 15.9748 15.4335 15.8842 15.1667 15.8842H12.8334C12.5666 15.8842 12.343 15.9748 12.1625 16.156C11.9813 16.3364 11.8907 16.56 11.8907 16.8268V22.3918C11.8907 22.6586 11.8005 22.8822 11.62 23.0627C11.4396 23.2431 11.216 23.3333 10.9492 23.3333H7.00004C6.68737 23.3333 6.41476 23.217 6.18221 22.9845C5.94965 22.7512 5.83337 22.4785 5.83337 22.1667Z"
        fill={fill}
      />
    </Svg>
  );
};