import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {IcCompass} from '../../../assets/icons'
import {FontSize, Fonts, Color} from '../../../constants'

const FeatureIcon = ({onPress, icon, label}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{gap: 6, alignItems: 'center'}}>
        {icon}
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FeatureIcon

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
})
