// Import TouchableOpacity from 'react-native'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {FontSize, Fonts, Color} from '../../../constants'
import {IcChevronRight} from '../../../assets/icons'

const ItemProfile = ({onPress, IconComponent, text}) => {
  return (
    <View style={styles.itemProfile}>
      <TouchableOpacity style={styles.item} onPress={onPress}>
        {IconComponent && <IconComponent width={24} height={24} />}
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      <View>
        <IcChevronRight width={24} height={24} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: Fonts.MEDIUM,
    fontSize: FontSize.dp_18,
    color: Color.BLACK,
    paddingLeft: 10,
  },
})

export default ItemProfile
