import React from 'react';
import {Path, Svg} from 'react-native-svg';
import THEME_COLOR from '../../styles/theme-color';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {StyleSheet, Text, View} from 'react-native';

const HomeSvg = ({color}: {color?: string}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fill={color}
        d="M5 19V10.308C5 10.052 5.05733 9.80966 5.172 9.58099C5.286 9.35232 5.444 9.16366 5.646 9.01499L11.031 4.93799C11.3123 4.72266 11.6343 4.61499 11.997 4.61499C12.359 4.61499 12.683 4.72266 12.969 4.93799L18.354 9.01499C18.556 9.16366 18.714 9.35232 18.828 9.58099C18.9427 9.80966 19 10.052 19 10.308V19C19 19.268 18.9003 19.5017 18.701 19.701C18.501 19.9003 18.2673 20 18 20H14.615C14.3863 20 14.1947 19.9227 14.04 19.768C13.8853 19.6133 13.808 19.4213 13.808 19.192V14.423C13.808 14.1943 13.7303 14.0027 13.575 13.848C13.4203 13.6927 13.2287 13.615 13 13.615H11C10.7713 13.615 10.5797 13.6927 10.425 13.848C10.2697 14.0027 10.192 14.1943 10.192 14.423V19.193C10.192 19.4217 10.1147 19.6133 9.96 19.768C9.80533 19.9227 9.61367 20 9.385 20H6C5.732 20 5.49833 19.9003 5.299 19.701C5.09967 19.501 5 19.2673 5 19Z"
      />
    </Svg>
  );
};

export const HomeIcon = ({focused}: {focused: boolean}) => {
  return focused ? (
    <MaskedView
      maskElement={
        <View style={styles.container}>
          <HomeSvg color={THEME_COLOR.White} />
          <Text style={{color: THEME_COLOR.Gray[400]}}>홈</Text>
        </View>
      }>
      <LinearGradient
        colors={[THEME_COLOR.Pink, THEME_COLOR.Purple]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View style={styles.container}>
          <HomeSvg />
          <Text style={{opacity: 0}}>홈</Text>
        </View>
      </LinearGradient>
    </MaskedView>
  ) : (
    <View style={styles.container}>
      <HomeSvg color={THEME_COLOR.Gray[400]} />
      <Text style={{color: THEME_COLOR.Gray[400]}}>홈</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },
});

export default HomeIcon;
