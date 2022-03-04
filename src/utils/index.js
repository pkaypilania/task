import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const HeightIntoPercent = height => hp(`${(height / 741) * 100}%`);

export const WidthIntoPercent = width => wp(`${(width / 360) * 100}%`);
