import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Color, FontSize, Fonts} from '../../../constants'

const SubmissionsBoxPost = ({countSubmit}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.count}>{countSubmit}</Text>
        <Text style={styles.fixedText}>Mengajukan</Text>
      </View>
    </View>
  )
}

export default SubmissionsBoxPost

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', gap: 6},
  textBox: {flexDirection: 'row', alignItems: 'center', gap: 5},
  count: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_12,
    color: Color.BLACK,
  },
  fixedText: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.dp_10,
    color: Color.BLACK,
  },
})
