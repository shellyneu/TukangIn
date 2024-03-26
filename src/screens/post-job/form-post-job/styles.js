import {StyleSheet} from 'react-native'
import {Color, FontSize, Fonts} from '../../../constants'

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
  },
  titleField: {
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
    marginBottom: 10,
  },
  footer: {
    backgroundColor: Color.WHITE,
    paddingBottom: 20,
    paddingTop: 15,
    paddingHorizontal: 16,
    elevation: 5,
  },
  containerAdd: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  textAdd: {
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.MEDIUM,
    color: Color.PRIMARY,
  },
  previewImg: {
    width: '100%',
    height: 200,
    borderRadius: 14,
  },
  selectedValue: (status, color) => ({
    fontSize: status ? 13 : 16,
    fontFamily: Fonts.REGULAR,
    color: color ? Color.GREYONE : Color.BLACK,
    paddingVertical: status ? 15 : null,
  }),
  cardDropdown: {
    backgroundColor: Color.WHITE,
    borderWidth: 1,
    borderColor: Color.WHITE,
    marginTop: 10,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
})
