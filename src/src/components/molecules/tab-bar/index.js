import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import {FontSize, Fonts, Color} from '../../../constants'

const TabBar = ({tabs, activeTab}) => {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabItem,
            activeTab === index + 1 ? styles.activeTab : null,
          ]}
          onPress={tab.onPress}>
          <Text
            style={[
              styles.tabText,
              activeTab === index + 1 ? styles.activeTabText : null,
            ]}>
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default TabBar

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
