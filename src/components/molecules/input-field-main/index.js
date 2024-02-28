import {StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'

const InputFieldMain = ({
  isPhaseTwo,
  titleField,
  placeholder,
  keyboardType,
  value,
  onChangeText,
  isError,
  showErrorMessage,
  errorMsg,
}) => {
  return (
    <View>
      <Text style={styles.titleField}>{titleField}</Text>
      {isPhaseTwo ? (
        <TextInput
          multiline
          placeholder={placeholder}
          textAlignVertical='top'
          numberOfLines={5}
          style={isError ? styles.textareaError : styles.textarea}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          placeholder={placeholder}
          style={isError ? styles.textareaError : styles.textarea}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
        />
      )}

      {showErrorMessage && <Text style={styles.errorMsg}>{errorMsg}</Text>}
    </View>
  )
}

export default InputFieldMain

const styles = StyleSheet.create({
  titleField: {
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
    marginBottom: 10,
  },
  textarea: {
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Color.WHITE,
  },
  textareaError: {
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Color.ERROR,
  },
  errorMsg: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.REGULAR,
    color: Color.ERROR,
    marginTop: 5,
  },
})
