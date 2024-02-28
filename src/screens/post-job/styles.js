import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    flex: 1,
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
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  containerNone: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '75%',
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
  footer: {
    backgroundColor: Color.WHITE,
    paddingBottom: 20,
    paddingTop: 15,
    paddingHorizontal: 16,
    elevation: 5,
  },
})
