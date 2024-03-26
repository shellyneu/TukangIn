import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import {IcChevronLeft} from '../../../assets/icons'
import {FontSize, Fonts, Color} from '../../../constants'
import {NotificationIcon} from '../..'

const HeaderSecondary = ({
  onPressBack,
  sectionTitle,
  customStyle,
  onPressNotif,
}) => {
  return (
    <View style={[styles.container, customStyle]}>
      <TouchableOpacity
        onPress={onPressBack}
        style={{backgroundColor: Color.WHITE, padding: 10, borderRadius: 100}}>
        <IcChevronLeft />
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <NotificationIcon onPress={onPressNotif} />
    </View>
  )
}

export default HeaderSecondary

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.BGSCREEN,
    paddingTop: 15,
    paddingBottom: 5,
  },
  sectionTitle: {
    fontSize: FontSize.dp_20,
    color: Color.BLACK,
    fontFamily: Fonts.MEDIUM,
  },
})
