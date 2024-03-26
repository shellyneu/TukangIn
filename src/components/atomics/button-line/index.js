import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'

const ButtonLine = ({onPress, text, customStyle, isError, customText}) => {
  return (
    <TouchableOpacity
      style={[
        isError ? styles.container(true) : styles.container(false),
        customStyle,
      ]}
      onPress={onPress}>
      <Text
        style={[isError ? styles.text(true) : styles.text(false), customText]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default ButtonLine

const styles = StyleSheet.create({
  container: err => ({
    width: '100%',
    height: 46,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: err ? Color.ERROR : Color.PRIMARY,
    backgroundColor: Color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: err => ({
    fontSize: FontSize.dp_18,
    color: err ? Color.ERROR : Color.PRIMARY,
    fontFamily: Fonts.MEDIUM,
  }),
})
