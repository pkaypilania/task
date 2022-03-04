import React, {Component} from 'react';
import {Animated, Keyboard, ScrollView, StyleSheet, View} from 'react-native';
import {HeightIntoPercent, WidthIntoPercent} from '../utils';
import {defaultThemeColor} from '../utils/Color';

export default class HandleScrollViewLayout extends Component {
  state = {
    height: new Animated.Value(0),
  };
  componentDidMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardWillHide,
    );
  }
  keyboardWillShow = event => {
    Animated.timing(this.state.height, {
      duration: event.duration,
      toValue: event.endCoordinates.height,
      useNativeDriver: false,
    }).start();
  };

  keyboardWillHide = event => {
    Animated.timing(this.state.height, {
      duration: event.duration,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };
  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }
  render() {
    return (
      <View style={style.mainView}>
        <ScrollView>
          <View style={style.childView}>{this.props.children}</View>
          <Animated.View
            style={{
              width: WidthIntoPercent(360),
              height: this.state.height,
            }}
          />
        </ScrollView>
      </View>
    );
  }
}
const style = StyleSheet.create({
  mainView: {
    width: WidthIntoPercent(360),
    height: HeightIntoPercent(741),
    backgroundColor: defaultThemeColor,
  },
  childView: {
    width: WidthIntoPercent(360),
    height: HeightIntoPercent(741),
  },
});
