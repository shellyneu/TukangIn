import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Color, FontSize, Fonts} from '../../../constants'

const LabelStatus = ({status}) => {
  let labelColor = Color.BGSCREEN
  let labelTextColor = Color.PRIMARY // Added this line
  let labelText = ''

  switch (status) {
    case 1:
      labelColor = Color.LIGHT_PRIMARY
      labelTextColor = Color.PRIMARY
      labelText = 'Rekrut'
      break
    case 2:
      labelColor = Color.LIGHT_YELLOW
      labelTextColor = Color.YELLOW
      labelText = 'Proses'
      break
    case 3:
      labelColor = Color.LIGHT_GREEN
      labelTextColor = Color.GREEN
      labelText = 'Selesai'
      break
    default:
      break
  }

  return (
    <View style={[styles.labelContainer, {backgroundColor: labelColor}]}>
      <Text style={[styles.labelText, {color: labelTextColor}]}>
        {labelText}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  labelContainer: {
    paddingVertical: 1.5,
    paddingHorizontal: 8,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: FontSize.dp_10,
    fontFamily: Fonts.MEDIUM,
  },
})

export default LabelStatus
