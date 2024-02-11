import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'

const Chip = ({chip, activeChip}) => {
  return (
    <View style={styles.tabContainer}>
      {chip.map((chip, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabItem,
            activeChip === index + 1 ? styles.activeTab : null,
          ]}
          onPress={tab.onPress}>
          <Text
            style={[
              styles.tabText,
              activeChip === index + 1 ? styles.activeTabText : null,
            ]}>
            {chip.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Chip

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    borderRadius: 60,
    backgroundColor: Color.WHITE,
    marginBottom: 16,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 60,
    backgroundColor: Color.WHITE,
  },
  activeTab: {
    backgroundColor: Color.PRIMARY,
  },
  tabText: {
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
  },
  activeTabText: {
    color: Color.WHITE,
  },
})
