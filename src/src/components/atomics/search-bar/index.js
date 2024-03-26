import {View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'
import {IcSearch} from '../../../assets/icons'
import {FontSize, Fonts, Color} from '../../../constants'

const SearchBar = ({placeholder, customStyle, value, onChangeText}) => {
  return (
    <View style={[styles.container, customStyle]}>
      <IcSearch />
      <TextInput
        placeholder={placeholder}
        style={styles.inputField}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: Color.WHITE,
    borderRadius: 30,
    paddingHorizontal: 18,
    marginVertical: 20,
    alignItems: 'center',
  },
  inputField: {
    fontSize: FontSize.dp_16,
    fontFamily: Fonts.REGULAR,
    color: Color.GREYONE,
    width: '100%',
  },
})
