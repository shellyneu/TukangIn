import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'

const CardAccountNumber = ({bankName, bankNumber}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bankName}>{bankName}</Text>
      <Text style={styles.bankNumber}>{bankNumber}</Text>
    </View>
  )
}

export default CardAccountNumber

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    padding: 12,
    gap: 4,
  },
  bankName: {
    fontSize: FontSize.dp_16,
    fontFamily: Fonts.SEMIBOLD,
    color: Color.BLACK,
  },
  bankNumber: {
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: Color.GREYONE,
  },
})
