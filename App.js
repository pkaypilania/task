/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import SplashScreen from './src/screens/Splash';
import MainScreen from './src/screens/MainScreen';
import {HeightIntoPercent, WidthIntoPercent} from './src/utils';
import {blackColor, defaultThemeColor} from './src/utils/Color';
import HandleScrollViewLayout from './src/components/handleScrollViewLayout';
import ThemeContextProvider from './src/ThemeContext/themeContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashScreenShow: true,
    };
  }
  componentDidCatch(err, info) {
    console.warn('error: ', err);
    console.warn('info: ', info);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({splashScreenShow: false});
    }, 3000);
    return () => this.setState({splashScreenShow: true});
  }
  render() {
    const {splashScreenShow} = this.state;
    return (
      <ThemeContextProvider>
        <SafeAreaView
          style={{
            backgroundColor: defaultThemeColor,
          }}>
          <View style={style.root}>
            <StatusBar
              backgroundColor={defaultThemeColor}
              barStyle="light-content"
            />
            {splashScreenShow ? (
              <SplashScreen />
            ) : (
              <HandleScrollViewLayout>
                <MainScreen />
              </HandleScrollViewLayout>
            )}
          </View>
        </SafeAreaView>
      </ThemeContextProvider>
    );
  }
}

const style = StyleSheet.create({
  root: {
    width: WidthIntoPercent(360),
    height: HeightIntoPercent(741),
  },
  header: {
    width: WidthIntoPercent(360),
    height: HeightIntoPercent(59),
    elevation: 11,
  },
});

export default App;
