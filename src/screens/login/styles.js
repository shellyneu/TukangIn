import {StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../constants'

export default StyleSheet.create({
  mainBody: {
    backgroundColor: Color.BGSCREEN,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 15,
  },
  backContainer: {
    backgroundColor: Color.WHITE,
    borderRadius: 50,
    alignSelf: 'flex-start',
    padding: 7,
  },
  title: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_28,
    color: Color.BLACK,
  },
  desc: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_14,
    color: Color.GREYONE,
    textAlign: 'center',
    marginTop: 8,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 16,
  },
  inputContainer: error => ({
    backgroundColor: Color.WHITE,
    borderRadius: 20,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: error ? Color.RED : null,
    borderWidth: error ? 1 : null,
  }),
  input: length => ({
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
    width: '100%',
    flex: 2,
  }),
  inputError: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_12,
    color: Color.RED,
    textAlign: 'center',
    marginTop: 8,
  },
  iconContainer: length => ({
    flex: length > 0 ? 1 - length * 0.01 : 1,
    alignItems: 'flex-end',
  }),
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
