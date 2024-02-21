import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import {IcDotGrey} from '../../../assets/icons'
import {Color, FontSize, Fonts} from '../../../constants'
import {LabelStatus, LocationBox, PriceBoxPost, SubmissionsBoxPost} from '../..'

const CardJobPost = ({
  imgSource,
  jobTitle,
  location,
  price,
  countSubmit,
  statusTitle,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imgSource} style={styles.img} />
      <View>
        <View style={styles.headerBox}>
          <View>
            <Text style={styles.jobTitle}>{jobTitle}</Text>
            <LocationBox location={location} />
          </View>
        </View>
        <View style={styles.footerBox}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <PriceBoxPost price={price} />
            <IcDotGrey />
            <SubmissionsBoxPost countSubmit={countSubmit} />
          </View>
          <LabelStatus status={statusTitle} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardJobPost

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    padding: 12,
    flexDirection: 'row',
    gap: 12,
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
    paddingBottom: 5,
  },
  footerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
    justifyContent: 'space-between',
    width: '85%',
  },
})
