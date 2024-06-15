import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface HomeIconProps {
  color: string;
  size: number;
}
const HomeIcon = ({color, size}: HomeIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 19.0022V10.3102C5 10.0542 5.05733 9.81185 5.172 9.58319C5.286 9.35452 5.444 9.16585 5.646 9.01719L11.031 4.94019C11.3123 4.72485 11.6343 4.61719 11.997 4.61719C12.359 4.61719 12.683 4.72485 12.969 4.94019L18.354 9.01719C18.556 9.16585 18.714 9.35452 18.828 9.58319C18.9427 9.81185 19 10.0542 19 10.3102V19.0022C19 19.2702 18.9003 19.5039 18.701 19.7032C18.501 19.9025 18.2673 20.0022 18 20.0022H14.615C14.3863 20.0022 14.1947 19.9249 14.04 19.7702C13.8853 19.6155 13.808 19.4235 13.808 19.1942V14.4252C13.808 14.1965 13.7303 14.0049 13.575 13.8502C13.4203 13.6949 13.2287 13.6172 13 13.6172H11C10.7713 13.6172 10.5797 13.6949 10.425 13.8502C10.2697 14.0049 10.192 14.1965 10.192 14.4252V19.1952C10.192 19.4239 10.1147 19.6155 9.96 19.7702C9.80533 19.9249 9.61367 20.0022 9.385 20.0022H6C5.732 20.0022 5.49833 19.9025 5.299 19.7032C5.09967 19.5032 5 19.2695 5 19.0022Z"
        fill={color}
      />
    </Svg>
  );
};

export default HomeIcon;