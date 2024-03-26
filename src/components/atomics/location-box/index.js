import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'
import {IcLocation, IcLocationBig} from '../../../assets/icons'

const LocationBox = ({location, isPhaseTwo}) => {
  return (
    <View style={styles.container}>
      {isPhaseTwo ? <IcLocationBig /> : <IcLocation />}
      <Text style={isPhaseTwo ? styles.textBig : styles.text}>{location}</Text>
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
  textBig: {
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: Color.GREYONE,
  },
})
