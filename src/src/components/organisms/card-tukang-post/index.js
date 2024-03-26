import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {Color, FontSize, Fonts} from '../../../constants'
import {LocationBox, RatingsBox} from '../..'

const CardTukangPost = ({
  imgSource,
  name,
  skill,
  location,
  isPhaseTwo,
  onPress,
  disabled,
  customStyle,
}) => {
  return (
    <View style={[styles.container, customStyle]}>
      <TouchableOpacity
        style={styles.profile}
        onPress={onPress}
        disabled={disabled}>
        <Image source={imgSource} style={styles.img} />
        <View>
          <View style={styles.headerBox}>
            <View style={{gap: 5}}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.skill}>{skill} Kemampuan</Text>
            </View>
            <RatingsBox rate={4.9} />
          </View>
          <LocationBox location={location} isPhaseTwo={true} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CardTukangPost

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    padding: 12,
    gap: 18,
  },
  profile: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  img: {
    width: 62,
    height: 67,
    borderRadius: 10,
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '87%',
    paddingBottom: 10,
  },
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
  button: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  buttonOne: {
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 60,
    backgroundColor: Color.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextOne: {
    fontSize: FontSize.dp_16,
    color: Color.WHITE,
    fontFamily: Fonts.REGULAR,
  },
  buttonTwo: {
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 60,
    backgroundColor: Color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.PRIMARY,
  },
  buttonTextTwo: {
    fontSize: FontSize.dp_16,
    color: Color.PRIMARY,
    fontFamily: Fonts.REGULAR,
  },
})
