import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    flex: 1,
  },
  content: {
    paddingTop: 2,
  },
  imgJob: {
    width: 400,
    height: 264.6,
  },
  contentPage: {
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_22,
    color: Color.BLACK,
    paddingBottom: 11,
  },
  job: {
    flexDirection: 'row',
    width: '100%',
    gap: 15,
    justifyContent: 'center',
    paddingTop: 20,
  },
  contentTitle: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_18,
    color: Color.BLACK,
    paddingBottom: 10,
  },
  contentDesc: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_14,
    color: Color.GREYONE,
  },
})
