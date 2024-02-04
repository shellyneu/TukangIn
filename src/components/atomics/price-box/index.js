import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {IcCoinsStacked} from '../../../assets/icons'
import {FontSize, Fonts, Color} from '../../../constants'

const PriceBox = ({price}) => {
  return (
    <View style={styles.container}>
      <IcCoinsStacked />
      <View style={styles.textBox}>
        <Text style={styles.text}>Rp</Text>
        <Text style={styles.text}>{price}</Text>
      </View>
    </View>
  )
}

export default PriceBox

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', gap: 6},
  textBox: {flexDirection: 'row', gap: 5, alignItems: 'center'},
  text: {
    color: Color.BLACK,
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.MEDIUM,
  },
})
