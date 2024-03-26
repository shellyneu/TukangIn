import React from 'react'
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native'
import {FontSize, Fonts, Color} from '../../../constants'
import {ButtonLine, ButtonMain} from '../..'

const ButtonGroupSecond = ({
  text,
  onPressOne,
  onPressTwo,
  textOne,
  textTwo,
  isBtnTwoError,
  isBtnOneMini,
  customTextTwo,
  customStyle,
}) => {
  return (
    <View style={[styles.main, customStyle]}>
      <View style={{flex: 1}}>
        <ButtonLine
          text={textTwo}
          onPress={onPressTwo}
          isError={isBtnTwoError}
          customText={customTextTwo}
        />
      </View>
      <View style={{flex: 1}}>
        <ButtonMain
          text={textOne}
          customStyle={{paddingHorizontal: 18}}
          onPress={onPressOne}
          isMiniSize={isBtnOneMini}
        />
      </View>
    </View>
  )
}

export default ButtonGroupSecond

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Color.WHITE,
    gap: 12,
  },
})
