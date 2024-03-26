import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Touchable,
} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'
import {ImgCraftmanOne} from '../../../assets/images'
import {LocationBox, RatingsBox} from '../..'
import {IcSave, IcSaveWhite} from '../../../assets/icons'

const CardTukang = ({
  imgSource,
  name,
  skillCount,
  location,
  rate,
  onPress,
  customStyle,
  imgCustomStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
      <Image source={imgSource} style={[styles.image, imgCustomStyle]} />
      <TouchableOpacity style={{position: 'absolute', right: 10, top: 10}}>
        <IcSaveWhite />
      </TouchableOpacity>
      <View style={styles.descBox}>
        <View style={{gap: 3}}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.skillBox}>
            <Text style={styles.skill}>{skillCount}</Text>
            <Text style={styles.skill}>Kemampuan</Text>
          </View>
        </View>
        <View style={styles.locationRate}>
          <LocationBox location={location} />
          <RatingsBox rate={rate} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardTukang

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: Color.WHITE,
    // height: 200,
    borderRadius: 12,
  },
  image: {
    width: 200,
    height: 135,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  descBox: {paddingHorizontal: 12, paddingVertical: 10, gap: 12},
  name: {
    fontSize: FontSize.dp_16,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  skill: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.MEDIUM,
    color: Color.PRIMARY,
  },
  skillBox: {flexDirection: 'row', alignItems: 'center', gap: 4},
  locationRate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
