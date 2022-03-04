import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import {HeightIntoPercent, WidthIntoPercent} from '../../utils';
import {blackColor, greyColor, whiteColor} from '../../utils/Color';

export default class SearchTextInput extends Component {
  render() {
    const {onChangeText, value, inputRef, isDarkMode} = this.props;
    return (
      <View
        style={{
          width: WidthIntoPercent(303),
          height: HeightIntoPercent(38),
          paddingHorizontal: WidthIntoPercent(8),
          justifyContent: 'center',
          marginTop: HeightIntoPercent(30),
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: isDarkMode ? blackColor : whiteColor,
          borderRadius: WidthIntoPercent(10),
        }}>
        <TextInput
          ref={inputRef ? inputRef : null}
          style={{
            flex: 1,
            fontSize: WidthIntoPercent(18),
            lineHeight: HeightIntoPercent(22),
            color: isDarkMode ? whiteColor : greyColor,
            marginLeft: WidthIntoPercent(17),
            height: HeightIntoPercent(22),
            paddingBottom: 0,
            paddingTop: 0,
            opacity: 0.99,
            fontFamily: 'Righteous-Regular',
            fontWeight: '400',
            fontStyle: 'normal',
            paddingLeft: 0,
            marginLeft: 10,
          }}
          placeholder="search movie by name"
          placeholderTextColor={isDarkMode ? whiteColor : greyColor}
          onChangeText={onChangeText ? onChangeText : null}
          value={value}
        />
      </View>
    );
  }
}
