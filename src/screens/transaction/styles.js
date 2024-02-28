import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    flex: 1,
    paddingTop: 20,
  },
  content: {
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 16,
    gap: 16,
  },
  container: {
    gap: 10,
    backgroundColor: Color.WHITE,
    padding: 12,
    borderRadius: 14,
  },
  containerID: {
    backgroundColor: Color.WHITE,
    padding: 12,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listBox: {flexDirection: 'row', alignItems: 'center', gap: 10},
  numberBox: {
    backgroundColor: Color.PRIMARY,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 100,
    alignContent: 'center',
  },
  number: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.MEDIUM,
    color: Color.WHITE,
  },
  idTextStyle: (status, size, style) => ({
    fontSize: size ? FontSize.dp_16 : FontSize.dp_18,
    fontFamily: style ? Fonts.SEMIBOLD : Fonts.MEDIUM,
    color: status ? Color.BLACK : Color.GREYONE,
  }),
  desc: (status, color) => ({
    fontSize: status ? FontSize.dp_16 : FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: color ? Color.BLACK : Color.GREYONE,
  }),
  row: status => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: status ? 'flex-start' : 'space-between',
    gap: status ? 12 : null,
  }),
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Color.GREYTWO,
  },
  footer: {
    backgroundColor: Color.WHITE,
    paddingBottom: 15,
    paddingTop: 15,
    paddingHorizontal: 16,
    elevation: 5,
  },
})
