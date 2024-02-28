import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: Color.BGSCREEN,
  },
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: Color.PRIMARY,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_18,
    color: Color.WHITE,
    textAlign: 'center',
  },
})
