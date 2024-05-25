import React from 'react';
import {Svg, Path} from 'react-native-svg';
import THEME_COLOR from '../../styles/theme-color';
import {useThemeColor} from '../../store/color';

const HomeIcon = ({focused}: {focused: boolean}) => {
  const {theme} = useThemeColor();
  const iconColor = focused ? theme : THEME_COLOR.darkGray;
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M5.8335 22.1667V12.026C5.8335 11.7273 5.90038 11.4446 6.03416 11.1778C6.16716 10.911 6.3515 10.6909 6.58716 10.5175L12.8697 5.76099C13.1979 5.50977 13.5736 5.38416 13.9967 5.38416C14.419 5.38416 14.797 5.50977 15.1307 5.76099L21.4132 10.5175C21.6488 10.6909 21.8332 10.911 21.9662 11.1778C22.0999 11.4446 22.1668 11.7273 22.1668 12.026V22.1667C22.1668 22.4793 22.0506 22.7519 21.818 22.9845C21.5847 23.217 21.3121 23.3333 21.0002 23.3333H17.051C16.7842 23.3333 16.5606 23.2431 16.3802 23.0627C16.1997 22.8822 16.1095 22.6582 16.1095 22.3907V16.8268C16.1095 16.56 16.0189 16.3364 15.8377 16.156C15.6572 15.9748 15.4336 15.8842 15.1668 15.8842H12.8335C12.5667 15.8842 12.3431 15.9748 12.1627 16.156C11.9814 16.3364 11.8908 16.56 11.8908 16.8268V22.3918C11.8908 22.6586 11.8006 22.8822 11.6202 23.0627C11.4397 23.2431 11.2161 23.3333 10.9493 23.3333H7.00016C6.6875 23.3333 6.41488 23.217 6.18233 22.9845C5.94977 22.7512 5.8335 22.4785 5.8335 22.1667Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default HomeIcon;