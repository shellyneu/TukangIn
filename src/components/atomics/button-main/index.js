import React from 'react'
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native'
import {FontSize, Fonts, Color} from '../../../constants'

const ButtonMain = ({text, onPress, disabled, isDisabled}) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={isDisabled ? styles.containerDisabled : styles.container}
        onPress={onPress}
        disabled={disabled}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonMain

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
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
