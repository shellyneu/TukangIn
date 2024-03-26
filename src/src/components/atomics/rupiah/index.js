import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'

const Rupiah = ({price}) => {
  return (
    <View style={styles.textBox}>
      <Text style={styles.text}>Rp</Text>
      <Text style={styles.text}>{price}</Text>
    </View>
  )
}

export default Rupiah

const styles = StyleSheet.create({
  textBox: {flexDirection: 'row', gap: 5, alignItems: 'center'},
  text: {
    color: Color.GREYONE,
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.REGULAR,
  },
})
