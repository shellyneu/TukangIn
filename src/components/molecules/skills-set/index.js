import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'
import {Rupiah} from '../..'

const SkillSet = ({iconSkill, titleSkill, price}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {iconSkill}
      <View>
        <Text style={styles.textMain}>{titleSkill}</Text>
        <Rupiah price={price} />
      </View>
    </TouchableOpacity>
  )
}

export default SkillSet

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: Color.WHITE,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: 155,
  },
  textMain: {
    fontSize: FontSize.dp_16,
    color: Color.BLACK,
    fontFamily: Fonts.MEDIUM,
  },
})
