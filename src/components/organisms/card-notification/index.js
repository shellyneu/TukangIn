import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'
import {IcWallet} from '../../../assets/icons'

const CardNotification = ({icon, notifDesc, notifTitle}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconBox}>{icon}</View>
      <View style={{gap: 5}}>
        <Text style={styles.notifTitle}>{notifTitle}</Text>
        <Text style={styles.notifDesc} numberOfLines={2}>
          {notifDesc}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CardNotification

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: Color.WHITE,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'flex-start',
  },
  iconBox: {
    backgroundColor: Color.PRIMARY,
    width: 42,
    height: 42,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifTitle: {
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  notifDesc: {
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.REGULAR,
    color: Color.GREYONE,
  },
})
