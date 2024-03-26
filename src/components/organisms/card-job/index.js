import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import {
  IcCoinsStacked,
  IcDotGrey,
  IcSave,
  IcSaveFilled,
} from '../../../assets/icons'
import {Color, FontSize, Fonts} from '../../../constants'
import {LocationBox, SubmissionsBox} from '../..'
import {ImgKeran} from '../../../assets/images'
import PriceBox from '../../atomics/price-box'

const CardJob = ({
  savePressed,
  imgSource,
  jobTitle,
  location,
  price,
  countSubmit,
  onPressSave,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={imgSource} style={styles.img} />
      <View>
        <View style={styles.headerBox}>
          <View>
            <Text style={styles.jobTitle}>{jobTitle}</Text>
            <LocationBox location={location} />
          </View>
          <TouchableOpacity onPress={onPressSave}>
            {savePressed ? <IcSaveFilled /> : <IcSave />}
          </TouchableOpacity>
        </View>
        <View style={styles.footerBox}>
          <PriceBox price={price} />
          <IcDotGrey />
          <SubmissionsBox countSubmit={countSubmit} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardJob

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    padding: 12,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
  },
  img: {width: 62, height: 67, borderRadius: 10},
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '87%',
  },
  jobTitle: {
    fontSize: FontSize.dp_16,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  footerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
})
