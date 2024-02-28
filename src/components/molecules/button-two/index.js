import React from 'react'
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native'
import {FontSize, Fonts, Color} from '../../../constants'

const ButtonTwo = ({text, onPressOne, onPressTwo}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.containerOne} onPress={onPressOne}>
        <Text style={styles.textOne}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerTwo} onPress={onPressTwo}>
        <Text style={styles.textTwo}>Batalkan</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonTwo

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Color.WHITE,
  },
  containerOne: {
    paddingHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: Color.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOne: {
    fontSize: FontSize.dp_18,
    color: Color.WHITE,
    fontFamily: Fonts.MEDIUM,
  },
  containerTwo: {
    paddingHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: Color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.RED,
    borderWidth: 1,
  },
  textTwo: {
    fontSize: FontSize.dp_18,
    color: Color.RED,
    fontFamily: Fonts.MEDIUM,
  },
})
