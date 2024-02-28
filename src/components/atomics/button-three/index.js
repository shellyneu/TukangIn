import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import {FontSize, Fonts, Color} from '../../../constants'

const ButtonThree = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonThree

const styles = StyleSheet.create({
  container: {
    width: 154,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: Color.PRIMARY,
    alignItems: 'center',
  },
  text: {
    fontSize: FontSize.dp_18,
    color: Color.WHITE,
    fontFamily: Fonts.MEDIUM,
  },
})
