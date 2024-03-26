import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: Color.BGSCREEN,
  },
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    // flex: 1,
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  identityBox: {alignItems: 'center', marginTop: 14, gap: 5},
  name: {
    fontSize: FontSize.dp_20,
    color: Color.BLACK,
    fontFamily: Fonts.MEDIUM,
  },
  sectionText: {
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
    marginBottom: 10,
  },
  descText: {
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: Color.GREYONE,
    lineHeight: 19,
  },
  rowColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    backgroundColor: Color.WHITE,
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 16,
    elevation: 5,
  },
  imageProfile: status => ({
    width: status ? 60 : 100,
    height: status ? 60 : 100,
    borderRadius: 100,
  }),
  headerSkill: {flexDirection: 'row', gap: 12, alignItems: 'center'},
  titleSkill: {
    fontSize: FontSize.dp_20,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  priceText: {
    fontSize: FontSize.dp_16,
    fontFamily: Fonts.REGULAR,
    color: Color.PRIMARY,
  },
})
