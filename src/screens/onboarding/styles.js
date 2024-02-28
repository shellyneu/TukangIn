import {FontSize, Fonts, Color} from '../../constants'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 28,
    gap: 14,
  },
  header: {
    textAlign: 'center',
    fontSize: FontSize.dp_26,
    fontFamily: Fonts.SEMIBOLD,
    color: Color.BLACK,
    width: '65%',
  },
  desc: {
    textAlign: 'center',
    width: '80%',
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: Color.GREYONE,
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
  textNavigate: status => ({
    fontFamily: status ? Fonts.MEDIUM : Fonts.REGULAR,
    fontSize: FontSize.dp_16,
    color: status ? Color.PRIMARY : Color.GREYONE,
    textAlign: 'center',
    marginTop: 12,
  }),
  footer: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  validationAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
