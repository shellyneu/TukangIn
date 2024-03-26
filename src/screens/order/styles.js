import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greetings: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.REGULAR,
    color: Color.GREYONE,
  },
  desc: {
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  containerNone: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNoneBox: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 17,
  },
  titleNone: {
    fontSize: FontSize.dp_20,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  descNone: {
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: Color.GREYONE,
    textAlign: 'center',
  },
})
