import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'

const JobSet = ({iconJob, titleJob, descJob}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {iconJob}
      <View>
        <Text style={styles.textTitle}>{titleJob}</Text>
        <Text style={styles.textDesc}>{descJob}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default JobSet

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    // width: 155,
    backgroundColor: Color.WHITE,
  },
  textTitle: {
    fontSize: FontSize.dp_12,
    color: Color.GREYONE,
    fontFamily: Fonts.REGULAR,
  },
  textDesc: {
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
    fontFamily: Fonts.MEDIUM,
  },
})
