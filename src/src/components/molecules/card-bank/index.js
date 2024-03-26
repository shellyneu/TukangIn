import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Color, FontSize, Fonts} from '../../../constants'
import {IcBCA} from '../../../assets/icons'

const CardBank = ({bankIcon, bankName, bankNumber}) => {
  return (
    <View style={styles.row(true)}>
      <View style={styles.containerIcon}>{bankIcon}</View>
      <View>
        <Text style={styles.idTextStyle(true, true, true)}>{bankName}</Text>
        <Text style={styles.desc(false, false)}>{bankNumber}</Text>
      </View>
    </View>
  )
}

export default CardBank

const styles = StyleSheet.create({
  row: status => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: status ? 'flex-start' : 'space-between',
    gap: status ? 12 : null,
  }),
  containerIcon: {
    backgroundColor: Color.BGSCREEN,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 14,
  },
  idTextStyle: (status, size, style) => ({
    fontSize: size ? FontSize.dp_16 : FontSize.dp_18,
    fontFamily: style ? Fonts.SEMIBOLD : Fonts.MEDIUM,
    color: status ? Color.BLACK : Color.GREYONE,
  }),
  desc: (status, color) => ({
    fontSize: status ? FontSize.dp_16 : FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: color ? Color.BLACK : Color.GREYONE,
  }),
})
