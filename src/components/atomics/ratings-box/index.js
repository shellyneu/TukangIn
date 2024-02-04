import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {IcRate} from '../../../assets/icons'
import {Color, FontSize, Fonts} from '../../../constants'

const RatingsBox = ({rate}) => {
  return (
    <View style={styles.container}>
      <IcRate />
      <Text style={styles.rate}>{rate}</Text>
    </View>
  )
}

export default RatingsBox

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', gap: 4},
  rate: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
})
