import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {HeightIntoPercent, WidthIntoPercent} from '../utils';
import {blackColor, whiteColor} from '../utils/Color';
import CustomText from './customText';

export default class Header extends Component {
  render() {
    const {isDarkMode} = this.props;
    const style = StyleSheet.create({
      header: {
        width: WidthIntoPercent(360),
        height: HeightIntoPercent(59),
        elevation: 11,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isDarkMode ? blackColor : whiteColor,
      },
    });
    return (
      <View style={style.header}>
        <CustomText
          fontSize={20}
          lineHeight={22}
          color={isDarkMode ? whiteColor : blackColor}>
          Task App
        </CustomText>
      </View>
    );
  }
}
