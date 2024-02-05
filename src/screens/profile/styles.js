import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greetings: {
    flexDirection: 'column',
  },
  greeting: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_12,
    color: Color.GREYONE,
  },
  manageProfile: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_18,
    color: Color.BLACK,
    paddingTop: 0,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  photoProfile: {
    borderRadius: 100,
    width: 58,
    height: 58,
  },
  userProfile: {
    textAlign: 'left',
    paddingLeft: 4,
  },
  userName: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_18,
    color: Color.BLACK,
  },
  userPhone: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_16,
    color: Color.GREYONE,
  },
  list: {
    paddingTop: 20,
  },
  listName: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_14,
    color: Color.GREYONE,
  },
  logout: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 12,
    paddingBottom: 12,
  },
  textLogout: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_18,
    color: 'red',
    paddingLeft: 10,
  },
})
