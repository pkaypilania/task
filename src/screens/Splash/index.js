import React, {Component} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {HeightIntoPercent, WidthIntoPercent} from '../../utils';
import {SplashScreenGradient} from '../../utils/Images';
import CustomText from '../../components/customText';

class SplashScreen extends Component {
  render() {
    return (
      <View style={style.mainView}>
        <ImageBackground
          resizeMode="cover"
          source={SplashScreenGradient}
          style={style.backGroundImg}>
          <CustomText
            color="rgba(145,94,220,1)"
            fontSize={36}
            lineHeight={45}
            textShadowObj={{
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: {width: 0, height: 2},
              textShadowRadius: 3,
            }}>
            Task App
          </CustomText>
        </ImageBackground>
      </View>
    );
  }
}
const style = StyleSheet.create({
  mainView: {
    width: WidthIntoPercent(360),
    height: HeightIntoPercent(741),
  },
  backGroundImg: {
    width: WidthIntoPercent(360),
    height: HeightIntoPercent(741),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SplashScreen;
