import axios from 'axios';
import React, {Component} from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import CustomText from '../../components/customText';
import Header from '../../components/header';
import SearchTextInput from '../../components/SearchTextInput';
import {ThemeContext} from '../../ThemeContext/themeContext';
import {HeightIntoPercent, WidthIntoPercent} from '../../utils';
import {blackColor, defaultThemeColor, whiteColor} from '../../utils/Color';
let timer = null;
export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      searchInput: '',
      loading: false,
      message: '',
      inputRef: React.createRef(),
    };
  }

  handleInput = input => {
    this.setState({searchInput: input});
    if (timer) clearTimeout(timer);
    if (input) {
      timer = setTimeout(async () => {
        this.state.inputRef.current.blur();
        this.setState({loading: true});
        axios({
          method: 'GET',
          url: `http://api.themoviedb.org/3/search/movie?api_key=0164b131f0cb0267101e77927102ede6&query=${input}`,
          headers: {
            'Content-type': 'Application/json',
            Accept: 'Application/json',
          },
        })
          .then(response => {
            console.log('response==>', response?.data?.results);
            if (
              response?.status === 200 &&
              response?.data?.results.length > 0
            ) {
              this.setState({
                movie: response?.data?.results[0],
                loading: false,
              });
            } else
              this.setState({
                loading: false,
                message: 'No movie found! Please Enter Full Name',
                movie: null,
              });
          })
          .catch(err => {
            console.log(err);
            this.setState({loading: false});
          });
      }, 3000);
    } else {
      this.setState({
        message: '',
      });
    }
  };

  render() {
    const {movie, searchInput, message, loading, inputRef} = this.state;
    const {isDarkMode} = this.context;
    const style = StyleSheet.create({
      mainView: {
        flex: 1,
        backgroundColor: defaultThemeColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: WidthIntoPercent(25),
      },
      centerView: {
        width: WidthIntoPercent(326),
        height: HeightIntoPercent(500),
        backgroundColor: isDarkMode ? blackColor : whiteColor,
        borderRadius: WidthIntoPercent(52),
        shadowColor: 'rgba(0, 0, 0)',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
      },
      movieImg: {
        width: WidthIntoPercent(200),
        height: HeightIntoPercent(300),
        borderRadius: WidthIntoPercent(15),
      },
    });
    return (
      <>
        <Header isDarkMode={isDarkMode} />
        <View
          style={{
            width: WidthIntoPercent(360),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SearchTextInput
            onChangeText={text => this.handleInput(text)}
            value={searchInput}
            inputRef={inputRef}
            isDarkMode={isDarkMode}
          />
        </View>
        <View style={style.mainView}>
          {movie ? (
            <View style={style.centerView}>
              <Image
                source={{
                  uri: movie?.poster_path
                    ? 'https://image.tmdb.org/t/p/w154' + movie?.poster_path
                    : 'https://ptsse.co.id/assets/gambar_kategori/images.png',
                }}
                resizeMode="contain"
                style={style.movieImg}
              />
              <CustomText
                color={isDarkMode ? whiteColor : blackColor}
                marginTop={20}
                textShadowObj={{
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: {width: 0, height: 2},
                  textShadowRadius: 3,
                }}>
                {movie?.original_title}
              </CustomText>
            </View>
          ) : (
            <View>
              <CustomText color={isDarkMode ? blackColor : whiteColor}>
                {message ? message : 'Please search any movie by name'}
              </CustomText>
            </View>
          )}
        </View>
        {loading && (
          <View
            style={{
              position: 'absolute',
              borderColor: 'red',
              backgroundColor: '#ffffff',
              width: WidthIntoPercent(360),
              height: HeightIntoPercent(741),
              opacity: 0.6,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator
              size="large"
              color={isDarkMode ? blackColor : defaultThemeColor}
            />
          </View>
        )}
      </>
    );
  }
}
MainScreen.contextType = ThemeContext;
