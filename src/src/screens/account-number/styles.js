import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    flex: 1,
    // paddingHorizontal: 16,
  },
  containerNone: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
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
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
    padding: 0,
  },
  mainContainer: {
    backgroundColor: Color.BGSCREEN,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 16,
    maxHeight: '90%',
    gap: 20,
    // height: '55%',
    // flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  modalTitle: {
    fontSize: FontSize.dp_22,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
})
