import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 20,
    width: '100%',
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
  previewImg: {
    width: '100%',
    height: 200,
    borderRadius: 14,
  },
  footer: {
    // justifyContent: 'flex-end',
    backgroundColor: Color.WHITE,
    paddingBottom: 20,
    paddingTop: 15,
    paddingHorizontal: 16,
    elevation: 5,
  },
  modalBox: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {justifyContent: 'center', alignItems: 'center'},
  title: {
    textAlign: 'center',
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.SEMIBOLD,
    color: Color.BLACK,
  },
  desc: {
    textAlign: 'center',
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: Color.TEXTPRIMARY,
  },
})
