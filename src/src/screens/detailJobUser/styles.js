import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    flex: 1,
  },
  content: {
    paddingVertical: 10,
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
    gap: 15,
    justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  contentTitle: status => ({
    fontFamily: Fonts.MEDIUM,
    fontSize: status ? FontSize.dp_16 : FontSize.dp_18,
    color: status ? Color.PRIMARY : Color.BLACK,
    paddingBottom: status ? null : 10,
  }),
  contentDesc: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_14,
    color: Color.GREYONE,
  },
  linkBox: {
    backgroundColor: Color.WHITE,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    gap: 4,
  },
  linkHeader: {flexDirection: 'row', alignItems: 'center', gap: 4},
})
