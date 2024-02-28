import {StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'
import {ImgSkillOne} from '../../../assets/images'
import PriceBox from '../../atomics/price-box'
import {RatingsBox} from '../..'

const CardSkill = ({titleSkill, price, rate, imgSource}) => {
  return (
    <View style={styles.container}>
      <Image source={imgSource} style={styles.imgStyle} />
      <View style={styles.textSection}>
        <Text style={styles.titleSkill}>{titleSkill}</Text>
        <View style={styles.descSection}>
          <PriceBox
            price={price}
            showIcon={true}
            customStyle={styles.priceStyle}
          />
          <RatingsBox rate={rate} />
        </View>
      </View>
    </View>
  )
}

export default CardSkill

const styles = StyleSheet.create({
  container: {flex: 1, borderRadius: 14, backgroundColor: Color.WHITE},
  imgStyle: {
    width: '100%',
    height: 150,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
  },
  textSection: {paddingHorizontal: 12, paddingVertical: 12, gap: 8},
  titleSkill: {
    fontSize: FontSize.dp_16,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  descSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceStyle: {
    color: Color.PRIMARY,
    fontSize: FontSize.dp_14,
    fontFamily: Fonts.MEDIUM,
  },
})
