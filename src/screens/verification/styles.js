import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    flex: 1,
    paddingHorizontal: 16,
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
  upload: {
    color: Color.BLACK,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.PRIMARY,
    backgroundColor: Color.WHITE,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    paddingVertical: 12,
  },
  text: {
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.MEDIUM,
    color: Color.PRIMARY,
  },
})