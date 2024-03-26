import React from 'react'
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native'
import {FontSize, Fonts, Color} from '../../../constants'

const ButtonFour = ({text, onPress, disabled, isDisabled}) => {
  return (
    <TouchableOpacity
      style={isDisabled ? styles.containerDisabled : styles.container}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonFour

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 46,
    borderRadius: 30,
    backgroundColor: Color.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDisabled: {
    width: '100%',
    height: 46,
    borderRadius: 30,
    backgroundColor: Color.GREYONE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: FontSize.dp_18,
    color: Color.WHITE,
    fontFamily: Fonts.MEDIUM,
  },
})
