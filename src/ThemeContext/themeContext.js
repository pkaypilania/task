import React, {Component} from 'react';
import {Appearance} from 'react-native';
export const ThemeContext = React.createContext({
  isDarkMode: false,
});

export default class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }
  componentDidMount() {
    this.setState({
      isDarkMode: Appearance.getColorScheme() === 'dark' ? true : false,
    });
    Appearance.addChangeListener(({colorScheme}) =>
      this.setState({isDarkMode: colorScheme === 'dark' ? true : false}),
    );
  }
  componentWillUnmount() {
    Appearance.remove();
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{
          isDarkMode: this.state.isDarkMode,
        }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
