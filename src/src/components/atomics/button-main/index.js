import React from 'react'
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native'
import {FontSize, Fonts, Color} from '../../../constants'

const ButtonMain = ({
  text,
  onPress,
  disabled,
  isDisabled,
  isBackgroundVis,
  customStyle,
  isMiniSize,
}) => {
  return (
    <View style={isBackgroundVis ? styles.view : null}>
      <TouchableOpacity
        style={[
          isDisabled ? styles.containerDisabled : styles.container,
          customStyle,
        ]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={isMiniSize ? styles.text(true) : styles.text(false)}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonMain

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.WHITE,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  container: {
    width: '100%',
    height: 46,
    borderRadius: 30,
    backgroundColor: Color.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDisabled: {
    width: '100%',
    height: 46,
    borderRadius: 30,
    backgroundColor: Color.GREYONE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: mini => ({
    fontSize: mini ? FontSize.dp_16 : FontSize.dp_18,
    color: Color.WHITE,
    fontFamily: mini ? Fonts.REGULAR : Fonts.MEDIUM,
  }),
})
