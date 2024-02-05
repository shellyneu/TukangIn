import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  containerMain: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Color.BGSCREEN,
  },
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    // flex: 1,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  imgProfile: {width: 100, height: 100, borderRadius: 100},
  identityBox: {alignItems: 'center', marginTop: 14, gap: 5},
  name: {
    fontSize: FontSize.dp_20,
    color: Color.BLACK,
    fontFamily: Fonts.MEDIUM,
  },
})
