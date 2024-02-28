import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'
import {IcPlus} from '../../../assets/icons'

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
  showAddContainer,
  onPressAdd,
  showTitle,
}) => {
  return (
    <View>
      {showTitle ? null : <Text style={styles.titleField}>{titleField}</Text>}

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
        <View>
          <TextInput
            placeholder={placeholder}
            style={isError ? styles.textareaError : styles.textarea}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}
          />
          {showAddContainer && (
            <TouchableOpacity style={styles.containerAdd} onPress={onPressAdd}>
              <IcPlus />
              <Text style={styles.textAdd}>Tambah List</Text>
            </TouchableOpacity>
          )}
        </View>
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
    borderColor: Color.RED,
  },
  errorMsg: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.REGULAR,
    color: Color.RED,
    marginTop: 5,
  },
  containerAdd: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
  },
  textAdd: {
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.MEDIUM,
    color: Color.PRIMARY,
  },
})
