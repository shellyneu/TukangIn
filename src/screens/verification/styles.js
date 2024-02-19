import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    height: '100%',
    paddingHorizontal: 16,
    flexDirection: 'column',
  },
  subject: {
    fontSize: FontSize.dp_24,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  desc: {
    width: 322,
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: Color.GREYONE,
  },
  aboutYou: {
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  input: {
    width: '100%',
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    paddingLeft: 18,
    paddingBottom: 58.5,
  },
  card: {
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
})
