import {StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import {Color, FontSize, Fonts} from '../../../constants'
import {RatingsBox} from '../..'
import {ImgProfileOne} from '../../../assets/images'

const TestimonialCard = ({imgProfile, name, dateReview, reviewText, rate}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.identity}>
          <Image source={imgProfile} style={styles.imgProfileTesti} />
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.dateReview}>{dateReview}</Text>
          </View>
        </View>
        <RatingsBox rate={rate} />
      </View>
      <Text>{reviewText}</Text>
    </View>
  )
}

export default TestimonialCard

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  identity: {flexDirection: 'row', alignItems: 'center', gap: 10},
  imgProfileTesti: {width: 45, height: 45, borderRadius: 100},
  name: {
    fontSize: FontSize.dp_16,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  dateReview: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.REGULAR,
    color: Color.GREYONE,
  },
})
