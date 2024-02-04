import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'
import {IcLocation} from '../../../assets/icons'

const LocationBox = ({location}) => {
  return (
    <View style={styles.container}>
      <IcLocation />
      <Text style={styles.text}>{location}</Text>
    </View>
  )
}

export default LocationBox

const styles = StyleSheet.create({
  container: {flexDirection: 'row', gap: 4, alignItems: 'center'},
  text: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.REGULAR,
    color: Color.GREYONE,
  },
})
