import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {IcUserLogin} from '../../../assets/icons'
import {TextInput} from 'react-native-gesture-handler'
import {Color, FontSize, Fonts} from '../../../constants'

const InputFieldSecondary = ({
  isError,
  value,
  onChangeText,
  showErrorMsg,
  errorMsg,
  input,
}) => {
  return (
    <View>
      <View
        style={isError ? styles.inputContainer : styles.inputContainerError}>
        <View style={styles.iconContainer(input.length)}>
          <IcUserLogin />
        </View>
        <TextInput
          disableFullscreenUI
          placeholder='Nama Pengguna'
          placeholderTextColor={Color.GREYONE}
          value={value}
          onChangeText={onChangeText}
          style={styles.input(input.length)}
          maxLength={70}
        />
      </View>
      {showErrorMsg && <Text style={styles.inputError}>{errorMsg}</Text>}
    </View>
  )
}

export default InputFieldSecondary

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Color.WHITE,
    borderRadius: 20,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: null,
  },
  inputContainerError: {
    backgroundColor: Color.WHITE,
    borderRadius: 20,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: Color.RED,
    borderWidth: 1,
  },
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
})
