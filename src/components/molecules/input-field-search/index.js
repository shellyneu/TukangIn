import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, {useState} from 'react'
import {FontSize, Fonts, Color} from '../../../constants'
import {IcChevronDown, IcChevronUp} from '../../../assets/icons'

const InputFieldSearch = ({
  showTitle,
  titleField,
  placeholderInput,
  keyboardType,
  value,
  onChangeInput,
  isError,
  showErrorMessage,
  errorMsg,
  isDropdownVisible,
  onCloseDropdown,
  onOpenDropdown,
  selectedCategory,
  onPressSelectItem,
  data,
  keyExtractor,
  renderItem,
  itemSeparatorComponent,
  placeholderTouch,
}) => {
  const RenderCategory = ({item}) => {
    return (
      <TouchableOpacity onPress={() => onPressSelectItem(item.name)}>
        <Text style={styles.selectedValue(false)}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  const RenderSeparator = () => (
    <View
      style={{
        height: 1.5,
        width: '100%',
        backgroundColor: Color.GREYTWO,
        marginVertical: 7,
      }}
    />
  )

  return (
    <View>
      {showTitle ? null : <Text style={styles.titleField}>{titleField}</Text>}

      {isDropdownVisible ? (
        <View>
          <View style={isError ? styles.textareaError : styles.textarea}>
            <TextInput
              placeholder={placeholderInput}
              style={{backgroundColor: 'white', paddingLeft: 0}}
              keyboardType={keyboardType}
              value={value}
              onChangeText={onChangeInput}
            />
            <TouchableOpacity onPress={onCloseDropdown}>
              <IcChevronUp />
            </TouchableOpacity>
          </View>
          <View style={styles.cardDropdown}>
            <FlatList
              data={data}
              // keyExtractor={item => item.id}
              keyExtractor={keyExtractor}
              renderItem={RenderCategory}
              ItemSeparatorComponent={RenderSeparator}
            />
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={onOpenDropdown}
          style={isError ? styles.textareaError : styles.textarea}>
          <Text
            style={
              selectedCategory
                ? styles.selectedValue(true, false)
                : styles.selectedValue(true, true)
            }>
            {selectedCategory ? selectedCategory : placeholderTouch}
          </Text>
          <IcChevronDown />
        </TouchableOpacity>
      )}

      {showErrorMessage && <Text style={styles.errorMsg}>{errorMsg}</Text>}
    </View>
  )
}

export default InputFieldSearch

const styles = StyleSheet.create({
  titleField: {
    fontSize: FontSize.dp_18,
    fontFamily: Fonts.MEDIUM,
    color: Color.BLACK,
    marginBottom: 10,
  },
  textarea: {
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: Color.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textareaError: {
    backgroundColor: Color.WHITE,
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: Color.ERROR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  errorMsg: {
    fontSize: FontSize.dp_12,
    fontFamily: Fonts.REGULAR,
    color: Color.ERROR,
    marginTop: 5,
  },
  selectedValue: (status, color) => ({
    fontSize: status ? 13 : 16,
    fontFamily: Fonts.REGULAR,
    color: color ? Color.GREYONE : Color.BLACK,
    paddingVertical: status ? 15 : null,
  }),
  cardDropdown: {
    backgroundColor: Color.WHITE,
    borderWidth: 1,
    borderColor: Color.WHITE,
    marginTop: 10,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
})
