import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'
import {IcCheckCircle} from '../../../assets/icons'

const ListJob = ({list}) => {
  return (
    <View style={styles.textBox}>
      <IcCheckCircle />
      <Text style={styles.text}>{list}</Text>
    </View>
  )
}

export default ListJob

const styles = StyleSheet.create({
  textBox: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingBottom: 8,
  },
  text: {
    color: Color.GREYONE,
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
  },
})
