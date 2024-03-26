import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  containerMain: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Color.BGSCREEN,
  },
  todaySection: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  today: {
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  notifCount: {
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: Color.PRIMARY,
  },
})
