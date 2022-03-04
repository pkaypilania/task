import React, {Component} from 'react';
import {Text} from 'react-native';
import {ThemeContext} from '../ThemeContext/themeContext';
import {HeightIntoPercent, WidthIntoPercent} from '../utils';
import {blackColor} from '../utils/Color';

export default class CustomText extends Component {
  render() {
    const {
      fontStyle,
      fontWeight,
      fontSize,
      lineHeight,
      color,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      textShadowObj,
      textAlign,
    } = this.props;
    const TextShadowObj = textShadowObj ? textShadowObj : {};
    return (
      <Text
        style={{
          fontFamily: 'Righteous-Regular',
          fontSize: fontSize
            ? WidthIntoPercent(fontSize)
            : WidthIntoPercent(28),
          fontWeight: fontWeight ? fontWeight : '400',
          fontStyle: fontStyle ? fontStyle : 'normal',
          lineHeight: lineHeight
            ? HeightIntoPercent(lineHeight)
            : HeightIntoPercent(35),
          color: color ? color : blackColor,
          marginLeft: marginLeft ? WidthIntoPercent(marginLeft) : 0,
          marginRight: marginRight ? WidthIntoPercent(marginRight) : 0,
          marginTop: marginTop ? HeightIntoPercent(marginTop) : 0,
          marginBottom: marginBottom ? HeightIntoPercent(marginBottom) : 0,
          paddingLeft: paddingLeft ? WidthIntoPercent(paddingLeft) : 0,
          paddingRight: paddingRight ? WidthIntoPercent(paddingRight) : 0,
          paddingTop: paddingTop ? HeightIntoPercent(paddingTop) : 0,
          paddingBottom: paddingBottom ? HeightIntoPercent(paddingBottom) : 0,
          textAlign: textAlign ? textAlign : 'center',
          ...TextShadowObj,
        }}>
        {this.props.children}
      </Text>
    );
  }
}
CustomText.contextType = ThemeContext;
