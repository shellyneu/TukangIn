import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    flex: 1,
    paddingHorizontal: 16,
  },
  body: {
    // height: '100%',
    paddingTop: 154,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 183,
    width: 183,
  },
  subject: {
    fontSize: FontSize.dp_20,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
    paddingBottom: 10,
  },
  desc: {
    width: 307,
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: Color.GREYONE,
    textAlign: 'center',
  },
  verification: {
    fontSize: FontSize.dp_16,
    fontFamily: Fonts.MEDIUM,
    color: Color.PRIMARY,
    paddingTop: 20,
  },
})
