import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import {Color, FontSize, Fonts} from '../../../constants'
import {IcPlus} from '../../../assets/icons'

const InputField = ({
  placeholder,
  isError,
  keyboardType,
  value,
  onChangeText,
  showErrorMessage,
  errorMsg,
}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={isError ? styles.textareaError : styles.textarea}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />

      {showErrorMessage && <Text style={styles.errorMsg}>{errorMsg}</Text>}
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
  textarea: {
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Color.WHITE,
    marginBottom: 8,
  },
  textareaError: {
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Color.ERROR,
    marginBottom: 8,
  },
  errorMsg: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.REGULAR,
    color: Color.ERROR,
    marginBottom: 5,
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
})
